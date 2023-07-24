import { Route, Routes } from "react-router-dom";
import Intro from "./Pages/Intro";
import NaviLayer from "./Components/Layouts/NaviLayer";

function App() {
    const language = "ua";
    const fontTheme = language === "ua" ? "fixel" : "syne";
    return (
        <div className={fontTheme}>
            <Routes>
                <Route element={<NaviLayer />}>
                    <Route index element={<Intro />} />
                    <Route path={"page"} element={<h1>Page</h1>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
