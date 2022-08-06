import { Link, Outlet } from "react-router-dom";
import Account from "./pageDemo/Acount.demo";

const PrivateLayout = () => {
  console.log("private layout");
  return (
    <div>
      <br></br>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
export default PrivateLayout;
