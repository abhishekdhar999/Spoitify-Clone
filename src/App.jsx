import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import ExternalLinkHnadler from './components/ExtenalLinkHnadler';
// import {id} from TopPlay;
const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  // const { data } = useGetNewReleasesQuery();
  // const itemsArray = data.albums.items
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/album/" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              {/* <Route path='/' element={<ExternalLinkHnadler/>}/> */}
              {/* <Route path="/spotify/:url" > 
                      
                       {({match})=>{
                        console.log("in")
                        console.log(match.params.url)
                      const externalUrl = decodedURIComponent(match.params.url);
                      return(
                      <a href={externalUrl} target='blank' rel='noopener no referrer'> click here to open spotify</a>
                      // window.location.href = externalUrl;
                      );
                       }}

              </Route> */}
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay 
              
            />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
