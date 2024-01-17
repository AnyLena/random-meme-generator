import { useState } from "react";
import MemeCreator from "../components/MemeCreator";
import useDownload from "../hooks/useDownload";

const OwnMeme = ({ setOwnImg, ownImg }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setOwnImg(url);
  };

  const handleReset =() => {
    setOwnImg(null)
  }

  const handleDownload = () => {
    useDownload('own-meme-download');
  };

  return (
    <>
      {!ownImg && <><h1>Meme Generator</h1><h2 id="own-input">Upload a Picture to Start Creating a Meme</h2></>}
      {ownImg && (
       <MemeCreator data={ownImg} divId="own-meme-download"/>
      )}
      <div className="own-img-container">
        {!ownImg && (
          <input type="file" id="input" onChange={handleFileChange} />
        )}
        {ownImg && <button className="download-btn" onClick={handleReset}>Reset Picture</button>}
     { ownImg && <button className="download-btn" onClick={handleDownload}>Download Meme</button>}
      </div>
    </>
  );
};

export default OwnMeme;
