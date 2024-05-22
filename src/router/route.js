import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout";
import HomePage from '../Pages/HomePage'
import WareHouse from '../components/WareHouse'

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/warehouse',
                element: <WareHouse/>,
            }
        ]
    },
]);

export default route;
