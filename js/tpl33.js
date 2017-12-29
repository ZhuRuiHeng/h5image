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
        $("#div_player").append('<div id="container"><div id="pYQGzuJ0p-an-obj-1"><div><img height="815"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.jpg"></div></div><div id="pYQGzuJ0p-an-obj-2"><div><img height="287"width="287"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/09.png"></div><div id="pYQGzuJ0p-an-obj-3"><div><img height="342"width="342"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/08.png"></div></div><div id="pYQGzuJ0p-an-obj-4"><div><img height="342"width="342"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/08.png"></div></div><div id="showpage11"style="position:absolute;top:0px;left:0px;opacity:0;"><div id="pagebox2"><div id="page2"></div></div><div id="pagebox1"><div id="page1"></div></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:200px;height:148px;top:71px;left:44px;font-size:25px;color:#fff;overflow:hidden;font-weight:bold;opacity:0;"><div style="position:absolute;width:200px;height:148px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:200px;height:148px;display:table;overflow:hidden;"><div id="titlecontent"style="width:200px;height:148px;vertical-align:middle;display:table-cell;text-align:center;color:#975D49;"></div></div></div></div></div><div id="pYQGzuJ0p-an-obj-6"><div><img height="295"width="477"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/07.png"></div></div><div id="pYQGzuJ0p-an-obj-7"><div><img height="295"width="477"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/07.png"></div></div><div id="pYQGzuJ0p-an-obj-8"><div><img height="39"width="64"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/12.png"></div></div><div id="pYQGzuJ0p-an-obj-9"><div><img height="34"width="60"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/11.png"></div></div><div id="pYQGzuJ0p-an-obj-10"><div><img height="30"width="55"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/10.png"></div></div><div id="pYQGzuJ0p-an-obj-11"><div><img height="436"width="452"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/02.png"></div></div><div id="pYQGzuJ0p-an-obj-12"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-13"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-14"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-15"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-16"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-17"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-18"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div><div id="pYQGzuJ0p-an-obj-19"><div><img height="23"width="23"src="http://referer-image.szwwy.com/coolphoto/img/tpl33/00.png"></div></div></div>');
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
        var begintime = 0;
        var showtime = 0;
        var timeout4;
        var timeout5;
        var delaytime = 6000;
        function id(name)
        {
            return document.getElementById(name);
        }

        function Initload()
        {
            var d = new Date();
            begintime = d.getTime();
            id('pYQGzuJ0p-an-obj-2').style.webkitAnimation = 'ani-pYQGzuJ0p-an-obj-2-0 3.5s 0s 1 linear normal both';
            load_images();

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

            clearTimeout(timeout0);
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
            if(reshow == true)
                return;

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
            if(index<10)
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
            id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'showpage11 1s linear both';
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            toshow();
        }
        function toshow()
        {
            var d = new Date();
            showtime = d.getTime();
            var distime = showtime - begintime;
            if(distime >=2000)
            {
                if(Onload_imgs_url.length == 1)
                {
                    Onload_imgs_url[1] = Onload_imgs_url[0];
                }
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                cut_image(1);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                cut_image(2);
                image_url_index++;
                begin_show();
            }
            else
            {
                var waittime = 2000-distime;
                timeout5 = setTimeout(function()
                {
                    if(Onload_imgs_url.length == 1)
                    {
                        Onload_imgs_url[1] = Onload_imgs_url[0];
                    }
                    if(image_url_index == Onload_imgs_url.length)
                        image_url_index = 0;
                    cut_image(1);
                    image_url_index++;
                    if(image_url_index == Onload_imgs_url.length)
                        image_url_index = 0;
                    cut_image(2);
                    image_url_index++;
                    begin_show();
                },waittime);
            }
        }
        function begin_show()
        {
            if(reshow == true)
                return;

            id('showpage11').style.webkitAnimation = 'showpage11 1s linear both';
            id('page1').style.webkitAnimation = 'move_to_right 2.5s linear 3s both';
            id('pagebox1').style.webkitAnimation = 'move_to_left 2.5s linear 3s both';

            timeout1 = setTimeout(next_show,9000);

        }
        function next_show()
        {
            if(reshow == true)
                return;

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(1);
            image_url_index++;


            id('page1').style.webkitAnimation = 'move_to_left1 2.5s linear both';
            id('pagebox1').style.webkitAnimation = 'move_to_right1 2.5s linear both';



            timeout2 = setTimeout(nextnext_show,6000);
        }
        function nextnext_show()
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            cut_image(2);
            image_url_index++;

            id('page1').style.webkitAnimation = 'move_to_right 2.5s linear both';
            id('pagebox1').style.webkitAnimation = 'move_to_left 2.5s linear both';

            timeout3 = setTimeout(next_show,6000);
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
            
            var img_obj = id('page'+pageindex);

            if(img_bili >1)
            {
                img_obj.style.backgroundSize = 280*img_bili+'px 280px';
                img_obj.style.backgroundPosition = -(280*img_bili-280)/2+'px 0px';
            }
            else
            {
                img_obj.style.backgroundSize = '280px '+ (280/img_bili)+'px';
                img_obj.style.backgroundPosition = '0px '+ (-(280/img_bili-280)/2)+'px';
            }
            img_obj.style.backgroundImage='url('+Onload_imgs_url[image_url_index]+')';
            //log(img_obj.style.backgroundImage);
            var src = Onload_imgs_url[image_url_index];
            img_obj.onclick=function() {
                
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
        call_me(Initload);
        
load_init_modules();

        function reload_scene()
        {
            reshow = true;
            id('pYQGzuJ0p-an-obj-2').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            // id('showpage11').style.display = 'none';
            id('showpage11').style.webkitAnimation = '';
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('pagebox1').style.webkitAnimation = '';
            id('pagebox2').style.webkitAnimation = '';
            setTimeout(Initload,100)
        }
    
    }
}
