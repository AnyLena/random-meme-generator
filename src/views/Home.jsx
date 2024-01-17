import { Link } from "react-router-dom";

const Home = () => {
 

  return (
    <>
      
      <div className="own-img-container main-content">
        <h1 className="home">Welcome to the Meme Generator</h1>
        <p className="home">
          Unleash your creativity with our Meme Generator! Browse through a vast
          collection of popular meme templates, add your own hilarious captions,
          or upload your own image to create a unique meme. Whether you're a
          meme veteran or a newbie, our Meme Generator makes meme creation easy
          and fun. Start creating and sharing your memes now!
        </p>
        <button>
          <Link to="/browse-memes">Start Creating</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
