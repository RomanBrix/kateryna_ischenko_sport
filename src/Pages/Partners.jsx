import PartnersIcons from "../Components/Partners/PartnersBrands";
import Photos from "../Components/Partners/Photos";

export default function PartnersPage() {
    return (
        <div className="partners-page page">
            <PartnersIcons renderPhotos={renderPhotos} />
            <Photos renderPhotos={renderPhotos} />
        </div>
    );

    function renderPhotos(imgArr, src) {
        return imgArr.map((item, index) => {
            return (
                <div className="img-holder" key={item + index}>
                    <img src={`${src}${item}`} alt="" />
                </div>
            );
        });
    }
}
