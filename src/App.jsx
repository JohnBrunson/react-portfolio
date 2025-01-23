import Nav from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav/>
      <Outlet />
    </div>
  )
}