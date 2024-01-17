import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetNewReleasesQuery } from "../redux/Services/spotify";
import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  
  
 
    <>
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="fot-bold text-base mr-3 text-white">{i + 1}</h3>

    <div className="flex1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg " src={song?.images[0].url} alt={song.name} />

      <div className="flex-1 flex flex-col justify-center mx-4">
        {/* <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.name}</p>
        </Link> */}
          <a className="text-xl font-bold text-white" href={song.external_urls.spotify}>{song.name}</a>
        <Link to={`/songs/${song.key}`}>
          <p className="text-ase text-gray-300 mt-1">{song.artists[0].name}</p>
        </Link>
      </div>


    </div>
    <div className="">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        id = {song.id}
         onClick = {()=>handlePlayClick(song)}
        // handlePlay={handlePlayClick(song)}

      />
    </div>

  </div>
  </>
  )


const TopPlay = () => {
  const dispatch = useDispatch();
  const { data } = useGetNewReleasesQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const divRef = useRef(null);
  // useEffect(() => {
  //   divRef.current.scrollIntoView({ behavior: 'smooth' })
  // })

  const handlePauseClick = () => {
    // dispatch(playPause(false))
     window.location.href = song.external_urls.spotify
  }

  if (!data || !data.albums || !data.albums.items) {
    return null; // You can return a loading indicator or handle the loading state
  }
  //  console.log(data.albums.items)
  // useEffect(()=>{
  //   if(data && data.albums){
  //     const itemsArray = data.albums.items;
  //   }
  // },[data])

  // {
    // data.albums.items.map((song, i) => (
    //   console.log(song.id)
    // ))
  const items  = data.albums.items
  // console.log("in")
  // console.log(items);

  const itemsArray = data.albums.items.slice(0, 5)
  // console.log(itemsArray)\
  // console.log(song.artists.external_urls.spotify)
  const handlePlayClick = (song) => {
    // dispatch(setActiveSong(`${song.external_urls.spotify, itemsArray, i}`))
    // dispatch(playPause(true))
    
     window.location.href = song.artists[0].external_urls.spotify
  }
  return (
    <>

      <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col  ">
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold">Top Charts</h2>
            <Link to="/top-charts">
              <p className="text-gray-300 text-base cursor-pointer">see more</p>
            </Link>
          </div>


          <div className="mt-4 flex flex-col gap-1">
            {itemsArray?.map((song, i) => (
              <TopChartCard
                key={song.id}
                // artist = {song.artist}
                song={song}
                i={i}
                 id={song.id}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePause={handlePauseClick}
                // handlePlay={handlePlayClick}
                onClick={()=>handlePlayClick(song)}
              />
            ))}
          </div>
        </div>


        <div className="w-full flex flex-col mt-8">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-white font-bold">Top Artists</h2>
              <Link to="/top-artists">
                <p className="text-gray-300 text-base cursor-pointer">see more</p>
              </Link>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode
              centeredSlides
              centeredSlidesBounds
              modules={[FreeMode]}
              className="mt-4"
            >
              {itemsArray?.map((song, i) => (
                <SwiperSlide

                  key={i}
                  style={{ width: '25%', height: "auto" }}
                  className="shadow-lg rounded-full animate-slideright"
                >
                  <Link to={`/artists/${itemsArray[i].artists[0].external_urls.spotify}`}>

                    <img src={itemsArray[i]?.images[0].url} alt="name"
                      className="rounded-full w-full object-cover" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </>

  )

};

export default TopPlay;
