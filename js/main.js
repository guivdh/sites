// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

var ancienCont = '.contRasp';
var tabCont = [];

function afficherContenuPortfolio(contenu){
    slideIndex = 1
    tabCont = [];
    document.querySelector(ancienCont).style.display="none";
    if(contenu == ".contRasp" || ".chefLouveteaux" || ".odoo"){
        document.querySelector(contenu).style.display="block";
    }
    else{
        document.querySelector(contenu).style.display="inline-block";
    }


    document.querySelector("#secCont").style.border="5px solid #171717";
    document.querySelector(".boutonMoins").style.display="flex";
    ancienCont=contenu;

    for(i=0; i<document.getElementById('secCont').getElementsByTagName('div').length;i++){
        tabCont.push(document.getElementById('secCont').getElementsByTagName('div').item(i).className);
    }
}

function cacherContenuPortfolio(){
    for(i=0; i<tabCont.length;i++){
        console.log(document.getElementById('secCont').getElementsByTagName('div').item(i).className);

        document.querySelector("."+tabCont[i]).style.display="none";
        document.querySelector("#secCont").style.border="0px solid #171717";
    }
    document.querySelector(".boutonMoins").style.display="none";

}

function afficherImage(img){
    var myWindow = window.open("");
    myWindow.document.write("<body style='background-color: #292929'><center><img src="+img+" style=\"width:1500px\"></center><nav id=\"footer\">\n" +
        "        <div class=\"container\">\n" +
        "            <div class=\"pull-left fnav\">\n" +
        "                <p style='color: whitesmoke'>VH-ROOT © 2019.</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </nav></body>");
}


function main() {

    (function () {
        'use strict';

        /* ==============================================
           Testimonial Slider
           =============================================== */

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        $(document).ready(function() {
            $("#team").owlCarousel({

                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                autoHeight : true,
                itemsCustom : [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 4],
                    [1400, 4],
                    [1600, 4]
                ],
            });

            $("#clients").owlCarousel({

                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                autoHeight : true,
                itemsCustom : [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ],
            });

            $("#testimonial").owlCarousel({
                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem:true
            });

        });

        /*====================================
      Portfolio Isotope Filter
      ======================================*/
        $(window).load(function() {
            var $container = $('#lightbox');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });



    }());


}
main();
