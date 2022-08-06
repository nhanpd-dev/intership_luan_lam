import { Outlet, Link } from "react-router-dom";
import HomeScreen from "./pageDemo/HomeScreen.demo";

const PublicLayout = () => {
  console.log("public layout");
  return (
    <div>
      <br></br>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/login">login</Link>
      <br></br>
      <Link to="/register">register</Link>
      <br></br>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
