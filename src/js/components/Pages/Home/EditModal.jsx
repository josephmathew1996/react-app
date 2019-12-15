import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class EditModal extends Component {
    constructor(props){
        super(props);
        console.log("propsin modal",this.props)
        this.state = {
            title : this.props.post.title,
            author : this.props.post.author,
            isOpen : this.props.isOpen,
        }
    }

    handleChange = (e,key) => {
        console.log("id")
        this.setState({
            [key] : e.target.value
        });
    }
    handleSubmit = () => {
        let data = {};
        data.id = this.props.post.id;
        data.title = this.state.title;
        data.author = this.state.author;
        console.log("data for edit",data);
        this.props.editPost(data);
    }

   

    render() {
        const {className} = this.props;
        let {title,author} = this.state;
        console.log("title,author",title,author)
        return (
            <div>
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={className}>
        <ModalHeader toggle={this.props.toggle}>Edit Post</ModalHeader>
        <ModalBody>
            <input value={title} type="text"  onChange={(e) => this.handleChange(e,"title")}/>
          <input value={author}  type="text" onChange={(e) => this.handleChange(e,"author")}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Edit</Button>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            </div>
        )
    }
}
