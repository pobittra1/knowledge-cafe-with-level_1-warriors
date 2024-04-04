import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 w-full">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmarks: PropTypes.func,
};

export default Blogs;
