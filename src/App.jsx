import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    console.log(blog)
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <div className="md:flex mt-4 justify-between">
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
