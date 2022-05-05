import React, {useState} from 'react'
import Feed from '../components/Feed.jsx'
import SavedFeed from '../components/SavedFeed.jsx'
import metApi from '../services/collection.js'
import store from '../store.js'
import feedSlice from '../reducers/feedReducer.js'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'


class SavedFeedContainer extends React.Component {
  constructor(props) {
    super();
    // const collectionRaw = metApi.endpoints.getCollection.useQuery()
    // const collection = collectionRaw.data
    this.state = {cachedGallery: []}
    // console.log(collection)

    fetch('/art/saved')
      .then(data=> data.json())
      .then(response => response.gallery)
      .then(gal => {
        this.setState({cachedGallery: gal})
    })  
  }
  

  // send this to state.. move it higher?
  render() {
    return (
  <div className="feed-container">
    
    {!this.state.cachedGallery.length ? (
      <>Loading...</>
      ) : (
        <>
      <SavedFeed gallery={this.state.cachedGallery} />
    </>
    )}
  </div>
    )}
}

export default SavedFeedContainer