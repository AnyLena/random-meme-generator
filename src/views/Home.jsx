import { useState } from "react";
import useDownload from "../hooks/useDownload";
import Nav from "../components/Nav";

const Home = ({ data, loading, memeNr, ownImg, setOwnImg, setMemeNr }) => {
  const [toptext, setToptext] = useState("One does not simply");
  const [bottomtext, setBottomtext] = useState("Create random memes");

  return (
    <>
    <Nav setOwnImg={setOwnImg} setMemeNr={setMemeNr}/>
      <h1>Meme Generator</h1>
      {loading && <div>Loading Meme ...</div>}
      {ownImg && (
        <div id="doemload-meme" className="meme-img">
          <img className="meme-img" src={ownImg} />
          <p className="meme-text meme-text--top">{toptext}</p>
          <p className="meme-text meme-text--bottom">{bottomtext}</p>
        </div>
      )}
      {!ownImg && data.length > 0 && (
        <>
          <div id="download-meme" className="meme-img">
            <img className="meme-img" src={data[memeNr].url} />
            <p className="meme-text meme-text--top">{toptext}</p>
            <p className="meme-text meme-text--bottom">{bottomtext}</p>
          </div>
        </>
      )}
      <h2>Write Some Text</h2>
      <form>
        <label htmlFor="meme-top">Top Text</label>
        <input
          type="text"
          id="meme-top"
          onChange={(e) => setToptext(e.target.value)}
        />
        <label htmlFor="meme-bottom">Bottom Text</label>
        <input
          type="text"
          id="meme-bottom"
          onChange={(e) => setBottomtext(e.target.value)}
        />
      </form>

      <button className="download-btn" onClick={() => useDownload('download-meme')}>Download Meme</button>
    </>
  );
};

export default Home;
