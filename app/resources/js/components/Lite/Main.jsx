import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Article from "./Article";
import Articles from "./Articles";
import Comments from "./Comments";
import AddArticle from "./AddArticle";
import AddComment from "./AddComment";
import LiteRest from "./LiteRest";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [], currentArticle: null, currentComments: [],
        }
        this.handleAddArticle = this.handleAddArticle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    componentDidMount() {
        LiteRest.getREST("api/articles")
            .then(articles => {
                this.setState({articles});
            }).catch(error => LiteRest.cathError(error));
    }

    handleClick(article) {
        this.setState({currentArticle: article});
        LiteRest.getREST(`/api/articles/${article.id}/comments`)
            .then(currentComments => {
                this.setState({currentComments});
            }).catch(error => LiteRest.cathError(error));
    }

    render() {
        return (<>
            <div className='articles_container'>
                <div className='articles'>
                    <Articles articles={this.state.articles} handleClick={this.handleClick}/>
                    <AddArticle onAdd={this.handleAddArticle}/>
                </div>
            </div>
            <Article article={this.state.currentArticle}/>
            {this.state.currentArticle && <AddComment onAdd={this.handleAddComment}/>}
            {this.state.currentArticle && <Comments comments={this.state.currentComments}/>}
        </>);
    }

    handleAddArticle(article) {
        LiteRest.postREST("api/articles", article)
            .then(data => {
                this.setState((State) => ({
                    articles: State.articles.concat(data), currentArticle: data, currentComments: []
                }))
            }).catch(error => LiteRest.cathError(error))
    }

    handleAddComment(comment) {
        LiteRest.postREST(`api/articles/${this.state.currentArticle.id}/comments`, comment)
            .then(data => {
                this.setState((State) => ({
                    currentComments: State.currentComments.concat(data),
                }))
            }).catch(error => LiteRest.cathError(error))
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
