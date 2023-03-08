"use strict";
function init(){
    $(document).ready( function() {
        $('#navegacio').load('layouts/navbar.html', function() {
            $('#logo').attr('src', '../assets/img/IAM_CAT_logos_transparent_rgb_2.png');
            $('#enllaç-home').attr('href', '../../');
        
            $("#enllaç_pral").attr("href", '../../');
            $("#enllaç_video").attr("href", './video.html');   

            $("#enllaç_pral").removeClass("active");
            $("#enllaç_pral").removeAttr("aria-current");
            
            $("#enllaç_video").addClass("active");
            $("#enllaç_video").attr("aria-current", "pagina actual");
        });

        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        
        let value = params.v;

        if (parseInt(value) >= 0 && parseInt(value) <= 2) {
            loadVideo(value);
        } else {
            loadLlista();
        }
    });
}

function loadVideo(value){
    $('#videos').load('layouts/video.html', function() {
        switch (parseInt(value)) {
            case 0:
                $('#titol').html('Aprenent anglès ballant');
                $('#video').attr('src', '../assets/videos/Aprenent anglès ballant.mp4');
                $('#video').attr('title', 'Aprenent anglès ballant');
                $('#subs').attr('src', '../assets/subtitols/subs-video1.vtt');
                break;
            case 1:
                $('#titol').append('Space Invaders');
                $('#video').attr('src', '../assets/videos/Space Invaders.mp4');
                $('#video').attr('title', 'Space Invaders');
                $('#subs').attr('src', '../assets/subtitols/subs-video2.vtt');
                break;
            case 2:
                $('#titol').append('Treball per projectes');
                $('#video').attr('src', '../assets/videos/treball per projectes.mp4');
                $('#video').attr('title', 'Treball per projectes');
                $('#subs').attr('src', '../assets/subtitols/subs-video3.vtt');
                break;
            default:
                loadLlista();
        }
        $('#tornar').on('click', tornar);
    });
}

function loadLlista(){
    $('#videos').load('layouts/llista.html', function() {
        $('#video1').attr('src','../assets/videos/Aprenent anglès ballant.mp4#t=15');
        $('#enllaç1').attr('href','./video.html?v=0');
        $('#video2').attr('src','../assets/videos/Space Invaders.mp4#t=10');
        $('#enllaç2').attr('href','./video.html?v=1');
        $('#video3').attr('src','../assets/videos/treball per projectes.mp4#t=12');
        $('#enllaç3').attr('href','./video.html?v=2');
    });
}

function tornar(){
    window.location.href = "../../";
}