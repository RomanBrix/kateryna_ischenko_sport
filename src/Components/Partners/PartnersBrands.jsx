export default function PartnersIcons({ renderPhotos }) {
    // src = '/src/partners/brands'
    const brands = [
        "mst.png",
        "nike.png",
        "mst.png",
        "nike.png",
        "mst.png",
        "nike.png",
    ];
    const folderSrc = "/src/partners/brands/";
    return (
        <div className="partners-icons">
            <div className="content">
                <div className="head">
                    Партнери та <br />
                    brand collaboration
                </div>
                <div className="brands">{renderPhotos(brands, folderSrc)}</div>
            </div>
        </div>
    );
    // function renderBrands(brands) {
    //     return brands.map((item, index) => {
    //         return (
    //             <div className="img-holder" key={item + index}>
    //                 <img src={`${item}`} alt="" />
    //             </div>
    //         );
    //     });
    // }
}
