import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks , time }) => {
    console.log(bookmarks)
  return (
    <div className="md:w-1/3 px-4 ">
      <div className="text-2xl bg-green-200 mb-2 p-2">
        <p>you spend time: {time} minute</p>
      </div>
      <h2 className="text-2xl bg-green-400 p-2">Bookmarks blog: {bookmarks.length}</h2>
      <div className="border border-slate-800 mt-2">
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  time: PropTypes.number
};

export default Bookmarks;
