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
        $("#div_player").append('<div id="container"><img style="pointer-events: none;" src="http://referer-image.szwwy.com/coolphoto/img/tpl13/bg.jpg"><div id="div1v"class="divv"style="display:none"><img id="img1v"style="position:absolute"></div><div id="div1h"class="divh"style="display:none"><img id="img1h"style="position:absolute"></div><div id="div2h"class="divh"style="display:none"><img id="img2h"style="position:absolute"></div><div id="div2v"class="divv"style="display:none"><img id="img2v"style="position:absolute"></div><div id="div3v"class="divv"style="display:none"><img id="img3v"style="position:absolute"></div><div id="div3h"class="divh"style="display:none"><img id="img3h"style="position:absolute"></div><div id="div4h"class="divh"style="display:none"><img id="img4h"style="position:absolute"></div><div id="div4v"class="divv"style="display:none"><img id="img4v"style="position:absolute"></div><div id="up1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl13/001.png"><div id="denglong1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl13/002.png"></div><div id="denglong2"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl13/003.png"></div></div><div style="left:60px;top:254px"><img id="xin1"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"><img id="xin2"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"></div><div style="left:176px;top:254px"><img id="xin3"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"><img id="xin4"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"></div><div style="left:275px;top:254px"><img id="xin5"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"><img id="xin6"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"></div><div style="left:370px;top:254px"><img id="xin7"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"><img id="xin8"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"></div><div style="left:235px;top:575px"><img id="xin9"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"><img id="xin10"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/008.png"class="xin"></div><div id="zi"><img id="zi2"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/013.png"><img id="zi0"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/011.png"><img id="zi1"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/012.png"><img id="zi6"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/014.png"></div><div id="houzi"><img id="houziin"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/007.png"></div><img id="upzi"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/xin01.png"><div id="word1"></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:410px;height:200px;top: 390px;left:45px;font-size:40px;color:#C1010D;overflow:hidden;font-weight:bold;opacity:0;"><div style="position:absolute;width:410px;height:200px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent"style="width:410px;height:200px;text-align:left;line-height:50px;"></div></div></div></div><img id="down1"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/004.png"><img id="down2"src="http://referer-image.szwwy.com/coolphoto/img/tpl13/005.png"></div>');
        $('img').css('pointer-events','none');
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
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                        {
                            distitle();
                        },dis_titletime);
                }
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
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                        {
                            distitle();
                        },dis_titletime);
                }
            }
        }
        function showtitle()
        {
            id('down1').style.webkitAnimation = 'down1_in 1.2s linear both';
            id('down2').style.webkitAnimation = 'down2_in 1.2s ease-out both';

            id('up1').style.webkitAnimation = 'down1_in 1.5s linear both';
            id('denglong1').style.webkitAnimation = 'denglong_in 1.5s 1s ease-out both';
            id('denglong2').style.webkitAnimation = 'denglong_in 1.5s 1.5s ease-out both';

            id('houzi').style.webkitAnimation = 'houzi_in 3s linear both';
            id('zi2').style.webkitAnimation = 'zi_in 0.5s ease-out 0.5s both';
            id('zi0').style.webkitAnimation = 'zi_in 0.5s ease-out 1s both';
            id('zi1').style.webkitAnimation = 'zi_in 0.5s ease-out 1.6s both';
            id('zi6').style.webkitAnimation = 'zi_in 0.5s ease-out 2.2s both';

            id('xin1').style.webkitAnimation = 'xin1 1s 0.8s linear forwards';
            id('xin2').style.webkitAnimation = 'xin2 1s 0.8s linear forwards';
            id('xin3').style.webkitAnimation = 'xin1 1s 1.3s linear forwards';
            id('xin4').style.webkitAnimation = 'xin2 1s 1.3s linear forwards';
            id('xin5').style.webkitAnimation = 'xin1 1s 1.8s linear forwards';
            id('xin6').style.webkitAnimation = 'xin2 1s 1.8s  linear forwards';
            id('xin7').style.webkitAnimation = 'xin1 1s 2.3s linear forwards';
            id('xin8').style.webkitAnimation = 'xin2 1s 2.3s linear forwards';
            id('xin9').style.webkitAnimation = 'xin11 2s 3s linear forwards infinite';
            id('xin10').style.webkitAnimation = 'xin22 2s 3s linear forwards infinite';

            id('zi').style.webkitAnimation = 'zidiv_in 1s ease-out 3s both';
            id('word1').style.webkitAnimation = 'fadein 1s ease-out 3s both';
            id('pagetitle').style.webkitAnimation = 'title_in 1s ease-out 3s both';
            id('upzi').style.webkitAnimation = 'upzi_in 1s ease-out 3s both';
            //id('titlecontent').innerHTML = e_desc;

        }

        function distitle()
        {
            // return;
            id('zi').style.webkitAnimation = 'zidiv_out 1.5s linear both';
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';
            id('word1').style.webkitAnimation = 'title_out 1s linear both';

            timeout1 = setTimeout(show1,1000);
        }
        function show1 () 
        {
            setImage('1');
            id('div1v').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1v').style.pointerEvents="auto";
            id('div1h').style.pointerEvents="auto";

            timeout2 = setTimeout(show2,4000)
        }
        function show2 () 
        {
            setImage('2');
            id('div1v').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1v').style.pointerEvents="none";
            id('div1h').style.pointerEvents="none";

            id('div2h').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div2v').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div2h').style.pointerEvents="auto";
            id('div2v').style.pointerEvents="auto";

            timeout3 = setTimeout(show3,4000)
        }
        function show3 () 
        {
            setImage('3');
            id('div2h').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div2v').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div2h').style.pointerEvents="none";
            id('div2v').style.pointerEvents="none";

            id('div3v').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div3h').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div3v').style.pointerEvents="auto";
            id('div3h').style.pointerEvents="auto";

            timeout4 = setTimeout(show4,4000)
        }
        function show4 () 
        {
            setImage('4');
            id('div3v').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div3h').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div3v').style.pointerEvents="none";
            id('div3h').style.pointerEvents="none";

            id('div4h').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div4v').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div4h').style.pointerEvents="auto";
            id('div4v').style.pointerEvents="auto";
            timeout5 = setTimeout(show1_1,4000)
        }
        function show1_1 () 
        {
            setImage('1');
            id('div4h').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div4v').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div4h').style.pointerEvents="none";
            id('div4v').style.pointerEvents="none";

            id('div1v').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';
            id('div1v').style.pointerEvents="auto";
            id('div1h').style.pointerEvents="auto";

            timeout6 = setTimeout(show2,4000);
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

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                width = 437;
                height = 309;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                width = 437;
                height = 580;
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
            var src=img.src;
            img.parentElement.onclick=function() {
                //var src = this.src
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
            image_url_index++;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index = 0;
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
        function clearnode()
        {
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);

            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div4h').style.display = 'none';
            id('div4v').style.display = 'none';
            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';
            
            id('down1').style.webkitAnimation = '';
            id('down2').style.webkitAnimation = '';
            id('up1').style.webkitAnimation = '';
            id('denglong1').style.webkitAnimation = '';
            id('denglong2').style.webkitAnimation = '';
            id('houzi').style.webkitAnimation = '';
            id('zi2').style.webkitAnimation = '';
            id('zi0').style.webkitAnimation = '';
            id('zi1').style.webkitAnimation = '';
            id('zi6').style.webkitAnimation = '';
            id('xin1').style.webkitAnimation = '';
            id('xin2').style.webkitAnimation = '';
            id('xin3').style.webkitAnimation = '';
            id('xin4').style.webkitAnimation = '';
            id('xin5').style.webkitAnimation = '';
            id('xin6').style.webkitAnimation = '';
            id('xin7').style.webkitAnimation = '';
            id('xin8').style.webkitAnimation = '';
            id('xin9').style.webkitAnimation = '';
            id('xin10').style.webkitAnimation = '';
            id('zi').style.webkitAnimation = '';
            id('word1').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('upzi').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';
            
        }    
    }
}
