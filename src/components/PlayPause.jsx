import{FaPauseCircle,FaPlayCircle} from 'react-icons/fa';
// import {useHistory} from 'react-router-dom'

const PlayPause = ({isPlaying,activeSong,song,handlePause,handlePlay}) => (
// const history = useHistory();


isPlaying && activeSong?.name === song.name ? (
  <FaPauseCircle 
  size={35}
  className='text-gray-300'
  onClick = {handlePause}/>
):(
  <FaPlayCircle
  size={35}
  className='text-gray-300'
  onClick = {handlePlay}/>
)
  
  
);

export default PlayPause;
