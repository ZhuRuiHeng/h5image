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
        $("#div_player").append('<div id="container"><!--<img src="http://referer-image.szwwy.com/coolphoto/img/tpl25/demo.jpg">--><img src="http://referer-image.szwwy.com/coolphoto/img/tpl25/BG.jpg"><img id="dian1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/dian01.png"><img id="dian2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/dian01.png"><div id="contentbox"style="position:absolute;top:0px;left:0px;opacity:0;"><div id="page1"><div class="shengzi"id="page_v1"><img class="ying"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ying.png"><div class="imgbox"><img id="img_v1"style="position:absolute"></div><img class="kuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/kuang.png"><img class="shengzi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/shengzi.png"></div><div class="shengzi"id="page_h1"><img class="ying1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ying.png"><div class="imgbox1"><img id="img_h1"style="position:absolute"></div><img class="kuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/kuang1.png"><img class="shengzi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/shengzi.png"></div></div><div id="page2"><div class="shengzi"id="page_v2"><img class="ying"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ying.png"><div class="imgbox"><img id="img_v2"style="position:absolute"></div><img class="kuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/kuang.png"><img class="shengzi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/shengzi.png"></div><div class="shengzi"id="page_h2"><img class="ying1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ying.png"><div class="imgbox1"><img id="img_h2"style="position:absolute"></div><img class="kuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/kuang1.png"><img class="shengzi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/shengzi.png"></div></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:440px;height:200px;top:250px;left:30px;font-size:40px;color:#fff;overflow:hidden;"><div style="display:table;width:440px;height:200px;top:0px;left:0px;position:absolute;text-align:center;"><div id="titlecontent"style="display:table-cell;width:440px;height:200px;vertical-align:middle;padding-left:10px;padding-right:10px;line-height:65px;oveflow:hidden;text-shadow:1px 1px 1px #000"></div></div></div><img id="qianhua"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/qianhua.png"><img id="star"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img id="dian3"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/dian01.png"><img id="dian4"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/dian01.png"><img id="dian5"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/dian01.png"><div id="hudiearea1"><div class="hudie"id="hudie1"><img class="chi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/chi01.png"><img class="chi2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/chi01.png"><img class="star1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star3"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star4"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"></div></div><div id="hudiearea2"><div class="hudie"id="hudie2"><img class="chi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/chi01.png"><img class="chi2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/chi01.png"><img class="star1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star3"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"><img class="star4"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/01.png"></div></div><img id="ye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ye01.png"><img id="ye2"src="http://referer-image.szwwy.com/coolphoto/img/tpl25/ye02.png"></div>');
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
        var timeout6;
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
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('page1').style.display = 'none';
            id('page2').style.display = 'none';
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = '';

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

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            id('contentbox').style.webkitAnimation = 'fadein 1s linear 0.5s both';
            begin_show();
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
        function begin_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(1);
            image_url_index++;
            id('page1').style.display = 'none';
            id('page1').style.webkitAnimation = '';
            timeout1 = setTimeout(function()
            {
                id('page1').style.display = 'block';
                id('page1').style.webkitAnimation = 'pagein 10s linear forwards';
            },100);


            timeout2 = setTimeout(next_show,7000);
        }
        function next_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(2);
            image_url_index++;
            id('page2').style.display = 'none';
            id('page2').style.webkitAnimation = '';
            timeout3 = setTimeout(function()
            {
                id('page2').style.display = 'block';
                id('page2').style.webkitAnimation = 'pagein 10s linear forwards';
            },100);

            timeout4 = setTimeout(begin_show,7000);
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
            
            if(img_bili>1)//ºá°æh
            {
                id('page_v'+pageindex).style.display = 'none';
                id('page_h'+pageindex).style.display = 'block';

                var img_obj = id('img_h'+pageindex);
                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(333/205))
                {
                    img_obj.style.height = '205px';
                    img_obj.style.width = img_bili*205 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -((img_bili*205-333)/2) + 'px';
                }
                else
                {
                    img_obj.style.width = '333px';
                    img_obj.style.height = 333/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -((333/img_bili-205)/2) + 'px';
                }
            }
            else //Êú°æv
            {
                id('page_v'+pageindex).style.display = 'block';
                id('page_h'+pageindex).style.display = 'none';

                var img_obj = id('img_v'+pageindex);
                img_obj.src = Onload_imgs_url[image_url_index];

                if(img_bili>(333/400))
                {
                    img_obj.style.height = '400px';
                    img_obj.style.width = img_bili*400 + 'px';
                    img_obj.style.top = '0px';
                    img_obj.style.left = -((img_bili*400-333)/2) + 'px';
                    //log('left:'+img_obj.style.left);
                }
                else
                {
                    img_obj.style.width = '333px';
                    img_obj.style.height = 333/img_bili + 'px';
                    img_obj.style.left = '0px';
                    img_obj.style.top = -((333/img_bili-400)/2) + 'px';
                    //log(img_obj.style.left)
                }   
            }
            var src = img_obj.src;
            img_obj.parentElement.parentElement.parentElement.onclick=function() {
                
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

        function reload_scene()
        {
            reshow = true;
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            setTimeout(load_images,100);
        }    
    }
}
