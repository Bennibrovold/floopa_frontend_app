import { useStore } from "effector-react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { userModel } from "../entities/user";
import { Header } from "../features/header/ui/header";
import { LoginPage } from "./login";
import { RegistrationPage } from "./registration";
import { publicRoutes, privateRoutes } from "./routes";

export interface RouteProps {
  auth_page?: boolean;
  auth?: boolean;
  isAdmin?: boolean;
  path: string;
  element: React.ReactNode;
}

export const RouterCore = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {privateRoutes.map((route: RouteProps) => (
          <Route path={route.path} element={<PrivateRoute isPrivatePage />}>
            <Route path={route.path} element={route.element} key={route.path} />
          </Route>
        ))}
        <Route path="/auth" element={<AuthPage />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/registration" element={<RegistrationPage />} />
        </Route>
        {publicRoutes.map((route: RouteProps) => {
          return (
            <Route path={route.path} element={route.element} key={route.path} />
          );
        })}
      </Routes>
    </Router>
  );
};

export const RouteNavigate = () => {
  return <Navigate to="/" />;
};

const AuthPage = () => {
  const { $user, $loading } = userModel;
  const user = useStore($user);
  const loading = useStore($loading);

  if (loading) return null;

  if (!user.isAuth) {
    return <Outlet />;
  }
  return <RouteNavigate />;
};

interface PriavateRouteProps {
  isPrivatePage?: boolean;
  isAuthPage?: boolean;
}

const PrivateRoute = ({ isPrivatePage, isAuthPage }: PriavateRouteProps) => {
  const { $user, $loading } = userModel;
  const user = useStore($user);
  const loading = useStore($loading);

  if (loading) return null;

  if (!user.isAuth && isAuthPage) return <Outlet />;

  if (user.isAuth && isPrivatePage) {
    return <Outlet />;
  }

  return <RouteNavigate />;
};
