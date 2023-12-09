import { Link } from 'react-router-dom';
import { UNIVERSITIES_ROUTE, PHOTOS_ROUTE, CONFIDENTIAL_ROUTE } from './app/routing/config';
import MainRouter from './app/routing';
import { Button, Flex } from 'antd';
import { useState } from 'react';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(prevState => !prevState);
  };

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Flex gap="middle" justify={'center'} align={'center'}>
            <Link to={ PHOTOS_ROUTE }><Button>Mars Rover Photos</Button></Link>
            <Link to={ UNIVERSITIES_ROUTE }><Button>University</Button></Link>
            {isAuthenticated && (
              <Link to={CONFIDENTIAL_ROUTE}><Button>Confidential</Button></Link>
            )}
            <Button onClick={handleAuthentication}>{isAuthenticated ? 'Выйти' : 'Войти'}</Button>
          </Flex>
        </div>
      </header>
      <MainRouter/>
    </>
  )
}

export default App;