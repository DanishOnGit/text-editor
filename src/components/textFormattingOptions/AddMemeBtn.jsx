import axios from "axios";

export const AddMemeBtn = ({ editor }) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const searchMeme = async (keyword) => {
   
    try {
      const {
        data: { data },
      } = await axios({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=1`,
      });
      console.log(data[0])
      if (data) {
        // return data[0].images.fixed_width.webp
        return (`<img src=${data[0].images.fixed_width.webp} alt="meme"/>`)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const searchEditorContent = async () => {
    const editorContent = editor.getHTML();
    const regexPattern = /\{\{([A-Za-z]+)_meme\}\}/;
    const result = regexPattern.exec(editorContent);
    const newValue = await searchMeme(result[1]);
    
    if(newValue){
     let newContent = editorContent.replace(result[0],"");
     newContent+=newValue
     console.log(newContent)
      editor.commands.setContent(newContent);
      // editor.chain().focus().setImage({src:newValue}).run();
    }else{
      alert("No meme found. Try a different keyword!")
    }
  };

  return (
    <>
      <button
        className="btn-styling add-meme-btn"
        onClick={searchEditorContent}
      >
        <i class="fas fa-plus"></i> Meme
        <span className="tooltip-text">Add meme</span>
      </button>
    </>
  );
};
