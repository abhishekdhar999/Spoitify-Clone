import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
// import { useQuery } from '@apollo/client';
import { useGetNewReleasesQuery } from "../redux/Services/spotify";
import { useDispatch , useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
 import SongDetails from "./SongDetails";
import { useParams } from "react-router-dom";
const Discover = () => {

    // use selector is used to select any one functionality we want to select and work on them
    const dispatch = useDispatch();
    const {activeSong,isPlaying} = useSelector((state)=>state.player);
    const {ids} = useParams();
    // console.log(ids)

     const {data,isFetching,error} = useGetNewReleasesQuery("3IBcauSj5M2A6lTeffJzdv");
    const genreTitle = 'pop';

    if(isFetching)return <Loader title="loding songs..."/>

    if(error){
        return <Error/>
    }
    //    console.log(data)
     const itemsArray = data.albums
    //  console.log(itemsArray)
    // const songid = ite 
        //    console.log(itemsArray[0].id);
    return (
        <>

         /* <SongDetails />  */
            <div className="flex flex-col">
                <div className="w-full flex  justify-center items-center sm:flex-row flex-col mt-4 mb-10 px-2 ">
                    <h2 className="font-bold text-3xl text-white text-left ">Discover {genreTitle}</h2>
                    <select className="mx-3 bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                        onChange={() => { }}
                        value=""
                    >
                        {genres.map((genre) => <option key={genre.value} value={genre.value}> {genre.title}</option>)}
                    </select>
                </div>

                <div className="flex flex-wrap sm:justify-center justify-center gap-8">
                        {itemsArray?.map((song,i)=>(
                            // console.log(song);

                            <SongCard
                            key={song.key}
                            song={song}
                            isPlaying = {isPlaying}
                            activeSong = {activeSong}
                            itemsArray = {itemsArray}
                             i = {i}
                            //  handlePause = {handlePauseClick}
                            //     handlePlay = {handlePlayClick}
                            />
                        )       )}
                </div>
            </div>
        </>
    )
}

export default Discover;
