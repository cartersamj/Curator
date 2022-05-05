import React from 'react'
import metApi from '../services/collection.js'

function FeedItem(props) {
  console.log(props)
  const artData = metApi.endpoints.getObject.useQuery(props.objectId)
  console.log(artData)
  return (
  <>
    {artData.error ? (
      <>An error occurred</>
    ) : artData.isLoading? (
      <>Loading...</>
    ) : artData.data ? (
    <div className="feed-item">
      <h4 className="art-name">{artData.data.title}</h4>
      <div className="frame">
        <img src={artData.data.primaryImage} className="painting"/>
        <div className="tombstone">
          <p className="tombstone-artist"><span className='artist-name'>{artData.data.artistDisplayName}</span> <span className='artist-born'>(b. {artData.data.artistBeginDate})</span></p> 
          <p className="tombstone-painting"><span className='piece-title'>{artData.data.title}</span>, <span className='piece-date'>{artData.data.objectDate}</span></p> 
          <p className="tombstone-medium">{artData.data.medium}</p> 
          <p className="tombstone-summary">{artData.data.creditLine}</p> 
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
    ) : null}
  </> 
  )
}
// h4 title of art
export default FeedItem