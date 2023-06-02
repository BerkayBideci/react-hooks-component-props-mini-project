import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const postArticle = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
    return (
        <main>
            {postArticle}
        </main>
    )
}

export default ArticleList 