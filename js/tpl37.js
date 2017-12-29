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
        $("#div_player").append('<div id="container"><img id="bg"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/bg.jpg"><img id="bg1"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/bg1.jpg"><div id="div1"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang1.png"style="position:absolute"><div id="box1"><img id="img1"style="position:absolute"></div></div><img id="bg2"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/bg2.jpg"><div id="div2"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang2.png"><div id="box2"><img id="img2"style="position:absolute"></div></div><div id="div3"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang3.png"><div id="box3"><img id="img3"style="position:absolute"></div></div><img id="bg4"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/bg3.jpg"><div id="div41"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang41.png"><div id="box41"><img id="img41"style="position:absolute"></div></div><div id="div42"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang42.png"><div id="box42"><img id="img42"style="position:absolute"></div></div><div id="div51"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang51.png"><div id="box51"><img id="img51"style="position:absolute"></div></div><div id="div52"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang52.png"><div id="box52"><img id="img52"style="position:absolute"></div></div><div id="div61"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang61.png"><div id="box61"><img id="img61"style="position:absolute"></div></div><div id="div63"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang61.png"><div id="box63"><img id="img63"style="position:absolute"></div></div><div id="div62"style="opacity:0"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/xiang63.png"><div id="box62"><img id="img62"style="position:absolute"></div></div><img id="love"style="opacity:0;position:absolute"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/LOVE.png"><img id="guang"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/guang.png"><img id="love1"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/LOVE.png"><img id="guang1"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/guang.png"><img id="zi11"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi11.png"><img id="zi12"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi12.png"><img id="zi21"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi21.png"><img id="zi22"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi22.png"><img id="zi31"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi31.png"><img id="zi32"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi32.png"><img id="zi41"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi41.png"><img id="zi42"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi42.png"><img id="zi43"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi43.png"><img id="zi44"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi44.png"><img id="zi51"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi51.png"><img id="zi52"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi52.png"><img id="zi53"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi53.png"><img id="zi54"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi54.png"><img id="zi61"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi61.png"><img id="zi62"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi62.png"><img id="zi63"style="opacity:0"src="http://referer-image.szwwy.com/coolphoto/img/tpl37/zi63.png"><div id="pagetitle"style="pointer-events: none;opacity:0;pointer:none"><div id="pagebox"style="display:table;width:440px;height:150px;position:absolute;overflow:hidden;"><div id="titleword"style="display:table-cell;vertical-align:middle;height:150px;width:440px;text-align:center;top:0px;left:0px;overflow:hidden;line-height:150%;"></div></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/hua3.png"style="left:500px;top:20px;-webkit-animation: hua3 9s 1s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/hua1.png"style="left:500px;top:-50px;-webkit-animation: hua1 9s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl37/hua1.png"style="left:-50px;top:30px;-webkit-animation: hua2 9s 3s linear infinite"></div>');
        function id(name)
        {
            return document.getElementById(name)
        }
        function beginshow()
        {
            if(reshow == true)
                return;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('1');
            image_url_index++; 
            id('bg1').style.webkitAnimation = 'fadein 2s ease-out forwards';
            
            id('love').style.webkitAnimation = 'fadein 1s ease-out 2s forwards';
            id('div1').style.webkitAnimation = '';
            setTimeout(function()
            {
                id('div63').style.pointerEvents="none";
                id('div61').style.pointerEvents="none";
                id('div62').style.pointerEvents="none";
                id('div2').style.pointerEvents="none";
                id('div3').style.pointerEvents="none";
                id('div41').style.pointerEvents="none";
                id('div42').style.pointerEvents="none";
                id('div51').style.pointerEvents="none";
                id('div52').style.pointerEvents="none";
                id('div1').style.pointerEvents="auto";
                id('div1').style.webkitAnimation = 'fade_in_out 10s ease-in-out 1s forwards';
            },100)
            id('guang').style.webkitAnimation = 'fadein 0.7s ease-in 2.5s forwards';
            id('zi11').style.webkitAnimation = 'fadein 0.7s ease-in 3.2s forwards';
            id('zi12').style.webkitAnimation = 'fadein 0.7s ease-in 4s forwards';

            timeout3 = setTimeout(show2,10000);
        }
        function clearnodes()
        {

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            clearTimeout(timeout10);
            clearTimeout(timeout11);
            clearTimeout(timeout12);
            clearTimeout(timeout13);
            clearTimeout(timeout14);
            clearTimeout(timeout15);
            var idname = ['div1','div2','div3','div41','div42','div51','div52','div61','div62','div63','zi11','zi12','zi21','zi22','zi31','zi32','zi41','zi42','zi43','zi44','zi51','zi52','zi53','zi54','zi61','zi62','zi63','bg1','bg2','bg4','love','love1','guang','guang1'];
            // //log(timeout1);
            for(var i=0;i<idname.length;i++)
            {
                var obj = id(idname[i]);
                //log(obj.id);
                obj.style.webkitAnimation = '';
            }

        }
        function show1()
        {
            if(reshow == true)
                return;
            id('bg4').style.webkitAnimation = 'fadeout 1s linear both';
            id('guang1').style.webkitAnimation = 'fadeout 1s linear both';
            id('love1').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi61').style.webkitAnimation = 'fadeout .5s linear .2s both';
            id('zi62').style.webkitAnimation = 'fadeout .5s linear .4s both';
            id('zi63').style.webkitAnimation = 'fadeout .5s linear .6s both';

            timeout4 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('1');
                image_url_index++; 
                var love = id('love');
                love.style.left = '62px';
                love.style.top = '485px';

                id('bg1').style.webkitAnimation = 'fadein 2s ease-out both';
                id('div1').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div63').style.pointerEvents="none";
                    id('div61').style.pointerEvents="none";
                    id('div62').style.pointerEvents="none";
                    id('div2').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div41').style.pointerEvents="none";
                    id('div42').style.pointerEvents="none";
                    id('div51').style.pointerEvents="none";
                    id('div52').style.pointerEvents="none";
                    id('div1').style.pointerEvents="auto";
                    id('div1').style.webkitAnimation = 'fade_in_out 10s ease-in-out both';
                },100)
                id('love').style.webkitAnimation = 'fadein 1s 2s ease-in both';
                id('guang').style.webkitAnimation = 'fadein 0.7s 2.5s ease-in both';
                id('zi11').style.webkitAnimation = 'fadein 0.7s ease-in 3.2s both';
                id('zi12').style.webkitAnimation = 'fadein 0.7s ease-in 4s both';

                timeout5 = setTimeout(show2,10000);
            },1500)
        }
        function show2()
        {
            if(reshow == true)
                return;
            id('love').style.webkitAnimation = 'fadeout 1s linear both';
            id('zi11').style.webkitAnimation = 'fadeout 1s linear both';
            id('zi12').style.webkitAnimation = 'fadeout 1s linear both';
            id('guang').style.webkitAnimation = 'fadeout 1s linear both';
            id('bg1').style.webkitAnimation = 'fadeout 1s linear both';

            timeout6 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('2');
                image_url_index++; 

                id('bg2').style.webkitAnimation = 'fadein 1.5s ease-in-out both';
                id('div2').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div63').style.pointerEvents="none";
                    id('div61').style.pointerEvents="none";
                    id('div62').style.pointerEvents="none";
                    id('div1').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div41').style.pointerEvents="none";
                    id('div42').style.pointerEvents="none";
                    id('div51').style.pointerEvents="none";
                    id('div52').style.pointerEvents="none";
                    id('div2').style.pointerEvents="auto";
                    id('div2').style.webkitAnimation = 'fade_in_out 10s 1s ease-in-out both';
                },100)
                var love = id('love1')
                love.style.left = '62px';
                love.style.top = '594px';
                love.style.webkitAnimation = 'fadein 1.5s 2s ease-in-out both';
                var guang = id('guang1');
                guang.style.left = '10px';
                guang.style.top = '487px';
                guang.style.webkitAnimation = 'fadein 1.5s 2.5s ease-in-out both';
                id('zi21').style.webkitAnimation = 'fadein 1s ease-in-out 3s both';
                id('zi22').style.webkitAnimation = 'fadein 1s ease-in-out 3.8s both';

                timeout7 = setTimeout(show3,10500)
            },1500)

        }

        function show3()
        {
            if(reshow == true)
                return;
            // id('div2').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi21').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi22').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('guang1').style.webkitAnimation = 'fadeout 1s linear both';
            id('bg2').style.webkitAnimation = 'fadeout 1s ease-out both';

            timeout8 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('3');
                image_url_index++; 
                id('bg2').style.webkitAnimation = 'fadein 1s linear both';
                id('div3').style.display = 'block';
                id('zi31').style.display = 'block';
                id('zi32').style.display = 'block';
                id('div3').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div63').style.pointerEvents="none";
                    id('div61').style.pointerEvents="none";
                    id('div62').style.pointerEvents="none";
                    id('div1').style.pointerEvents="none";
                    id('div2').style.pointerEvents="none";
                    id('div41').style.pointerEvents="none";
                    id('div42').style.pointerEvents="none";
                    id('div51').style.pointerEvents="none";
                    id('div52').style.pointerEvents="none";
                    id('div3').style.pointerEvents="auto";
                    id('div3').style.webkitAnimation = 'fade_in_out 10s ease-in 1s both';
                },100)
                id('guang1').style.webkitAnimation = 'fadein 1s ease-in 1s both';
                id('zi31').style.webkitAnimation = 'fadein 1s ease-in-out 2s both';
                id('zi32').style.webkitAnimation = 'fadein 1s ease-in-out 3s both';
                timeout9 = setTimeout(show4,10000)
            },1500)
        }

        function show4()
        {
            if(reshow == true)
                return;
            // id('div3').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi31').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi32').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('guang1').style.webkitAnimation = 'fadeout 1s linear both';
            id('bg2').style.webkitAnimation = 'fadeout 1s ease-out both';

            timeout10 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('41');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('42');
                image_url_index++; 
                id('bg4').style.webkitAnimation = 'fadein 1s linear both';
                id('div41').style.webkitAnimation = '';
                id('div42').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div63').style.pointerEvents="none";
                    id('div61').style.pointerEvents="none";
                    id('div62').style.pointerEvents="none";
                    id('div2').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div1').style.pointerEvents="none";
                    id('div51').style.pointerEvents="none";
                    id('div52').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div41').style.pointerEvents="auto";
                    id('div42').style.pointerEvents="auto";
                    id('div41').style.webkitAnimation = 'fade_in_out 10s 0.8s ease-in both';
                    id('div42').style.webkitAnimation = 'fade_in_out 10s 1.5s ease-in both';
                },100)
                id('guang1').style.webkitAnimation = 'fadein 1s 1.7s ease-in both';
                id('zi41').style.webkitAnimation = 'fadein 0.8s 2s ease-out both';
                id('zi42').style.webkitAnimation = 'fadein 0.8s 2.5s ease-out both';
                id('zi43').style.webkitAnimation = 'fadein 0.8s 3s ease-out both';
                id('zi44').style.webkitAnimation = 'fadein 0.8s 3.5s ease-out both';

                timeout11 = setTimeout(show5,10000)
            },1500)
        }

        function show5()
        {
            if(reshow == true)
                return;
            id('bg4').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('guang1').style.webkitAnimation = 'fadeout 1s linear both';
            id('zi41').style.webkitAnimation = 'fadeout 1s ease-out both';
            id('zi42').style.webkitAnimation = 'fadeout 1s .1s ease-out both';
            id('zi43').style.webkitAnimation = 'fadeout 1s .2s ease-out both';
            id('zi44').style.webkitAnimation = 'fadeout 1s .3s ease-out both';

            timeout12 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('51');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('52');
                image_url_index++; 
                id('bg2').style.webkitAnimation = 'fadein 1s linear both';
                id('div51').style.webkitAnimation = '';
                id('div52').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div63').style.pointerEvents="none";
                    id('div61').style.pointerEvents="none";
                    id('div62').style.pointerEvents="none";
                    id('div2').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div41').style.pointerEvents="none";
                    id('div42').style.pointerEvents="none";
                    id('div1').style.pointerEvents="none";
                    id('div51').style.pointerEvents="auto";
                    id('div52').style.pointerEvents="auto";
                    id('div51').style.webkitAnimation = 'fade_in_out 10s ease-in 1s both';
                    id('div52').style.webkitAnimation = 'fade_in_out 10s ease-in 1.7s both';
                },100)
                id('guang1').style.webkitAnimation = 'fadein 1s ease-in 2.3s both';
                id('zi51').style.webkitAnimation = 'fadein .8s linear 2.5s both';
                id('zi52').style.webkitAnimation = 'fadein .8s linear 3s both';
                id('zi53').style.webkitAnimation = 'fadein .8s linear 3.5s both';
                id('zi54').style.webkitAnimation = 'fadein .8s linear 4s both';

                timeout13 = setTimeout(show6,10000)
            },1600)
        }

        function show6()
        {
            if(reshow == true)
                return;
            id('bg2').style.webkitAnimation = 'fadeout 1s linear both';
            id('guang1').style.webkitAnimation = 'fadeout 1s ease-in both';
            id('zi51').style.webkitAnimation = 'fadeout 1s linear both';
            id('zi52').style.webkitAnimation = 'fadeout 1s linear 0.1s both';
            id('zi53').style.webkitAnimation = 'fadeout 1s linear 0.2s both';
            id('zi54').style.webkitAnimation = 'fadeout 1s linear 0.3s both';

            timeout14 = setTimeout(function()
            {
                if(reshow == true)
                    return;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('61');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('62');
                image_url_index++; 
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
                setImage('63');
                image_url_index++; 
                id('bg4').style.webkitAnimation = 'fadein 1s linear both';
                id('div61').style.webkitAnimation = '';
                id('div62').style.webkitAnimation = '';
                id('div63').style.webkitAnimation = '';
                setTimeout(function()
                {
                    id('div1').style.pointerEvents="none";
                    id('div2').style.pointerEvents="none";
                    id('div3').style.pointerEvents="none";
                    id('div41').style.pointerEvents="none";
                    id('div42').style.pointerEvents="none";
                    id('div51').style.pointerEvents="none";
                    id('div52').style.pointerEvents="none";
                    id('div63').style.pointerEvents="auto";
                    id('div61').style.pointerEvents="auto";
                    id('div62').style.pointerEvents="auto";
                    id('div61').style.webkitAnimation = 'fade_in_out 10s ease-in 1s both';
                    id('div62').style.webkitAnimation = 'fade_in_out 10s ease-in 1.5s both';
                    id('div63').style.webkitAnimation = 'fade_in_out 10s ease-in 2s both';
                },100)
                id('guang1').style.webkitAnimation = 'fadein 1s ease-in 2.5s both';
                id('zi61').style.webkitAnimation = 'fadein .8s linear 3s both';
                id('zi62').style.webkitAnimation = 'fadein .8s linear 3.2s both';
                id('zi63').style.webkitAnimation = 'fadein .8s linear 3.4s both';

                timeout15 = setTimeout(show1,10000);
            },1500)
        }
        var image_size_width=[];
        var image_size_height=[];

        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        function loadimages()
        {
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //showtitle();
            // return;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_ready_num=18;
            image_url_index=0;
            have_num = 0;
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
            $('img').css('pointer-events','none');     
        }
        function showtitle()
        {
            //id('titleword').innerHTML = e_desc;
            id('pagebox').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = 'fadein 1s linear both';
        }
        function distitle()
        {
            id('pagebox').style.webkitAnimation = 'skewtitle 0.5s ease both';
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
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
                clearnodes();
                timeout2 = setTimeout(beginshow,1000);
            }
        }
        function image_onload(event)
        {
            var img = event.target;
            var index = img.index;

            if(index < 10)
            {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            if((have_num+error_num >=10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                clearnodes();
                timeout2 = setTimeout(beginshow,1000);
            }
        }
        var divwidth = {'1':478,'2':510,'3':464,'41':310,'42':362,'51':425,'52':350,'61':273,'62':357,'63':273};
        var divheight = {'1':478,'2':443,'3':358,'41':310,'42':357,'51':347,'52':290,'61':273,'62':357,'63':273};
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;
        var timeout9;
        var timeout10;
        var timeout11;
        var timeout12;
        var timeout13;
        var timeout14;
        var timeout15;
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

            var div = id('div'+idname);

            var height = divheight[idname];
            var width = divwidth[idname];

            var img = id('img'+idname);
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
            var src = Onload_imgs_url[image_url_index];
            img.parentElement.parentElement.onclick=function() {
                
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
        call_me(loadimages);
        load_init_modules();
        function reload_scene()
        {
            reshow = true;
            clearnodes();
            setTimeout(loadimages,300);
        }    
    }
}
