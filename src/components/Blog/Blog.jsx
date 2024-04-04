import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
   const {title , author , cover_img , author_img} = blog;
    return (
        <div>
            <img src={cover_img} alt="img not available" />
            <h1>{author}</h1>
            <h2>{title}</h2>
            <img src={author_img} alt={`this image of ${author}`}/>
        </div>
    );
};
Blog.PropTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;