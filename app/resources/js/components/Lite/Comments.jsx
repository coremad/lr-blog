import React from 'react';
import dateFormat from 'dateformat';

const Comments = ({comments}) => {
    if (!comments || comments <= 0) {
        return (<div className='comments'><br/>No comments </div>);
    }
    const rows = comments.map(comm => {
        return (<div className='comment' key={comm.id}>
            <div className='author'><span style={{color: 'darkblue'}}> {comm.author_name}&nbsp;</span> at &nbsp;
                <span style={{color: 'darkred'}}>{dateFormat(comm.created_at, "mmmm dS, yyyy hh:mm:ss")}</span>
                &nbsp; =>
            </div>
            <div> {comm.content}</div>
        </div>)
    });
    return (<div className='comments'>{rows}</div>);
}

export default Comments;
