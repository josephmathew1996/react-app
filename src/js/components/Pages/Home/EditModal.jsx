import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : this.props.post.title,
            author : this.props.post.author,
            isOpen : this.props.isOpen,
        }
    }

    handleChange = (e,key) => {
        this.setState({
            [key] : e.target.value
        });
    }
    handleSubmit = () => {
        let data = {};
        data.id = this.props.post.id;
        data.title = this.state.title;
        data.author = this.state.author;
        this.props.editPost(data);
        this.props.toggle();
    }

   

    render() {
        const {className} = this.props;
        let {title,author} = this.state;
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
