import React, {useState} from 'react'
import Feed from '../components/Feed.jsx'
import SavedFeed from '../components/SavedFeed.jsx'
import metApi from '../services/collection.js'
import store from '../store.js'
import feedSlice from '../reducers/feedReducer.js'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'


class FeedContainer extends React.Component {
  constructor(props) {
    super();
    // const collectionRaw = metApi.endpoints.getCollection.useQuery()
    // const collection = collectionRaw.data
    this.state = {cachedGallery: [], gallery: []}
    // console.log(collection)
    // console.log(store.getState())
    this.feedStarter = this.feedStarter.bind(this)
    fetch('/art/saved')
    .then(data=> data.json())
    .then(response => response.gallery)
    .then(gal => {
      this.setState({cachedGallery: gal})
    this.feedStarter()
    })  
  }
  feedStarter(){
    const gallery = [];
    for (let i = 0; i < 10; i++) {

      gallery.push(this.props.collection.objectIDs[Math.floor(Math.random() * this.props.collection.objectIDs.length)])
    }
    this.setState({gallery: gallery})
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
    {!this.state.gallery.length ? (
      <>Loading...</>
      ) : (
        <>
      <Feed gallery={this.state.gallery}/>
    </>
    )}
  </div>
    )}
}

export default FeedContainer