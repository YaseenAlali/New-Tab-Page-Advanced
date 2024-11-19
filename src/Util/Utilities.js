const GetRandomImage = () => {
    const images = require("../Resources/Images.json").images;
    return images[Math.floor(Math.random() * images.length)]
}



export { GetRandomImage }