
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RouteLayout from "./Layout/RouteLayout";
import Login from "./pages/Login";
import ContactLayout from "./Layout/ContactLayout";
import Info from "./Components/Info";
import Form from "./Components/Form";
import UserLayout from "./Layout/UserLayout";
import Users from "./pages/Users";
import { userLoader } from "./utils/userloader";
import User from "./Layout/User";


const App = ()=>{
const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<RouteLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact-us" element={<ContactLayout/>}>
            <Route path="info" element={<Info/>} />
            <Route path="form" element={<Form/>} />
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="users" element={<UserLayout/>}>
         <Route index element={<Users/>} loader={userLoader}/>
         <Route path=":id" element={<User/>}/>
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Route>
  )
)

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;
