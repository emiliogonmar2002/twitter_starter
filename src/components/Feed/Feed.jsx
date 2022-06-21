import * as React from "react"
import { Fragment } from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox 
        setTweets={props.setTweets}
        userProfile={props.userProfile}
        />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet) => {
        return(
          <React.Fragment key={tweet.id}>
            <Tweet
              tweet={tweet}
              />
          </React.Fragment>
        )
      })}</div>
    </div>
  )
}
