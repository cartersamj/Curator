import React from 'react'
// h4 
function FeedItem(props) {
  console.log(props)
  return (
  <div className="feed-item">
    <h4 className="art-name">{props.title}</h4>
    {/* <h1>{props.content}</h1> */}
    <div className="frame">
      <img src={props.src} className="painting"/>
      <div className="tombstone">
        <p className="tombstone-artist">Bob Ross</p> 
        <p className="tombstone-painting">{props.title}</p> 
        <p className="tombstone-medium">Acrylic on canvas</p> 
        <p className="tombstone-summary">Bob ross painted this for fun</p> 
      </div>
    </div>
    <div className="engagement">
      <div className="rating sub-engagement">*****</div>
      <div className="fav sub-engagement">♡</div>
    </div>
    <div className="comments">
      <h2>comments here!!</h2>
    </div>
  </div>
  )
}
// h4 title of art
export default FeedItem