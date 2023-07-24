import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function NaviLayer() {
    return (
        <>
            <Header />
            <div className="devide-header">
                <Outlet />
            </div>
            <h1>Contact</h1>
            <h1>Footer</h1>
        </>
    );
}
