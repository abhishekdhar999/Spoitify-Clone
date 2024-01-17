import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
  // import { useNavigate } from 'react-router-dom';

// please review the playpause file and set Active song file 
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const SongCard = ({ song,isPlaying,activeSong,itemsArray,handlePause,handlePlay, i }) => {
  //  let navigate =  useNavigate();
// dispatch allows to add the chnages to the state
  const dispatch = useDispatch()
const handlePauseClick = (handlePause)=>{
  // handlePause;
  // dispatch(playPause(false))
}

const handlePlayClick = (handlePlay)=>{
// handlePlay;
// console.log("inplay")
window.location.href = song.external_urls.spotify
// navigate(song.external_urls.spotify)

// if(activeSong?.name === song.name){
//   console.log("same")
//   history.push(song.external_urls.spotify)
// }
  // dispatch(setActiveSong(`${song.external_urls.spotify,itemsArray,i}`))
  //  dispatch(playPause(true))
}
// if (!song || !song.artists || !song.images) {
//   return null; // You can return a loading indicator or handle the loading state
// }
// console.log(song)
 const externallink = song.external_urls.spotify
//  console.log(externallink);
  const itemsArrays = song.images;
  //  console.log(itemsArrays)

   const albumid = song.id
  // console.log(albumid)
  return(
  <>
  
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80  animate-slideup rounded-lg cursor-pointer">

      <div className="relative w-full h-56 group bg-black">
        {/* learn below line thoroughly */}
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-80 group-hover:flex ${activeSong?.title  === song.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>

          <PlayPause 
          isPlaying = {isPlaying}
          activeSong = {activeSong}
          itemsArray = {itemsArray}
          song = {song}
          handlePause = {handlePauseClick}
          handlePlay = {handlePlayClick}
          />
        </div>
        {song && song.images && song.images[0]&& (
         <img src={song.images[0].url} alt="song_img" /> 
        )}
      </div>

      <div className="mt-4 flex flex-col">
        
          <p className="front-semibold text-lg text-white truncate" >
            <a href={externallink}>{song.name}</a>
            {/* <Link to={`${(song.external_urls.spotify)}`}>{song.name}</Link> */}
          </p>

          <p className="front-semibold text-lg text-white truncate">
            <Link to={song.id ?` ${song.id}` :'unknown'}>{song.artists[0].name}</Link>
          </p>
      </div>
    </div>
  </>

  )
  }

export default SongCard;
