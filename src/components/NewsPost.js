import React, { Component } from 'react';
import classes from './NewsPost.module.css';


class NewsPost extends Component {
    render() {
        return (
            <div key={this.props.index} className={classes.NewsPost}>
                <div className={classes.Header}>
                    <div>{this.props.temp.author}</div>
                    <div> {this.props.temp.publishedAt}</div>
                </div>
                    <div className={classes.Content}>{this.props.temp.content}</div>
                    <a href={this.props.temp.url} className={classes.URL}>Read More...</a>
                </div>
        )
    }
}

export default NewsPost
