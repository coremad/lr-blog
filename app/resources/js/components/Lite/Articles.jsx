import React from "react";
import dateFormat from 'dateformat';

const Articles = ({articles, handleClick}) => {
    const rows = articles.map(article => {
        return (<tr onClick={() => handleClick(article)} key={article.id}>
            <td style={{color: 'darkblue'}}>{dateFormat(article.created_at, "dd.mm.yyyy hh:mm:ss")}</td>
            <td>{article.title}</td>
        </tr>)
    })
    return (<div className='art_list'>
        <table>
            <tbody>{rows}</tbody>
        </table>
    </div>)
}

export default Articles;
