import { useState } from "react";

const OwnMeme = ({ setOwnImg }) => {
  const [imgTemp, setImgTemp] = useState(null);
  const [downloadBtn, setDownloadBtn] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImgTemp(url);
  };

  const handleClick = () => {
    setOwnImg(imgTemp);
    setImgTemp(null);
    setDownloadBtn(true);
  };

  return (
    <>
      <h2 id="own-input">Upload Own Meme Picture</h2>
      <div className="own-img-container">
        {!downloadBtn && (
          <input type="file" id="input" onChange={handleFileChange} />
        )}
        {imgTemp && <img src={imgTemp} alt="Your Own Image" width="200px" />}
        {imgTemp && <button onClick={handleClick}>Add Image</button>}
      </div>
    </>
  );
};

export default OwnMeme;
