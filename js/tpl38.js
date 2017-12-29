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
        $("#div_player").append('<div id="container"><div id="huajuan"style="opacity:0;"><div id="img_div"><div id="back_box"><img id="my_imgback"style="position:absolute;"src=""></div><div id="front_box"><img id="my_imgfront"style="position:absolute;"src=""></div><img id="fanguang"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/fanguang.png"></div><div id="downbox"><img id="down1"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/down1.png"></div><img id="up"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/up1.png"></div><img id="guangban1"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban2"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban3"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban4"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban5"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban7"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><img id="guangban6"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/guangban.png"><div id="move1"><div class="shan"><img id="liuxing1"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/liuxing.png"></div></div><div id="move2"><div class="shan"><img id="liuxing2"src="http://referer-image.szwwy.com/coolphoto/img/tpl38/liuxing.png"></div></div></div>');
        var load_num=0;
        var images_width=[];
        var images_height=[];

        var change_imgdiv;
        var change_down;
        var images_position=[];

        var first_img;
        var second_img;
        var first_box;
        var second_box;

        function id (name)
        {
            return document.getElementById(name);
        }

        var readynum = 0;
        var Onload_imgs = new Array();
        var canshow = true;



        function load_images ()
        {
            change_imgdiv=id('img_div');
            change_down=id('down1');

            first_img=id('my_imgfront');
            second_img=id('my_imgback');

            first_box=id('front_box');
            second_box=id('back_box');

            if(images.length<2)
            {
                images[1]=images[0];
            }

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                // img.index=i;
                img.src=images[i][1];
                img.onload=img_onload;
            }
        }

        function img_onload (event)
        {
            var img=event.target;
            Onload_imgs[readynum]=img.src;
            images_width[readynum]=img.width;
            images_height[readynum]=img.height;


            if(readynum>=1)
            {
                if (images_width[readynum]/images_height[readynum]<(332/507))
                {
                    images_position[readynum]=507;
                }
                else
                {
                    images_position[readynum]=332*images_height[readynum]/images_width[readynum];
                };

                createStyle(readynum-1);
            }
            else
            {
                if (images_width[0]/images_height[0]<(332/507))
                {
                    images_position[0]=507;
                }
                else
                {
                    images_position[0]=332*images_height[0]/images_width[0];
                };
                change_imgdiv.style.height=images_position[0]+'px';
                change_down.style.webkitTransform='translate(0px,-'+(507-images_position[0])+'px)';

            }
            readynum++;

            //log(readynum);
            if ((readynum>1&&canshow==true)||images.length==1)
            {
                canshow=false;
                load_num=0;
                
                id('huajuan').style.opacity=1;
                beginshow();
            };

        }
        function createStyle (num)
        {
            var i=num;


            if(Onload_imgs.length>1)
            {
                    var j=i+1;
                    if(j==Onload_imgs.length)
                    {
                        j=0;
                    }

                    var csstext='@-webkit-keyframes change_box'+i+'to'+j+' {from{height:'+images_position[i]+'px} to{height:'+images_position[j]+'px}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    // //log(csstext);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);


                    var translate_y1=507-images_position[i];
                    var translate_y2=507-images_position[j];
                    var csstext='@-webkit-keyframes change_img'+i+'to'+j+' {from{-webkit-transform: translate(0px,-'+translate_y1+'px)} to{-webkit-transform:translate(0px,-'+translate_y2+'px)}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    // //log(csstext);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);

                    var scale_y=images_position[j]/images_position[i];
                    var csstext='@-webkit-keyframes change_box_in'+i+'to'+j+' {from{-webkit-transform:scale(1,'+1/scale_y+');opacity:0;} to{-webkit-transform:scale(1,1);opacity:1;}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);

                    var csstext='@-webkit-keyframes change_box_out'+i+'to'+j+' {from{-webkit-transform:scale(1,1);opacity:1;} to{-webkit-transform:scale(1,'+scale_y+');opacity:0;}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);
                    // //log(csstext);


                    var csstext='@-webkit-keyframes change_box_sec_in'+i+'to'+j+' {from{-webkit-transform:scale(1,'+(1/scale_y)+');} to{-webkit-transform:scale(1,1);}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);
                    // //log(csstext);

                    var csstext='@-webkit-keyframes change_box_sec_out'+i+'to'+j+' {from{-webkit-transform:scale(1,1);} to{-webkit-transform:scale(1,'+(scale_y)+');}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);
                
            }


            // alert();

        }


        function beginshow ()
        {

            if(load_num==Onload_imgs.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==Onload_imgs.length)
                next_num=0;

            cutimage(0,load_num);
            first_img.src=Onload_imgs[load_num];
            cutimage(1,next_num);
            second_img.src=Onload_imgs[next_num];
            cleanfanguang();

            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s 0.1s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // //log(change_imgdiv.style.webkitAnimation);
                
                showfanguang();


                first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 2s linear forwards';
                second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 2s linear forwards';
                // //log(second_box.style.webkitAnimation)
                first_box.style.pointerEvents="auto";
                second_box.style.pointerEvents="none";
                load_num++;

                setTimeout(nextshow,4500);
            },3000);

        }

        function nextshow ()
        {
            if(load_num==Onload_imgs.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==Onload_imgs.length)
                next_num=0;

            // first_img.style.opacity=0;

            cutimage(0,next_num);
            first_img.src=Onload_imgs[next_num];
            cleanfanguang();


            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s 0.1s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // //log(change_imgdiv.style.webkitAnimation);
                
                showfanguang();

                first_box.style.webkitAnimation='change_box_in'+load_num+'to'+next_num+' 2s linear forwards';
                //log(first_box.style.webkitAnimation);
                second_box.style.webkitAnimation='change_box_sec_out'+load_num+'to'+next_num+' 2s linear forwards';
                first_box.style.pointerEvents="auto";
                second_box.style.pointerEvents="none";
                load_num++;

                setTimeout(nextnextshow,4500);

            },3000)
        }

        function nextnextshow ()
        {
            if(load_num==Onload_imgs.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==Onload_imgs.length)
                next_num=0;

            first_img.style.opacity=1;
            cutimage(1,next_num);
            second_img.src=Onload_imgs[next_num];
            cleanfanguang();

            

            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s 0.1s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // //log(change_imgdiv.style.webkitAnimation);

                showfanguang();

                first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 2s linear forwards';
                second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 2s linear forwards';
                first_box.style.pointerEvents="none";
                second_box.style.pointerEvents="auto";
                load_num++;
                setTimeout(nextshow,4500);

            },3000)
        }


        function showfanguang ()
        {
            id('fanguang').style.webkitAnimation='fanguang 2s linear forwards';
        }

        function cleanfanguang ()
        {
            id('fanguang').style.webkitAnimation='';
        }

        function cutimage(img_obj,load_num)
        {
            var myimg;
            var mybox;
            var src;
            if(img_obj==0)
            {
                myimg=first_img;
                mybox=first_box;
                src = second_img.src;
            }
            else
            {
                myimg=second_img;
                mybox=second_box;
                src = first_img.src;
            }

            var img_height=images_height[load_num];
            var img_width=images_width[load_num];
            var img_bili=img_width/img_height;

            if (img_bili<(332/507)) 
            {
                myimg.width=332;
                myimg.height=332/img_bili;
                myimg.style.left='0px';
                myimg.style.top='-'+((myimg.height-507)/2)+'px';
                
                mybox.style.width='332px';
                mybox.style.height='507px';
            }
            else
            {
                myimg.width=332;
                myimg.height=332/img_bili;
                myimg.style.top='0px';
                myimg.style.left='0px';

                mybox.style.width='332px';
                mybox.style.height=332/img_bili+'px';
            }
            
            myimg.parentElement.parentElement.parentElement.onclick=function() {
                
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
    }
}
