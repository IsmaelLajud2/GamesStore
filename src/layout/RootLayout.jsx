import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar1 from "../components/Navbar1";
import Footerv1 from "../components/Footerv1";


const RootLayout = () => {
  return (
    <div>
        <Navbar1></Navbar1>
        <main>
            <Outlet>

            </Outlet>
        </main>
        <Footerv1></Footerv1>
    </div>
  )
}

export default RootLayout