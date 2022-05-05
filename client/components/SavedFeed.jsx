import React from 'react'
import FeedItem from './FeedItem.jsx'
import SavedFeedItem from './SavedFeedItem.jsx'
// import {useGetObjectQuery} from '../services/collection.js'
import metApi from '../services/collection.js'
import store from '../store.js';
import feedSlice from '../reducers/feedReducer.js'




function SavedFeed(props) {
  // const {apiData, error, isLoading} = useGetObjectQuery(436040);
  // either do the whole thing here, or do individual calls (array is object Ids)
  // in each component
  // const apiData =  metApi.endpoints.getObject.useQuery(436040)
  // console.log(apiData)
  // console.log(apiData.data)
  // store.dispatch(feedSlice.actions.fill())
  // console.log(store.getState())

    // <FeedItem 
    // src={api.data.primaryImage}
    // artist={api.data.artistDisplayName}
    // artistBeginDate={api.data.artistBeginDate}
    // title={api.data.title}
    // objectDate={api.data.objectDate}
    // medium={api.data.medium}
    // creditLine={api.data.creditLine}
    // key={'item ' + i}
    // />
  return (
    <>
      <div className="feed">
      {props.gallery.map((ele, i) => (
      <SavedFeedItem key={'item ' + i} object={ele} />
      ))
      }
    </div>
    </>
  )
}

export default SavedFeed;