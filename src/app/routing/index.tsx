import {UNIVERSITIES_ROUTE, PHOTOS_ROUTE, FORM_ROUTE, PDF_ROUTE} from "./config";
import { useRoutes } from "react-router-dom";
import University from "../../pages/university";
import Photos from "../../pages/photos";
import Form from "../../pages/confidential";
import PdfGenerator from "../../pages/pdf";

const MainRouter = () => {
  return useRoutes([
    { path: PHOTOS_ROUTE, element: <Photos /> },
    { path: UNIVERSITIES_ROUTE, element: <University /> },
    { path: FORM_ROUTE, element: <Form /> },
    { path: PDF_ROUTE, element: <PdfGenerator />}
  ]);
};

export default MainRouter;
