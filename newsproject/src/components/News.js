import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <div>
        <NewsItem title="My News" discripation="my dicprication" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPMsCoOirsXgCLEZy1csq7SmBhJkQaVRbHA&usqp=CAU"/>
      </div>
    )
  }
}

export default News
