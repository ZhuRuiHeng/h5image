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
        $("#div_player").append('<div id="container"><img id="niao2"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/2000.gif"><div id="huajuan"style="opacity:0;"><div id="img_div"><div id="back_box"><img id="my_imgback"style="position:absolute;"></div><div id="front_box"><img id="my_imgfront"style="position:absolute;"></div><img id="modian1"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/1.png"><img id="modian2"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/1.png"><img id="modian3"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/1.png"><img id="modian4"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/1.png"></div><div id="downbox"><img id="down1"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/2.png"></div><img id="up"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/3.png"></div><img id="heye1"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/5.png"><img id="heye4"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/100.png"><img id="heye2"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/200.png"><img id="heye3"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/300.png"><img id="heye5"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/100.png"><img id="cloud1"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/6.png"><img id="cloud2"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/6.png"><img id="niao1"src="http://referer-image.szwwy.com/coolphoto/img/tpl11/200.gif"><div id="pagetitle"style="pointer-events: none;position:absolute;width:420px;height:150px;left:40px;top:240px;overflow:hidden;font-size:40px;color:#000;text-align:center;line-height:50px;pointer:none;"><div style="display:table;width:440px;height:150px;width:420px;"><div id="titlecontent"style="display:table-cell;vertical-align:middle;width:420px;"></div></div></div></div>');
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
        var delaytime = 4000;
        function id (name)
        {
            return document.getElementById(name);
        }

        function load_images ()
        {
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();

            change_imgdiv=id('img_div');
            change_down=id('down1');

            first_img=id('my_imgfront');
            second_img=id('my_imgback');

            first_box=id('front_box');
            second_box=id('back_box');
            //id('titlecontent').innerHTML = e_desc;

            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                img.onload=img_onload;
            }
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            id('huajuan').style.webkitAnimation = 'fadein 1s 1s linear both';
        }
        function img_onload (event)
        {
            var img=event.target;
            var img_index=img.index;
            images_width[img_index]=img.width;
            images_height[img_index]=img.height;
            load_num++;

            if (load_num==images.length)
            {
                load_num=0;
                createStyle();
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                    timeout1 = setTimeout(beginshow,1000);
                }
                else
                {
                            distitle();
                            timeout2 = setTimeout(beginshow,1000);
                }
            };

        }

        function createStyle ()
        {
            for(var i=0;i<images.length;i++)
            {
                if (images_width[i]/images_height[i]<(288/420))
                {
                    images_position[i]=420;
                }
                else
                {
                    images_position[i]=288*images_height[i]/images_width[i];
                };
            }
            if(images.length>1)
            {
                for(var i=0;i<images.length;i++)
                {
                    var j=i+1;
                    if(j==images.length)
                    {
                        j=0;
                    }

                    var csstext='@-webkit-keyframes change_box'+i+'to'+j+' {from{height:'+images_position[i]+'px} to{height:'+images_position[j]+'px}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    // console.log(csstext);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);

                    var translate_y1=420-images_position[i];
                    var translate_y2=420-images_position[j];
                    var csstext='@-webkit-keyframes change_img'+i+'to'+j+' {from{-webkit-transform: translate(0px,-'+translate_y1+'px)} to{-webkit-transform:translate(0px,-'+translate_y2+'px)}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    // console.log(csstext);
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
                    // console.log(csstext);


                    var csstext='@-webkit-keyframes change_box_sec_in'+i+'to'+j+' {from{-webkit-transform:scale(1,'+(1/scale_y)+');} to{-webkit-transform:scale(1,1);}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);
                    // console.log(csstext);

                    var csstext='@-webkit-keyframes change_box_sec_out'+i+'to'+j+' {from{-webkit-transform:scale(1,1);} to{-webkit-transform:scale(1,'+(scale_y)+');}}';
                    var style=document.createElement('style');
                    document.head.appendChild(style);
                    var sheet=style.sheet;
                    sheet.insertRule(csstext,0);
                }
            }

            change_imgdiv.style.height=images_position[0]+'px';
            change_down.style.webkitTransform='translate(0px,-'+(420-images_position[0])+'px)';
            // alert();

        }

        function beginshow ()
        {

            if(load_num==images.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==images.length)
                next_num=0;

            cutimage(0,load_num);
            first_img.src=images[load_num][1];
            cutimage(1,next_num);
            second_img.src=images[next_num][1];
            cleanmoshui();

            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // console.log(change_imgdiv.style.webkitAnimation);
                
                showmoshui();


                first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 2s linear forwards';
                second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 2s linear forwards';
                // console.log(second_box.style.webkitAnimation)
                
                load_num++;

                setTimeout(nextshow,4500);
            },3000);

        }

        function nextshow ()
        {
            if(load_num==images.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==images.length)
                next_num=0;

            // first_img.style.opacity=0;

            cutimage(0,next_num);
            first_img.src=images[next_num][1];
            cleanmoshui();


            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // console.log(change_imgdiv.style.webkitAnimation);
                
                showmoshui();

                first_box.style.webkitAnimation='change_box_in'+load_num+'to'+next_num+' 2s linear forwards';
                console.log(first_box.style.webkitAnimation);
                second_box.style.webkitAnimation='change_box_sec_out'+load_num+'to'+next_num+' 2s linear forwards';
                
                load_num++;

                setTimeout(nextnextshow,4500);

            },3000)
        }

        function nextnextshow ()
        {
            if(load_num==images.length)
                load_num=0;
            var next_num=load_num+1;
            if(next_num==images.length)
                next_num=0;

            first_img.style.opacity=1;
            cutimage(1,next_num);
            second_img.src=images[next_num][1];
            cleanmoshui();

            

            setTimeout(function()
            {
                change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 2s linear forwards';
                change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 2s linear forwards';

                // console.log(change_imgdiv.style.webkitAnimation);

                showmoshui();

                first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 2s linear forwards';
                second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 2s linear forwards';
                
                load_num++;
                setTimeout(nextshow,4500);

            },3000)
        }


        function showmoshui ()
        {
            id('modian1').style.webkitAnimation='modian1 2s linear forwards';
            id('modian2').style.webkitAnimation='modian2 2.5s 0.3s linear forwards';
            id('modian3').style.webkitAnimation='modian1 2s 0.8s linear forwards';
            id('modian4').style.webkitAnimation='modian1 2s 0.5s linear forwards';
        }

        function cleanmoshui ()
        {
            id('modian1').style.webkitAnimation='';
            id('modian2').style.webkitAnimation='';
            id('modian3').style.webkitAnimation='';
            id('modian4').style.webkitAnimation='';
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
                //first_box.style.pointerEvents="none";
                //second_box.style.pointerEvents="auto";
                src=second_img.src;
            }
            else
            {
                myimg=second_img;
                mybox=second_box;
                
                //first_box.style.pointerEvents="auto";
                //second_box.style.pointerEvents="none";
                src=first_img.src;
            }

            var img_height=images_height[load_num];
            var img_width=images_width[load_num];
            var img_bili=img_width/img_height;

            if (img_bili<(288/420)) 
            {
                myimg.width=288;
                myimg.height=288/img_bili;
                myimg.style.left='0px';
                myimg.style.top='-'+((myimg.height-420)/2)+'px';
                
                mybox.style.width='288px';
                mybox.style.height='420px';
            }
            else
            {
                myimg.width=288;
                myimg.height=288/img_bili;
                myimg.style.top='0px';
                myimg.style.left='0px';

                mybox.style.width='288px';
                mybox.style.height=288/img_bili+'px';
            }

            //var src = myimg.src;
            mybox.parentElement.parentElement.onclick=function() {
                
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
