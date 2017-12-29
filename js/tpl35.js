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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/02.png"style="position:absolute;top:250px;left:145px;-webkit-transform-origin:100% 100%;-webkit-animation:pic1 2s linear forwards;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/tuxiao.png"style="position:absolute;-webkit-transform:rotate(-10deg);top:210px;-webkit-animation:pic2 2s linear forwards"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/tuxiao.png"style="position:absolute;top:220px;left:10px;-webkit-animation:pic3 2s 1s linear forwards;-webkit-transform: translate(-220px,-100px) rotate(-30deg);"><div style="position:absolute;top:500px;left:-80px;width:69px;height:69px;-webkit-transform-origin:424.74% -390%;-webkit-animation: chongzi1 39s linear infinite"><div style="position:absolute;-webkit-transform:rotate(110deg)"><img id="foot11"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(-30deg);top:30px;left:0px;-webkit-transform-origin:100% 50%;-webkit-animation:foot_1 2s ease-in-out infinite alternate"><img id="foot11"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(-30deg);top:30px;left:0px;-webkit-transform-origin:100% 50%;-webkit-animation:foot_1 2s ease-in-out 1.3s infinite alternate"><img id="foot11"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(-30deg);top:30px;left:0px;-webkit-transform-origin:100% 50%;-webkit-animation:foot_1 2s ease-in-out 2.6s infinite alternate"><img id="foot12"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(93deg);top:34px;left:39px;-webkit-transform-origin:0% 50%;-webkit-animation:foot_2 2s ease-in-out infinite alternate"><img id="foot12"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(93deg);top:34px;left:39px;-webkit-transform-origin:0% 50%;-webkit-animation:foot_2 2s ease-in-out 1.3s infinite alternate"><img id="foot12"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/q.png"style="position:absolute;-webkit-transform: scale(.6,.6) rotate(93deg);top:34px;left:39px;-webkit-transform-origin:0% 50%;-webkit-animation:foot_2 2s ease-in-out 2.6s infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/chong.png"style="position:absolute;-webkit-transform:rotate(34deg);left:15px;"></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/huaying.png"style="position:absolute;top:780px;left:40px;-webkit-transform: rotate(-25deg);-webkit-transform-origin:0% 50%;-webkit-animation:hua1 1.5s linear infinite alternate;opacity:0.5;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/hua.png"style="position:absolute;top:750px;left:20px;-webkit-transform: rotate(-25deg);-webkit-transform-origin:0% 50%;-webkit-animation:hua1 1.5s linear infinite alternate;"><div id="page1"style="position:absolute;width:400px;height:308px;position:absolute;top:290px;-webkit-transform: translate(560px,-590px);display:none;left:40px;"><img id="ying1"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute; top:13px;left:15px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;"><div id="img1"style="position:absolute;width:370px;height:280px;top:15px;left:15px;overflow:hidden;"></div></div><div id="page1_dev"style="position:absolute;width:308px;height:400px;display:none;position:absolute;top:290px;-webkit-transform: translate(560px,-590px);left:40px;"><img id="ying1_dev"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute; top:15px;left:13px;-webkit-transform:rotate(90deg);"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;-webkit-transform:rotate(90deg);"><div id="img1_dev"style="position:absolute;width:280px;height:370px;top:15px;left:15px;overflow:hidden;top:-32px;left:61px;"></div></div><div id="page2"style="position:absolute;width:400px;display:none;height:308px;position:absolute;top:170px;-webkit-transform:rotate(20deg);left:40px;"><img id="ying2"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute;top:10px;left:12px;-webkit-animation: ani2_ying1 3s ease-out forwards"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;"><div id="img2"style="position:absolute;width:370px;height:280px;top:15px;left:15px;overflow:hidden"></div></div><div id="page2_dev"style="position:absolute;width:308px;height:400px;position:absolute;display:none;top:170px;-webkit-transform:rotate(35deg);left:20px;"><img id="ying2_dev"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute; top:20px;-webkit-transform:rotate(90deg);top:13px;left:13px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;-webkit-transform:rotate(90deg);"><div id="img2_dev"style="position:absolute;width:280px;height:370px;top:15px;left:15px;overflow:hidden;top:-32px;left:61px;"></div></div><div id="page3"style="position:absolute;width:400px;display:none;height:308px;position:absolute;top:230px;-webkit-transform:rotate(20deg);left:55px;"><img id="ying3"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute;top:10px;left:13px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;"><div id="img3"style="position:absolute;width:370px;height:280px;top:15px;left:15px;overflow:hidden"></div></div><div id="page3_dev"style="position:absolute;width:308px;height:400px;display:none;position:absolute;top:230px;-webkit-transform:rotate(20deg);left:55px;"><img id="ying3_dev"src="http://referer-image.szwwy.com/coolphoto/img/tpl35/ying.png"style="position:absolute;top:13px;left:10px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl35/di.png"style="position:absolute;-webkit-transform:rotate(90deg)"><div id="img3_dev"style="position:absolute;width:280px;height:370px;top:15px;left:15px;overflow:hidden;top:-32px;left:61px;"></div></div><div id="pagetitle"style="pointer-events: none;position:absolute;width:500px;height:815px;top:0px;left:0px;font-size:40px;color:#fff;overflow:hidden;background-color:rgba(0,0,0,0.65)"><div style="position:absolute;width:410px;height:200px;top:238px;left:45px;overflow:hidden;"id="pagecontent"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent"style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;"></div></div></div></div></div>');
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
        function id (name)
        {
            return document.getElementById(name);
        }

        function load_image ()
        {
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];

            image_url_index=0;
            have_num = 0;
            error_num = 0;

            canshow = true;
            reshow = false;

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            //showtitle();

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            id('page1').style.webkitAnimation='';
            id('page1_dev').style.webkitAnimation='';
            id('page2').style.webkitAnimation='';
            id('page2_dev').style.webkitAnimation='';
            id('page3').style.webkitAnimation='';
            id('page3_dev').style.webkitAnimation='';

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
            if(reshow==true)
                return;
            var img=event.target;
            var index= img.index;
            if(index<10)
            {
                have_num++;
            }
            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height; 

            if((have_num+error_num >= 10 || (have_num+error_num) == images.length )&&canshow==true)
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
            //id('titlecontent').innerHTML = e_desc;
            id('pagecontent').style.webkitAnimation = 'in_fadeup 1s linear both';
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            show_first();
        }
        function show_first ()
        {
            if(reshow==true)
                return;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index=0;

            cleanlastani(2);
            cut_image(1);
            
            showinani(1);
            image_url_index++;

            timeout1 = setTimeout(function()
                {
                    id('page1').style.webkitAnimation='ani1_out 1s ease-in forwards';
                    id('page1_dev').style.webkitAnimation='ani1_out 1s ease-in forwards';
                    timeout2 = setTimeout(show_second,500)
                },5000);
        }
        function show_second()
        {
            if(reshow==true)
                return;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index=0;
            cut_image(2);
            
            cleanlastani(3);
            showinani(2);
            image_url_index++;

            timeout3 = setTimeout(function()
                {
                    id('page2').style.webkitAnimation='ani2_out 1s ease-in forwards';
                    id('page2_dev').style.webkitAnimation='ani2_out1 1s ease-in forwards';
                    timeout4 = setTimeout(show_third,500)
                },5000);
        }
        function show_third()
        {
            if(reshow==true)
                return;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index=0;
            cut_image(3);
            
            cleanlastani(1);
            showinani(3);
            image_url_index++;

            timeout5 = setTimeout(function()
                {
                    id('page3').style.webkitAnimation='ani3_out 1s ease-in forwards';
                    id('page3_dev').style.webkitAnimation='ani3_out 1s ease-in forwards';
                    timeout6 = setTimeout(show_first,500)
                },4000);
        }
        function cleanlastani (num)
        {
            if(reshow==true)
                return;
            id('page'+num).style.display='none';
            id('ying'+num).style.webkitAnimation='';
            id('page'+num).style.webkitAnimation='';
            id('page'+num+'_dev').style.display='none';
            id('ying'+num+'_dev').style.webkitAnimation='';
            id('page'+num+'_dev').style.webkitAnimation='';
        }
        function showinani(pageindex)
        {
            if(reshow==true)
                return;
            if(image_size_height[image_url_index]>image_size_width[image_url_index])
            {
                id('page'+pageindex+'_dev').style.display='block';
                id('ying'+pageindex+'_dev').style.webkitAnimation='ani'+pageindex+'_ying1 3s ease-out forwards';
                id('page'+pageindex+'_dev').style.webkitAnimation='ani'+pageindex+'_in 3s ease-out forwards';
            }
            else
            {
                id('page'+pageindex).style.display='block';
                id('ying'+pageindex).style.webkitAnimation='ani'+pageindex+'_ying 3s ease-out forwards';
                id('page'+pageindex).style.webkitAnimation='ani'+pageindex+'_in 3s ease-out forwards';
            }
        }

        function cut_image (pageindex)
        {
            if(reshow==true)
                return;
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

            if(img_bili>=1)
            {
                var img_obj=id('img'+pageindex);
            }
            else
            {
                var img_obj=id('img'+pageindex+'_dev');
            }
            // alert(img_obj.id)
            img_obj.style.backgroundImage="url(" + Onload_imgs_url[image_url_index] + ")";
            //log(img_obj.style.backgroundImage);

            if(img_bili>(400/308))
            {
                img_obj.style.backgroundSize  = (308*img_bili) + "px " + 308 + "px";
                img_obj.style.backgroundPosition = '-'+(((308*img_bili)-400)/2) + "px "  + "0px";
            }
            else
            {
                
                if(img_bili<1)
                {
                    if(img_bili>(308/400))
                    {
                        img_obj.style.backgroundSize  = 400*img_bili + "px " + 400 + "px";
                        img_obj.style.backgroundPosition = '-'+((400*img_bili-308)/2) + "px " + "0px";

                    }
                    else
                    {
                        img_obj.style.backgroundSize  = 308 + "px " + (308/img_bili) + "px";
                        img_obj.style.backgroundPosition = "0px " + '-'+(((308/img_bili)-400)/2) + "px";

                    }

                }
                else
                {
                    img_obj.style.backgroundSize  = 400 + "px " + (400/img_bili) + "px";
                    img_obj.style.backgroundPosition = "0px " +'-'+(((400/img_bili)-308)/2) + "px";

                }
            }
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

        call_me(load_image);

        load_init_modules();

        function reload_scene()
        {
            reshow = true;
            cleanlastani(1);
            cleanlastani(2);
            cleanlastani(3);
            id('titlecontent').innerHTML = '';
            id('pagecontent').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            setTimeout(load_image,100);
        }    
    }
}
