import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1';

const metApi = createApi({
  reducerPath: 'metApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCollection: builder.query({
      query: () => '/search?hasImages=true&departmentId=11&q=*',
    }),
    getObject: builder.query({
      query: (objectId) => `/objects/${objectId}`,
    }),
  }),
});
export default metApi;
export const { useGetCollectionQuery, useGetObjectQuery } = metApi;
