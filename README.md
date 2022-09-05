# CSCI 435 Assignment 1

## Libraries used (present in repository)

- ElementTree
- Node-Canvas

## Running the program

`node solution.js`

Requires node.js version 14.11.0 or greater

Requires unmodified directory structure
(all png and xml files in directory named `Programming-Assignment-Data`)

## Basic description of solution

1. Starts by grabbing names of XML and PNG files
2. Goes through each XML file and makes a tree out of it
3. Gets the leaf nodes from the tree and passes them to a callback function
4. Loads the associated screenshot and uses it in the callback function
5. Creates a canvas element based on the size of the XML file's associated screenshot
6. Draws the screenshot to the canvas
7. Using the list of leaf nodes, finds the bounds of the leaf elements
8. Uses those bounds to draw semi-transparent rectangles on the canvas
9. Converts the canvas to a writestream and uses the stream to generate a new png file

## Design Explanations

Q: Usage of canvas for drawing on screenshots?

A: Node.js has no native support for image manipulation

Q: Why use node.js?

A: Most familiar language to me

Q: Usage of ElementTree for XML parsing?

A: Started this project in python with ET, decided to switch over, found a JS version of the library
