import React, { Component } from 'react';
import EditModal from './EditModal';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";




export default class ListData extends Component {
    constructor(props){
        super(props);
        this.props.getAllData();

        this.state  = {
            comment : {},
            error : '',
            postModal : false,
            selectedPostId: 0,
        }
    }
    togglePostModal = (e,id) => {
        this.setState({
            postModal : !this.state.postModal,
            selectedPostId : id, 
        });
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("next props",nextProps,this.props)
        return true
    }


    commentSubmit = (e,postId) => {
        e.preventDefault();
        let data = {
            body : this.state.comment[postId-1],
            id: this.props.comments.length +1,
            postId,
        };
       if(Object.keys(this.state.comment).length !== 0) {
            console.log("comment data",this.state.comment);
            this.props.addComment(data);
                this.setState({
                    comment: {},
                });
        }
    }


    commentChange = (event,index) => {
        this.setState({
            comment : {
                [index] : event.target.value},
        },() => {
            // console.log("comment state",this.state.comment)
        });
    }


    
    render() {
        let {posts,comments} = this.props;
        let {postModal, selectedPostId}  = this.state;
        console.log("selectedPostId",selectedPostId)
        return (
            <div>
                {
                    posts.map((post,index) => {
                        return(
                            <div className="card" key={index}>
                                <div className="card-body">
                                    <Link to={{pathname: `/post/${post.id}`}} >
                                    <h2 className="card-title">{post.id} : '{post.title}' written by {post.author}</h2>
                                    </Link>
                                 <Button color="danger" onClick={(e) => this.togglePostModal(e,post.id)}>Edit post</Button>
                                {
                                    postModal && selectedPostId === post.id &&
                                <EditModal className="modal-open" key="post" post={post} toggle={this.togglePostModal} isOpen={postModal} editPost={this.props.ediPost}/>
                                }
                                <hr></hr>

                                <form onSubmit={(e) => this.commentSubmit(e,post.id)}>
                   <label>Add comment</label>
                    <input type="textarea" value={this.state.comment[index] || ''} onChange={(e) => this.commentChange(e,index)}></input>
               <button>Submit</button>
               </form>

                                <h5>Comments</h5>
                               <hr></hr>
                                {
                                    comments.map((comment,index) => {
                                        return (
                                            post.id === comment.postId &&
                                            <p key={index}>{comment.id} : {comment.body} </p>
                                        )  
                                    })
                                    
                                }
                                </div>
                            </div>
                        )
                 })
                }
            </div>
        )
    }
}
