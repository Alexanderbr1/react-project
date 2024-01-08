import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  isAuthenticated: boolean;
  name: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  isAuthenticated,
  name,
}) => {
  return isAuthenticated ? (
    <Link to={path}>
      <Button>{name}</Button>
    </Link>
  ) : null;
};

export default PrivateRoute;
