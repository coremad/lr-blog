import React, {Component} from 'react';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newArticle: {
                title: '', content: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.newArticle);
        state[key] = e.target.value;
        this.setState({newArticle: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newArticle);
    }

    render() {
        return (<div className='add_article'>
            <div className='add_b'>
                <form id="art_form" onSubmit={this.handleSubmit}></form>
                <div>
                    <input form="art_form" type="submit" value="Add new article"/>
                    <div>Content ↴</div>
                </div>
                <div id="itittle">
                    <div> Tittle ↴</div>
                    <input minLength={3} style={{width: "100%"}} form="art_form" type="text"
                           onChange={(e) => this.handleInput('title', e)}/>
                </div>
            </div>
            <div id="icont">
                <textarea minLength={3} form="art_form" onChange={(e) => this.handleInput('content', e)}/>
            </div>
        </div>)
    }
}

export default AddArticle;
