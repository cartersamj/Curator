import React from 'react'
import FeedContainer from './FeedContainer.jsx'
import metApi from '../services/collection.js'
import store from '../store.js'
import feedSlice from '../reducers/feedReducer.js'

function App() {
  const {data, error, isLoading} = metApi.endpoints.getCollection.useQuery()
  // if (!isLoading) store.dispatch(feedSlice.actions.setCollection(data))
  // console.log(store.getState())
  return (
  <div className="container">
    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>hiiiii</h1>
          <FeedContainer collection={data}/>
        </>
      ) : null}
  </div>
  
)

}

export default App;