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
        $("#div_player").append('<div id="container"><div id="piCU4B10R-an-obj-1"><div><img height="815"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/bg0.jpg"></div></div><div id="piCU4B10R-an-obj-2"><div><img height="98"width="464"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/houtiao.png"></div></div><div id="piCU4B10R-an-obj-3"><div><img height="98"width="464"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/houtiao.png"></div></div><div id="piCU4B10R-an-obj-4"><div><img height="461"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/light.png"></div></div><img style="position:absolute;top:625px;"height="190"width="659"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/grsds.png"><div id="piCU4B10R-an-obj-18"><div><img height="121"width="92"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla1.png"></div></div><div id="piCU4B10R-an-obj-19"><div><img height="65"width="55"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla2.png"></div></div><div id="piCU4B10R-an-obj-20"><div><img height="137"width="76"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla3.png"></div></div><div id="piCU4B10R-an-obj-21"><div><img height="62"width="67"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla4.png"></div></div><div id="piCU4B10R-an-obj-22"><div><img height="81"width="67"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla5.png"></div></div><div id="piCU4B10R-an-obj-23"><div><img height="175"width="67"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla7.png"></div></div><div id="piCU4B10R-an-obj-24"><div><img height="211"width="170"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/fla6.png"></div></div><div id="pageh"style="top: -750px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/zhang.png"style="position:absolute;left:0px;top:78px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/gua.png"style="position:absolute;left:112px;top:103px;-webkit-transform-origin: 40.85% 11.54%;-webkit-animation: guamove 2s ease-in-out infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/gua.png"style="position:absolute;-webkit-transform-origin: 46.95% 8.79%;left:362px;top:109px;-webkit-animation: guamove 2s ease-in-out infinite alternate"><div style="position:absolute;left:10px;top:154px;width:480px;-webkit-animation: kuangmove 2s ease-in-out infinite alternate"><div style="position:absolute;top:56px;left:57px;width:376px;height:266px;overflow:hidden;"><img id="imgh"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/ktt.png"style="width:480px;height:374px;position:absolute;-webkit-transform-origin: 54.12% 6.39%;"></div></div><div id="pagev"style="top:-750px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/zhang.png"style="position:absolute;left:0px;top:78px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/gua.png"style="position:absolute;left:112px;top:103px;-webkit-transform-origin: 40.85% 11.54%;-webkit-animation: guamove 2s ease-in-out infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/gua.png"style="position:absolute;-webkit-transform-origin: 46.95% 8.79%;left:362px;top:109px;-webkit-animation: guamove 2s ease-in-out infinite alternate"><div style="position:absolute;left:35px;top:154px;width:420px;-webkit-animation: kuangmove 2s ease-in-out infinite alternate"><div style="position:absolute;top:44px;left:53px;width:323px;height:464px;overflow:hidden;background-color:#000;"><img id="imgv"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl18/kt.png"style="width:420px;position:absolute;-webkit-transform-origin: 54.12% 6.39%;-webkit-transform: scale(1,1)"></div></div><div id="piCU4B10R-an-obj-16"><div id="piCU4B10R-an-obj-17"><div><img height="8"width="40"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/xz.png"></div></div></div><div class="piCU4B10R-an-obj-13"><div class="piCU4B10R-an-obj-14"><div><img height="8"width="40"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/xz.png"></div></div></div><div class="piCU4B10R-an-obj-12"><div><img height="29"width="16"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/ghostun.png"></div></div><div style="position:absolute;top:200px;left:-30px;-webkit-animation:zhuqingting1 8s 2s linear infinite"><div style="position:absolute;top:0px;left:0px;-webkit-transform: scale(1,.5)"><div class="piCU4B10R-an-obj-14"><div><img height="8"width="40"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/xz.png"></div></div></div><img height="29"width="16"style="position:absolute;top:8px;left:-8px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/ghostun.png"></div><div style="position:absolute;top:600px;left:-30px;-webkit-animation:zhuqingting2 10s 5s linear infinite"><div style="position:absolute;top:0px;left:0px;-webkit-transform: scale(1,.5)"><div class="piCU4B10R-an-obj-14"><div><img height="8"width="40"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/xz.png"></div></div></div><img height="29"width="16"style="position:absolute;top:8px;left:-8px;"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/ghostun.png"></div><div id="piCU4B10R-an-obj-15"><div><img height="29"width="16"src="http://referer-image.szwwy.com/coolphoto/img/tpl18/ghostun.png"></div></div><div id="pagetitle"style="pointer:none"><div style="width:400px;left:50px;height:180px;font-size:40px;color:#0A2700;position:absolute;top:250px;overflow:hidden;text-align:center"><div style="width:400px;height:180px;position:absolute;display:table"><div id="titlecontent"style="width:400px;height:150px;display:table-cell;vertical-align:middle;line-height:150%;"></div></div></div></div></div>');
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var delaytime;
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
            id('pageh').style.display = 'block';
            id('pagev').style.display = 'block';
            id('pageh').style.webkitAnimation = '';
            id('pagev').style.webkitAnimation = '';
            // id('pageh').style.display = 'none';
            // id('pagev').style.display = 'none';
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
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

                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                timeout2 = setTimeout(begin_show,1000);
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;
            if(index < 10)
            {

                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            if((have_num+error_num >= 10 || images.length == (have_num + error_num)) && canshow == true)
            {   

                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                // if(e_desc.length<30)
                // {
                //     delaytime = (e_desc.length*0.2 +1)*1000;
                // }
                // else
                // {
                    // delaytime = (30*0.2 +1)*1000;
                // }
                
                timeout2 = setTimeout(begin_show,1000);

            }
        }

        function begin_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image();
            image_url_index++;
            timeout3 = setTimeout(function()
                {
                    id('pageh').style.webkitAnimation = '';
                    id('pagev').style.webkitAnimation = '';
                    timeout4 = setTimeout(begin_show,100);
                },4900);
        }

        function cut_image()
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
            
            if(img_bili>1)
            {
                id('pageh').style.webkitAnimation = 'content_ani 5s linear both';
                img_obj = id('imgh');

                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(376/266))
                {
                    img_obj.style.height = '266px';
                    img_obj.style.width = img_bili*266 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -((img_bili*266-376)/2) + 'px';
                }
                else
                {
                    img_obj.style.width = '376px';
                    img_obj.style.height = 376/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -((376/img_bili-266)/2) + 'px';
                }
            }
            else
            {
                id('pagev').style.webkitAnimation = 'content_ani 4.8s linear both';
                img_obj = id('imgv');

                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(323/464))
                {
                    img_obj.style.height = '464px';
                    img_obj.style.width = img_bili*464 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -((img_bili*464-323)/2) + 'px';
                }
                else
                {
                    img_obj.style.width = '323px';
                    img_obj.style.height = 323/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -((323/img_bili-464)/2) + 'px';
                }   
            }
            img_obj.parentElement.parentElement.parentElement.parentElement.onclick=function() {
                var src = img_obj.src
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
            //log(img_obj.src);
        }
        call_me(load_images);
        load_init_modules();
        function showtitle()
        {
            if(reshow == true)
                return;
            var content = id('titlecontent');
            var html_text = '<div id="texttitle" style="display:block;width:400px;">';
            for(var i = 0;i<e_desc.length;i++)
            {
                html_text = html_text + '<span id="span'+i+'" style="position:relative;-webkit-animation: wordfade 0.7s ease-in-out '+i*0.2+'s both">'+ e_desc[i]+'</span>';
                if(i%10 == 9)
                    html_text = html_text + '<br>';
            }
            content.innerHTML = html_text + '</div>';
        }
        function distitle()
        {
            if(reshow == true)
                return;
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            timeout5 = setTimeout(function()
            {
                id('titlecontent').innerHTML = '';
            },1000)
        }
        function reload_scene()
        {
            reshow = true;
            clearnode();
            load_images();
        }
        function clearnode()
        {
            id('pagev').style.display = 'none';
            id('pageh').style.display = 'none';
            id('pagev').style.webkitAnimation = '';
            id('pageh').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';

        }    
    }
}
