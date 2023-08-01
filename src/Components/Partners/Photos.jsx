export default function Photos({ renderPhotos }) {
    const photos = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        // "mst.png",
        // "nike.png",
    ];
    const folderSrc = "/src/partners/";
    return (
        <div className="photos">
            <div className="content">
                <div className="container">
                    {renderPhotos(photos, folderSrc)}
                </div>
            </div>
        </div>
    );
}
