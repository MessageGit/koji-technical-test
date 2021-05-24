import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";

import Loading from '../components/Loading';

const ViewArticle = () => {

    let history = useHistory();
    const { id } = useParams();
    const [article, setArticle] = useState([]);

    useEffect(() => { // Fetch my API (Fetch, Axios, XHR..)
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'GET', headers: {'Content-Type': 'application/json'} })
            .then(response => response.json())
            .then(data => { setArticle(data); })
            .catch((error) => { console.error('Error: ', error); });
    }, [id]);

    return (
        <>
            <div onClick={() => history.push("/")} id="back">
                <span>Retour</span>
            </div>
            {(article.id ? 
                <article className="view-article">
                    <div className="sizing-block">
                        <div id="article-number">{id}</div>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                    </div>
                </article>
            : <Loading />)}
        </>
    )
};

export default ViewArticle;