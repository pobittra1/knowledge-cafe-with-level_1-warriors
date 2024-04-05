import PropTypes from "prop-types"

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className="m-2 p-2 bg-gray-400 mx-2 mt-2">
           <p>{bookmark.title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
  };
export default Bookmark;