export const Guide = () => {
  return (
    <div className="guide-wrapper">
      <ul className="list-wrapper">
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add/remove <b>bold</b> style, click on{" "}
          <button className="btn btn-styling">B</button>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add/remove{" "}
          <b>
            <i>italic</i>
          </b>{" "}
          style, click on{" "}
          <button className=" btn btn-styling btn-italic"> I</button>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add/remove{" "}
          <b>
            <u>underlined</u>
          </b>{" "}
          style, click on{" "}
          <button className="btn btn-styling btn-underline"> U</button>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add a <b>hyperlink</b> , click on{" "}
          <button className=" btn btn-styling">
            <i class="fas fa-link"></i>
          </button>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To remove a <b> hyperlink</b>, click on{" "}
          <button className="btn btn-styling">
            <i class="fas fa-unlink"></i>
          </button>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add <b> image</b>, click on{" "}
          <button className="btn btn-styling">
            <i class="fas fa-image"></i>
          </button>{" "}
          and then enter your desired url.
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          To add <b>meme</b>, type{" "}
          <span>{`{{anykeyword_meme}}. Eg: {{cat_meme}}`}</span> and then click
          on{" "}
          <button className="btn btn-styling">
            <i class="fas fa-plus"></i> Meme
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};
