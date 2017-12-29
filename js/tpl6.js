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
            $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/100.png" class="cloud" style="top:100px;width:70px;-webkit-animation:cloudmove 10s linear 5s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:30px;width:120px;-webkit-animation:cloudmove 9s linear 2s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:250px;width:120px;-webkit-animation:cloudmove 9s linear 4.5s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:200px;width:50px;-webkit-animation:cloudmove 11s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:400px;width:100px;-webkit-animation:cloudmove 7s linear 3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:550px;width:50px;-webkit-animation:cloudmove 12s linear 7.5 infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:630px;width:130px;-webkit-animation:cloudmove 9s linear 6s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl6/101.png" class="cloud" style="top:700px;width:200px;-webkit-animation:cloudmove 8s linear 1.5s infinite"><div id="box_0" class="box"><img id="box_1_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/102.png"><div id="img_div_0"><img id="img0" class="img_con"></div></div><div id="box_1" class="box"><img id="box_2_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/103.png"><div id="img_div_1"><img id="img1" class="img_con"></div></div><div id="box_2" class="box"><img id="box_3_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/104.png"><div id="img_div_2"><img id="img2" class="img_con"></div></div><div id="box_3" class="box"><img id="box_4_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/105.png"><div id="img_div_3"><img id="img3" class="img_con"></div></div><div id="box_4" class="box"><img id="box_5_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/106.png"><div id="img_div_4"><img id="img4" class="img_con"></div></div><div id="box_5" class="box"><img id="box_6_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/102.png"><div id="img_div_5"><img id="img5_0" class="img_con"></div><img id="box_6_1_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/107.png"><div id="img_div_5_1"><img id="img5_1" class="img_con"></div></div><div id="box_6" class="box"><img id="box_7_border" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/108.png"><div id="img_div_6"><img id="img6_0" class="img_con"></div><div id="img_div_7"><img id="img6_1" class="img_con"></div></div><div id="heart_div" style="position:absolute;"><img id="heart1" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/109.png" style="position:absolute;opacity:0;"><img id="heart0" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/109.png" style="position:absolute;width:50px;opacity:0;"><img id="heart2" src="http://referer-image.szwwy.com/coolphoto/img/tpl6/109.png" style="position:absolute;width:55px;opacity:0;"></div><div id="pagetitle" style="pointer-events: none;position:absolute;width:410px;height:200px;top:290px;left:45px;font-size:40px;color:#fff;overflow:hidden;text-shadow:5px 6px 4px rgba(0, 0, 0, 0.2);"><div style="position:absolute;width:410px;height:200px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent" style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;color:#975D49;"></div></div></div></div></div>');
        var page_index=0;
        var heart_array=[0,1,0,2,0,2,3];
        var images_height=[];
        var images_width=[];
        var image_url_index=0;

        var border_size=[[{w:417,h:426}],[{w:480,h:392}],[{w:488,h:421}],[{w:403,h:420}],[{w:508,h:408}],[{w:416,h:426},{w:315,h:314}],[{w:320,h:336},{w:233,h:193}]]

        var delaytime = 4000;
        function id (name)
        {
            return document.getElementById(name);
        }

        function show_page ()
        {
            // alert();
            if(reshow==true)
                return;
            if (page_index==7)
            {
                page_index=0;
            }
            if (image_url_index==Onload_imgs_url.length) 
            {
                image_url_index=0;
            };
            if(page_index<5)
            {
                // var img_obj=id("img"+page_index);
                cut_image(page_index,2);
                image_url_index++
            }
            else
            {
                cut_image(page_index,0);
                image_url_index++;
                if (image_url_index==Onload_imgs_url.length)
                {
                    image_url_index=0;
                };
                cut_image(page_index,1)
                image_url_index++;
            }


            
            id("box_"+page_index).style.display="block";
            id("box_"+page_index).style.webkitAnimation="div_rotate_in 1s ease-in-out forwards";
            showheart(page_index);
            if (page_index==0)
            {
                id("box_5").style.display="none";
                id("box_5").style.webkitAnimation="";
            }
            else if(page_index==1)
            {
                id("box_6").style.display="none";
                id("box_6").style.webkitAnimation="";
            }
            else
            {
                id("box_"+(page_index-2)).style.display="none";
                id("box_"+(page_index-2)).style.webkitAnimation="";
            }
            
            timeout1 = setTimeout(function()
                {

                    id("box_"+page_index).style.webkitAnimation="div_rotate_out 0.8s linear forwards";
                    page_index++;
                    // show_page();
                    timeout2 = setTimeout(show_page,500);
                },3000);
        }

        function showheart(num)
        {
            if(reshow==true)
                return;
            index=heart_array[num];
            id("heart0").style.webkitAnimation="heart"+index+"_0_ani 2.5s 0.8s linear";
            id("heart1").style.webkitAnimation="heart"+index+"_1_ani 2.5s 0.8s linear";
            id("heart2").style.webkitAnimation="heart"+index+"_2_ani 2.5s 0.8s linear";
        }

        function load_image()
        {
            Onload_imgs_url = [];
            page_index=0;
            heart_array=[0,1,0,2,0,2,3];
            images_height=[];
            images_width=[];
            image_url_index=0;
            
            have_num = 0;
            error_num = 0;
            
            id("heart0").style.webkitAnimation="";
            id("heart1").style.webkitAnimation="";
            id("heart2").style.webkitAnimation="";
            id("box_0").style.webkitAnimation="";
            id("box_1").style.webkitAnimation="";
            id("box_2").style.webkitAnimation="";
            id("box_3").style.webkitAnimation="";
            id("box_4").style.webkitAnimation="";
            id("box_5").style.webkitAnimation="";
            id("box_6").style.webkitAnimation="";
            canshow=true;

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout0);

            reshow = false;
            
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            showtitle();

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.src=images[i][1];
                img.index = i;
                Onload_imgs_url[i] = "loading";
                img.onload=img_onload;
                img.onerror = img_onerror;
            }
        }

        Onload_imgs_url = new Array();

        canshow=true;
        function img_onerror (event)
        {
            var img = event.target;
            var index = img.index;
            if(index<10)
                error_num ++;
            Onload_imgs_url[index] = "not find";
            console.log(Onload_imgs_url[index]);
            console.log(have_num + "-" + error_num);
            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;

                show_page();
            }
        }
        function showtitle()
        {
            //id("titlecontent").innerHTML = e_desc;
            id("pagetitle").style.webkitAnimation = "aa_in_flip_x 2s ease both";
        }
        function distitle()
        {
            id("pagetitle").style.webkitAnimation = "aa_out_flip_x 2s ease both";
            show_page();

        }
        function img_onload (event)
        {
            if(reshow==true)
                return;
            var img=event.target;
            var index = img.index;

            if(index < 10)
            {
                have_num++;
            }
            Onload_imgs_url[index]=img.src;
            images_width[index]=img.width;
            images_height[index]=img.height;

            if((have_num+error_num >= 10 || images.length ==(have_num+error_num))&&canshow==true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;

                show_page();
            }
        }

        function cut_image (page,page_id)
        {
            if(reshow==true)
                return;
            var img_obj;
            var bd_w;
            var bd_h;
            while(Onload_imgs_url[image_url_index] == "not find" || Onload_imgs_url[image_url_index] == "loading")
            {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            var img_w=images_width[image_url_index];
            var img_h=images_height[image_url_index];

            var img_bili=img_w/img_h;
            
            if(page_id==2)
            {
                img_obj=id("img"+page);
                bd_w=border_size[page][0].w;
                bd_h=border_size[page][0].h;
            }
            else
            {
                img_obj=id("img"+page+"_"+page_id);
                bd_w=border_size[page][page_id].w;
                bd_h=border_size[page][page_id].h;

            }
                 
            var div_bili=bd_w/bd_h;

            if(div_bili>=img_bili)
            {
                img_obj.width=bd_w;
                img_obj.height=bd_w/img_bili;
                img_obj.style.left="0px";
                img_obj.style.top="-"+(img_obj.height-bd_h)/2+"px";

            }
            else
            {
                img_obj.height=bd_h;
                img_obj.width=bd_h*img_bili;
                img_obj.style.top="0px";
                img_obj.style.left="-"+(img_obj.width-bd_w)/2+"px";

            }
            img_obj.src=Onload_imgs_url[image_url_index];
            img_obj.onclick=function() {
                var src = img_obj.src;
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
        var timeout0;
        var timeout1;
        var timeout2;
        var reshow = false;

        function reload_scene()
        {
            reshow = true;
            id("titlecontent").innerHTML = "";
            id("pagetitle").style.webkitAnimation = "";
            setTimeout(load_image,100)
        }


    }
}
