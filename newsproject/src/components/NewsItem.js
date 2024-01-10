import React, { Component } from 'react';

export class NewsItem extends Component {
 
 
  render() {
    let {title,discripation , imgUrl , newsUrl} = this.props;
    return (
      <>
      <div className="container">
       
      <div className="my-3">
        {/* GET https://newsapi.org/v2/top-headlines?country=in&apiKey=a13856cb8c664403a76485028be0f622 */}
        <div className="card" style={{width: "18rem"}}>
          <img src={<img src={!imgUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz85hA0ErDmm3y6XFS4w5JBNW6m9ajupJ_Q&usqp=CAU":imgUrl} className="card-img-top" alt="..."/>} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} ...</h5>
              <p className="card-text">{discripation} .....</p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More...</a>
              </div>
          </div>
      </div>
      </div>
      </>
    )
  }
}

export default NewsItem
