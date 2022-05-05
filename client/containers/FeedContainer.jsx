import React from 'react'
import Feed from '../components/Feed.jsx'
import metApi from '../services/collection.js'
import store from '../store.js'
import feedSlice from '../reducers/feedReducer.js'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'


function FeedContainer(props) {
  
  // const collectionRaw = metApi.endpoints.getCollection.useQuery()
  // const collection = collectionRaw.data

  // console.log(collection)
  // console.log(store.getState())

  const gallery = []
  for (let i = 0; i < 10; i++) {

    gallery.push(props.collection.objectIDs[Math.floor(Math.random() * props.collection.objectIDs.length)])
  }

  // send this to state.. move it higher?
  return (
  <div className="feed-container">
    {!gallery.length ? (
      <>Loading...</>
    ) : (
    <>
      <Feed gallery={gallery}/>
    </>
    )}
  </div>
  )
}

export default FeedContainer