import axios from "axios";

export const AddMemeBtn = ({ editor }) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const searchMeme = async (keyword) => {
    //we pass the keyword as query to the api
    try {
      const {
        data: { data },
      } = await axios({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=1`,
      });

      if (data) {
        return `<img src=${data[0].images.fixed_width.webp} alt="meme"/>`;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAndAddMemeInEditorContent = async () => {
    //here we get the html as string from editor content
    const editorContent = editor.getHTML();
    const regexPattern = /\{\{([A-Za-z]+)_meme\}\}/;
    //here result will be array and we get the subgroup at array[1]
    const result = regexPattern.exec(editorContent);
    const imageElement = await searchMeme(result[1]);

    if (imageElement) {
      //now we replace the regex pattern with "" in the editor content
      let newContent = editorContent.replace(result[0], "");
      newContent += imageElement;
      //and here we update the editor content
      editor.commands.setContent(newContent);
    } else {
      alert("No meme found. Try a different keyword!");
    }
  };

  return (
    <>
      <button
        className="btn-styling add-meme-btn"
        onClick={getAndAddMemeInEditorContent}
      >
        <i class="fas fa-plus"></i> Meme
        <span className="tooltip-text">Add meme</span>
      </button>
    </>
  );
};
