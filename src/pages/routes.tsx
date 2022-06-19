import { Navigate } from "react-router-dom";
import { ProfilePage } from "./profile";
import { RouteProps } from "./router";

export const SomePrivate = () => <div>Private page</div>;

export const privateRoutes: RouteProps[] = [
  { path: "/private", element: <SomePrivate /> },
];
export const publicRoutes: RouteProps[] = [
  { path: "/", element: <Navigate to="/auth/login" /> },
  { path: "/profile", element: <ProfilePage /> },
];
