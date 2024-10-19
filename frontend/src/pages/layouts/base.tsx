import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export function BaseLayout()
{

    return( 
        <div>
            <div className="bg-slate-400">
                <Header/>
            </div>

            <div>
                <Outlet/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )


}