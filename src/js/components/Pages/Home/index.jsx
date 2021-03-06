import React, { Component } from 'react';
import {getComments, getPosts, postPost, postComment, putPost } from '../../../api/data';
import List from './List';
import Add from './Add';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state  = {
            error : '',
            title: '',
            author: '',
            posts: [],
            comments : [],
        }
    }

    componentDidMount(){}

   postSubmit = (e,postId) => {
        e.preventDefault();
        let data = {
            id: this.state.posts.length +1,
            title: this.state.title,
            author: this.state.author,
        };
        // console.log("post data",data)
        if(this.state.title !== '' && this.state.author !== '') {
            this.addPost(data);
        }
    }


    postChange = (event,key) => {
        this.setState({
            [key] : event.target.value,
        }, () => {
            // console.log("state",this.state)
        });
    }


    addPost = async (data) => {
        try {
            let res = await postPost(data);
            console.log("post add succeful",res)
            this.setState({
                posts : [...this.state.posts,res],
               title : '',
               author : '',
            })
        }catch(error) {
            console.log("add post error",error);
        }
    }

    addComment = async (data) => {
        try {
            let res = await postComment(data);
            console.log("comment add success",res)
            this.setState({
                comments : [...this.state.comments,res],
            })
        }catch(error) {
            console.log("add comment error",error);
        }
    }


    getAllData = async () => {
        try {
            let posts = await getPosts();
            let comments = await getComments();
            this.setState({
                comments,
                posts,
            });
        }catch(error) {
            console.log("error",error);
        }
    }

    handlePostEdit = (data) => {
        console.log("e ,edit post data",data);
        this.ediPost(data);
    }

    ediPost = async (data) => {
        try {
            let res = await putPost(data);
            console.log("post edit success",res)
            let temp = [];
            temp.push(res);
            let finalPosts = this.state.posts.map(post => temp.find(p => p.id === post.id) || post )
            console.log("finalPosts",finalPosts);   
            this.setState({
                posts : finalPosts,
            })
        }catch(error) {
            console.log("post edit error",error);
        }
    }

    

    render() {
        let {posts,comments} = this.state;
        return (
            <div className="container">
                <h1>FB-APP</h1>
                <Add handleSubmit={this.postSubmit} handleChange={this.postChange} />
               <List posts={posts} comments={comments} getAllData={this.getAllData} addComment={this.addComment} ediPost={this.handlePostEdit} />
            </div>
        )
    }
}
