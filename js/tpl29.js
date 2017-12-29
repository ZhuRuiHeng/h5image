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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/bg.jpg"style="height:815px;position:absolute;left:0px;"><div id="haiquan"><img id="jiushengying"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/jiushengying.png"><img id="jiusheng"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/jiusheng.png"></div><div id="jijuxieying"style="top:640px;left:54px;"><div class="leg1"style="width:19px;height:30px;left:70px;top:-10px"><img class="leg11"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/1a.png"><div class="leg1-1"style="position:absolute;width:53px;height:26px;left:-40px;top:-18px"><img class="leg12"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/4a.png"><img class="leg13"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/0a.png"style="position:absolute;left:-33px;top:1px;"></div></div><div class="leg2"style="width:35px;height:44px;left:79px;top:-18px;"><img class="leg21"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/9a.png"><img class="leg22"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/2a.png"style="position:absolute;left:7px;top:-34px"></div><img class="leg3"style="left:86px;top:1px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/3a.png"><img class="leg4"style="left:91px;top:43px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/10a.png"><div class="leg5"style="width:53px;height:26px;left:76px;top:52px;"><img class="leg51"style="position:absolute;-webkit-transform: scale(0.81,0.6) rotate(27.3deg)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/4a.png"><div class="leg5-1"style="position:absolute;width:14px;height:52px;left:28px;top:13px;"><img class="leg52"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/7a.png"><img class="leg53"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/8a.png"style="position:absolute;left:-10px;top:44px;"></div></div><div class="leg6"style="width:35px;height:44px;left:72px;top:49px;"><img class="leg61"style="position:absolute;-webkit-transform: translate(-10px,-12px) rotate(3.8deg) scale(1,-1)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/9a.png"><div class="leg6-1"style="position:absolute;width:14px;height:52px;left:10px;top:16px"><img class="leg62"style="position:absolute;-webkit-transform: rotate(26.3deg)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/7a.png"><img class="leg63"style="position:absolute;left:-12px;top:36px;-webkit-transform-origin: 25% 25%;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/8a.png"></div></div><img class="tou"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/5a.png"><img class="ke"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/11a.png"></div><div id="jijuxie"><div class="leg1"style="width:19px;height:30px;left:70px;top:-10px"><img class="leg11"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/1.png"><div class="leg1-1"style="position:absolute;width:53px;height:26px;left:-40px;top:-18px"><img class="leg12"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/4.png"><img class="leg13"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/0.png"style="position:absolute;left:-33px;top:1px;"></div></div><div class="leg2"style="width:35px;height:44px;left:79px;top:-18px;"><img class="leg21"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/9.png"><img class="leg22"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/2.png"style="position:absolute;left:7px;top:-34px"></div><img class="leg3"style="left:86px;top:1px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/3.png"><img class="leg4"style="left:91px;top:43px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/10.png"><div class="leg5"style="width:53px;height:26px;left:76px;top:52px;"><img class="leg51"style="position:absolute;-webkit-transform: scale(0.81,0.6) rotate(27.3deg)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/4.png"><div class="leg5-1"style="position:absolute;width:14px;height:52px;left:28px;top:13px;"><img class="leg52"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/7.png"><img class="leg53"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/8.png"style="position:absolute;left:-10px;top:44px;"></div></div><div class="leg6"style="width:35px;height:44px;left:72px;top:49px;"><img class="leg61"style="position:absolute;-webkit-transform: translate(-10px,-12px) rotate(3.8deg) scale(1,-1)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/9.png"><div class="leg6-1"style="position:absolute;width:14px;height:52px;left:10px;top:16px"><img class="leg62"style="position:absolute;-webkit-transform: rotate(26.3deg)"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/7.png"><img class="leg63"style="position:absolute;left:-12px;top:36px;-webkit-transform-origin: 25% 25%;"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/8.png"></div></div><img class="tou"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/5.png"><img class="ke"src="http://referer-image.szwwy.com/coolphoto/img/tpl29/11.png"></div><div class="kuang"id="page_v1"><div class="ying"id="ying_v1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/ying.png"></div><div class="kuangimg"id="kuangimg_v1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/kuang.png"><div style="position:absolute;top:15px;left:15px;width:255px;height:347px;overflow:hidden;"><img id="img_v1"style="position:absolute"></div></div></div><div class="kuang"id="page_h1"><div class="ying"id="ying_h1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/ying.png"style="-webkit-transform: rotate(90deg)"></div><div class="kuangimg"id="kuangimg_h1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/kuang.png"style="-webkit-transform: rotate(90deg)"><div style="position:absolute;top:61px;left:-31px;width:347px;height:255px;overflow:hidden;"><img id="img_h1"style="position:absolute"></div></div></div><div class="kuang1"id="page_v2"><div class="ying"id="ying_v2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/ying.png"></div><div class="kuangimg"id="kuangimg_v2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/kuang.png"><div style="position:absolute;top:15px;left:15px;width:255px;height:347px;overflow:hidden;"><img id="img_v2"style="position:absolute"></div></div></div><div class="kuang1"id="page_h2"><div class="ying"id="ying_h2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/ying.png"style="-webkit-transform: rotate(90deg)"></div><div class="kuangimg"id="kuangimg_h2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl29/kuang.png"style="-webkit-transform: rotate(90deg)"><div style="position:absolute;top:61px;left:-31px;width:347px;height:255px;overflow:hidden;"><img id="img_h2"style="position:absolute"></div></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:410px;height:200px;top:238px;left:45px;font-size:40px;color:#fff;overflow:hidden;font-weight:bold;text-shadow:5px 6px 4px rgba(0, 0, 0, 0.2);"><div style="position:absolute;width:410px;height:200px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent"style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;color:#975D49;"></div></div></div></div></div>');
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
        var delaytime = 4000;
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
            //showtitle();

            id('page_v1').style.webkitAnimation = '';
            id('ying_v1').style.webkitAnimation = '';
            id('kuangimg_v1').style.webkitAnimation = '';
            id('page_v2').style.webkitAnimation = '';
            id('ying_v2').style.webkitAnimation = '';
            id('kuangimg_v2').style.webkitAnimation = '';
            id('page_h1').style.webkitAnimation = '';
            id('ying_h1').style.webkitAnimation = '';
            id('kuangimg_h1').style.webkitAnimation = '';
            id('page_h2').style.webkitAnimation = '';
            id('ying_h2').style.webkitAnimation = '';
            id('kuangimg_h2').style.webkitAnimation = '';
            id('page_v1').style.display = 'none';
            id('page_v2').style.display = 'none';
            id('page_h1').style.display = 'none';
            id('page_h2').style.display = 'none';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
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
        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_in_fade_right 1s ease-out both';
            //id('titlecontent').innerHTML = e_desc;
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_out_fade_right 1s ease-in both';
            begin_show();
        }
        function begin_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(1);
            image_url_index++;


            timeout1 = setTimeout(next_show,6000);
        }
        function next_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(2);
            image_url_index++;


            timeout2 = setTimeout(begin_show,6000);
        }

        function cut_image(pageindex)
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
            
            id('page_h'+pageindex).style.display = 'none';
            id('page_v'+pageindex).style.display = 'none';
            id('page_h'+pageindex).style.webkitAnimation = '';
            id('ying_h'+pageindex).style.webkitAnimation = '';
            id('kuangimg_h'+pageindex).style.webkitAnimation = '';
            id('page_v'+pageindex).style.webkitAnimation = '';
            id('ying_v'+pageindex).style.webkitAnimation = '';
            id('kuangimg_v'+pageindex).style.webkitAnimation = '';

            if(img_bili>1)//ºá°æh
            {


                var img_obj = id('img_h'+pageindex);
                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(347/255))
                {
                    img_obj.style.height = '255px';
                    img_obj.style.width = img_bili*255 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -((img_bili*255-347)/2) + 'px';
                }
                else
                {
                    img_obj.style.width = '347px';
                    img_obj.style.height = 347/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -((347/img_bili-255)/2) + 'px';
                }
                timeout3 = setTimeout(function()
                {
                    //log(image_url_index,pageindex,'h');
                    
                    if(pageindex == 1)
                        id('page_h'+pageindex).style.webkitAnimation = 'kuangmove 10s linear both';
                    else
                        id('page_h'+pageindex).style.webkitAnimation = 'kuangmove1 10s linear both';
                    id('page_h'+pageindex).style.display = 'block';
                    id('ying_h'+pageindex).style.webkitAnimation = 'yingmove 10s linear both';
                    id('kuangimg_h'+pageindex).style.webkitAnimation = 'kuang 10s linear both';
                    id('page_v'+pageindex).style.display = 'none';
                    id('page_h'+pageindex).style.display = 'block';
                },100);
            }
            else //Êú°æv
            {

                var img_obj = id('img_v'+pageindex);
                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(255/347))
                {
                    img_obj.style.height = '347px';
                    img_obj.style.width = img_bili*347 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -(img_bili*347-255)/2 + 'px';
                }
                else
                {
                    img_obj.style.width = '255px';
                    img_obj.style.height = 255/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -(255/img_bili-347)/2 + 'px';
                }   
                timeout4 = setTimeout(function()
                {
                    //log(image_url_index,pageindex,'v');
                    
                    if(pageindex == 1)
                        id('page_v'+pageindex).style.webkitAnimation = 'kuangmove 8s linear both';
                    else
                        id('page_v'+pageindex).style.webkitAnimation = 'kuangmove1 8s linear both';
                    id('page_v'+pageindex).style.display = 'block';
                    id('ying_v'+pageindex).style.webkitAnimation = 'yingmove 8s linear both';
                    id('kuangimg_v'+pageindex).style.webkitAnimation = 'kuang 8s linear both';
                    id('page_v'+pageindex).style.display = 'block';
                    id('page_h'+pageindex).style.display = 'none';

                },100);
            }
            //log(img_obj.src);
            img_obj.onclick=function() {
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
        }
        call_me(load_images);
        
load_init_modules();

        function reload_scene()
        {
            reshow = true;
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            setTimeout(load_images,100)
            
        }    
    }
}
