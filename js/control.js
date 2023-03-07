"use strict";

function init(){
    $(document).ready( function() {
        $('#navegacio').load("public/html/layouts/navbar.html");

        $('#videos').load('public/html/layouts/llista.html', function() {
            $('#video1').attr('src','public/assets/videos/Aprenent anglès ballant.mp4#t=15');
            $('#enllaç1').attr('href','public/html/video.html?v=0');
            $('#video2').attr('src','public/assets/videos/Space Invaders.mp4#t=10');
            $('#enllaç2').attr('href','public/html/video.html?v=1');
            $('#video3').attr('src','public/assets/videos/treball per projectes.mp4#t=12');
            $('#enllaç3').attr('href','public/html/video.html?v=2');
        });
    });
}