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
            $("#div_player").append('<div id="container"><div id="huajuan"style="opacity:0;"><div id="img_div"><div id="back_box"><img id="my_imgback"style="position:absolute;"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/8.jpg"></div><div id="front_box"><img id="my_imgfront"style="position:absolute;"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/9.jpg"></div></div><div id="downbox"><img id="down1"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/down.png"></div><img id="up"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/up.png"></div><!--<img id="kuang"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/01.png">--><img id="cat"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/02.png"><img id="mouse"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/03.png"><img id="catmouth"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/04.png"><img id="duck"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/05.png"><img id="robot"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/06.png"><img id="fly"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/07.png"><img id="bklight" style="pointer-events: none;" src="http://referer-image.szwwy.com/coolphoto/img/tpl12/light2.png"><img id="eye"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/09.png"><img id="catgun"src="http://referer-image.szwwy.com/coolphoto/img/tpl12/10.png"></div>');
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

            var temp_flag = 0;
            function id (name)
            {
                return document.getElementById(name);
            }

            function load_images ()
            {
                change_imgdiv=id('img_div');
                change_down=id('down1');

                first_img=id('my_imgfront');
                second_img=id('my_imgback');

                first_box=id('front_box');
                second_box=id('back_box');

                for(var i=0;i<images.length;i++)
                {
                    var img=new Image();
                    img.index=i;
                    img.src=images[i][1];
                    img.onload=img_onload;
                }
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
               
                    id('huajuan').style.opacity=1;
                    
                    beginshow();

                   
                };

            }

            function createStyle ()
            {    
                document.getElementById('huajuan').style.webkitAnimation = 'aa_in_bounce_center 1s .2s ease both';
                 setTimeout(function(){ 
                    document.getElementById('huajuan').style.webkitAnimation = 'huajuanmove 2s linear infinite alternate';
                    document.getElementById('up').style.webkitAnimation = 'light1 3s linear infinite';
                    document.getElementById('downbox').style.webkitAnimation = 'light1 3s linear infinite';
                        setTimeout(function(){
                        document.getElementById('up').style.webkitAnimation = '';
                        document.getElementById('huajuan').style.webkitAnimation = 'aa_out_bounce_center 1s .2s ease both';  

                        },4000);
                },1000);
              

                for(var i=0;i<images.length;i++)
                {
                    if (images_width[i]/images_height[i]<(277/377))
                    {
                        images_position[i]=377;
                    }
                    else
                    {
                        images_position[i]=277*images_height[i]/images_width[i];
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

                        //创建移动外面div动画
                        var csstext='@-webkit-keyframes change_box'+i+'to'+j+' {from{height:'+images_position[i]+'px} to{height:'+images_position[j]+'px}}';
                        var style=document.createElement('style');
                        document.head.appendChild(style);
                        // console.log(csstext);
                        var sheet=style.sheet;
                        sheet.insertRule(csstext,0);


                        //创建下面画轴移动动画
                        var translate_y1=377-images_position[i];
                        var translate_y2=377-images_position[j];
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
                change_down.style.webkitTransform='translate(0px,-'+(377-images_position[0])+'px)';
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

                setTimeout(function()
                {   
                    setTimeout(function(){
                       document.getElementById('huajuan').style.webkitAnimation = 'aa_in_bounce_down 1s .2s ease both'; 
                           setTimeout(function(){
                           document.getElementById('huajuan').style.webkitAnimation = 'huajuanmove 2s linear infinite alternate';
                           document.getElementById('up').style.webkitAnimation = 'light1 3s linear infinite';
                           document.getElementById('downbox').style.webkitAnimation = 'light1 3s linear infinite';
                                   setTimeout(function(){
                                    document.getElementById('up').style.webkitAnimation = '';
                                    document.getElementById('downbox').style.webkitAnimation = '';
                                   document.getElementById('huajuan').style.webkitAnimation = 'aa_out_bounce_down 1s .2s ease both'; 
                                   },4000);
                           },1000);
                    },4000);

                    
                    
                    setTimeout(function(){

                        change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 0.2s linear forwards';
                        change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 0.2s linear forwards';

                        // console.log(change_imgdiv.style.webkitAnimation);
                        


                        first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 0.2s linear forwards';
                        second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 0.2s linear forwards';
                        // console.log(second_box.style.webkitAnimation)
                        
                        load_num++;
                    },3800);
                    
                    
                    setTimeout(nextshow,4000);
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
                cleanfanguang();


                setTimeout(function()
                {   
                    setTimeout(function(){
                       document.getElementById('huajuan').style.webkitAnimation = 'aa_in_bounce_up 1s .2s ease both'; 
                       setTimeout(function(){
                       document.getElementById('huajuan').style.webkitAnimation = 'huajuanmove 2s linear infinite alternate';
                        document.getElementById('up').style.webkitAnimation = 'light1 3s linear infinite';
                        document.getElementById('downbox').style.webkitAnimation = 'light1 3s linear infinite';
                           setTimeout(function(){
                            document.getElementById('up').style.webkitAnimation = '';
                           document.getElementById('downbox').style.webkitAnimation = '';
                           document.getElementById('huajuan').style.webkitAnimation = 'aa_out_bounce_up 1s .2s ease both'; 
                           },4000);
                       },1000);
                    },4000);
                    
                    setTimeout(function(){
                    change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 0.2s linear forwards';
                    change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 0.2s linear forwards';

                    // console.log(change_imgdiv.style.webkitAnimation);
                    

                    first_box.style.webkitAnimation='change_box_in'+load_num+'to'+next_num+' 0.2s linear forwards';
                    //console.log(first_box.style.webkitAnimation);
                    second_box.style.webkitAnimation='change_box_sec_out'+load_num+'to'+next_num+' 0.2s linear forwards';
                    
                    load_num++; 
                    },3800);
                    
                    
                    temp_flag = 1 ;
                    setTimeout(nextnextshow,4000);
                   
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

                

                setTimeout(function()
                {   
                    setTimeout(function(){
                       document.getElementById('huajuan').style.webkitAnimation = 'aa_in_bounce_center 1s .2s ease both'; 
                       setTimeout(function(){
                       document.getElementById('huajuan').style.webkitAnimation = 'huajuanmove 2s linear infinite alternate';
                        document.getElementById('up').style.webkitAnimation = 'light1 3s linear infinite';
                        document.getElementById('downbox').style.webkitAnimation = 'light1 3s linear infinite';
                           setTimeout(function(){
                            document.getElementById('up').style.webkitAnimation = '';
                           document.getElementById('downbox').style.webkitAnimation = '';
                           document.getElementById('huajuan').style.webkitAnimation = 'aa_out_bounce_center 1s .2s ease both'; 
                           },4000);
                       },1000);
                    },4000);
                 

                    setTimeout(function(){
                    change_imgdiv.style.webkitAnimation='change_box'+load_num+'to'+next_num+' 0.2s linear forwards';
                    change_down.style.webkitAnimation='change_img'+load_num+'to'+next_num+' 0.2s linear forwards';

                    // console.log(change_imgdiv.style.webkitAnimation);


                    first_box.style.webkitAnimation='change_box_out'+load_num+'to'+next_num+' 0.2s linear forwards';
                    second_box.style.webkitAnimation='change_box_sec_in'+load_num+'to'+next_num+' 0.2s linear forwards';
                    
                    load_num++;
                    },3800);
                    
                    setTimeout(nextshow,4000);

                },3000)
            }


            function showfanguang ()
            {
                // id('fanguang').style.webkitAnimation='fanguang 2s linear forwards';
            }

            function cleanfanguang ()
            {
                // id('fanguang').style.webkitAnimation='';
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
                    src=second_img.src;
                }
                else
                {
                    myimg=second_img;
                    mybox=second_box;
                    src=first_img.src;
                }

                var img_height=images_height[load_num];
                var img_width=images_width[load_num];
                var img_bili=img_width/img_height;

                if (img_bili<(277/377)) 
                {
                    myimg.width=277;
                    myimg.height=277/img_bili;
                    myimg.style.left='0px';
                    myimg.style.top='-'+((myimg.height-377)/2)+'px';
                    
                    mybox.style.width='277px';
                    mybox.style.height='377px';
                }
                else
                {
                    myimg.width=277;
                    myimg.height=277/img_bili;
                    myimg.style.top='0px';
                    myimg.style.left='0px';

                    mybox.style.width='277px';
                    mybox.style.height=277/img_bili+'px';
                }
                mybox.parentElement.parentElement.onclick=function() {
                
                $("#img_viewer img").attr("src", src);
                $("#img_viewer").removeClass();
                $("#img_viewer").addClass("img_viewer_show");
                $("#img_viewer").css("display", "block");
                $("#img_viewer").css("pointer-events", "auto");
                $("#img_viewer").css("z-index", "99");
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
