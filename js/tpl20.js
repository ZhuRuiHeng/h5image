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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/bg.jpg"width="500"height="815"><img id="diaopai"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/diaopai.png"><img id="zhuobu"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/bu.png"><img id="pan"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/pan.png"><div id="div1"><div id="div1h"style="position:absolute;-webkit-transform: rotate(-12deg);display:none"><div style="position:absolute;width:423px;height:344px;left:0px;top:110px;overflow:hidden"><img id="img1h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div1v"style="position:absolute;-webkit-transform: rotate(-7deg);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img1v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div2"><div id="div2h"style="position:absolute;display:none"><div style="position:absolute;width:423px;height:344px;left:22px;top:17px;overflow:hidden"><img id="img2h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:0px;top:0px"></div><div id="div2v"style="position:absolute;top:-50px;display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img2v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div31"><div id="div31h"style="position:absolute;-webkit-transform: translate(6px,-11px) rotate(-10deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img31h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div31v"style="position:absolute;-webkit-transform: translate(-5px,-40px) rotate(-10deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img31v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div32"><div id="div32h"style="position:absolute;-webkit-transform: translate(28px,-64px) rotate(1deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img32h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div32v"style="position:absolute;-webkit-transform: translate(27px,-73px) rotate(4deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img32v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><img id="daocha"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/daocha.png"width="180"><div id="div41"><div id="div41h"style="position:absolute;-webkit-transform: translate(14px,-35px) rotate(-5deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img41h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div41v"style="position:absolute;-webkit-transform: translate(-2px,-57px) rotate(-4deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img41v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div42"><div id="div42h"style="position:absolute;-webkit-transform: translate(4px,2px) rotate(-12deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img42h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div42v"style="position:absolute;-webkit-transform: translate(-17px,8px) rotate(-13deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img42v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div51"><div id="div51h"style="position:absolute;-webkit-transform: translate(85px,-86px) rotate(9deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img51h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div51v"style="position:absolute;-webkit-transform: translate(59px,-82px) rotate(8deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img51v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div52"><div id="div52h"style="position:absolute;-webkit-transform: translate(15px,-25px) rotate(-7deg) scale(0.7);display:none"><div style="position:absolute;width:423px;height:344px;left:-1px;top:110px;overflow:hidden"><img id="img52h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div52v"style="position:absolute;-webkit-transform: translate(2px,15px) rotate(-6deg) scale(0.7);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img52v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="div6"><div id="div6h"style="position:absolute;-webkit-transform: translate(102px,-108px) rotate(10deg) scale(.95);display:none"><div style="position:absolute;width:423px;height:344px;left:3px;top:111px;overflow:hidden"><img id="img6h"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang.png"style="position:absolute;left:-22px;top:94px;"></div><div id="div6v"style="position:absolute;-webkit-transform: translate(74px,-59px) rotate(5deg) scale(.9);display:none"><div style="position:absolute;width:425px;height:490px;left:22px;top:17px;overflow:hidden;"><img id="img6v"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuang1.png"style="position:absolute;left:0px;top:0px"></div></div><div id="qipao1"style="width:119px;height:126px;-webkit-transform: scale(0)"><img id="pao1"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao1.png"class="paopao_ani"style="position:absolute"></div><div id="qipao2"style="width:119px;height:126px;-webkit-transform: scale(0)"><img id="pao2"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao2.png"class="paopao_ani"style="position:absolute"></div><div id="qipao3"style="width:119px;height:119px;-webkit-transform: scale(0)"><img id="pao3"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao3.png"class="paopao_ani"style="position:absolute"></div><div id="qipao4"style="width:129px;height:119px;-webkit-transform: scale(0)"><img id="pao4"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao4.png"class="paopao_ani"style="position:absolute"></div><div id="qipao5"style="width:129px;height:119px;-webkit-transform: scale(0)"><img id="pao5"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao5.png"class="paopao_ani"style="position:absolute"></div><div id="qipao6"style="width:124px;height:132px;-webkit-transform: scale(0)"><img id="pao6"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/qipao6.png"class="paopao_ani"style="position:absolute"></div><img id="kuaizi"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/kuaizi.png"><img id="shaozi"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/shaozi.png"><img id="foodword"src="http://referer-image.szwwy.com/coolphoto/img/tpl20/word.png"><div id="pagetitle"style="pointer-events: none;position:absolute;width:350px;height:108px;top:283px;left:65px;font-size:30px;color:#953C1B;overflow:hidden;"><div style="position:absolute;width:350px;height:108px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:350px;height:108px;display:table;overflow:hidden;"><div id="titlecontent"style="width:350px;height:108px;vertical-align:middle;display:table-cell;text-align:center;"></div></div></div></div></div>');
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
        var delaytime = 5000;
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

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            showtitle();

            zhuobu = id('zhuobu');
            kuaizi = id('kuaizi');
            shaozi = id('shaozi');
            pan = id('pan');
            foodword = id('foodword');
            diaopai = id('diaopai');
            daocha = id('daocha');


            canshow = true;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                //log(i);
                img.src=images[i][1];
                Onload_imgs_url[i] = 'loading';
                img.onload = image_onload;
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
                distitle();
            }
        }

        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;
            if(index < 10)
                have_num++;

            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height;

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
            }
        }
        function id(name)
        {
            return document.getElementById(name);
        }

        function showtitle()
        {
            //id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'fadein 1s 1s linear both';

            show0();
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            timeout1 = setTimeout(show1,2000);
        }
        function show0()
        {
            zhuobu.style.webkitAnimation = 'zhuobu_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';
            foodword.style.webkitAnimation = 'foodword_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';
            diaopai.style.webkitAnimation = 'diaopai_in_0 1.2s cubic-bezier(.31,.34,.5,1) both';

        }

        function show1()
        {
            setImage('1');
            zhuobu.style.webkitAnimation = 'zhuobu_in_1 1.5s cubic-bezier(.28,-0.04,.5,1) both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_1 1.5s cubic-bezier(.28,-0.04,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_1 1.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_1 1.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('div1').style.webkitAnimation ='div_in_1 1.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('qipao1').style.webkitAnimation = 'qipao1_in 0.5s 1.5s ease-in forwards';

            timeout2 = setTimeout(show2,4000)
        }

        function show2()
        {
            setImage('2');
            id('qipao1').style.webkitAnimation = 'qipao1_out 0.5s ease-out both';
            shaozi.style.webkitAnimation = 'shaozi_in_2 1s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_2 1s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_2 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_2 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div1').style.webkitAnimation = 'div_out_1 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            daocha.style.webkitAnimation = 'daocha_in_2 1.2s 1s cubic-bezier(.28,-0.04,.5,1) both';
            id('div2').style.webkitAnimation = 'div_in_2 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('qipao2').style.webkitAnimation = 'qipao2_in 0.5s 2s ease-in forwards';

            timeout3 = setTimeout(show3,4000);
        }

        function show3()
        {
            setImage('31');
            setImage('32');
            id('qipao2').style.webkitAnimation = 'qipao2_out 0.5s ease-out both';
            id('div2').style.webkitAnimation = 'div_out_2 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_3 2s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_3 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            daocha.style.webkitAnimation = 'daocha_in_3 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('div31').style.webkitAnimation = 'div_in_31 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div32').style.webkitAnimation = 'div_in_32 1.5s 0.7s cubic-bezier(.28,-0.04,.5,1) both';

            id('qipao3').style.webkitAnimation = 'qipao3_in 0.5s 2.2s ease-in forwards';

            timeout4 = setTimeout(show4,4000)
        }
        function show4()
        {
            setImage('41');
            setImage('42');
            id('qipao3').style.webkitAnimation = 'qipao3_out 0.5s ease-out both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div31').style.webkitAnimation = 'div_out_31 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div32').style.webkitAnimation = 'div_out_32 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            daocha.style.webkitAnimation = 'daocha_out 1s 0.7s linear both';

            id('div41').style.webkitAnimation = 'div_in_41 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div42').style.webkitAnimation = 'div_in_42 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';


            id('qipao4').style.webkitAnimation = 'qipao4_in 0.5s 2s ease-in forwards';

            timeout5 = setTimeout(show5,4000)
        }
        function show5()
        {
            setImage('51');
            setImage('52');
            id('qipao4').style.webkitAnimation = 'qipao4_out 0.5s ease-out both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_5 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_5 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div41').style.webkitAnimation = 'div_out_41 2s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div42').style.webkitAnimation = 'div_out_42 2s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_5 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_5 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            daocha.style.webkitAnimation = 'daocha_in_5 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('div51').style.webkitAnimation = 'div_in_51 2s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div52').style.webkitAnimation = 'div_in_52 2s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('qipao5').style.webkitAnimation = 'qipao5_in 0.5s 2.5s ease-in forwards';

            timeout6 = setTimeout(show6,4000)
        }

        function show6()
        {
            setImage('6');
            id('qipao5').style.webkitAnimation = 'qipao5_out 0.5s ease-out both';

            kuaizi.style.webkitAnimation = 'kuaizi_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_4 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            daocha.style.webkitAnimation = 'daocha_in_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div51').style.webkitAnimation = 'div_out_51 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div52').style.webkitAnimation = 'div_out_52 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            pan.style.webkitAnimation = 'pan_in_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('div6').style.webkitAnimation = 'div_in_6 2s 0.5s ease-out both';

            id('qipao6').style.webkitAnimation = 'qipao6_in 0.5s 2.5s ease-in forwards';

            timeout7 = setTimeout(show1_1,4000)
        }
        function show1_1()
        {
            setImage('1');
            id('qipao6').style.webkitAnimation = 'qipao6_out 0.5s ease-out both';
            pan.style.webkitAnimation = 'pan_in_11 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            zhuobu.style.webkitAnimation = 'zhuobu_in_11 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            id('div6').style.webkitAnimation = 'div_out_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            kuaizi.style.webkitAnimation = 'kuaizi_in_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';
            shaozi.style.webkitAnimation = 'shaozi_in_6 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('div1').style.webkitAnimation ='div_in_1 1.5s 0.5s cubic-bezier(.28,-0.04,.5,1) both';

            id('qipao1').style.webkitAnimation = 'qipao1_in 0.5s 2s ease-in forwards';

            timeout8 = setTimeout(show2,4000)
        }

        function setImage(idname)
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
            var div;
            var div1;
            var divname;
            var height;
            var width;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                width = 423;
                height = 344;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                width = 425;
                height = 490;
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if(img_bili > (width/height))
            {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height*img_bili + 'px';
                img.style.left = -((height*img_bili-width)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = width+'px';
                img.style.height = width/img_bili + 'px';
                img.style.top = -((width/img_bili-height)/2) + 'px';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            // //log(width,height,img.style.left,img.style.top,img.width,img.height);
            var src = img.src;
            img.parentElement.parentElement.parentElement.onclick=function() {
                //var src = img_obj.src
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
        }
        call_me(load_images);
        load_init_modules();

        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }

        function clearnode()
        {
            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div31h').style.display = 'none';
            id('div31v').style.display = 'none';
            id('div41h').style.display = 'none';
            id('div41v').style.display = 'none';
            id('div32h').style.display = 'none';
            id('div32v').style.display = 'none';
            id('div42h').style.display = 'none';
            id('div42v').style.display = 'none';
            id('div51h').style.display = 'none';
            id('div52h').style.display = 'none';
            id('div51v').style.display = 'none';
            id('div52v').style.display = 'none';
            id('div6h').style.display = 'none';
            id('div6v').style.display = 'none';
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('div31').style.webkitAnimation = '';
            id('div32').style.webkitAnimation = '';
            id('div41').style.webkitAnimation = '';
            id('div42').style.webkitAnimation = '';
            id('div51').style.webkitAnimation = '';
            id('div52').style.webkitAnimation = '';
            id('div6').style.webkitAnimation = '';
            pan.style.webkitAnimation = '';
            zhuobu.style.webkitAnimation = '';
            shaozi.style.webkitAnimation = '';
            kuaizi.style.webkitAnimation = '';
            daocha.style.webkitAnimation = '';
            id('qipao1').style.webkitAnimation = '';
            id('qipao2').style.webkitAnimation = '';
            id('qipao3').style.webkitAnimation = '';
            id('qipao4').style.webkitAnimation = '';
            id('qipao5').style.webkitAnimation = '';
            id('qipao6').style.webkitAnimation = '';
            diaopai.style.webkitAnimation = '';
            id('foodword').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
        }    
    }
}
