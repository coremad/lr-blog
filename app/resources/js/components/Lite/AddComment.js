import React, {Component} from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: {
                author_name: '', content: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.newComment);
        state[key] = e.target.value;
        this.setState({newComment: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newComment);
    }

    render() {
        return (<div className="add_comment">
            <form id="comm_form" onSubmit={this.handleSubmit}>
                <input placeholder="name" form="comm_form" minLength={3} maxLength={32} type="text" onChange={(e) => this.handleInput("author_name", e)}/>&nbsp;
                <input id="icomm" placeholder="comment" form="comm_form"  minLength={3} type="text" onChange={(e) => this.handleInput("content", e)}/>&nbsp;
                <input form="comm_form" type="submit" value="Add new comment"/>
            </form>
        </div>)
    }
}

export default AddComment;
