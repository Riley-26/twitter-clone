import React, { useState } from 'react'
import "../TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import db from '../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault()

    db.collection("posts").add({
      displayName: "Riley Read",
      username: "rileyread",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
            </div>
            <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type="text" />
            <Button className='tweetBox__tweetButton' onClick={sendTweet}>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox