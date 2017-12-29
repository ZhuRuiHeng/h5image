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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/bbg.jpg"><div id="titleup"><img id="moxian2"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/moxian5.png"><img id="hua1"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/jiaobiao.png"></div><div id="titledown"style="width:500px;height:815px;"><img id="moxian1"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/moxian5.png"><img id="mofen"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mofen.png"><img id="heye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/heyewenzi.png"><img id="mozi"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo01.png"><img id="shangzi"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo03.png"><img id="huazi"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo02.png"><img id="kaizi"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo04.png"></div><div id="div1v"class="div1v"style="display:none"><img id="img1v"style="position:absolute"></div><div id="div1h"class="div1h"style="display:none"><img id="img1h"style="position:absolute"></div><div id="div21h"class="div21h"style="display:none"><img id="img21h"style="position:absolute"></div><div id="div22h"class="div22h"style="display:none"><img id="img22h"style="position:absolute"></div><div id="div22v"class="div22v"style="display:none"><img id="img22v"style="position:absolute"></div><div id="div21v"class="div21v"style="display:none"><img id="img21v"style="position:absolute"></div><div id="div3v"class="div1v"style="display:none"><img id="img3v"style="position:absolute"></div><div id="div3h"class="div1h"style="display:none"><img id="img3h"style="position:absolute"></div><div id="div41h"style="display:none"><img id="img41h"style="position:absolute"></div><div id="div42h"style="display:none"><img id="img42h"style="position:absolute"></div><div id="div42v"style="display:none"><img id="img42v"style="position:absolute"></div><div id="div41v"style="display:none"><img id="img41v"style="position:absolute"></div><img id="mo1"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo022.png"><img id="mo2"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/mo011.png"><div id="heye2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/heye2.png"style="position:absolute;-webkit-animation: heye_ani 2s ease-in-out infinite alternate;-webkit-transform-origin: 95% 95%;"></div><div id="lianhua1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/lianhua2.png"style="position:absolute;-webkit-animation: heye_ani 2.5s 0.5s ease-in-out infinite alternate;-webkit-transform-origin: 62% 95%;"></div><div id="lianhua2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/lianhua1.png"style="position:absolute;-webkit-animation: heye_ani 2.5s ease-in-out infinite alternate;-webkit-transform-origin: 31% 89%;"></div><div style="position:absolute;top:770px;left:-38px;-webkit-transform-origin:828% -1967%;width:13px;height:25px;-webkit-transform: rotate(0deg);-webkit-animation: yuyou1 18s linear infinite"><div style="width:33px;height:40px;-webkit-transform: rotate(90deg);position:absolute;-webkit-animation: yuyou11 18s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/012.png"style="position:absolute;left:12px;top:0px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:19px;top:8px;-webkit-animation: yuchi2 1s linear infinite alternate;-webkit-transform-origin: 0% 33%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:17px;top:8px;-webkit-transform-origin: 0% 33%;-webkit-transform: scale(-1,1);-webkit-animation: yuchi1 1s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/011.png"style="position:absolute;left:14px;top:20px;-webkit-transform-origin: 49% 18%;-webkit-animation: yuwei 0.8s linear infinite alternate"></div></div><div style="position:absolute;top:694px;left:300px;width:13px;height:25px;-webkit-transform: rotate(-65deg);"><div style="width:33px;height:40px;-webkit-transform: rotate(90deg);position:absolute;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/012.png"style="position:absolute;left:12px;top:0px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:19px;top:8px;-webkit-animation: yuchi2 1s linear infinite alternate;-webkit-transform-origin: 0% 33%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:17px;top:8px;-webkit-transform-origin: 0% 33%;-webkit-transform: scale(-1,1);-webkit-animation: yuchi1 1s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/011.png"style="position:absolute;left:14px;top:20px;-webkit-transform-origin: 49% 18%;-webkit-animation: yuwei 0.8s linear infinite alternate"></div></div><div style="position:absolute;top:824px;left:377px;width:13px;height:25px;-webkit-transform: rotate(-80deg);-webkit-animation: yuyou2 9s linear infinite"><div style="width:33px;height:40px;-webkit-transform: rotate(90deg);position:absolute;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/012.png"style="position:absolute;left:12px;top:0px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:19px;top:8px;-webkit-animation: yuchi2 1s linear infinite alternate;-webkit-transform-origin: 0% 33%;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/013.png"style="position:absolute;left:17px;top:8px;-webkit-transform-origin: 0% 33%;-webkit-transform: scale(-1,1);-webkit-animation: yuchi1 1s linear infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/011.png"style="position:absolute;left:14px;top:20px;-webkit-transform-origin: 49% 18%;-webkit-animation: yuwei 0.8s linear infinite alternate"></div></div><img id="heye3"src="http://referer-image.szwwy.com/coolphoto/img/tpl21/heye.png"><div id="pagetitle"style="pointer-events: none;position:absolute;width:308px;height:250px;top:213px;left:107px;font-size:40px;color:#000;overflow:hidden;-webkit-transform-origin: 100% 50%"><div style="position:absolute;width:308px;height:250px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:308px;height:250px;display:table;overflow:hidden;"><div id="titlecontent"style="width:308px;height:250px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:50px;"></div></div></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/guangdian.png"style="left:270px;top:635px;-webkit-animation: shuiwen2 3s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/guangdian01.png"style="position:absolute;left:90px;top:707px;opacity:0.5;"><div style="left:340px;top:707px;width:127px;height:129px;-webkit-animation: guangdian1 3s linear infinite;overflow:hidden"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl21/guangdian01.png"style="position:absolute;left:-250px;-webkit-animation: guangdian2 3s linear infinite"></div></div>');
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

        var delaytime=6000;
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
            canshow = true;
            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                img.onload=image_onload;
                img.onerror= image_onerror;
                Onload_imgs_url[i] = 'loading';
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

            var img = event.target;
            var index = img.index;

            if(index<10)
            {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);

            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
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
            id('mo1').style.webkitAnimation = 'mo1_in 1.5s ease-out both';
            id('mo2').style.webkitAnimation = 'fadein 1.5s linear both';
            id('mofen').style.webkitAnimation = 'modian_in 1.5s 0.3s ease-out forwards';
            id('heye3').style.webkitAnimation = 'heye3_in 1.5s 0.3s ease-out both';
            id('moxian2').style.webkitAnimation = 'heye3_in 1.8s 0.7s ease-out both';
            id('moxian1').style.webkitAnimation = 'heye3_in 1.1s 0.7s ease-out both';
            id('mozi').style.webkitAnimation = 'fadein 1.7s 0.7s ease-in both';
            id('heye1').style.webkitAnimation = 'heye1_in 1s 0.7s linear both';
            id('shangzi').style.webkitAnimation = 'fadein 0.8s 1.3s ease-in both';
            id('huazi').style.webkitAnimation = 'fadein 1s 1.5s ease-in both';
            id('kaizi').style.webkitAnimation = 'fadein 1s 2s ease-in both';
            id('hua1').style.webkitAnimation = 'heye3_in 1s 2s ease-out both';
            id('heye2').style.webkitAnimation = 'fadein 1s 1s ease-in-out both';
            id('lianhua1').style.webkitAnimation = 'fadein 1s 1.5s ease-in-out both';
            id('lianhua2').style.webkitAnimation = 'fadein 1s 2s ease-in-out both';

            // id('pagetitle').style.webkitTransformOrigin = '50% 0%';
            // id('pagetitle').style.webkitAnimation = 'title_in 1s 1.5s ease-in-out both';

            // id('titlecontent').innerHTML = e_desc;
            // if(e_desc.length>14&&e_desc.length<22)
            // {
            //     id('titleup').style.top = '42px';
            //     id('titledown').style.top = '0px';
            // }
            // else if(e_desc.length<15)
            // {
            //     id('titleup').style.top = '72px';
            //     id('titledown').style.top = '-20px';
            // }
            // else
            // {
            //     id('titleup').style.top = '0px';
            //     id('titledown').style.top = '0px';
            // }
        }

        function distitle () 
        {
            id('pagetitle').style.webkitTransformOrigin = '50% 50%';
            id('titleup').style.webkitAnimation = 'fadeout 2s linear both';
            id('pagetitle').style.webkitAnimation = 'title_out 2s linear both';
            id('titledown').style.webkitAnimation = 'title_out 2s linear both';

            timeout1 = setTimeout(show1,1000)
        }

        function show1 () 
        {
            setImage('1');
            id('div1v').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.pointerEvents="auto";
            id('div1v').style.pointerEvents="auto";

            timeout2 = setTimeout(show2,4000)
        }
        function show2 () 
        {
            setImage('21');
            setImage('22');
            id('div1v').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.pointerEvents="none";
            id('div1v').style.pointerEvents="none";

            id('div21h').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div22h').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div21v').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div22v').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div21h').style.pointerEvents="auto";
            id('div22h').style.pointerEvents="auto";
            id('div21v').style.pointerEvents="auto";
            id('div22v').style.pointerEvents="auto";

            timeout3 = setTimeout(show3,4000)
        }
        function show3 () 
        {
            setImage('3');
            id('div21h').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div22h').style.webkitAnimation = 'div22_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div21v').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div22v').style.webkitAnimation = 'div22_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div21h').style.pointerEvents="none";
            id('div22h').style.pointerEvents="none";
            id('div21v').style.pointerEvents="none";
            id('div22v').style.pointerEvents="none";

            id('div3v').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div3h').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div3v').style.pointerEvents="auto";
            id('div3h').style.pointerEvents="auto";

            timeout4 = setTimeout(show4,4000)
        }
        function show4 () 
        {
            setImage('41');
            setImage('42');
            id('div3v').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div3h').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div3v').style.pointerEvents="none";
            id('div3h').style.pointerEvents="none";

            id('div41h').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div42h').style.webkitAnimation = 'div42_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div41v').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div42v').style.webkitAnimation = 'div42_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div41h').style.pointerEvents="auto";
            id('div42h').style.pointerEvents="auto";
            id('div41v').style.pointerEvents="auto";
            id('div42v').style.pointerEvents="auto";
            timeout5 = setTimeout(show1_1,4000)
        }
        function show1_1 () 
        {
            setImage('1');
            id('div41h').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div42h').style.webkitAnimation = 'div42_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div41v').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div42v').style.webkitAnimation = 'div42_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div41h').style.pointerEvents="none";
            id('div42h').style.pointerEvents="none";
            id('div41v').style.pointerEvents="none";
            id('div42v').style.pointerEvents="none";

            id('div1v').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';
            id('div1v').style.pointerEvents="auto";
            id('div1h').style.pointerEvents="auto";

            timeout6 = setTimeout(show2,4000);
        }
        var divwidth = {'1h':437,'1v':437,'21h':437,'22h':437,'21v':250,'22v':250,'3h':437,'3v':437,'41h':410,'42h':410,'41v':250,'42v':250};
        var divheight = {'1h':309,'1v':639,'21h':290,'22h':290,'21v':350,'22v':350,'3h':309,'3v':639,'41h':290,'42h':290,'41v':350,'42v':350};

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

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var height = divheight[divname];
            var width = divwidth[divname];

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
            if(image_url_index==Onload_imgs_url.length)
                image_url_index = 0;
            img.onclick=function() {
                var src = this.src
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
            // //log(width,height,img.style.left,img.style.top,img.width,img.height);
        }
        call_me(load_images);
        load_init_modules();

        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }
        function clearnode () 
        {
            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div21h').style.webkitAnimation = '';
            id('div22h').style.webkitAnimation = '';
            id('div21v').style.webkitAnimation = '';
            id('div22v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div41h').style.webkitAnimation = '';
            id('div42h').style.webkitAnimation = '';
            id('div41v').style.webkitAnimation = '';
            id('div42v').style.webkitAnimation = '';
            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div21h').style.display = 'none';
            id('div22h').style.display = 'none';
            id('div21v').style.display = 'none';
            id('div22v').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div41h').style.display = 'none';
            id('div42h').style.display = 'none';
            id('div41v').style.display = 'none';
            id('div42v').style.display = 'none';

            id('mo1').style.webkitAnimation = '';
            id('mo2').style.webkitAnimation = '';
            id('mofen').style.webkitAnimation = '';
            id('heye3').style.webkitAnimation = '';
            id('moxian2').style.webkitAnimation = '';
            id('moxian1').style.webkitAnimation = '';
            id('mozi').style.webkitAnimation = '';
            id('heye1').style.webkitAnimation = '';
            id('shangzi').style.webkitAnimation = '';
            id('huazi').style.webkitAnimation = '';
            id('kaizi').style.webkitAnimation = '';
            id('hua1').style.webkitAnimation = '';
            id('heye2').style.webkitAnimation = '';
            id('lianhua1').style.webkitAnimation = '';
            id('lianhua2').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('titledown').style.webkitAnimation = '';
            id('titleup').style.webkitAnimation = '';

            id('titlecontent').innerHTML = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);

        }    
    }
}
