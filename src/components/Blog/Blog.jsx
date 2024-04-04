import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
  console.log(blog);
  const { title, author, cover_img, author_img, posted_date, watch_time } =
    blog;
  return (
    <div className="w-full mb-12 space-y-3">
      <img className="w-full h-1/3" src={cover_img} alt="img not available" />

      <div className="flex justify-between items-center px-4">
        <div className="mt-2 flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full"
            src={author_img}
            alt="author image here"
          />
          <div>
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <h4 className="flex gap-1 items-center">
            {watch_time} min read <FaRegBookmark className="cursor-pointer" />
          </h4>
        </div>
      </div>
      <h2 className="ps-4 text-3xl font-semibold">{title}</h2>

    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
