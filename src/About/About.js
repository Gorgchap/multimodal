import React from "react";
import HomePage from "../HomePage/HomePage";

function About() {
  return <>
    <h2 className='text-center'>About</h2>
    <a href={<HomePage/>}>Link to home page</a>
  </>;
}
export default About;
