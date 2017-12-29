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
        $("#div_player").append('<div id="container"><div id="pW9Jemt2f-an-obj-1"><div><img height="815"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/000.jpg"></div></div><div id="pW9Jemt2f-an-obj-2"><div><img height="567"width="567"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/01.png"></div></div><div id="pW9Jemt2f-an-obj-3"><div><img height="567"width="567"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/01.png"></div></div><div id="pW9Jemt2f-an-obj-4"><div><img height="336"width="492"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/06.png"></div></div><div id="pW9Jemt2f-an-obj-5"><div><img height="336"width="492"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/06.png"></div></div><div id="pW9Jemt2f-an-obj-6"><div><img height="130"width="79"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/02.png"></div></div><div id="pW9Jemt2f-an-obj-7"><div><img height="117"width="27"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/03.png"></div></div><div id="pW9Jemt2f-an-obj-8"><div><img height="80"width="70"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/04.png"></div></div><div id="pW9Jemt2f-an-obj-9"><div><img height="106"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/05.png"></div></div><div id="pW9Jemt2f-an-obj-10"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-11"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-12"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-13"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-14"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-15"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-16"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-17"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-18"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-19"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-20"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pW9Jemt2f-an-obj-21"><div><img height="35"width="39"src="http://referer-image.szwwy.com/coolphoto/img/tpl47/07.png"></div></div><div id="pagebox"><div id="page1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl47/ps.png"><div style="position:absolute;top:159px;left:16px;width:307px;height:292px;-webkit-mask:url(http://referer-image.szwwy.com/coolphoto/img/tpl47/ps2.png);overflow:hidden;background-color:#fff;";><img id="img1"><div id="pagetitle"style="display:none;position:absolute;width:214px;height:172px;top:66px;left:45px;font-size:30px;overflow:hidden;opacity:0;"><div style="position:absolute;width:214px;height:172px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:214px;height:172px;display:table;overflow:hidden;"><div id="titlecontent"style="width:214px;height:172px;vertical-align:middle;display:table-cell;text-align:center;color:#6E452E;"></div></div></div></div></div></div><div id="page2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl47/ps.png"><div style="position:absolute;top:159px;left:16px;width:307px;height:292px;-webkit-mask:url(http://referer-image.szwwy.com/coolphoto/img/tpl47/ps2.png);overflow:hidden;";><img id="img2"></div></div></div></div>');
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var canshow = true;
        var reshow = false;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;

        var havenum = 0;
        var error_num = 0;
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

            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';

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
            if((have_num+error_num >= 10 || slider_images_url.length == (have_num+error_num)) && canshow == true)
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
            {
                have_num++;     
            }
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
            id('pagetitle').style.webkitAnimation = 'fadein 1s linear both';
        }
        function distitle()
        {
            //id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            toshow();
        }
        function toshow()
        {
            // if(image_url_index == Onload_imgs_url.length)
            //     image_url_index = 0;
            // cut_image(image_url_index,1);
            // image_url_index++;
            begin_show();
        }
        function begin_show()
        {
            if(reshow == true)
                return;

            id('page1').style.webkitAnimation = 'pageout 1s linear both';
            timeout1 = setTimeout(function()
            {
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                cut_image(2);
                image_url_index++;
                id('page2').style.webkitAnimation = 'pagein 1s linear both';
            },1000);


            timeout2 = setTimeout(next_show,5000);
        }
        function next_show()
        {
            if(reshow == true)
                return;

            id('page2').style.webkitAnimation = 'pageout 1s linear both';
            timeout3 = setTimeout(function()
            {
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                cut_image(1);
                image_url_index++;
                id('page1').style.webkitAnimation = 'pagein 1s linear both';
            },1000);

            timeout4 = setTimeout(begin_show,5000);
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
            
            var img_obj = id('img'+pageindex);
            if(img_bili >(307/292))
            {
                img_obj.style.height = '292px';
                img_obj.style.top = '0px';
                img_obj.style.width = 292*img_bili+'px';
                img_obj.style.left = -(292*img_bili-307)/2+'px';
            }
            else
            {
                img_obj.style.width = '307px';
                img_obj.style.left = '0px';
                img_obj.style.height = 307/img_bili+'px';
                img_obj.style.top = -(307/img_bili-292)/2+'px';
            }
            img_obj.src=Onload_imgs_url[image_url_index];
            img_obj.onclick=function() {
                var src = this.src;
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
            id('img1').src = '';
            id('img2').src = '';
            setTimeout(load_images,100);
        }    
    }
}
