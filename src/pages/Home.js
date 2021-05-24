import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import Loading from '../components/Loading';
import PreviewArticle from '../components/PreviewArticle';

const Home = () => {

    const [articles, setArticles] = useState([]);
    const [index, setIndex] = useState(0);

    const history = useHistory();
    function showArticle(articleId) { return history.push("/viewArticle/" + articleId); }

    useEffect(() => { // Fetch my API (Fetch, Axios, XHR..)
        fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', headers: {'Content-Type': 'application/json'} })
            .then(response => response.json())
            .then(data => { setArticles(data); })
            .catch((error) => { console.error('Error: ', error); });
    }, []);

    return (
        (articles.length !== 0 ?
            <div className="articles-center">
                <div className="manage-items">
                    <span className="counter">{articles.length}</span> articles disponibles
                    <div className="nav-items">
                        <div onClick={() => (index !== articles.length-10) ? setIndex(index+10) : setIndex(articles.length-10)} 
                        className={"arrow arrow-right " + (index === articles.length-10 ? "empty" : "isset")}></div>
                        <div onClick={() => (index !== 0) ? setIndex(index-10) : setIndex(0)} 
                        className={"arrow arrow-left " + (index === 0 ? "empty" : "isset")}></div>
                    </div>
                </div>
                {articles.slice(index, index+10).map(articleItem => 
                    <div className="articleForm" onClick={() => showArticle(articleItem.id)} key={articleItem.id}>
                        <PreviewArticle data={articleItem}/>
                    </div> 
                )}
            </div>
        : <Loading />)
    );

};

export default Home;