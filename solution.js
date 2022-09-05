// Required libraries
const fs = require('fs');
const canvas = require('canvas');
const ET = require('elementtree');
// Get file names from image/xml directory
var files = fs.readdirSync('Programming-Assignment-Data');
let xml_names = files.filter((value) => value.includes('.xml'));
let png_names = files.filter((value) => value.includes('.png'));
// Iterate every xml file
for (let i = 0; i < xml_names.length; i++) {
    // Create a tree from the xml file
    let tree = ET.parse(fs.readFileSync('Programming-Assignment-Data/' + xml_names[i], { 'encoding': 'utf8' }));
    // Make a function with the collection of leaves for the associated file stored
    let loaded_func = function (leafs, img) {
        // Create a canvas to draw the screenshot on
        let canva = canvas.createCanvas(img.width, img.height);
        let ctx = canva.getContext('2d');
        // Draw the initial screenshot
        ctx.drawImage(img, 0, 0);
        // Add some extra stroke properties
        ctx.strokeStyle = '#FFFF00';
        ctx.globalAlpha = 0.7;
        ctx.lineWidth = 10;
        // Draw the yellow rectangles on the canvas
        for (let i = 0; i < leafs.length; i++) {
            let bounds = leafs[i].get('bounds').match(/(\d+)/g);
            console.log(bounds);
            ctx.strokeRect(bounds[0], bounds[1], bounds[2] - bounds[0], bounds[3] - bounds[1]);
        }
        const output_stream = fs.createWriteStream(png_names[i]);
        canva.createPNGStream().pipe(output_stream);
    }.bind(null, tree.findall('.//*').filter((value) => value.find('.//*') === null))
    canvas.loadImage('Programming-Assignment-Data/' + png_names[i]).then(loaded_func);
}