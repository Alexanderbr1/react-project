import { UNIVERSITIES_ROUTE, PHOTOS_ROUTE, CONFIDENTIAL_ROUTE } from './config';
import { useRoutes } from 'react-router-dom';
import University from '../../pages/university';
import Photos from '../../pages/photos';
import Confidential from '../../pages/confidential';


const MainRouter = () => {
    return useRoutes([
          { path: PHOTOS_ROUTE, element: <Photos />,},
          { path: UNIVERSITIES_ROUTE, element: <University /> },
          { path: CONFIDENTIAL_ROUTE, element: <Confidential /> },
        ]);
  }

export default MainRouter;