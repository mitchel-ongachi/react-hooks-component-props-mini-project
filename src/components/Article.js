import React from 'react';
function Article ({date,title,preview}){
    const defaultDate = "January 1, 1970";
    return(
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date || defaultDate}</small>
                <p>{preview}</p>
            </article>

        </div>

    )
}
export default Article