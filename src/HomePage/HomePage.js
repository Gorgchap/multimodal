import React from "react";
import About from "../About/About";

function HomePage() {
  return <>
    <h2 className='text-center'>Home Page</h2>
    <a href={<About/>}>Link to about page</a>
  </>;
}
export default HomePage;
