import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import {
  CONFIDENTIAL_ROUTE,
  PHOTOS_ROUTE,
  UNIVERSITIES_ROUTE,
} from "../app/routing/config";
import Toggle from "./ui/Toggle";
import PrivateRoute from "../app/routing/PrivateRoute";
import { StyledProps } from "../pages/confidential";
import styled from "styled-components";

interface HeaderProps {
  isAuthenticated: boolean;
  handleAuthentication: () => void;
}

const HeaderWrapper = styled.div<StyledProps>`
  max-width: max-content;
  border-radius: 15px;
  padding: 10px;
  margin: 0 auto;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin-bottom: 20px;
`;

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  handleAuthentication,
}) => {
  return (
    <header className="header">
      <HeaderWrapper>
        <div>
          <Flex gap="middle" justify={"center"} align={"center"}>
            <Link to={PHOTOS_ROUTE}>
              <Button>Mars Rover Photos</Button>
            </Link>
            <Link to={UNIVERSITIES_ROUTE}>
              <Button>University</Button>
            </Link>
            <PrivateRoute
              path={CONFIDENTIAL_ROUTE}
              isAuthenticated={isAuthenticated}
            />
            <Toggle />
            <Button onClick={handleAuthentication}>
              {isAuthenticated ? "Выйти" : "Войти"}
            </Button>
          </Flex>
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
