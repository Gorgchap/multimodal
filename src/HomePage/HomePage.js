import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

function HomePage() {
  return <>
    <NavBar />
    <div class="row" style={{marginRight: 0}}>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
        <SideBar />
      </div>
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
        <h2 className="text-center">Home page</h2>
      </div>
    </div>
  </>
}
export default HomePage;
