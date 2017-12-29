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
        $("#div_player").append('<div id="container"><img id="back"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/1.png"><img id="zhuzi"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/2.png"><img id="ye4"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/2000.png"><div id="contentbox"style="position:absolute;top:0px;left:0px;opacity:0;"><div id="content"><div id="huabu"><div id="img_con"><img id="myimg"></div><img id="biankuang1"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/11.png"><img id="biankuang2"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/12.png"></div><img id="shengzi1"class="shengzi"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/13.png"><img id="shengzi2"class="shengzi"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/13.png"></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:440px;height:200px;top:250px;left:30px;font-size:40px;color:#fff;overflow:hidden;"><div style="display:table;width:440px;height:200px;top:0px;left:0px;position:absolute;text-align:center;"><div id="titlecontent"style="display:table-cell;width:440px;height:200px;vertical-align:middle;padding-left:10px;padding-right:10px;line-height:65px;oveflow:hidden;text-shadow:1px 1px 1px #000"></div></div></div><img id="ye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/15.png"><img id="ye2"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/14.png"><img id="ye3"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/3.png"><div id="ye5_con"><img id="ye5"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/4.png"></div><div id="ye6_con"><img id="ye6"src="http://referer-image.szwwy.com/coolphoto/img/tpl36/3.png"></div></div>');
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var canshow = true;
        var myimg;
        var reshow = false;
        var timeout;
        var timeout1;
        var timeout0;
        var have_num = 0;
        var error_num = 0;
        var delaytime = 4000;
        function id (name)
        {
            return document.getElementById(name);
        }

        function summer_load_image ()
        {
            reshow = false;
            clearTimeout(timeout);
            clearTimeout(timeout1);
            clearTimeout(timeout0);
            id('pagetitle').style.webkitAnimation = '';
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];

            image_url_index=0;
            have_num = 0;
            error_num = 0;

            canshow = true;
            myimg=id('myimg');
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //id('titlecontent').innerHTML = e_desc;
            id('content').style.webkitAnimation='';

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

        Onload_imgs_url = new Array();
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

        function image_onload (event)
        {
            if(reshow ==true)
                return;

            var img=event.target;
            var index = img.index;

            if(index<10)
            {
                have_num++;
            }
            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height;

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {

                canshow=false;
                reshow = false;

                if(have_num == 0)
                    return;

                distitle();
            }

            // img.
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            id('contentbox').style.webkitAnimation = 'fadein 1s linear 0.5s both';

            setTimeout(begin_show,1000)
        }
        function begin_show ()
        {
            if(reshow ==true)
                return;
            //log('begin'+reshow);

            if(image_url_index==Onload_imgs_url.length)
                image_url_index=0;
            cut_image();
            id('content').style.webkitAnimation='content_ani 4s linear both';
            image_url_index++;

            timeout = setTimeout(clean_ani,4500);
        }

        function clean_ani ()
        {
            if(reshow ==true)
                return;
            // //log('clean'+reshow);
            id('content').style.webkitAnimation='';
            setTimeout(begin_show,100);
        }

        function cut_image ()
        {
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            var img_width=image_size_width[image_url_index];
            var img_height=image_size_height[image_url_index];
            var img_bili=img_width/img_height;

            if(img_bili>=(348/490))
            {
                // myimg.height=490;
                // myimg.width=490*img_bili;
                // myimg.style.top='0px';
                // myimg.style.left='-'+((myimg.width-348)/2)+'px';

                myimg.width=348;
                myimg.height=348/img_bili;
                myimg.style.top='0px';
                myimg.style.left='0px';

                id('biankuang2').style.top=(myimg.height+119)+'px';
                id('img_con').style.height=myimg.height+'px';
            }
            else
            {
                myimg.width=348;
                myimg.height=348/img_bili;
                myimg.style.left='0px';
                myimg.style.top='-'+((myimg.height-490)/2)+'px';

                id('biankuang2').style.top='610px';
                id('img_con').style.height='490px';
            }

            myimg.src=Onload_imgs_url[image_url_index];
            //log(myimg.src);
            myimg.onclick=function() {
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

        call_me(summer_load_image);
        load_init_modules();


        function reload_scene()
        {
            reshow = true;
            //log('end');
            summer_load_image();

        }    
    }
}
