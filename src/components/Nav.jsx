import { NavLink } from "react-router-dom";


const Nav = ({setOwnImg,setMemeNr}) => {
    const handleResetOwn = () => {
        setOwnImg(null);
        setMemeNr(Math.floor(Math.random()*100));
      };
  return (
    <nav>
      <NavLink className="link" to="/" onClick={handleResetOwn}>
        Home
      </NavLink>
      <NavLink className="link" to="/browse-memes" onClick={handleResetOwn}>
        Browse all Memes
      </NavLink>
      <NavLink className="link" to="/own-memes">
        Create Your Own Meme
      </NavLink>
    </nav>
  );
};

export default Nav;
