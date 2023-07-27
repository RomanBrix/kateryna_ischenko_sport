import { Route, Routes } from "react-router-dom";
import Intro from "./Pages/Intro";
import NaviLayer from "./Components/Layouts/NaviLayer";
import ContactPage from "./Pages/Contact";
import TrainingPage from "./Pages/Training";
import PartnersPage from "./Pages/Partners";

function App() {
    const language = "ua";
    const fontTheme = language === "ua" ? "fixel" : "syne";
    return (
        <div className={fontTheme}>
            <Routes>
                <Route element={<NaviLayer />}>
                    <Route index element={<Intro />} />
                    <Route path={"training"} element={<TrainingPage />} />
                    <Route path={"partners"} element={<PartnersPage />} />
                    <Route path={"contact"} element={<ContactPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
