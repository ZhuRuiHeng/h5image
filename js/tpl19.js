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
        $("#div_player").append('<div id="container"><div id="psKO4Oc0R-an-obj-1"><div><img height="815"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/bg.jpg"></div></div><div id="psKO4Oc0R-an-obj-22"><div><img height="58"width="118"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/yun.png"></div></div><div id="pagecontain"style="width:367px;height:409px;border-radius:26px;background-color:white;"><div id="pagebox2"style="top:2px;left:2px"><div id="page2"></div></div><div id="pagebox1"style="top:2px;left:2px;"><div id="page1"></div></div><div id="psKO4Oc0R-an-obj-14"><div><img height="417"width="377"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/xian.png"></div></div></div><div style="position:absolute;top:-30px;"><div id="psKO4Oc0R-an-obj-2"><div><img height="33"width="281"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/yzz.png"></div></div><div id="psKO4Oc0R-an-obj-3"><div><img height="221"width="177"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/bd.png"></div></div><div id="psKO4Oc0R-an-obj-4"><div><img height="59"width="82"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/fc.png"></div></div><div id="psKO4Oc0R-an-obj-5"><div><img height="9"width="14"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/mus.png"></div></div><div id="psKO4Oc0R-an-obj-6"><div><img height="14"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/smk.png"></div></div><div id="psKO4Oc0R-an-obj-7"><div><img height="10"width="10"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/smke.png"></div></div><div id="psKO4Oc0R-an-obj-8"><div><img height="13"width="19"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/smkr.png"></div></div><div id="psKO4Oc0R-an-obj-9"><div><img height="13"width="19"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/smkr.png"></div></div><div id="psKO4Oc0R-an-obj-10"><div><img height="141"width="103"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/rbd.png"></div></div><div id="psKO4Oc0R-an-obj-11"><div><img height="59"width="81"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/rfc.png"></div></div><div id="psKO4Oc0R-an-obj-12"><div><img height="83"width="97"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/vh.png"></div></div><div id="psKO4Oc0R-an-obj-13"><div><img height="9"width="45"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/ez.png"></div></div><div id="psKO4Oc0R-an-obj-15"><div id="word1"style="position:absolute;opacity:0;top:-20px;"><div id="psKO4Oc0R-an-obj-16"><div><img height="41"width="179"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/tx.png"></div></div></div></div><div id="psKO4Oc0R-an-obj-17"><div id="word2"style="position:absolute;opacity:0;top:-20px;"><div id="psKO4Oc0R-an-obj-18"><div><img height="54"width="91"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/tx2.png"></div></div></div></div><div id="psKO4Oc0R-an-obj-23"><div><img height="19"width="19"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/zzz.png"></div></div></div><div id="psKO4Oc0R-an-obj-19"><div><img height="58"width="118"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/yun.png"></div></div><div id="psKO4Oc0R-an-obj-20"><div><img height="58"width="118"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/yun.png"></div></div><div id="psKO4Oc0R-an-obj-21"><div><img height="93"width="67"src="http://referer-image.szwwy.com/coolphoto/img/tpl19/qiqiu.png"></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:440px;height:300px;top:238px;left:30px;font-size:38px;color:#fff;overflow:hidden;font-weight:bold;opacity:0;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl19/xian1.png"style="width:440px;height:200px;"><div style="position:absolute;width:403px;height:148px;top:20px;left:20px;overflow:hidden;"><div style="position:absolute;width:403px;height:148px;display:table;overflow:hidden;"><div id="titlecontent"style="width:403px;height:148px;vertical-align:middle;display:table-cell;text-align:center;line-height:130%;color:#975D49;"></div></div></div></div></div>');
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var canshow = true;
        var reshow = false;
        var have_num = 0;
        var error_num = 0;

        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var begintime = 0;
        var showtime = 0;
        var timeout4;
        var timeout5;
        var delaytime = 3000;
        function id(name)
        {
            return document.getElementById(name);
        }

        function Initload()
        {
            var d = new Date();
            begintime = d.getTime();
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
            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';
            id('pagebox1').style.webkitAnimation = '';
            id('pagebox2').style.webkitAnimation = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            canshow = true;

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //showtitle();

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
                toshow();
            }
        }
        function showtitle()
        {
            //id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'aa_in_bounce_down 1s ease-out both';

            id('word1').style.opacity = 1;
            id('word1').style.webkitAnimation = 'ps_in_bounce_up 2s ease forwards';
            id('word2').style.opacity = 1;
            id('word2').style.webkitAnimation = 'ps_in_bounce_up 2s 1s ease both';
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_out_bounce_up 1s 1.5s ease-in both';
            toshow();
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
                toshow();

            }
        }

        function toshow()
        {
            var d = new Date();
            showtime = d.getTime();
            var distime = showtime - begintime;

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

            id('pagecontain').style.opacity = 1;
            id('pagecontain').style.webkitAnimation = 'ps_in_bounce_down 2s 2s ease both';

            begin_show();
        }

        function begin_show()
        {
            if(reshow == true)
                return;



            id('page1').style.webkitAnimation = 'move_to_right 2.5s linear 3s both';
            id('pagebox1').style.webkitAnimation = 'move_to_left 2.5s linear 3s both';


            timeout1 = setTimeout(next_show,9000);

            // timeout2 = setTimeout(next_show,5000);
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

            if(img_bili >(363/404))
            {
                img_obj.style.backgroundSize = 404*img_bili+'px 404px';
                img_obj.style.backgroundPosition = -(404*img_bili-363)/2+'px 0px';
            }
            else
            {
                img_obj.style.backgroundSize = '363px '+ (363/img_bili)+'px';
                img_obj.style.backgroundPosition = '0px '+ (-(363/img_bili-404)/2)+'px';
            }
            //log(img_obj.style.backgroundImage);
            img_obj.style.backgroundImage='url('+Onload_imgs_url[image_url_index]+')';
            var src=Onload_imgs_url[image_url_index]
            img_obj.parentElement.parentElement.parentElement.onclick=function() {
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
        call_me(Initload);
        load_init_modules();

        function reload_scene()
        {
            reshow = true;
            clearnode();
            setTimeout(load_images,100)
        }

        function clearnode()
        {
            id('page1').style.webkitAnimation = '';
            id('pagebox1').style.webkitAnimation = '';
            id('pagecontain').style.opacity = 0;
            id('pagecontain').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            id('pagetitle').style.webkitAnimation = '';
            id('word1').style.webkitAnimation = '';
            id('word2').style.webkitAnimation = '';
        }    
    }
}
