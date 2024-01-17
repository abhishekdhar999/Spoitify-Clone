import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


    export const spotifyApi = createApi({
        reducerPath:'spotifyApi',
        baseQuery:fetchBaseQuery({
           baseUrl: 'https://spotify23.p.rapidapi.com',

        //   prepareheaders is an callback arrow function which is gonna prepare headers every time when we call the api
           prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','f53696b666mshbb772a5efd11b12p1fdf53jsn617c35efc9a7')

            return headers;
           },
 }),
 endpoints:(builder)=>({
getNewReleases:builder.query({query:()=>`/albums/?ids=3IBcauSj5M2A6lTeffJzdv`}),

 getAlbumDetails:builder.query({query:()=>`/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv`}),
//  getAlbumInfo:builder.query({query:(album_id)=>`/get_single_album/?${album_id}`})
 })
    });

    export const {
        useGetNewReleasesQuery,
         useGetAlbumDetailsQuery,
    }=spotifyApi









    // const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'f53696b666mshbb772a5efd11b12p1fdf53jsn617c35efc9a7',
//       'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify117.p.rapidapi.com/new_releases/?country=us', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));