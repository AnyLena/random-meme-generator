import { useState } from "react";

const MemeCreator = ({ data, memeNr, loading, divId }) => {
    console.log(divId)
  const [toptext, setToptext] = useState("One does not simply");
  const [bottomtext, setBottomtext] = useState("Create random memes");
  return (
    <>
     <h1>Meme Generator</h1>
      {loading && <div>Loading Meme ...</div>}
      <div id={divId} className="meme-img">
        {Array.isArray(data) ? <img className="meme-img" src={data[memeNr].url} /> : <img className="meme-img" src={data} />}
        <p className="meme-text meme-text--top">{toptext}</p>
        <p className="meme-text meme-text--bottom">{bottomtext}</p>
      </div>

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
    </>
  );
};

export default MemeCreator;
