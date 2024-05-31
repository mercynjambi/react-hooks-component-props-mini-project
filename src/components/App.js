import React from "react";
import Header from "../components/Header";
import blogData from "../data/blog";
import About from "../components/About";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* <p>hey</p> */}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
    </div>
  );
}

export default App;
