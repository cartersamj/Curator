// import React from 'react'
// import metApi from '../services/collection.js'

// function FeedItem(props) {
//   const artData = metApi.endpoints.getObject.useQuery(props.objectId)
//   return (
//   <>
//     {artData.error ? (
//       <></>
//     ) : artData.isLoading? (
//       <>Loading...</>
//     ) : artData.data ? (
//     <div className="feed-item">
//       <h4 className="art-name">{artData.data.title}</h4>
//       <div className="frame">
//         <img src={artData.data.primaryImage} className="painting"/>
//         <div className="tombstone">
//           <p className="tombstone-artist"><span className='artist-name'>{artData.data.artistDisplayName}</span> <span className='artist-born'>(b. {artData.data.artistBeginDate})</span></p> 
//           <p className="tombstone-painting"><span className='piece-title'>{artData.data.title}</span>, <span className='piece-date'>{artData.data.objectDate}</span></p> 
//           <p className="tombstone-medium">{artData.data.medium}</p> 
//           <p className="tombstone-summary">{artData.data.creditLine}</p> 
//         </div>
//       </div>
//       <div className="engagement">
//         <div className="rating sub-engagement">*****</div>
//         <div className="fav sub-engagement">♡</div>
//       </div>
//       <div className="comments">
//         <h2>comments here!!</h2>
//       </div>
//     </div> 
//     ) : null}
//   </> 
//   )
// }
// // h4 title of art
// export default FeedItem

/** TESTING BRANCH OF FEED ITEM */
import React from 'react'
import metApi from '../services/collection.js'
import favicon from '../../assets/images/heart-gold.svg'
import staricon from '../../assets/images/star-outline-svgrepo-com.svg'

const handleClick = (input) => {
  fetch('/art/fav', {method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(input)})
  .then(data => data.json())
  .then(response => console.log(response))
}

function FeedItem(props) {
  const artData = {
    title: props.objectId.title, 
    primaryImage: props.objectId.primaryImage, 
    artistDisplayName: props.objectId.artistDisplayName, 
    artistBeginDate: props.objectId.artistBeginDate,
    objectDate: props.objectId.objectDate,
    medium: props.objectId.medium,
    creditLine: props.objectId.creditLine
  }
  
  return (
    <div className="feed-item">
      <h4 className="art-name">{props.objectId.title}</h4>
      <div className="frame">
        <img src={props.objectId.primaryImage} className="painting"/>
        <div className="tombstone">
          <p className="tombstone-artist"><span className='artist-name'>{props.objectId.artistDisplayName}</span> <span className='artist-born'>(b. {props.objectId.artistBeginDate})</span></p> 
          <p className="tombstone-painting"><span className='piece-title'>{props.objectId.title}</span>, <span className='piece-date'>{props.objectId.objectDate}</span></p> 
          <p className="tombstone-medium">{props.objectId.medium}</p> 
          <p className="tombstone-summary">{props.objectId.creditLine}</p> 
        </div>
      </div>
      <div className="below-painting">
        <div className="engagement">
          <div className="rating sub-engagement"><div className="stars" style={{"--rating": 2.3}}></div></div>
          <div className="fav sub-engagement"><button className="fav-icon-button" onClick={()=>handleClick(artData)}><img src={favicon} className="fav-icon" /></button></div>
        </div>
        <div className="comments">
          <input type="text" className="comment-field"/>
          <button className='submit-comment'>Submit</button>
        </div>
      </div>
    </div> 
  )
}
// h4 title of art
export default FeedItem