import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import TableProduct from "./TableProduct";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Outlet />
      <TableProduct/>
    </div>
  );
}
