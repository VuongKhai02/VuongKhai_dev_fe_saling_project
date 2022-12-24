

import {
    createBrowserRouter,
  } from 'react-router-dom';
import App from '../App';
import Blog from '../component/blog/blog';
import Index from '../component/index';
import Login from '../component/login/login';
import PayingItem from '../component/paying/payingItem';
import PayingList from '../component/paying/payingList';
import Fruit_Detail from '../component/product_detail/fruit_detail';
export const routers = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      children:[
        {
            path:"/",
            element: <Index />
        },
        
        {
            path:"/blog",
            element: <Blog />
        },
        
        {
          path:"/fruitDetails/:id",
          element: <Fruit_Detail />
        },
        {
          path:"/paying",
          element: <PayingList />,
          children: [
            {
              path:"/paying/item",
              element: <PayingItem />
          },
          ]
        },
        // {
          
        //   path:"/product/:name/:id",
        //   element: <ProductDetail />
        // }
      ]
    },
    
    {
      
      path:"/login",
      element: <Login />,
    }

  ])
