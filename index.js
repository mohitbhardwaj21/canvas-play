//This function gets called at the load of the page
let populateImageTags = () => {
    // Declaring Image Url
    let url1 = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg';
    let url2 = 'https://www.stockvault.net/data/2020/01/25/272807/thumb16.jpg';

    // Assiging img Url to the respective img tag
    document.getElementById('image1').setAttribute('src', url1);
    document.getElementById('image2').setAttribute('src', url2);

    //setting height and width of the images
    document.getElementById('image1').setAttribute('height', '368px');
    document.getElementById('image1').setAttribute('width', '368px');
    document.getElementById('image2').setAttribute('height', '368px');
    document.getElementById('image2').setAttribute('width', '368px');
}

// this function gets called on click of button
let overlap = () => {
    // Getting the image elements
    let img1 = document.getElementById('image1');
    let img2 = document.getElementById('image2');

    // Getting the canvas reference
    let canv = document.getElementById('canvas');
    // Creating 2d context to draw canvas on
    let context = canv.getContext('2d');
    // Specifying which Element to draw at what axis and what will be its dimensions 
    context.drawImage(img1, 0, 0, 300, 300);
    // Setting opacity for second element to be placed
    context.globalAlpha = 0.9;
    // Specifying which Element to draw at what axis and what will be its dimensions 
    context.drawImage(img2, 100, 100, 100, 100);
}