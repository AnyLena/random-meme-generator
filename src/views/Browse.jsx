import Gallery from "../components/Gallery";
import MemeCreator from "../components/MemeCreator";
import useDownload from "../hooks/useDownload";

const Browse = ({memeNr,setMemeNr,data,loading}) => {

  
  const handleDownload = () => {
    useDownload('random-meme-download');
  };


  return (
    <div>
    {data.length > 0 && <MemeCreator data={data} memeNr={memeNr} loading={loading} divId="random-meme-download"/>}
    <button className="download-btn" onClick={handleDownload}>Download Meme</button>
      <h2>Browse Memes</h2>
      {memeNr !== 0 && (
        <button
          className="browse-btn"
          onClick={() => setMemeNr((prev) => prev - 1)}
        >
          {`<`} Previous Meme
        </button>
      )}
      {memeNr < data.length - 1 && (
        <button
          className="browse-btn"
          onClick={() => setMemeNr((prev) => prev + 1)}
        >
          Next Meme{` >`}
        </button>
      )}{" "}
      <br />
      <h2>Generate Random Meme</h2>
      <button
        className="browse-btn"
        onClick={() => setMemeNr(Math.floor(Math.random() * data.length))}
      >
        Random Meme
      </button>
      <Gallery data={data} setMemeNr={setMemeNr} memeNr={memeNr} />
    </div>
  );
};

export default Browse;
