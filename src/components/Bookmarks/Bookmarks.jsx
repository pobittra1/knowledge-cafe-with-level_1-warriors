import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks)
  return (
    <div className="md:w-1/3">
      <h2>Bookmarks blog: {bookmarks.length}</h2>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
