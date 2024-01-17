import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs, SongCard } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";;
import {useGetNewReleasesQuery, useGetAlbumDetailsQuery } from "../redux/Services/spotify";
import PlayPause from "../components/PlayPause";
// import {albumid} from SongCard

const AlbumSongCard = ({itemArr, song, i,artist,tracks}) => {
  console.log(song)
  const songArtists = song.track.artists.items.map((songArtists)=>{
      return tracks.find((track)=>track.uid !== songArtists.id)
  });
  // console.log(items);
  // console.log(song)
  // console.log(songArtists[0].artists)
 return(
    <>
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="fot-bold text-base mr-3 text-white">{song.track_number}</h3>

    <div className="flex1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg " src="" alt="" />

      <div className="flex-1 flex flex-col justify-center mx-4">

        <a className="text-white text-xl font-bold" href="">{song.track.name}</a>


        {/* {songArtists.map((artistData,i) => (
              <a className="text-slate-400 " key={artistData.i} href={artistData.artists[0].external_urls.spotify}>
                {artistData.artists[i].name}
              </a>
            ))} */}
  

      </div>


    </div>
    {/* <div className="">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        id = {song.id}
         onClick = {()=>handlePlayClick(song)}
        // handlePlay={handlePlayClick(song)}

      />
    </div> */}

  </div>
  </>
 ) }

const SongDetails = () => {
    const dispatch = useDispatch();
    
     const  {album_id}  = useParams();
    
        //  console.log(albumid)
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const {data:imgdata} = useGetNewReleasesQuery("3IBcauSj5M2A6lTeffJzdv");
    const {data:albumData,isFetching:isFetchingAlbumsDetails,error} = useGetAlbumDetailsQuery("3IBcauSj5M2A6lTeffJzdv");
    if (!albumData  ) {
        return null; // You can return a loading indicator or handle the loading state
      }
    //  console.log(albumData)
    const items  = albumData.data.album
    const tracks = items.tracks.items
      // console.log(items)
      // console.log(tracks)
// const itemArr = imgdata.albums.items;
// console.log(itemArr[0].images[0])
    // console.log(imgdata)
    return (
        <>
            <div className="flex flex-col">
                {/* <DetailsHeader artistId={artistid} songData={songData}> </DetailsHeader> */}
            

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Album Tracks</h2>
            </div>

            <div className="mt-5"></div>
                    {tracks.map((song,i)=>(
                        <AlbumSongCard
                        // songArtists = {songArtists}
                         tracks = {tracks}
                      
                        albumdata = {albumData}
                        key = {i}
                        song = {song}
                        id = {song.id}
                        i={i}
                        artist = {song.artists}
                        // isPlaying={isPlaying}
                        // activeSong = {activeSong}
                        // handlePause={handlePauseClick}
                        // onclick={()=>handlePlayClick(song)}
                        />
                    ))}
            </div>
        </>
    )




}

export default SongDetails;
