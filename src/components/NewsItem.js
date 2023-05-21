import React, { Component } from 'react'

export class NewsItem extends Component {

    render(props) {
        let {title, description, urlToImage , Newsurl, publishedAt} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={urlToImage?urlToImage:"https://bitsofco.de/content/images/2018/12/broken-1.png"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
                            <a href={Newsurl} target="_blank" rel="noopener noreferrer" className="btn tbn-sm btn-primary">Read More</a>
                            
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem