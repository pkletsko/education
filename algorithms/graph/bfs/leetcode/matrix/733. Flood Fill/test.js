import {floodFill} from "./alg.js";


const image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;
console.log(floodFill(image, sr,sc,color));
