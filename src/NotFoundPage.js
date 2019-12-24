import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function NotFoundPage() {
  return <>
    <NavBar />
    <div class="row" style={{marginRight: 0}}>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2" style={{paddingRight: 0}}>
        <SideBar />
      </div>
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10 content">
        <h2 className='text-center'>Error 404</h2>
      </div>
    </div>
  </>
}
export default NotFoundPage;
