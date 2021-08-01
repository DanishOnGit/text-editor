export const Guide = () => {
  return (
    <div className="guide-wrapper">
      <ul className="list-wrapper">
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            {" "}
            To add/remove <b>bold</b> style, click on{" "}
            <button className="btn btn-styling">B</button>
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            To add/remove{" "}
            <b>
              <i>italic</i>
            </b>{" "}
            style, click on {" "}
            <button className=" btn btn-styling btn-italic"> I</button>
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            {" "}
            To add/remove{" "}
            <b>
              <u>underlined</u>
            </b>{" "}
            style, click on{" "}
            <button className="btn btn-styling btn-underline"> U</button>
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            To add a <b>hyperlink</b> , click on{" "}
            <button className=" btn btn-styling">
              <i class="fas fa-link"></i>
            </button>
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            {" "}
            To remove a <b> hyperlink</b>, click on{" "}
            <button className="btn btn-styling">
              <i class="fas fa-unlink"></i>
            </button>
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            {" "}
            To add <b> image</b>, click on{" "}
            <button className="btn btn-styling">
              <i class="fas fa-image"></i>
            </button>{" "}
            and then enter your desired url.
          </span>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>{" "}
          <span>
            {" "}
            To add <b>meme</b>, type{" "}
            <span>{`{{anykeyword_meme}}. Eg: {{cat_meme}}`}</span> and then
            click on{" "}
            <button className="btn btn-styling">
              <i class="fas fa-plus"></i> Meme
            </button>{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};
