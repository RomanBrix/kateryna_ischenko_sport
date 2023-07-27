import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";

export default function NaviLayer() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <div className="devide-header">
                <Outlet />
            </div>
            {pathname !== "/contact" && <Contact />}

            <Footer />
        </>
    );
}
