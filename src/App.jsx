import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './views/Home'
import Browse from './views/Browse'
import useFetch from './hooks/useFetch'
import Footer from './components/Footer'
import OwnMeme from './views/OwnMeme'
import Nav from './components/Nav'

function App() {

  const { data, loading } = useFetch("https://api.imgflip.com/get_memes");
  const [memeNr,setMemeNr] = useState(0)
  const [ownImg, setOwnImg] = useState(null);

  return (
    <>
    <Nav setOwnImg={setOwnImg} setMemeNr={setMemeNr}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-memes" element={<Browse memeNr={memeNr} data={data} setMemeNr={setMemeNr} loading={loading}/>}/>
        <Route path="/own-memes" element={<OwnMeme setOwnImg={setOwnImg} ownImg={ownImg}/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
