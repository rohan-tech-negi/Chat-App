import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";
import Call from "../pages/dashboard/Call";
// import ResetPassword from "../sections/auth/ResetPassword";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout></MainLayout>,
      children: [
        {
          element : <LoginPage></LoginPage>, path: "login"
        },
        {
          element : <RegisterPage></RegisterPage>, path: "register"
        },
        {
          element: <ResetPassword></ResetPassword>, path: "reset-password"
        },
        {
          element: <NewPassword></NewPassword>, path: "new-password"
        }
      ]
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "group", element: <GroupPage /> },
        {path: "call", element: <Call></Call>},
        // settings
        {path: "settings", element: <Settings></Settings>},
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const LoginPage = Loadable(
  lazy(()=> import("../pages/auth/Login"))
)
const RegisterPage = Loadable(
  lazy(()=> import("../pages/auth/Register"))
)
const ResetPassword = Loadable(
  lazy(()=> import("../sections/auth/ResetPassword"))
)

const NewPassword = Loadable(
  lazy(()=> import("../sections/auth/NewPassword"))
)

const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);

const CallPage = Loadable(
  lazy(() => import("../pages/dashboard/Call")),
);

const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
