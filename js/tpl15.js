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
        $("#div_player").append('<div id="container1"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/01.jpg"style="width:500px;height:815px;-webkit-animation:imgchange 12s linear 9s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/02.jpg"style="width:500px;height:815px;-webkit-animation:imgchange 12s linear 6s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/03.jpg"style="width:500px;height:815px;-webkit-animation:imgchange 12s linear 3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/04.jpg"style="width:500px;height:815px;-webkit-animation:imgchange 12s linear infinite"><div id="div1"style="left:25px;top:114px;display:none;z-index:1;"><div class="imgbox"><img id="img1"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/kuang.png"style="position:ansolute"></div><div id="div2"style="left:39px;top:133px;display:none;z-index:2"><div class="imgbox"><img id="img2"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/kuang.png"style="position:ansolute"></div><div id="div3"style="left:38px;top:136px;display:none;z-index:3"><div class="imgbox"><img id="img3"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/kuang.png"style="position:ansolute"></div><div id="div4"style="left:25px;top:111px;display:none;z-index:4"><div class="imgbox"><img id="img4"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/kuang.png"style="position:ansolute"></div><div id="div5"style="left:28px;top:127px;display:none;z-index:5"><div class="imgbox"><img id="img5"style="position:absolute"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl15/kuang.png"style="position:ansolute"></div><div id="pagetitle"style="position:absolute;width:370px;height:227px;top:247px;left:65px;font-size:40px;color:#fff;overflow:hidden;text-shadow:1px 5px 4px rgba(0, 0, 0, 0.2);font-weight:bold;"><div style="position:absolute;width:370px;height:227px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:370px;height:227px;display:table;overflow:hidden;"><div id="titlecontent"style="width:370px;height:227px;vertical-align:middle;display:table-cell;text-align:center;"></div></div></div></div><div id="leafContainer"style="pointer-events: none;z-index:10"></div></div>');
        function leafinit() {
        var container = document.getElementById('leafContainer');
        for (var i = 0; i < leafNum; i++) {
        container.appendChild(createALeaf())
         }
        }
        function randomInteger(low, high) {
            return low + Math.floor(Math.random() * (high - low))
        }
        function randomFloat(low, high) {
            return low + Math.random() * (high - low)
        }
        function pixelValue(value) {
            return value + 'px'
        }
        function durationValue(value) {
            return value + 's'
        }
        function createALeaf() {
            var leafDiv = document.createElement('div');
            var image = document.createElement('img');
            var temp = randomInteger(1, kindNum + 1);
            image.src = kindurl[temp - 1];
            leafDiv.style.top = "-100px";
            leafDiv.style.left = pixelValue(randomInteger(0, 500));
            var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
            leafDiv.style.webkitAnimationName = 'fade, drop';
            image.style.webkitAnimationName = spinAnimationName;
            var fadeAndDropDuration = durationValue(randomFloat(5, 11));
            var spinDuration = durationValue(randomFloat(4, 8));
            leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
            var leafDelay = durationValue(randomFloat(0, 5));
            leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
            image.style.webkitAnimationDuration = spinDuration;
            leafDiv.appendChild(image);
            return leafDiv
        }
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
        var delaytime=5000;

        var leafNum = 15;          
        var kindNum = 4;           
        var kindurl = new Array("http://referer-image.szwwy.com/coolphoto/img/tpl15/1.png","http://referer-image.szwwy.com/coolphoto/img/tpl15/2.png","http://referer-image.szwwy.com/coolphoto/img/tpl15/3.png","http://referer-image.szwwy.com/coolphoto/img/tpl15/4.png");

        function id(name)
        {
            return document.getElementById(name);
        }
        function Init()
        {
            leafinit();
            load_images();
        }
        function load_images()
        {
            div1 = id('div1');
            div2 = id('div2');
            div3 = id('div3');
            div4 = id('div4');
            div5 = id('div5');

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
        function id(name)
        {
            return document.getElementById(name);
        }
        function showtitle()
        {
            //id('titlecontent').innerHTML = e_desc;
            id('pagetitle').style.webkitAnimation = 'showtitle 1s linear both';
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'distitle 1.5s cubic-bezier(.31,.05,.69,1) both';
            show1();
        }
        function show1()
        {
            setImage('1');
            div2.style.webkitAnimation = 'disimg2 1s linear both';
            div1.style.display = 'block';
            div1.style.webkitAnimation = 'showimg1 1.5s ease-out both';

            div1.style.zIndex = 5;
            div5.style.zIndex = 4;
            div4.style.zIndex = 3;
            div3.style.zIndex = 2;
            div2.style.zIndex = 1;

            timeout2 = setTimeout(show2,3000);
        }
        function show2()
        {
            setImage('2');
            div3.style.webkitAnimation = 'disimg3 1s linear both';
            div2.style.display = 'block';
            div2.style.webkitAnimation = 'showimg2 1.5s ease-out both';

            div2.style.zIndex = 5;
            div1.style.zIndex = 4;
            div5.style.zIndex = 3;
            div4.style.zIndex = 2;
            div3.style.zIndex = 1;

            timeout3 = setTimeout(show3,3000);
        }
        function show3()
        {
            setImage('3');
            div4.style.webkitAnimation = 'disimg4 1s linear both';
            div3.style.display = 'block';
            div3.style.webkitAnimation = 'showimg3 1.5s ease-out both';

            div3.style.zIndex = 5;
            div2.style.zIndex = 4;
            div1.style.zIndex = 3;
            div5.style.zIndex = 2;
            div4.style.zIndex = 1;

            timeout4 = setTimeout(show4,3000);
        }
        function show4()
        {
            setImage('4');
            div5.style.webkitAnimation = 'disimg5 1s linear both';
            div4.style.display = 'block';
            div4.style.webkitAnimation = 'showimg4 1.5s ease-out both';

            div4.style.zIndex = 5;
            div3.style.zIndex = 4;
            div2.style.zIndex = 3;
            div1.style.zIndex = 2;
            div5.style.zIndex = 1;

            timeout5 = setTimeout(show5,3000);
        }
        function show5()
        {
            setImage('5');
            div1.style.webkitAnimation = 'disimg1 1s linear both';
            div5.style.display = 'block';
            div5.style.webkitAnimation = 'showimg5 1.5s ease-out both';
            
            div5.style.zIndex = 5;
            div4.style.zIndex = 4;
            div3.style.zIndex = 3;
            div2.style.zIndex = 2;
            div1.style.zIndex = 1;

            timeout6 = setTimeout(show1,3000);
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

            var div = id('div'+idname)
            var img = id('img'+idname);
            img.src = Onload_imgs_url[image_url_index];
            //log(img.src);

            if(img_bili > 1)
            {
                img.style.top = '0px';
                img.style.height = 368 + 'px';
                img.style.width = 368*img_bili + 'px';
                img.style.left = -((368*img_bili-368)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = 368+'px';
                img.style.height = 368/img_bili + 'px';
                img.style.top = -((368/img_bili-368)/2) + 'px';
            }

            //var src=img.src;
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

            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
        }
        call_me(Init);
        load_init_modules();
        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }
        function clearnode()
        {
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('div3').style.webkitAnimation = '';
            id('div4').style.webkitAnimation = '';
            id('div5').style.webkitAnimation = '';
            id('div1').style.display = 'none';
            id('div2').style.display = 'none';
            id('div3').style.display = 'none';
            id('div4').style.display = 'none';
            id('div5').style.display = 'none';
            id('titlecontent').innerHTML = '';
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
