import { Route, Routes } from "react-router-dom";
import Intro from "./Pages/Intro";
import NaviLayer from "./Components/Layouts/NaviLayer";
import ContactPage from "./Pages/Contact";
import TrainingPage from "./Pages/Training";
import PartnersPage from "./Pages/Partners";
import Nutrition from "./Pages/Nutrition";
import CalcProducts from "./Pages/CalcProducts";
import FoodDelivery from "./Pages/FoodDelivery";

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
                    <Route path={"nutrition"} element={<Nutrition />} />
                    <Route path={"calc-products"} element={<CalcProducts />} />
                    <Route path={"food-delivery"} element={<FoodDelivery />} />
                    <Route path={"contact"} element={<ContactPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
