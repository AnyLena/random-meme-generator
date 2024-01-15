import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './views/Home'
import Browse from './views/Browse'
import useFetch from './hooks/useFetch'
import Footer from './components/Footer'
import OwnMeme from './views/OwnMeme'

function App() {

  const { data, loading } = useFetch("https://api.imgflip.com/get_memes");
  const [memeNr,setMemeNr] =useState(0)
  const [ownImg, setOwnImg] = useState(null);
 
  return (
    <>
      <Home loading={loading} memeNr={memeNr} ownImg={ownImg} setMemeNr={setMemeNr} data={data} setOwnImg={setOwnImg} />
      <Routes>
        <Route path="/browse-memes" element={<Browse memeNr={memeNr} data={data} setMemeNr={setMemeNr}/>}/>
        <Route path="/own-memes" element={<OwnMeme setOwnImg={setOwnImg} ownImg={ownImg}/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
