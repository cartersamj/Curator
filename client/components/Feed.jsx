import React from 'react'
import FeedItem from './FeedItem.jsx'
// import {useGetObjectQuery} from '../services/collection.js'
import metApi from '../services/collection.js'
import store from '../store.js';
import feedSlice from '../reducers/feedReducer.js'
const data = [
  {
    objectID: 436040,
    isHighlight: false,
    accessionNumber: '29.100.24',
    accessionYear: '1929',
    isPublicDomain: true,
    primaryImage:
      'https://images.metmuseum.org/CRDImages/ep/original/DP280790.jpg',
    primaryImageSmall:
      'https://images.metmuseum.org/CRDImages/ep/web-large/DP280790.jpg',
    additionalImages: [
      'https://images.metmuseum.org/CRDImages/ep/original/DP280791.jpg',
      'https://images.metmuseum.org/CRDImages/ep/original/GermanCat8_IRR_detail of headnocap.jpg',
    ],
    constituents: [
      {
        constituentID: 161794,
        role: 'Artist',
        name: 'Lucas Cranach the Elder',
        constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500115364',
        constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q191748',
        gender: '',
      },
    ],
    department: 'European Paintings',
    objectName: 'Painting',
    title: 'Portrait of a Man with a Rosary',
    culture: '',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Lucas Cranach the Elder',
    artistDisplayBio: 'German, Kronach 1472–1553 Weimar',
    artistSuffix: '',
    artistAlphaSort: 'Cranach, Lucas, the Elder',
    artistNationality: 'German',
    artistBeginDate: '1472',
    artistEndDate: '1553',
    artistGender: '',
    artistWikidata_URL: 'https://www.wikidata.org/wiki/Q191748',
    artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500115364',
    objectDate: 'ca. 1508',
    objectBeginDate: 1503,
    objectEndDate: 1513,
    medium: 'Oil on oak',
    dimensions: '18 3/4 x 13 7/8 in. (47.6 x 35.2cm)',
    measurements: [
      {
        elementName: 'Overall',
        elementDescription: null,
        elementMeasurements: { Height: 47.6, Width: 35.2 },
      },
      {
        elementName: 'Frame',
        elementDescription: null,
        elementMeasurements: { Depth: 5.715, Height: 59.6901, Width: 47.3076 },
      },
    ],
    creditLine:
      'H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929',
    geographyType: '',
    city: '',
    state: '',
    county: '',
    country: '',
    region: '',
    subregion: '',
    locale: '',
    locus: '',
    excavation: '',
    river: '',
    classification: 'Paintings',
    rightsAndReproduction: '',
    linkResource: '',
    metadataDate: '2021-09-23T04:36:08.163Z',
    repository: 'Metropolitan Museum of Art, New York, NY',
    objectURL: 'https://www.metmuseum.org/art/collection/search/436040',
    tags: [
      {
        term: 'Men',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300025928',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q8441',
      },
      {
        term: 'Portraits',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300015637',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q134307',
      },
      {
        term: 'Rosaries',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300262831',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q132539',
      },
    ],
    objectWikidata_URL: 'https://www.wikidata.org/wiki/Q19911507',
    isTimelineWork: false,
    GalleryNumber: '626',
  },
  {
    objectID: 436084,
    isHighlight: false,
    accessionNumber: '03.29',
    accessionYear: '1903',
    isPublicDomain: true,
    primaryImage:
      'https://images.metmuseum.org/CRDImages/ep/original/DT1981.jpg',
    primaryImageSmall:
      'https://images.metmuseum.org/CRDImages/ep/web-large/DT1981.jpg',
    additionalImages: [],
    constituents: [
      {
        constituentID: 161806,
        role: 'Artist',
        name: 'Charles-François Daubigny',
        constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500115164',
        constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q252357',
        gender: '',
      },
    ],
    department: 'European Paintings',
    objectName: 'Painting',
    title: 'Boats on the Seacoast at Étaples',
    culture: '',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Charles-François Daubigny',
    artistDisplayBio: 'French, Paris 1817–1878 Paris',
    artistSuffix: '',
    artistAlphaSort: 'Daubigny, Charles-François',
    artistNationality: 'French',
    artistBeginDate: '1817',
    artistEndDate: '1878',
    artistGender: '',
    artistWikidata_URL: 'https://www.wikidata.org/wiki/Q252357',
    artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500115164',
    objectDate: '1871',
    objectBeginDate: 1871,
    objectEndDate: 1871,
    medium: 'Oil on wood',
    dimensions: '13 1/2 x 22 7/8 in. (34.3 x 58.1 cm)',
    measurements: [
      {
        elementName: 'Overall',
        elementDescription: null,
        elementMeasurements: { Height: 34.3, Width: 58.1 },
      },
    ],
    creditLine: 'Catharine Lorillard Wolfe Collection, Wolfe Fund, 1903',
    geographyType: '',
    city: '',
    state: '',
    county: '',
    country: '',
    region: '',
    subregion: '',
    locale: '',
    locus: '',
    excavation: '',
    river: '',
    classification: 'Paintings',
    rightsAndReproduction: '',
    linkResource: '',
    metadataDate: '2021-12-02T04:36:26.17Z',
    repository: 'Metropolitan Museum of Art, New York, NY',
    objectURL: 'https://www.metmuseum.org/art/collection/search/436084',
    tags: [
      {
        term: 'Seascapes',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300117546',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q158607',
      },
      {
        term: 'Boats',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300178749',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q35872',
      },
    ],
    objectWikidata_URL: 'https://www.wikidata.org/wiki/Q19912321',
    isTimelineWork: false,
    GalleryNumber: '812',
  },
  {
    objectID: 436139,
    isHighlight: false,
    accessionNumber: '29.100.34',
    accessionYear: '1929',
    isPublicDomain: true,
    primaryImage:
      'https://images.metmuseum.org/CRDImages/ep/original/DT840.jpg',
    primaryImageSmall:
      'https://images.metmuseum.org/CRDImages/ep/web-large/DT840.jpg',
    additionalImages: [],
    constituents: [
      {
        constituentID: 161821,
        role: 'Artist',
        name: 'Edgar Degas',
        constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500115194',
        constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q46373',
        gender: '',
      },
    ],
    department: 'European Paintings',
    objectName: 'Painting',
    title: 'Dancers Practicing at the Barre',
    culture: '',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Edgar Degas',
    artistDisplayBio: 'French, Paris 1834–1917 Paris',
    artistSuffix: '',
    artistAlphaSort: 'Degas, Edgar',
    artistNationality: 'French',
    artistBeginDate: '1834',
    artistEndDate: '1917',
    artistGender: '',
    artistWikidata_URL: 'https://www.wikidata.org/wiki/Q46373',
    artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500115194',
    objectDate: '1877',
    objectBeginDate: 1877,
    objectEndDate: 1877,
    medium: 'Mixed media on canvas',
    dimensions: '29 3/4 x 32 in. (75.6 x 81.3 cm)',
    measurements: [
      {
        elementName: 'Overall',
        elementDescription: null,
        elementMeasurements: { Height: 75.6, Width: 81.3 },
      },
    ],
    creditLine:
      'H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929',
    geographyType: '',
    city: '',
    state: '',
    county: '',
    country: '',
    region: '',
    subregion: '',
    locale: '',
    locus: '',
    excavation: '',
    river: '',
    classification: 'Paintings',
    rightsAndReproduction: '',
    linkResource: '',
    metadataDate: '2021-12-21T04:39:28.08Z',
    repository: 'Metropolitan Museum of Art, New York, NY',
    objectURL: 'https://www.metmuseum.org/art/collection/search/436139',
    tags: [
      {
        term: 'Dancing',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300389779',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q43393537',
      },
      {
        term: 'Dancers',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300025653',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q5716684',
      },
      {
        term: 'Women',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300025943',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q467',
      },
      {
        term: 'Ballet',
        AAT_URL: 'http://vocab.getty.edu/page/aat/300054145',
        Wikidata_URL: 'https://www.wikidata.org/wiki/Q41425',
      },
    ],
    objectWikidata_URL: 'https://www.wikidata.org/wiki/Q19905112',
    isTimelineWork: true,
    GalleryNumber: '815',
  },
];

  



function Feed(props) {
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
  
  console.log(props.gallery)
  return (
  <div className="feed">
    <h1>I am the feed</h1>
    {props.gallery.map((ele, i) => (
      <FeedItem key={'item ' + i} objectId={ele} />
    ))
    }
  </div>
  )
}

export default Feed;