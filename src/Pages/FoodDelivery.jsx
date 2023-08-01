import IntroFoodDelivery from "../Components/FoodDelivery/IntroFoodDelivery";
import MenuItem from "../Components/FoodDelivery/MenuInfo";
import MenuPhotos from "../Components/FoodDelivery/Photos";
import Programs from "../Components/FoodDelivery/Programs";

export default function FoodDelivery() {
    return (
        <div className="food-delivery-page page">
            <IntroFoodDelivery />
            <Programs />
            <MenuItem />
            <MenuPhotos />
        </div>
    );
}
