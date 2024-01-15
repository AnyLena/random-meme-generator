import Gallery from "../components/Gallery";

const Browse = ({memeNr,setMemeNr,data,}) => {


  return (
    <>
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
    </>
  );
};

export default Browse;
