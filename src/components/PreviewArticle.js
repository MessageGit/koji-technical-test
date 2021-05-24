import React, {Component} from 'react';

class PreviewArticle extends Component {

    render() {
        const articleItem = this.props.data;
        return (
            <>
                <div className="article-id">{articleItem.id}</div>
                <div className="title">{articleItem.title}</div>
                {articleItem.body}
            </>
        )
    }
}

export default PreviewArticle;