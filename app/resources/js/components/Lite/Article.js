import React from 'react';
import dateFormat from 'dateformat';

const Article = ({article}) => {
    if (!article) {
        return (<div className='article'><br/>Article not selected </div>);
    }
    return (<div className='article'>
        <h2>§{article.id} &nbsp;
            <span style={{color: 'darkred'}}>{dateFormat(article.created_at, "mmmm dS, yyyy hh:mm:ss")}</span>
            &nbsp;{article.title}
        </h2>
        <p> {article.content}</p>
    </div>)
}

export default Article;
