import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header >
                <Nav />
            </Header>

            <Outlet />

            <Footer descripcion="DV | To_Do APP" />

        </>
    )
}

export default MainLayout