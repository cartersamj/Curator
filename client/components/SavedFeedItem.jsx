// import React from 'react'
// import metApi from '../services/collection.js'

// function SavedFeedItem(props) {
//   
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
import React, { useState } from 'react'
import metApi from '../services/collection.js'
import favicon from '../../assets/images/heart-gold.svg'
import staricon from '../../assets/images/star-outline-svgrepo-com.svg'

const handleClick = (art, fav, e) => {
  fav === 5 ? fav = true: fav = false
  art.favorite = fav;
  fetch('/art/fav', {method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(art)})
    .then(data => data.json())
    .then(response => console.log(response))
}

const handleRating = (art,rate, e) => {
  e.preventDefault()
  art.userRating = rate;
  fetch('/art/rate', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(art)})
  .then(data => data.json())
  .then(response => console.log(response))
}

function SavedFeedItem(props) {
  let [userRating, setUserRating] = useState(0)
  let [userFav, setUserFav] = useState(0)
  const artData = {
    title: props.object.title, 
    primaryImage: props.object.primaryImage, 
    artistDisplayName: props.object.artistDisplayName, 
    artistBeginDate: props.object.artistBeginDate,
    objectDate: props.object.objectDate,
    medium: props.object.medium,
    creditLine: props.object.creditLine,
    userRating: props.object.userRating,
    rating : props.object.rating === undefined ? 0 : props.object.rating,
    favorite: (props.object.favorite === true ? 5 : 0)
  }
  return (
    <div className="feed-item">
      <h4 className="art-name">{props.object.title}</h4>
      <div className="frame">
        <img src={props.object.primaryImage} className="painting"/>
        <div className="tombstone">
          <p className="tombstone-artist"><span className='artist-name'>{props.object.artistDisplayName}</span> <span className='artist-born'>(b. {props.object.artistBeginDate})</span></p> 
          <p className="tombstone-painting"><span className='piece-title'>{props.object.title}</span>, <span className='piece-date'>{props.object.objectDate}</span></p> 
          <p className="tombstone-medium">{props.object.medium}</p> 
          <p className="tombstone-summary">{props.object.creditLine}</p> 
        </div>
      </div>
      <div className="below-painting">
        <div className="engagement">
          <div className="rating sub-engagement"><div className="stars" style={{"--rating": artData.rating}}></div></div>
          <div className="userRating sub-engagement">
            <button className='dropbtn'>Add Your Rating</button>
              <div className="dropdown-content">
                <a href="#" onClick={(e)=> {
                  setUserRating(userRating = 1);
                  handleRating(artData,userRating, e);
                  }}>★: Yawn-a Lisa</a>
                <a href="#" onClick={(e)=> {
                  setUserRating(userRating = 2);
                  handleRating(artData,userRating, e);
                  }}>★★: Lame-onardo</a>
                <a href="#" onClick={(e)=> {
                  setUserRating(userRating = 3);
                  handleRating(artData,userRating, e);
                  }}>★★★: Mid-a Lisa</a>
                <a href="#" onClick={(e)=> {
                  setUserRating(userRating = 4);
                  handleRating(artData,userRating, e);
                  }}>★★★★: Mona Lisa?</a>
                <a href="#" onClick={(e)=> {
                  setUserRating(userRating = 5);
                  handleRating(artData,userRating, e);
                  }}>★★★★★: M. Lisa 2.0</a>
              </div>  
            </div>
          <div className="fav sub-engagement">
            <button className="fav-icon-button" onClick={(e)=>{
              setUserFav(userFav = 5);
              handleClick(artData, userFav, e);
            }}>
              {/* <img src={favicon} className="fav-icon" /> */}
              <div className="heart" style={{"--fav": artData.favorite}}></div>
              </button>
          </div>
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
export default SavedFeedItem