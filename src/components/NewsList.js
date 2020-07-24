import React, { Component } from 'react'
import axios from 'axios'
import NewsPost from './NewsPost';

const API_KEY = "3068c35fb6f543c7a3cfc285a735f5fa";

class NewsList extends Component {
    state = {
        totalNews: 0,
        news: {
            author: '',
            content: '',
            url: '',
            publishedAt : ''
          
        }
    }

    getNews = () => {
        axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-12&sortBy=publishedAt&apiKey=${API_KEY}`)
            .then(res => {
                const newspost = res.data;
                const resKeys = Object.keys(newspost);
                const articles = newspost[resKeys[2]];
                //let updatedNews;
                const articlepsot = articles.map(article => {
                    const author = article["author"]
                    const content = article["content"]
                    const url = article["url"]
                    const publishedAt = article["publishedAt"]
                   
                    return {
                        author,
                        content,
                        url,
                        publishedAt,
                    }
                });

                console.log(articlepsot)
                this.setState({
                    totalNews: newspost[resKeys[1]],
                    news: articlepsot
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    componentDidMount() {
        this.getNews();
    }

    componentDidUpdate() {

        // this.getNews();
    }
    render() {
        let newsPost = "No News";
        if (this.state.news.length > 0) {
            newsPost = this.state.news.map((temp, index) => <NewsPost key={index} index={index} temp={temp} />)
        }
        // console.log(newsPost)
        return (
            <div>
                <h2> NEWS </h2>
                <h4> News Articles: {this.state.totalNews} </h4>
                {newsPost}
            </div>
        )
    }
}

export default NewsList
