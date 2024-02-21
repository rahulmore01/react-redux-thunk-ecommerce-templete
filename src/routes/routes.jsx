

import React from "react";
import {createBrowserRouter} from 'react-router-dom'
import ProductsList from '../components/ProductsList.jsx'
import ProductDetails from '../components/ProductDetails.jsx'



export const routes = createBrowserRouter([
 
    {path:"/",element:<ProductsList/>},
    {path:"/product/:productId",element:<ProductDetails/>}

])
 

