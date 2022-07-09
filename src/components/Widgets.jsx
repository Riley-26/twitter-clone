import React from 'react'
import "../Widgets.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from "@mui/icons-material/Search"


function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder='Search Twitter' type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <TwitterTweetEmbed tweetId={"1544636989647032321"} />

          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='elonmusk'
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi"}}
          />
        </div>
    </div>
  )
}

export default Widgets