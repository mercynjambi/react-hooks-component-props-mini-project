import React from "react";
import Header from "../components/Header";
import blogData from "../data/blog";
import About from "../components/About";
import Article from "../components/Article";
import ArticleList from "../components/ArticleList";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* <p>hey</p> */}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      {/* <Article/> */}
    </div>
  );
}

export default App;
