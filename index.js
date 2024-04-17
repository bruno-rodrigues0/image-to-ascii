const imageToAscii = require('image-to-ascii');

let url = 'https://redeardente.com/wp-content/uploads/2023/07/quem-era-o-pai-do-tanjiro.webp';

imageToAscii(url, (err, image) => {
    console.log(err || image);
})

