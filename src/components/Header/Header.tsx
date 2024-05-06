import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import {
  FORM_ROUTE, PDF_ROUTE,
  PHOTOS_ROUTE,
  UNIVERSITIES_ROUTE,
} from "../../app/routing/config.ts";
import Toggle from "../ui/Toggle.tsx";
import PrivateRoute from "../../app/routing/PrivateRoute.tsx";
import styled from "styled-components";

interface HeaderProps {
  isAuthenticated: boolean;
  handleAuthentication: () => void;
}

const HeaderWrapper = styled.div`
  max-width: max-content;
  border-radius: 15px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0 0 0 1px;
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
            <Link to={PDF_ROUTE}>
              <Button>Pdf Generator</Button>
            </Link>
            <Link to={PHOTOS_ROUTE}>
              <Button>Mars Rover Photos</Button>
            </Link>
            <Link to={UNIVERSITIES_ROUTE}>
              <Button>University</Button>
            </Link>
            <PrivateRoute
              path={FORM_ROUTE}
              name={"Form"}
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
