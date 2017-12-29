var module_inits = [];

function load_init_modules() {
    for (var i = 0; i < module_inits.length; i++) {
        module_inits[i]();
    }
}

function call_me(fun) {
    module_inits.push(fun);
}

document.ontouchmove = function(e) {
    //e.preventDefault();
}

// = load_init_modules;

function playPhoto() {
    $('body').css('background-color','#ffc400');

    // 相册封面
    loadUserImages();
    $.when(loadingdef).done(function() {
        $("#wrapper_player_cover_bkgnd").css("display", "block");
        setTimeout("$('#wrapper_cover').addClass('effect_fadeOut');", 3000);
        setTimeout(function() {
            // window.setTimeout(function d() {
            //     playEnd()
            // }, 100)
            play();
        }, 3100)
    })


    function play() {
        $("#div_player").append('<div id="container"><img id="m_dot1"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/dian.png"><img id="m_dot2"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/dian.png"><img id="m_star1"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="m_star2"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="m_star3"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="m_star4"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="m_star5"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="m_star5"class="m_star"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/star.png"><img id="banana"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/bana.png"><div id="m_children"style="display:none"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl17/chil.png"><img id="m_eye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/eye1.png"><img id="m_eye"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/eye.png"></div><div id="cloud"style="display:none"><img id="cloud1"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/yun2.png"><img id="cloud2"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/yun1.png"><img id="cloud3"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/yun3.png"></div><img id="minion4"style="display:none;opacity:0;"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion4.png"><img id="minion3"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion3.png"><div id="imgdiv1"style="display:none"><div id="imgbox1"><img id="img1"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang11.png"></div><div id="imgdiv2h"style="display:none"><div id="imgbox2h"><img id="img2h"style="position:absolute"></div><img id="kuang2h"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang12h.png"></div><div id="imgdiv2s"style="display:none;"><div id="imgbox2s"><img id="img2s"style="position:absolute"></div><img id="kuang2s"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang12s.png"></div><img id="minion6"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion6.png"><div id="imgdiv31h"style="display:none"><div id="imgbox31h"><img id="img31h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang131h.png"></div><div id="imgdiv32h"style="display:none"><div id="imgbox32h"><img id="img32h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang132h.png"></div><div id="imgdiv31s"style="display:none"><div id="imgbox31s"><img id="img31s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.98,.98)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang131s.png"></div><div id="imgdiv32s"style="display:none"><div id="imgbox32s"><img id="img32s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.98,.98)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang132s.png"></div><div id="imgdiv41h"style="display:none"><div id="imgbox41h"><img id="img41h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.95,.95)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang141h.png"></div><div id="imgdiv42h"style="display:none"><div id="imgbox42h"><img id="img42h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.95,.95)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang142h.png"></div><div id="imgdiv41s"style="display:none"><div id="imgbox41s"><img id="img41s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.95,.95)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang141s.png"></div><div id="imgdiv42s"style="display:none"><div id="imgbox42s"><img id="img42s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.95,.95)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang142s.png"></div><div id="m4"style="display:none"><img style="position:absolute;-webkit-animation: m4 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m4.png"></div><div id="m5"style="display:none"><img style="position:absolute;-webkit-animation: m5 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m5.png"></div><div id="imgdiv51h"style="display:none"><div id="imgbox51h"><img id="img51h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang151h.png"></div><div id="imgdiv52h"style="display:none"><div id="imgbox52h"><img id="img52h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang152h.png"></div><div id="imgdiv51s"style="display:none"><div id="imgbox51s"><img id="img51s"stle="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang151s.png"></div><div id="imgdiv52s"style="display:none"><div id="imgbox52s"><img id="img52s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang152s.png"></div><div id="m51"style="position:absolute;display:none"><img style="position:absolute;-webkit-animation: m4 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m51.png"></div><div id="m52"style="position:absolute;display:none"><img style="position:absolute;-webkit-animation: m5 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m52.png"></div><div id="imgdiv6h"style="display:none;"><div id="imgbox6h"><img id="img6h"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"id="kuang6h"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang16h.png"></div><div id="imgdiv6s"style="display:none;"><div id="imgbox6s"><img id="img6s"style="position:absolute"></div><img style="postiion:absolute;-webkit-transform: scale(.99,.99)"id="kuang6s"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/kuang16s.png"></div><div id="m61"style="position:absolute;display:none"><img style="position:absolute;-webkit-animation: m4 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m61.png"></div><div id="m62"style="position:absolute;display:none"><img style="position:absolute;-webkit-animation: m5 1s linear infinite alternate"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m62.png"></div><img id="minion2"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion2.png"><img id="minion8"style="display:none;position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion8.png"><img id="minion5"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion5.png"><img id="fengche"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/fengche.png"><img id="minion1"style="display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/minion1.png"><img id="m63"style="position:absolute;display:none"src="http://referer-image.szwwy.com/coolphoto/img/tpl17/m63.png"><div id="pagetitle"style="pointer-events: none;position:absolute;border:10px solid #fff;border-radius:10px;width:400px;height:200px;left:50px;top:230px;font-size:36px;color:#fff;opacity:0;"><div style="position:absolute;width:360px;height:160px;left:10px;top:10px;overflow:hidden;"><div style="display:table;width:360px;height:160px;text-align:center;"><div id="titlecontent"style="display:table-cell;width:360px;height:160px;vertical-align:middle;line-height:150%;"></div></div></div></div></div>');
        function showtitle(){
            //id('titlecontent').innerHTML = e_desc;
            //id('pagetitle').style.webkitAnimation = 'in_lightspeed 1s ease both';
            var fengche = id('fengche');
            fengche.style.top = '585px';
            fengche.style.left = '-7px';
            fengche.style.display = 'block';
            fengche.style.webkitTransformOrigin = '50% 50%';

            var minion1 = id('minion1');
            // minion2.style.top = '103px';
            // minion2.style.left = '396px';
            minion1.style.display = 'block';
            // minion2.style.webkitTransformOrigin = '20% 80%';
            id('fengche').style.webkitAnimation = 'm_in_bounce_up 0.8s 1s ease both';
            id('minion1').style.webkitAnimation = 'm_in_bounce_up 0.8s 1s ease both';
            
        }
        function distitle()
        {
            //id('pagetitle').style.webkitAnimation = 'out_lightspeed 1s ease both';
            showin1();
        }
        function id(name)
        {
            return document.getElementById(name);
        }
        function showin1 ()
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('1');
            image_url_index++;

            id('banana').style.display = 'block';
            id('m_children').style.display = 'block';
            id('cloud').style.display = 'block';
            id('fengche').style.display = 'block';
            id('minion1').style.display = 'block';
            id('minion2').style.display = 'block';
            id('minion3').style.display = 'block';
            id('imgdiv1').style.display = 'block';
            id('imgdiv1').style.pointerEvents="auto";

            var fengche = id('fengche');
            fengche.style.top = '585px';
            fengche.style.left = '-7px';
            fengche.style.webkitTransformOrigin = '50% 50%';

            var minion2 = id('minion2');
            minion2.style.top = '103px';
            minion2.style.left = '396px';
            minion2.style.webkitTransformOrigin = '20% 80%';

            var minion3 = id('minion3');
            minion3.style.top = '213px';
            minion3.style.left = '58px';
            minion3.style.opacity = 0;

            id('imgdiv1').style.webkitTransformOrigin = '50% 50%';
            id('m_children').style.webkitAnimation = 'm_in_bounce_down 0.8s ease both';
            id('banana').style.webkitAnimation = 'm_in_bounce_left 0.8s 0.5s ease both';
            id('fengche').style.webkitAnimation = 'm_in_bounce_up 0.8s 1s ease both';
            id('minion1').style.webkitAnimation = 'm_in_bounce_up 0.8s 1s ease both';
            id('minion2').style.webkitAnimation = 'm_in_bounce_down 0.8s 1s ease both';
            id('imgdiv1').style.webkitAnimation = 'm_in_bounce_center 1s 1s ease both';
            id('minion3').style.webkitAnimation = 'littleminionin 0.6s 2.3s linear forwards';
            id('cloud1').style.webkitAnimation = 'cloud1 2s linear infinite';
            id('cloud2').style.webkitAnimation = 'cloud1 2s 1s linear infinite both';

            timeout1 = setTimeout(showout1,5000);
        }

        function showout1()
        {
            if(reshow == true)
                return;
            id('imgdiv1').style.webkitTransformOrigin = '70% 100%';
            id('minion3').style.webkitAnimation = 'littleminionout 0.6s linear';
            id('minion2').style.webkitAnimation = 'minion2out 1.5s linear both';
            id('fengche').style.webkitAnimation = 'm_out_bounce_down 1s 1s linear both';
            id('minion1').style.webkitAnimation = 'm_out_bounce_down 1s 1s linear both';
            id('m_children').style.webkitAnimation = 'm_out_bounce_up 1s 1s linear both';
            id('banana').style.webkitAnimation = 'm_out_bounce_right 1s 1.5s linear both';
            id('imgdiv1').style.webkitAnimation = 'm_out_gun_right 1s 1.2s linear both';
            id('cloud').style.webkitAnimation = 'm_fadeout 1s linear 2s linear forwards';
            id('imgdiv1').style.pointerEvents="none";

            timeout2 = setTimeout(showin2,2000);
        }
        function showin2()
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('2');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>=1)
            {
                //ºá°æ
                // id('imgdiv2h').style.display = 'block';
                id('minion4').style.top = '222px';
                id('minion4').style.left = '55px';
                id('imgdiv2h').style.webkitAnimation = 'm_in_bounce_left 1s 0.6s ease both';
                id('minion4').style.webkitAnimation = 'littleminionin2 0.5s 1.5s linear forwards';
            }
            else
            {
                        // Êú°æ
                // id('imgdiv2h').style.display = 'block';
                id('minion4').style.top = '110px';
                id('minion4').style.left = '110px';
                id('imgdiv2s').style.webkitAnimation = 'm_in_bounce_left 1s 0.6s ease both';
                id('minion4').style.webkitAnimation = 'littleminionin2 0.5s 1.5s linear forwards';
            }
            
            image_url_index++;

            id('banana').style.display = 'block';
            id('m_children').style.display = 'block';
            id('minion2').style.display = 'block';
            id('fengche').style.display = 'block';
            id('cloud').style.display = 'block';
            id('minion4').style.display = 'block';
            id('minion5').style.display = 'block';

            var fengche = id('fengche');
            fengche.style.top = '610px';
            fengche.style.left = '127px';
            fengche.style.webkitTransformOrigin = '100% 100%';
            fengche.style.webkitTransform = 'scale(-1.2,1.2)';

            id('minion5').style.top = '623px';
            id('minion5').style.left = '246px';
            id('cloud1').style.top = '214px';
            id('cloud1').style.left = '105px';
            id('cloud2').style.top = '677px';
            id('cloud2').style.left = '117px';


            id('cloud2').style.webkitAnimation = 'cloud2 2s linear infinite';

            id('m_children').style.webkitAnimation = 'm_in_bounce_down 1s ease both';
            id('banana').style.webkitAnimation = 'm_in_bounce_left 1s ease both';
            id('minion2').style.webkitAnimation = 'm_in_bounce_down 1s 0.5s ease both';

            id('minion5').style.webkitAnimation = 'm_in_bounce_up 1s 0.5s ease both';
            id('fengche').style.webkitAnimation = 'fengche2 1s 0.5s ease both';

            id('imgdiv2h').style.pointerEvents="auto";
            id('imgdiv2s').style.pointerEvents="auto";
            timeout3 = setTimeout(showout2,5000);
        }
        function showout2()
        {
            if(reshow == true)
                return;
            id('minion4').style.webkitAnimation = 'littleminionout2 0.5s linear';
            id('minion5').style.webkitAnimation = 'm_out_bounce_down 1s 0.5s ease both';
            id('fengche').style.webkitAnimation = 'fengche3 1s 0.5s ease both';
            id('minion2').style.webkitAnimation = 'm_out_bounce_up 1s 0.8s ease both';
            id('m_children').style.webkitAnimation = 'm_out_bounce_up 1s 0.8s ease both';

            //ºá°æ
            id('imgdiv2h').style.webkitAnimation = 'm_out_bounce_right 1s 0.5s ease both';
            //Êú°æ
            id('imgdiv2s').style.webkitAnimation = 'm_out_bounce_right 1s 0.5s ease both';

            id('banana').style.webkitAnimation = 'm_out_bounce_right 1s 0.8s ease both';

            id('imgdiv2h').style.pointerEvents="none";
            id('imgdiv2s').style.pointerEvents="none";
            timeout4 = setTimeout(showin3,1500)

        }

        function showin3()
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('31');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>=1)
            {
                id('imgdiv31h').style.webkitAnimation = 'm_in_bounce_center 0.7s 0.3s linear both';
            }
            else
            {
                id('imgdiv31s').style.webkitAnimation = 'm_in_bounce_center 1s 0.5s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('32');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>=1)
            {
                id('imgdiv32h').style.webkitAnimation = 'm_in_bounce_center 0.7s 0.7s linear both';
            }
            else
            {
                id('imgdiv32s').style.webkitAnimation = 'm_in_bounce_center 1s 1s linear both';
            }
            image_url_index++;

            id('cloud').style.display = 'block';
            id('cloud1').style.display = 'block';
            id('cloud2').style.display = 'block';
            id('cloud3').style.display = 'block';
            id('minion2').style.display = 'block';
            id('minion3').style.display = 'block';
            id('minion6').style.display = 'block';
            id('fengche').style.display = 'block';
            id('m_children').style.display = 'block';
            id('banana').style.display = 'block';

            id('cloud').style.webkitAnimation = 'm_fadein 0.5s linear forwards';

            var m_children = id('m_children');
            m_children.style.top = '648px';
            m_children.style.left = '14px';
            m_children.style.webkitTransform = 'rotate(-12deg)';
            m_children.style.webkitAnimation = 'children3 1s ease-out both';

            var cloud3 = id('cloud3');
            cloud3.style.top = '391px';
            cloud3.style.left = '303px';
            cloud3.style.webkitAnimation = 'cloud2 1.5s linear infinite both'

            var banana = id('banana');
            banana.style.top = '726px';
            banana.style.left = '241px';
            banana.style.webkitTransform = 'rotate(-11deg)';
            banana.style.webkitAnimation = 'children3 0.5 ease-out both';

            var cloud2 = id('cloud2');
            cloud2.style.top = '275px';
            cloud2.style.left = '438px';
            cloud2.style.webkitAnimation = 'cloud1 1.5s 0.5s linear infinite both'

            var cloud1 = id('cloud1');
            cloud1.style.top = '25px';
            cloud1.style.left = '23px';
            cloud1.style.webkitAnimation = 'cloud1 1.5s linear infinite both'

            var minion2 = id('minion2');
            minion2.style.top = '-3px';
            minion2.style.left = '407px';
            minion2.style.webkitAnimation = 'minion2_3 0.8s linear both';

            var minion3 = id('minion3');
            minion3.style.top = '368px';
            minion3.style.left = '0px';
            minion3.style.webkitAnimation = 'minion3_3 0.8s 0.3s linear both';

            var minion6 = id('minion6');
            minion6.style.top = '547px';
            minion6.style.left = '406px';
            minion6.style.webkitAnimation = 'minion6_3 0.5s ease-out both';

            var fengche = id('fengche');
            fengche.style.top = '466px';
            fengche.style.left = '281px';
            fengche.style.webkitTransformOrigin = '88.98% 95.56%';
            fengche.style.webkitTransform = 'rotate(14deg)';
            fengche.style.webkitAnimation = 'fengche6 0.5s linear both';

            id('imgdiv31h').style.pointerEvents="auto";
            id('imgdiv31s').style.pointerEvents="auto";
            id('imgdiv32h').style.pointerEvents="auto";
            id('imgdiv32s').style.pointerEvents="auto";

            timeout5 = setTimeout(showout3,5000);

        }
        function showout3()
        {
            if(reshow == true)
                return;
            id('imgdiv32h').style.webkitAnimation = 'm_out_bounce_center 0.5s 0.3s linear both';
            id('imgdiv31h').style.webkitAnimation = 'm_out_bounce_center 0.5s 0.5s linear both';
            id('imgdiv32s').style.webkitAnimation = 'm_out_bounce_center 1s 0.5s linear both';
            id('imgdiv31s').style.webkitAnimation = 'm_out_bounce_center 1s 1s linear both';
            id('m_children').style.webkitAnimation = 'children3_out 0.7s 0.5s ease-in both';
            id('banana').style.webkitAnimation = 'children3_out 0.7s 0.5s ease-in both';
            id('minion2').style.webkitAnimation = 'm_out_bounce_up 0.5s 1s linear both';
            id('minion3').style.webkitAnimation = 'minion3_3_out 0.5s linear both';
            id('minion6').style.webkitAnimation = 'minion6_3_out 0.7s 0.5s linear both';
            id('fengche').style.webkitAnimation = 'fengche6_out 1s 0.5s linear both';
            id('cloud').style.webkitAnimation = 'm_fadeout 1s 0.5s linear both';
            id('imgdiv31h').style.pointerEvents="none";
            id('imgdiv31s').style.pointerEvents="none";
            id('imgdiv32h').style.pointerEvents="none";
            id('imgdiv32s').style.pointerEvents="none";
            timeout6 = setTimeout(showin4,1500);
        }

        function showin4()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('41');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili >=1)
            {
                id('imgdiv41h').style.webkitAnimation = 'm_in_bounce_center 0.8s 0.5s ease both';
            }
            else
            {
                id('imgdiv41s').style.webkitAnimation = 'm_in_bounce_center 0.8s 0.5s ease both';
            }
            image_url_index ++;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('42');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili >=1)
            {
                id('imgdiv42h').style.webkitAnimation = 'm_in_bounce_center 0.8s 0.8s ease both';
            }
            else
            {
                id('imgdiv42s').style.webkitAnimation = 'm_in_bounce_center 0.8s 0.8s ease both';
            }
            image_url_index ++;

            id('minion2').style.display = 'block';
            id('m5').style.display = 'block';
            id('m4').style.display = 'block';
            id('minion8').style.display = 'block';
            id('fengche').style.display = 'block';
            id('m_children').style.display = 'block';
            id('banana').style.display = 'block';

            var m_children = id('m_children');
            m_children.style.top = '75px';
            m_children.style.left = '5px';
            m_children.style.webkitTransform = 'rotate(-13deg)';
            m_children.style.webkitAnimation = 'm_children4 0.5s ease both';


            var banana = id('banana');
            banana.style.top = '202px';
            banana.style.left = '22px';
            banana.style.webkitTransform = 'rotate(-12.5deg)';
            banana.style.webkitAnimation = 'banana4 0.5s 0.5s ease both';

            var minion2 = id('minion2');
            minion2.style.top = '141px';
            minion2.style.left = '365px';
            minion2.style.webkitAnimation = 'minion2_4 0.8s linear both';

            var m4 = id('m4');
            m4.style.webkitAnimation = 'showm4 0.6s linear 0.7s both';

            var m5 = id('m5');
            m5.style.webkitAnimation = 'showm5 0.6s linear 0.7s both';

            var minion8 = id('minion8');
            minion8.style.top = '627px';
            minion8.style.left = '310px';
            minion8.style.webkitAnimation = 'm_4_1 0.5s linear both';

            var fengche = id('fengche');
            fengche.style.top = '522px';
            fengche.style.left = '219px';
            fengche.style.webkitTransform = 'scale(-1,1)';
            fengche.style.webkitTransformOrigin = '88.14% 95.87%';
            fengche.style.webkitAnimation = 'm_4_2 0.5s linear both';
            id('imgdiv41h').style.pointerEvents="auto";
            id('imgdiv41s').style.pointerEvents="auto";
            id('imgdiv42h').style.pointerEvents="auto";
            id('imgdiv42s').style.pointerEvents="auto";
            timeout7 = setTimeout(showout4,5000)
        }
        function showout4()
        {
            if(reshow == true)
                return;
            id('m4').style.webkitAnimation = 'showm4_out 1s ease both';
            id('m5').style.webkitAnimation = 'showm5_out 1s linear both';
            id('banana').style.webkitAnimation = 'banana4_out 0.5s 0.8s ease both';
            id('m_children').style.webkitAnimation = 'm_children4_out 0.5s 0.8s ease both';
            id('minion2').style.webkitAnimation = 'minion2_4_out 0.5s 0.8s ease-in both';
            id('imgdiv41h').style.webkitAnimation = 'm_out_bounce_center 0.8s 0.5s ease both';
            id('imgdiv42h').style.webkitAnimation = 'm_out_bounce_center 0.8s 0.8s ease both';
            id('imgdiv41s').style.webkitAnimation = 'm_out_bounce_center 0.8s 0.5s ease both';
            id('imgdiv42s').style.webkitAnimation = 'm_out_bounce_center 0.8s 0.8s ease both';
            id('minion8').style.webkitAnimation = 'm_4_1_out 0.5s 0.8s linear both';
            id('fengche').style.webkitAnimation = 'm_4_2_out 0.5s 0.8s linear both';
            id('imgdiv41h').style.pointerEvents="none";
            id('imgdiv41s').style.pointerEvents="none";
            id('imgdiv42h').style.pointerEvents="none";
            id('imgdiv42s').style.pointerEvents="none";
            timeout8 = setTimeout(showin5,1500);

        }

        function  showin5 () {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('51');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili >=1)
            {
                id('imgdiv51h').style.webkitAnimation = 'm_in_bounce_right 0.7s 0.5s ease-out both';
            }
            else
            {
                id('imgdiv51s').style.webkitAnimation = 'm_in_bounce_right 0.7s 0.5s ease-out both';
            }
            image_url_index ++;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('52');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili >=1)
            {
                id('imgdiv52h').style.webkitAnimation = 'm_in_bounce_left 0.7s 0.5s ease-out both';
            }
            else
            {
                id('imgdiv52s').style.webkitAnimation = 'm_in_bounce_left 0.7s 0.5s ease-out both';
            }
            image_url_index ++;

            id('minion2').style.display = 'block';
            id('m_children').style.display = 'block';
            id('banana').style.display = 'block';
            id('m51').style.display = 'block';
            id('m52').style.display = 'block';

            var m_children = id('m_children');
            m_children.style.top = '28px';
            m_children.style.left = '9px';
            m_children.style.webkitAnimation = 'm_children5 0.5s ease both';

            var banana = id('banana');
            banana.style.top = '140px';
            banana.style.left = '228px';
            banana.style.webkitAnimation = 'm_children5 0.5s ease both';

            var minion2 = id('minion2');
            minion2.style.top = '116px';
            minion2.style.left = '44px';
            minion2.style.webkitAnimation = 'm_in_bounce_down 0.7s ease-out both';

            var m51 = id('m51');
            m51.style.top = '362px';
            m51.style.left = '396px';
            m51.style.webkitAnimation = 'm_in_bounce_left 2s ease-out both';

            var m52 = id('m52');
            m52.style.top = '586px';
            m52.style.left = '34px';
            m52.style.webkitAnimation = 'm_in_bounce_right 2s ease-out both';

            id('imgdiv51h').style.pointerEvents="auto";
            id('imgdiv51s').style.pointerEvents="auto";
            id('imgdiv52h').style.pointerEvents="auto";
            id('imgdiv52s').style.pointerEvents="auto";
            timeout9 = setTimeout(showout5,5000);

        }

        function  showout5 () 
        {
            if(reshow == true)
                return;
            id('m51').style.webkitAnimation = 'm_out_bounce_right 1.5s ease-in both';
            id('m52').style.webkitAnimation = 'm_out_bounce_left 1.5s ease-in both';
            id('m_children').style.webkitAnimation = 'm_children5_out 1s linear both';
            id('banana').style.webkitAnimation = 'banana5_out 1s linear both';
            id('minion2').style.webkitAnimation = 'm_out_bounce_up 1s ease both';

            id('imgdiv51h').style.webkitAnimation = 'm_out_bounce_left 0.8s 0.7s ease-in both';
            id('imgdiv52h').style.webkitAnimation = 'm_out_bounce_right 0.8s 0.7s ease-in both';
            id('imgdiv51s').style.webkitAnimation = 'm_out_bounce_left 1s 0.5s ease-in both';
            id('imgdiv52s').style.webkitAnimation = 'm_out_bounce_right 1s 0.5s ease-in both';

            id('imgdiv51h').style.pointerEvents="none";
            id('imgdiv51s').style.pointerEvents="none";
            id('imgdiv52h').style.pointerEvents="none";
            id('imgdiv52s').style.pointerEvents="none";
            timeout10 = setTimeout(showin6,1800);
        }

        function  showin6 () 
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            m_set_Image('6');
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili >=1)
            {
                id('imgdiv6h').style.webkitAnimation = 'm_in_bounce_center 1s 0.5s ease-out both';
            }
            else
            {
                id('imgdiv6s').style.webkitAnimation = 'm_in_bounce_center 1s 0.5s ease-out both';
            }
            image_url_index++;
            id('m61').style.display = 'block';
            id('m62').style.display = 'block';
            id('m63').style.display = 'block';
            id('m_children').style.display = 'block';
            id('banana').style.display = 'block';

            var m_children = id('m_children');
            m_children.style.top = '45px';
            m_children.style.left = '5px';
            m_children.style.webkitTransform = 'rotate(-13deg)';
            m_children.style.webkitAnimation = 'm_children4 0.5s ease both';

            var banana = id('banana');
            banana.style.top = '182px';
            banana.style.left = '22px';
            banana.style.webkitTransform = 'rotate(-12.5deg)';
            banana.style.webkitAnimation = 'banana4 0.5s 0.3s ease both';

            var m61 = id('m61');
            m61.style.top = '626px';
            m61.style.left = '43px';

            var m62 = id('m62');
            m62.style.top = '174px';
            m62.style.left = '413px'; 

            var m63 = id('m63');
            m63.style.top = '540px';
            m63.style.left = '304px';

            id('m61').style.webkitAnimation = 'm_in_bounce_right 2s ease-out both';
            id('m62').style.webkitAnimation = 'm_in_bounce_left 2s ease-out both';

            id('m63').style.webkitAnimation = 'm63 0.7s ease-out both';
            id('imgdiv6h').style.pointerEvents="auto";
            id('imgdiv6s').style.pointerEvents="auto";
            timeout11 = setTimeout(showout6,5000)
        }
        function showout6 () 
        {
            if(reshow == true)
                return;
            id('banana').style.webkitAnimation = 'banana4_out 0.5s 0.8s ease both';
            id('m_children').style.webkitAnimation = 'm_children4_out 0.5s 0.8s ease both';
            id('m61').style.webkitAnimation = 'm_out_bounce_left 1.5s ease-in both';
            id('m62').style.webkitAnimation = 'm_out_bounce_right 1.5s ease-in both';
            id('m63').style.webkitAnimation = 'm63_out 0.8s 0.5s ease both';
            id('imgdiv6h').style.webkitAnimation = 'm_out_bounce_center 0.8s 0.5s ease-in both';
            id('imgdiv6s').style.webkitAnimation = 'm_out_bounce_center 1s 1s ease-in both';
            id('imgdiv6h').style.pointerEvents="none";
            id('imgdiv6s').style.pointerEvents="none";
            timeout12 = setTimeout(showin1,1500);
        }

        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;
        var timeout9;
        var timeout10;
        var timeout11;
        var timeout12;
        var delaytime=4000;
        function id(name)
        {
            return document.getElementById(name);
        }

        function load_images()
        {
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];

            image_url_index=0;
            have_num = 0;
            error_num = 0;
            showtitle();
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            clearTimeout(timeout1);
            clearTimeout(timeout11);
            clearTimeout(timeout12);
            id('imgdiv1').style.display = 'none';
            id('imgdiv2s').style.display = 'none';
            id('imgdiv2h').style.display = 'none';
            id('imgdiv31h').style.display = 'none';
            id('imgdiv32h').style.display = 'none';
            id('imgdiv31s').style.display = 'none';
            id('imgdiv32s').style.display = 'none';
            id('imgdiv41h').style.display = 'none';
            id('imgdiv42h').style.display = 'none';
            id('imgdiv41s').style.display = 'none';
            id('imgdiv42s').style.display = 'none';
            id('imgdiv51h').style.display = 'none';
            id('imgdiv52h').style.display = 'none';
            id('imgdiv51s').style.display = 'none';
            id('imgdiv52s').style.display = 'none';
            id('imgdiv6h').style.display = 'none';
            id('imgdiv6s').style.display = 'none';
            canshow = true;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                Onload_imgs_url[i] = 'loading';
                img.onload=image_onload;
                img.onerror = image_onerror;
            }      
        }
        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<10)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                showin1();
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;
            if(index<10)
                have_num++;

            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height;

            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                showin1();
            }
        }
        var imgdiv_width = {'1':'450','2':'432','31':'383','32':'313','41':'337','42':'270','51':'366','52':'290'}
        var imgdiv_height = {'1':'475','2':'316','31':'280','32':'219','41':'229','42':'184','51':'268','52':'214'}
        function  m_set_Image (boxindex) 
        {
            if(reshow == true)
                return;
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(boxindex == '1')
            {
                var img1 = id('img1');
                img1.src = Onload_imgs_url[image_url_index];
                m_cut_Image('img1',img_bili,450,475);
            }
            else if(boxindex == '6')
            {
                if(img_bili >=1)
                {
                    id('imgdiv6h').style.display = 'block';
                    id('imgdiv6s').style.display = 'none';
                    var img1 = id('img6h');
                    img1.src = Onload_imgs_url[image_url_index];
                    m_cut_Image('img6h',img_bili,519,400);
                }
                else
                {
                    id('imgdiv6s').style.display = 'block';
                    id('imgdiv6h').style.display = 'none';
                    var img1 = id('img6s');
                    img1.src = Onload_imgs_url[image_url_index];
                    m_cut_Image('img6s',img_bili,316,432)
                }        
            }
            else
            {
                
                if(img_bili >=1)
                {
                    id('imgdiv'+boxindex+'h').style.display = 'block';
                    id('imgdiv'+boxindex+'s').style.display = 'none';
                    var img1 = id('img'+boxindex+'h');
                    img1.src = Onload_imgs_url[image_url_index];
                    m_cut_Image('img'+boxindex+'h',img_bili,imgdiv_width[boxindex],imgdiv_height[boxindex])
                }
                else
                {
                    id('imgdiv'+boxindex+'s').style.display = 'block';
                    id('imgdiv'+boxindex+'h').style.display = 'none';
                    var img1 = id('img'+boxindex+'s');
                    img1.src = Onload_imgs_url[image_url_index];
                    m_cut_Image('img'+boxindex+'s',img_bili,imgdiv_height[boxindex],imgdiv_width[boxindex])
                }
            }
            var src = img1.src;
            img1.parentElement.parentElement.onclick=function() {
                //var src = this.src;
                $("#img_viewer img").attr("src", src);
                $("#img_viewer").removeClass();
                $("#img_viewer").addClass("img_viewer_show");
                $("#img_viewer").css("display", "block");
                $("#img_viewer").css("pointer-events", "auto");
                var d = new Image();
                d.src = src;
                var i = getImgScale(d.width, d.height, $(window).width());
                $("#img_viewer img").css("left", parseInt(($(window).width() - i.width) / 2) + "px");
                $("#img_viewer img").css("top", parseInt(($(window).height() - i.height) / 2) + "px");
                $("#img_viewer img").css("width", i.width + "px");
                $("#img_viewer img").css("height", i.height + "px");
                $("#img_viewer img").css("position", "absolute");
                $("#img_viewer").bind("click", function() {
                    $("#img_viewer").removeClass();
                    $("#img_viewer").addClass("img_viewer_hide");
                    $("#img_viewer").css("pointer-events", "none")
                });
            };
            //log(img1.src);
            //log(image_url_index);
        }
        function  m_cut_Image (imgid,img_bili,width,height) 
        {
            if(reshow == true)
                return;
            var img = id(imgid);
            if(img_bili > (width/height))
            {
                img.style.height = height + 'px';
                img.style.width = height*img_bili +'px';
                img.style.top = '0px';
                img.style.left = -(height*img_bili-width)/2 +'px';
            }
            else
            {
                img.style.width = width +'px';
                img.style.height = width/img_bili +'px';
                img.style.left = '0px';
                img.style.top = -(width/img_bili-height)/2 +'px';
            }
        }
        call_me(load_images);
        load_init_modules();
        function reload_scene()
        {
            reshow = true;
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            setTimeout(function()
                {
                    load_images();
                
                },100)
            
        }    
    }
}