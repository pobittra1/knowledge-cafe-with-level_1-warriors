import PropTypes from "prop-types"

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div>
           <p>{bookmark.title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
  };
export default Bookmark;