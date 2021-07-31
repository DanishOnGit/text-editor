import axios from "axios";

export const AddMemeBtn = ({ editor }) => {

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const addMeme = async () => {
    try {
      const { data:{data} } = await axios({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=dog&limit=1`,
      });
     
      editor.chain().setImage({ src:data[0].images.fixed_width.webp}).focus().run();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn-styling add-meme-btn" onClick={addMeme}>
        Add Meme
      </button>
    </>
  );
};
