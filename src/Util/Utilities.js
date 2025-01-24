const GetRandomImage = () => {
    const images = require("../Resources/Images.json").images;
    return images[Math.floor(Math.random() * images.length)]
}

const InitStyle = () => {
    const selectedImageLS = localStorage.getItem('selectedImageId');
    if (selectedImageLS) {
        const image = require("../Resources/Images.json").images.find(image => image.id == selectedImageLS);
        if (image) {
            return image;
        }
    }
    return GetRandomImage();
}


export { GetRandomImage, InitStyle }