// module.exports = {
//   reactStrictMode: true,
// }
const withImages = require('next-images')
const withFonts = require('next-fonts');
module.exports = withImages(withFonts({
    env: {
        REACT_APP_BASE_URL: "https://itica.ca/api",
        REACT_APP_SITE_TOKEN: "6e6a90a95755444cbdee6d0df6929539",
        REACT_APP_IMAGE_URL: "https://itica.ca"

    },
    images: {
        disableStaticImages: true
    }
}))