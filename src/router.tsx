import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { CarsPage } from "./pages/CarsPage";

let router = createBrowserRouter([
   {
      path:'', element: <MainLayout/>,
      children: [
         {
            path: '/cars', element: <CarsPage/>
         }
      ]
   }
]);

export {router}