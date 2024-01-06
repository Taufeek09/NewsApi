import React, { Component } from 'react'
import NewsItem from './components/NewsItem';

export class News extends Component {
  render() {
    return (
      <div>
        This is News Component.
        <NewsItem />
      </div>
    )
  }
}

export default News
