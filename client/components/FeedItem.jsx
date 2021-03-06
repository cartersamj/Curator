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

function FeedItem(props) {
  let [userRating, setUserRating] = useState(0)
  let [userFav, setUserFav] = useState(0)

  const apiData = metApi.endpoints.getObject.useQuery(props.objectId)

  return (
    <>
    {apiData.error ? (
      <></>
      ) : apiData.isLoading ? (
        <>Loading...</>
        ) : !apiData.data.primaryImage ? (
          <></>
    ) : apiData.data ? (
      <div className="feed-item">
        <h4 className="art-name">{apiData.data.title}</h4>
        <div className="frame">
          <img src={apiData.data.primaryImage} className="painting"/>
          <div className="tombstone">
            <p className="tombstone-artist">
              <span className='artist-name'>
                {apiData.data.artistDisplayName}
                </span> 
                <span className='artist-born'>
                  (b. {apiData.data.artistBeginDate})
                </span>
              </p> 
            <p className="tombstone-painting"><span className='piece-title'>{apiData.data.title}</span>, <span className='piece-date'>{apiData.data.objectDate}</span></p> 
            <p className="tombstone-medium">{apiData.data.medium}</p> 
            <p className="tombstone-summary">{apiData.data.creditLine}</p> 
          </div>
        </div>
        <div className="below-painting">
          <div className="engagement">
            <div className="rating sub-engagement"><div className="stars" style={{"--rating": userRating}}></div></div>
            <div className="userRating sub-engagement">
              <button className='dropbtn'>Add Your Rating</button>
                <div className="dropdown-content">
                  <a href="#" onClick={(e)=> {
                    setUserRating(userRating = 1);
                    handleRating(apiData.data,userRating, e);
                    }}>★: Yawn-a Lisa</a>
                  <a href="#" onClick={(e)=> {
                    setUserRating(userRating = 2);
                    handleRating(apiData.data,userRating, e);
                    }}>★★: Lame-onardo</a>
                  <a href="#" onClick={(e)=> {
                    setUserRating(userRating = 3);
                    handleRating(apiData.data,userRating, e);
                    }}>★★★: Mid-a Lisa</a>
                  <a href="#" onClick={(e)=> {
                    setUserRating(userRating = 4);
                    handleRating(apiData.data,userRating, e);
                    }}>★★★★: Mona Lisa?</a>
                  <a href="#" onClick={(e)=> {
                    setUserRating(userRating = 5);
                    handleRating(apiData.data,userRating, e);
                    }}>★★★★★: M. Lisa 2.0</a>
                </div>  
              </div>
            <div className="fav sub-engagement">
              <button className="fav-icon-button" onClick={(e)=>{
                setUserFav(userFav = 5);
                handleClick(apiData.data, userFav, e);
              }}>
                <div className="heart" style={{"--fav": userFav}}></div>
                </button>
            </div>
          </div>
          <div className="comments">
            <input type="text" className="comment-field"/>
            <button className='submit-comment'>Submit</button>
          </div>
        </div>
      </div> 
    ) : null}
    </>
  )
}
// h4 title of art
export default FeedItem