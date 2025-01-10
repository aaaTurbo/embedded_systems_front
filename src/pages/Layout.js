import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Ender from "../components/Ender";

export default function Layout() {
    return (<>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Ender/>
    </>);
}