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
        <p className="tombstone-artist"><span className='artist-name'>{props.artist}</span> <span className='artist-born'>(b. {props.artistBeginDate})</span></p> 
        <p className="tombstone-painting"><span className='piece-title'>{props.title}</span>, <span className='piece-date'>{props.objectDate}</span></p> 
        <p className="tombstone-medium">{props.medium}</p> 
        <p className="tombstone-summary">{props.creditLine}</p> 
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