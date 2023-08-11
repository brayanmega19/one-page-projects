import scrollTopButton from "./scroll.js";
import webCam from "./webcam.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    scrollTopButton(".scroll-top-button");
    webCam("webcam", ".stop");
});