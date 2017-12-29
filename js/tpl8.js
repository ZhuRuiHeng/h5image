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
        $("#div_player").append('<div id="container"><img style="pointer-events: none;" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/11.jpg"><div id="pagetitle"><div id="linetop"></div><div id="line1"></div><div id="line2"></div><div id="line3"></div><div id="linebottom"></div></div><div id="div12v" style="display:none"><img id="img12v" style="position:absolute"></div><div id="div12h" style="display:none"><img id="img12h" style="position:absolute"></div><div id="div11h" style="display:none"><img id="img11h" style="position:absolute"></div><div id="div11v" style="display:none"><img id="img11v" style="position:absolute"></div><div id="div2v" style="display:none"><img id="img2v" style="position:absolute"></div><div id="div2h" style="display:none"><img id="img2h" style="position:absolute"></div><div id="div3v" style="display:none"><img id="img3v" style="position:absolute"></div><div id="div3h" style="display:none"><img id="img3h" style="position:absolute"></div><div id="div4h" style="display:none"><img id="img4h" style="position:absolute"></div><div id="div4v" style="display:none"><img id="img4v" style="position:absolute"></div><div id="div5v" style="display:none"><img id="img5v" style="position:absolute"></div><div id="div5h" style="display:none"><img id="img5h" style="position:absolute"></div><img style="pointer-events: none;" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/13.png"><img id="xian" style="position:absolute;left:0px;top:100px;width:600px;"><img id="xuehua1" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/xue2.png" style="left: 120px;top:265px;-webkit-transform: translate(0px,0px) rotate(0deg) scale(.3);opacity:0;"><img id="xuehua2" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/xue1.png" style="left:35px;top:25px;-webkit-animation: flowsnow 20s linear infinite;"><img id="xuehua3" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/xue3.png" style="left:170px;top:25px;-webkit-animation: flowsnow 15s 3s linear infinite;"><img id="xuehua4" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/xue3.png" style="left:239px;top:650px;-webkit-animation: snowrotate 15s linear infinite;display:none"><img id="star1" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:368px;top:670px;-webkit-animation: starshining 7s linear infinite"><img id="star2" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:56px;top:388px;-webkit-animation: starshining 7s 2s linear infinite both"><img id="star3" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:63px;top:42px;-webkit-animation: starshining 7s 4s linear infinite both"><img id="star4" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:209px;top:76px;width:30px;-webkit-animation: starshining 7s 6s linear infinite both"><img id="star5" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:340px;top:52px;width:30px;-webkit-animation: starshining 7s 1s linear infinite both"><img id="star6" src="http://referer-image.szwwy.com/coolphoto/img/tpl8/ying.png" style="left:375px;top:86px;-webkit-animation: starshining 7s 3s linear infinite both"></div>');
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
        var timeout7;
        var timeout8;
        var timeout9;
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
            canshow = true;
            loadxianimage();
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
            //console.log(Onload_imgs_url[index]);
            //console.log(have_num + '-' + error_num);
            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                timeout4 = setTimeout(show1,1000);
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

            //console.log(Onload_imgs_url[index]);
            //console.log(have_num + '-' + error_num);

            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                timeout4 = setTimeout(show1,1000);

            }
        }
        function id(name)
        {
            return document.getElementById(name);
        }

        function showtitle()
        {
            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');
            var linetop = id('linetop');
            var linebottom = id('linebottom');
            id('xian').style.top = '100px';
            id('xian').style.webkitTransform = 'translate(0px,0px) rotate(0deg)';
            if(e_desc.length>20)//3行
            {

                line1.innerHTML = e_desc.substring(0,10);
                line1.className = 'threeline';
                line1.style.top = '28px';
                line1.style.webkitAnimation = 'in_fadedown 0.7s linear 1.2s both';
                line2.innerHTML = e_desc.substring(10,20);
                line2.style.top = '78px';
                line2.className = 'threeline';
                line2.style.webkitAnimation = 'in_fadedown 0.7s linear 0.8s both';
                line3.innerHTML = e_desc.substring(20,e_desc.length);
                line3.style.top = '128px';
                line3.className = 'threeline';
                line3.style.webkitAnimation = 'in_fadedown 0.7s linear 0.4s both';

                linetop.style.top = '0px';
                linetop.style.webkitAnimation = 'in_fadedown 0.7s linear 1.6s both';

                linebottom.style.top = '200px';
                linebottom.style.webkitAnimation = 'in_fadedown 0.7s linear both';

                timeout1 = setTimeout(function()
                {
                    xian = setInterval(xian_ani,50);
                },2300)
            }
            else if(e_desc.length<11)//1行
            {
                line1.innerHTML = e_desc;
                line1.className = 'oneline';
                line1.style.top = '0px';
                line1.style.webkitAnimation = 'in_fadedown 0.7s linear 0.4s both';

                line2.innerHTML = '';
                line3.innerHTML = '';

                linetop.style.top = '0px';
                linetop.style.webkitAnimation = 'in_fadedown 0.7s linear 0.8s both';

                linebottom.style.top = '98px';
                linebottom.style.webkitAnimation = 'in_fadedown 0.7s linear both';

                timeout2 = setTimeout(function()
                {
                    xian = setInterval(xian_ani,50);
                },1500)
            }
            else//2行
            {
                line1.innerHTML = e_desc.substring(0,10);
                line2.innerHTML = e_desc.substring(10,e_desc.length);
                line1.className = 'twoline';
                line2.className = 'twoline';
                line1.style.top = '8px';
                line2.style.top = '67px';
                line3.innerHTML = '';

                linetop.style.top = '0px';
                linebottom.style.top = '150px';
                linebottom.style.webkitAnimation = 'in_fadedown 0.7s linear both';
                line2.style.webkitAnimation = 'in_fadedown 0.7s 0.4s linear both';
                line1.style.webkitAnimation = 'in_fadedown 0.7s 0.8s linear both';
                linetop.style.webkitAnimation = 'in_fadedown 0.7s 1.2s linear both';
                timeout3 = setTimeout(function()
                {
                    xian = setInterval(xian_ani,50);
                },1900)
            }
        }
        function distitle()
        {
            // return;
            id('linebottom').style.webkitAnimation = 'out_fadedown 0.7s linear both';
            var line1 = id('line1');
            var line2 = id('line2');
            var line3 = id('line3');
            var linetop = id('linetop');
            if(e_desc.length>20)
            {
                line3.style.webkitAnimation = 'out_fadedown 0.7s 0.3s linear both';
                line2.style.webkitAnimation = 'out_fadedown 0.7s 0.6s linear both';
                line1.style.webkitAnimation = 'out_fadedown 0.7s 0.9s linear both';
                linetop.style.webkitAnimation = 'out_fadedown 0.7s 1.2s linear both';
            }
            else if(e_desc.length<11)
            {
                line1.style.webkitAnimation = 'out_fadedown 0.7s 0.3s linear both';
                linetop.style.webkitAnimation = 'out_fadedown 0.7s 0.6s linear both';
            }
            else
            {
                line2.style.webkitAnimation = 'out_fadedown 0.7s 0.3s linear both';
                line1.style.webkitAnimation = 'out_fadedown 0.7s 0.6s linear both';
                linetop.style.webkitAnimation = 'out_fadedown 0.7s 0.9s linear both';
            }

            timeout4 = setTimeout(show1,1000);
        }

        function show1()
        {
            id('div5h').style.webkitAnimation = 'out_div5h 1.2s ease-in both';
            id('div5v').style.webkitAnimation = 'out_div5h 1.2s ease-in both';
            id('div5v').style.pointerEvents="none"

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('11');
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('12');
            image_url_index++;

            id('div12h').style.webkitAnimation = 'in_fadedown1 1.6s 0.9s ease-in-out both';
            id('div11h').style.webkitAnimation = 'in_fadedown1 1.6s 1.2s ease-in-out both';
            id('div12v').style.webkitAnimation = 'in_fadedown1 1.6s 0.9s ease-in-out both';
            id('div11v').style.webkitAnimation = 'in_fadedown1 1.6s 1.2s ease-in-out both';
            id('div12h').style.pointerEvents="auto";
            id('div11h').style.pointerEvents="auto";
            id('div12v').style.pointerEvents="auto";
            id('div11v').style.pointerEvents="auto";

            timeout5 = setTimeout(show2,4500)
        }
        function show2()
        {
            id('div12h').style.webkitAnimation = 'out_fadedown 1.6s ease-in both';
            id('div11h').style.webkitAnimation = 'out_fadedown 1.6s ease-in 0.5s both';
            id('div12v').style.webkitAnimation = 'out_fadedown 1.6s ease-in both';
            id('div11v').style.webkitAnimation = 'out_fadedown 1.6s ease-in 0.5s both';
            id('div12h').style.pointerEvents="none";
            id('div11h').style.pointerEvents="none";
            id('div12v').style.pointerEvents="none";
            id('div11v').style.pointerEvents="none";          

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('2');
            image_url_index++;

            id('div2v').style.webkitAnimation = 'in_fadedown1 1.8s 2.2s ease-out both';
            id('div2h').style.webkitAnimation = 'in_fadedown1 1.8s 2.2s ease-out both';
            id('div2v').style.pointerEvents="auto";
            id('div2h').style.pointerEvents="auto";

            timeout6 = setTimeout(show3,5000)
        }
        function show3()
        {
            id('div2v').style.webkitAnimation = 'out_fadedown 1.5s ease-in both';
            id('div2h').style.webkitAnimation = 'out_fadedown 1.5s ease-in both';
            id('div2v').style.pointerEvents="none";
            id('div2h').style.pointerEvents="none";

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('3');
            image_url_index++;

            id('div3h').style.webkitAnimation = 'in_faderight 1.5s 1.4s ease-out both';
            id('div3v').style.webkitAnimation = 'in_faderight 1.5s 1.4s ease-out both';
            id('div3h').style.pointerEvents="auto";
            id('div3v').style.pointerEvents="auto";

            timeout7 = setTimeout(show4,4000);
        }
        function show4()
        {
            id('div3h').style.webkitAnimation = 'out_fadeup 1.5s ease-in both';
            id('div3v').style.webkitAnimation = 'out_fadeup 1.5s ease-in both';
            id('div3h').style.pointerEvents="none";
            id('div3v').style.pointerEvents="none";

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('4');
            image_url_index++;

            id('div4h').style.webkitAnimation = 'in_faderotateh 1.5s 0.8s ease-out both';
            id('div4v').style.webkitAnimation = 'in_faderotateh 1.5s 0.8s ease-out both';
            id('div4h').style.pointerEvents="auto";
            id('div4v').style.pointerEvents="auto";

            xianindex = 1;
            timeout8 = setTimeout(function()
            {
                id('xian').style.top = '150px';
                id('xuehua1').style.webkitAnimation = 'xuehua1 3s .5s ease-out forwards'
                xian = setInterval(xian_ani,50);
            },2300)
            setTimeout(show5,4000);
        }
        function show5()
        {
            id('div4h').style.webkitAnimation = 'out_faderotateh 1.5s ease-in both';
            id('div4v').style.webkitAnimation = 'out_faderotateh 1.5s ease-in both';
            id('div4h').style.pointerEvents="none";
            id('div4v').style.pointerEvents="none";

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('5');
            image_url_index++;

            id('div5h').style.webkitAnimation = 'in_div5h 2s ease-out both';
            id('div5v').style.webkitAnimation = 'in_div5h 2s ease-out both';
            id('div5h').style.pointerEvents="auto";
            id('div5v').style.pointerEvents="auto";

            timeout9 = setTimeout(show1,4000);
        }

        var xianindex = 1
        var src='http://referer-image.szwwy.com/coolphoto/img/tpl8/xian.png';
        function xian_ani()
        {
            // if(xianindex == 38)
            // {
            //     xianindex = 1;
            //     clearInterval(xian);
            //     return;
            // }
            // xianindex++;
            // id('xian').src=src+xianindex+'.png';
        }
        var divwidth = {'11h':441,'12h':441,'11v':280,'12v':280,'2h':450,'2v':440,'3h':450,'3v':440,'4h':441,'4v':381,'5h':448,'5v':364};
        var divheight = {'11h':297,'12h':297,'11v':420,'12v':420,'2h':344,'2v':661,'3h':344,'3v':661,'4h':300,'4v':552,'5h':317,'5v':551};

        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //console.log(Onload_imgs_url[image_url_index]);
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
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var height = divheight[divname];
            var width = divwidth[divname];

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            //console.log(img.src);

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
            // console.log(width,height,img.style.left,img.style.top,img.width,img.height);
            //var src = img.src;
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
        var xiannum = 0;
        function loadxianimage()
        {
            var imgname = 'http://referer-image.szwwy.com/coolphoto/img/tpl8/xian';
            for(var imgindex = 1;imgindex<39;imgindex++)
            {
                //var img = new Image();
                //img.src = imgname + imgindex + '.png';
                //img.onload = xianonload;
            }
        }
        function xianonload()
        {
            xiannum++;
            if(xiannum == 38)
            {
                showtitle();
            }
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
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            id('div11h').style.display = 'none';
            id('div12h').style.display = 'none';
            id('div11v').style.display = 'none';
            id('div12v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div4h').style.display = 'none';
            id('div4v').style.display = 'none';
            id('div5h').style.display = 'none';
            id('div5v').style.display = 'none';
            id('div11h').style.webkitAnimation = '';
            id('div12h').style.webkitAnimation = '';
            id('div11v').style.webkitAnimation = '';
            id('div12v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';
            id('div5h').style.webkitAnimation = '';
            id('div5v').style.webkitAnimation = '';
            id('xian').src='http://referer-image.szwwy.com/coolphoto/img/tpl8/xian38.png';
            xiannum = 0;
            xianindex = 1;
            id('xuehua1').style.webkitAnimation = '';
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation= '';
            id('linetop').style.webkitAnimation = '';
            id('linebottom').style.webkitAnimation = '';
            clearInterval(xian);
            
        }

    }
}
