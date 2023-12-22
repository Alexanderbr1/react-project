import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <Link to={path}>
      <Button>Confidential</Button>
    </Link>
  ) : null;
};

export default PrivateRoute;
