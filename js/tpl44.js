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
        $("#div_player").append('<div id="container"><div style="margin:0 auto;width:0px;height:0px;overflow:hidden;"><img src="" width="700"></div><img src="/Application/Weixin/View/Coolphoto/img/tpl44/bg.jpg"><img id="ye"src="/Application/Weixin/View/Coolphoto/img/tpl44/ye1.png"><img id="ye1"src="/Application/Weixin/View/Coolphoto/img/tpl44/ye1.png"><img id="huapen"src="/Application/Weixin/View/Coolphoto/img/tpl44/xiaohua.png"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/di.png"style="left:-11px;top:474px;"><div id="div3h"style="display:none;-webkit-transform: translate(-94px,303px) rotate(28deg) scale(0.60,0.5);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;height:400px;-webkit-transform: rotate(92deg);left:59px;top:-66px;position:absolute;"><div class="box11h"><img id="img3h"style="position:absolute"></div></div><div id="div3v"style="display:none;-webkit-transform: translate(-94px,351px) rotate(-59deg) scale(0.6)"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;position:absolute;-webkit-transform: rotate(2deg)"><div class="box11v"><img id="img3v"style="position:absolute"></div></div><div id="div2h"style="display:none;-webkit-transform: translate(-85px,275px) rotate(20deg) scale(0.65,0.6);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;height:400px;-webkit-transform: rotate(92deg);left:59px;top:-66px;position:absolute;"><div class="box11h"><img id="img2h"style="position:absolute"></div></div><div id="div2v"style="display:none;-webkit-transform: translate(-118px,269px) rotate(-56deg) scale(0.6,0.5);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;position:absolute;-webkit-transform: rotate(2deg)"><div class="box11v"><img id="img2v"style="position:absolute"></div></div><div id="div11h"style="display:none;-webkit-transform: translate(-120px,408px) scale(.6) rotate(27deg);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;height:400px;-webkit-transform: rotate(92deg);left:59px;top:-66px;position:absolute;"><div class="box11h"><img id="img11h"style="position:absolute"></div></div><div id="div11v"style="display:none;-webkit-transform: translate(-198px,390px) rotate(-57deg) scale(.6);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;position:absolute;-webkit-transform: rotate(2deg)"><div class="box11v"><img id="img11v"style="position:absolute"></div></div><div id="div12h"style="display:none;-webkit-transform: translate(-103px,155px) rotate(27deg) scale(0.7,0.65);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;height:400px;-webkit-transform: rotate(92deg);left:59px;top:-66px;position:absolute;"><div class="box11h"><img id="img12h"style="position:absolute"></div></div><div id="div12v"style="display:none;-webkit-transform: translate(-15px,179px) rotate(-64deg) scale(.60);"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/didid.png"style="width:275px;position:absolute;-webkit-transform: rotate(2deg)"><div class="box11v"><img id="img12v"style="position:absolute"></div></div><img src="/Application/Weixin/View/Coolphoto/img/tpl44/mian.png"style="left:-11px;top:474px;z-index:5"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/ye.png"style="left:183px;top:635px;width:24px;z-index:5;-webkit-animation: yezi 10s ease-out infinite alternate"><div id="hudieareaying"style="-webkit-animation: hudiearea 12s linear infinite;z-index:5"><div id="hudie1ying"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/ying.png"style="position:absolute;-webkit-transform: scale(1,-1);-webkit-transform-origin: 50% 0%;top:61px;-webkit-animation: chibang2 4s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/ying.png"style="position:absolute;left:0px;top:63px;-webkit-transform-origin: 50% 0%;-webkit-animation: chibang1 4s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/shen1.png"style="position:absolute;left:40px;top:44px;"></div></div><div style="position:absolute;-webkit-animation: hudie2plus 15s linear infinite;z-index:5"><div id="hudiearea2ying"><div id="hudie2ying"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/shen1.png"style="position:absolute;left:40px;top:44px;"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/ying.png"style="position:absolute;-webkit-transform: scale(1,-1);-webkit-transform-origin: 50% 0%;top:61px;-webkit-animation: chibang4 15s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/ying.png"style="position:absolute;left:0px;top:63px;-webkit-transform-origin: 50% 0%;-webkit-animation: chibang3 15s linear infinite"></div></div></div><div id="hudiearea"style="-webkit-animation: hudiearea 12s linear infinite;z-index:5"><div id="hudie1"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/02.png"style="position:absolute;-webkit-transform: scale(1,-1);-webkit-transform-origin: 50% 0%;top:61px;-webkit-animation: chibang2 4s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/02.png"style="position:absolute;left:0px;top:63px;-webkit-transform-origin: 50% 0%;-webkit-animation: chibang1 4s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/shen.png"style="position:absolute;left:40px;top:44px;"></div></div><div style="position:absolute;-webkit-animation: hudie2plus 15s linear infinite;z-index:5"><div id="hudiearea2"><div id="hudie2"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/shen.png"style="position:absolute;left:40px;top:44px;"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/02.png"style="position:absolute;-webkit-transform: scale(1,-1);-webkit-transform-origin: 50% 0%;top:61px;-webkit-animation: chibang4 15s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl44/02.png"style="position:absolute;left:0px;top:63px;-webkit-transform-origin: 50% 0%;-webkit-animation: chibang3 15s linear infinite"></div></div></div><div id="pagetitle" style="display:none"><div style="position:absolute;width:420px;top:100px;height:200px;left:40px;"><div id="line1"></div><div id="line2"></div><div id="line3"></div></div></div></div>');
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
            canshow = true;

            //showtitle();
            div11v = id('div11v');
            div12v = id('div12v');
            div11h = id('div11h');
            div12h = id('div12h');
            div2h = id('div2h');
            div2v = id('div2v');
            div3h = id('div3h');
            div3v = id('div3v');


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
            {
                error_num ++;
            }
            Onload_imgs_url[index] = 'not find';
            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);
            if((have_num+error_num >= 10 || images.length == (have_num + error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;

                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('11');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('12');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index++;
                setZIndex(1);
                    
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
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            if(((have_num+error_num) >= 10 || images.length == (have_num + error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;

                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);

                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('11');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('12');
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index++;
                setZIndex(1);
                    
                distitle();

            }
        }
        function id (name) 
        {
            return document.getElementById(name);
        }
        function show1 () 
        {    
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('2',image_url_index);
            image_url_index++;
            setZIndex(1);
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';

            id('div3v').style.webkitAnimation = 'out_div3v 1.5s linear both';
            id('div3h').style.webkitAnimation = 'out_div3h 1.5s linear both';

            id('div11h').style.webkitAnimation = 'in_div11h 1.2s 0.5s linear both';
            id('div12h').style.webkitAnimation = 'in_div12h 1.2s 1.5s linear both';
            id('div11v').style.webkitAnimation = 'in_div11v 1.2s 0.5s linear both';
            id('div12v').style.webkitAnimation = 'in_div12v 1.2s 1.5s linear both';

            timeout1 = setTimeout(changediv1index,1000)
            timeout2 = setTimeout(show2,4000)
        }
        function begin_show()
        {
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';

            id('div3v').style.webkitAnimation = 'out_div3v 1.5s linear both';
            id('div3h').style.webkitAnimation = 'out_div3h 1.5s linear both';

            id('div11h').style.webkitAnimation = 'in_div11h 1.2s 0.5s linear both';
            id('div12h').style.webkitAnimation = 'in_div12h 1.2s 1.5s linear both';
            id('div11v').style.webkitAnimation = 'in_div11v 1.2s 0.5s linear both';
            id('div12v').style.webkitAnimation = 'in_div12v 1.2s 1.5s linear both';

            timeout3 = setTimeout(changediv1index,1000)
            timeout4 = setTimeout(show2,4000)
        }
        function show2 () 
        {

            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div3v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('3',image_url_index);
            image_url_index++;
            setZIndex(2);
            
            id('div11h').style.webkitAnimation = 'out_div11h 1.2s linear both';
            id('div12h').style.webkitAnimation = 'out_div12h 1.5s linear both';
            id('div11v').style.webkitAnimation = 'out_div11v 1.2s linear both';
            id('div12v').style.webkitAnimation = 'out_div12v 1.5s linear both';

            id('div2h').style.webkitAnimation = 'in_div2h 1.8s linear both';
            id('div2v').style.webkitAnimation = 'in_div2v 1.8s linear both';

            timeout5 = setTimeout(show3,4000)
        }
        function show3 () 
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('11',image_url_index);
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('12',image_url_index);
            image_url_index++;
            setZIndex(3);

            id('div11h').style.webkitAnimation = '';
            id('div12h').style.webkitAnimation = '';
            id('div11v').style.webkitAnimation = '';
            id('div12v').style.webkitAnimation = '';


            id('div2h').style.webkitAnimation = 'out_div2h 1.5s linear both';
            id('div2v').style.webkitAnimation = 'out_div2v 1.5s linear both';

            id('div3h').style.webkitAnimation = 'in_div3h 3s linear both';
            id('div3v').style.webkitAnimation = 'in_div3v 3s linear both';

            timeout6 = setTimeout(show1,4000)
        }

        function showtitle()
        {
            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');
            if(e_desc.length>20)//3ÐÐ
            {

                line1.innerHTML = e_desc.substring(0,10);
                line1.className = 'threeline';
                line1.style.top = '28px';
                line1.style.webkitAnimation = 'in_fadeup 1s linear both';
                line2.innerHTML = e_desc.substring(10,20);
                line2.style.top = '78px';
                line2.className = 'threeline';
                line2.style.webkitAnimation = 'in_fadeup 1s linear 0.5s both';
                if(e_desc.length>30)
                {
                    line3.innerHTML = e_desc.substring(20,30);
                }
                else
                {
                    line3.innerHTML = e_desc.substring(20,e_desc.length);
                }

                line3.style.top = '128px';
                line3.className = 'threeline';
                line3.style.webkitAnimation = 'in_fadeup 1s linear 1s both';
            }
            else if(e_desc.length<11)//1ÐÐ
            {
                line1.innerHTML = e_desc;
                line1.className = 'oneline';
                line1.style.top = '0px';
                line1.style.webkitAnimation = 'in_fadeup 1s linear both';

                line2.innerHTML = '';
                line3.innerHTML = '';
            }
            else//2ÐÐ
            {
                line1.innerHTML = e_desc.substring(0,10);
                line2.innerHTML = e_desc.substring(10,e_desc.length);
                line1.className = 'twoline';
                line2.className = 'twoline';
                line1.style.top = '8px';
                line2.style.top = '67px';
                line3.innerHTML = '';

                line2.style.webkitAnimation = 'in_fadeup 1s 0.5s linear both';
                line1.style.webkitAnimation = 'in_fadeup 1s linear both';
            }
        }
        function distitle()
        {
            // var line1 = id('line1');
            // var line2 = id('line2');
            // var line3 = id('line3');
            // var pagetitle = id('pagetitle');
            // if(e_desc.length>20)
            // {
            //     line3.style.webkitAnimation = 'out_fadeup 1s 1s linear both';
            //     line2.style.webkitAnimation = 'out_fadeup 1s 0.5s linear both';
            //     line1.style.webkitAnimation = 'out_fadeup 1s linear both';
            //     pagetitle.style.webkitAnimation = 'fadeout 1s 1s linear both';
            // }
            // else if(e_desc.length<11)
            // {
            //     line1.style.webkitAnimation = 'out_fadeup 1s linear both';
            //     pagetitle.style.webkitAnimation = 'fadeout 1s linear both';
            // }
            // else
            // {
            //     line2.style.webkitAnimation = 'out_fadeup 1s 0.5s linear both';
            //     line1.style.webkitAnimation = 'out_fadeup 1s linear both';
            //     pagetitle.style.webkitAnimation = 'fadeout 1s 0.5s linear both';
            // }
            begin_show();
        }
        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
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
                var width = 349;
                var height = 222;
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
            }
            else
            {
                var width = 227;
                var height = 349;
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            console.log(img.src);

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
            img.onclick=function() {
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

        function setZIndex (pageindex) 
        {   
            if(pageindex == 1)
            {
                div11v.style.zIndex = 4;
                div11h.style.zIndex = 4;
                div12h.style.zIndex = 3;
                div12v.style.zIndex = 3;
                div2v.style.zIndex = 2;
                div2h.style.zIndex = 2;
                div3h.style.zIndex = 5;
                div3v.style.zIndex = 5;
            }
            else if(pageindex == 2)
            {
                div11v.style.zIndex = 1;
                div11h.style.zIndex = 1;
                div12h.style.zIndex = 2;
                div12v.style.zIndex = 2;
                div2v.style.zIndex = 4;
                div2h.style.zIndex = 4;
                div3h.style.zIndex = 3;
                div3v.style.zIndex = 3; 
            }
            else
            {
                div11v.style.zIndex = 3;
                div11h.style.zIndex = 3;
                div12h.style.zIndex = 2;
                div12v.style.zIndex = 2;
                div2v.style.zIndex = 1;
                div2h.style.zIndex = 1;
                div3h.style.zIndex = 4;
                div3v.style.zIndex = 4; 
            }
        }
        function changediv1index()
        {
            div11h.style.zIndex = 3;
            div11v.style.zIndex = 3;
            div12h.style.zIndex = 4;
            div12v.style.zIndex = 4;
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
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation = '';
            id('line1').innerHTML = '';
            id('line2').innerHTML = '';
            id('line3').innerHTML = '';
            div11h.style.webkitAnimation = '';
            div11v.style.webkitAnimation = '';
            div12h.style.webkitAnimation = '';
            div12v.style.webkitAnimation = '';
            div2h.style.webkitAnimation = '';
            div2v.style.webkitAnimation = '';
            div3h.style.webkitAnimation = '';
            div3v.style.webkitAnimation = '';
            div11h.style.display = 'none';
            div11v.style.display = 'none';
            div12h.style.display = 'none';
            div12v.style.display = 'none';
            div2h.style.display = 'none';
            div2v.style.display = 'none';
            div3h.style.display = 'none';
            div3v.style.display = 'none';
            id('pagetitle').style.webkitAnimation = '';

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
