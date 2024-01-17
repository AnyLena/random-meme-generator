const Gallery = ({data,setMemeNr,memeNr}) => {
    return ( <>
    <h2>Click to Choose a Meme from the Gallery</h2>
    {data.length < 1 && <div>Loading Gallery ...</div>}
    {data.length > 0 && data.map( (meme,index) => (
        <img key={meme.id} className={(memeNr === index) ? "gallery-img this-meme" : "gallery-img"} src={meme.url} onClick={() => setMemeNr(index)}/>
    ))}
    </> );
}
 
export default Gallery;