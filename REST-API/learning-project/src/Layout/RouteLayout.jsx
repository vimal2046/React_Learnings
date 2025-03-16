import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"



const RouteLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RouteLayout