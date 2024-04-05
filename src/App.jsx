import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [time ,setTime] = useState(0);



  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }

const handleTime = readingTime =>{
  const newTime = time + readingTime;
  setTime(newTime);
}

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <div className="md:flex mt-4 justify-between">
          <Blogs handleBookmarks={handleBookmarks}
          handleTime={handleTime}></Blogs>
          <Bookmarks bookmarks={bookmarks}
          time={time}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
