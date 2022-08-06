import PrivateLayout from "./PrivateLayout";
import RequiredAuth from "./RequiredAuth";
import DashboardScreen from "../../modules/dashboard/dashboard.screen";
import NotFoundScreen from "../../modules/notFound/notFound.screen";
import HomeScreen from "./pageDemo/HomeScreen.demo";
import Profile from "./pageDemo/Profile.demo";

const _privateRoutes = [
  {
    element: (
      <RequiredAuth>
        <PrivateLayout />
      </RequiredAuth>
    ),
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "/dashboard", element: <DashboardScreen /> },
      { path: "/profile", element: <Profile /> },
      { element: <NotFoundScreen />, path: "*" },
    ],
  },
];

export default _privateRoutes;
