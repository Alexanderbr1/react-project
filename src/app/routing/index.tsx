import { UNIVERSITIES_ROUTE, PHOTOS_ROUTE, FORM_ROUTE } from "./config";
import { useRoutes } from "react-router-dom";
import University from "../../pages/university";
import Photos from "../../pages/photos";
import Form from "../../pages/confidential";

const MainRouter = () => {
  return useRoutes([
    { path: PHOTOS_ROUTE, element: <Photos /> },
    { path: UNIVERSITIES_ROUTE, element: <University /> },
    { path: FORM_ROUTE, element: <Form /> },
  ]);
};

export default MainRouter;
