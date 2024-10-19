import { createBrowserRouter } from "react-router-dom"; 
import { BaseLayout } from "./pages/layouts/base";
import { HomePage } from "./pages/app/home";
import { AboutPage } from "./pages/app/about";
import { ProductsPage } from "./pages/app/products";
import { CartPage } from "./pages/app/cart";
import { ConstructionPage } from "./components/constructpage";

export const router = createBrowserRouter([ // criar as rotas
    {
        path:"/", /// cria oa url princial
        element:<BaseLayout/>,
        errorElement:<ConstructionPage/>,
        children:
        [
            {
                path:"",// aqui ele vai chamar o componente/ fucção criada na home page, como ela é a primeira pois esta com o caminho vazio igual a barra em cima.
                element:<HomePage/>    
            },
            {
                path:"about",
                element:<AboutPage/>

            },

            {
                path:"products",
                element:<ProductsPage/>
            },

            {
                path:"cart",
                element:<CartPage/>
            }



       ]
    }
])