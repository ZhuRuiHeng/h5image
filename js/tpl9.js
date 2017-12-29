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
            $("#div_player").append('<div id="biyeji_container"><img id="biyeji_background"><div id="biyeji_page0_0"class="biyeji_pic"><div><img id="biyeji_page_0_0"style="position:absolute"src=""></div></div><div id="biyeji_page0_1"class="biyeji_pic"><div><img id="biyeji_page_0_1"style="position:absolute"src=""></div></div><div id="biyeji_page0_2"class="biyeji_pic"><div><img id="biyeji_page_0_2"style="position:absolute"src=""></div></div><div id="biyeji_page1_0"class="biyeji_pic"><div><img id="biyeji_page_1_0"style="position:absolute"src=""></div></div><div id="biyeji_page1_1"class="biyeji_pic"><div><img id="biyeji_page_1_1"style="position:absolute"src=""></div></div><div id="biyeji_page1_2"class="biyeji_pic"><div><img id="biyeji_page_1_2"style="position:absolute"src=""></div></div><div id="biyeji_page1_3"class="biyeji_pic"><div><img id="biyeji_page_1_3"style="position:absolute"src=""></div></div><div id="biyeji_page2_0"class="biyeji_pic"><div><img id="biyeji_page_2_0"style="position:absolute"src=""></div></div><div id="biyeji_page3_0"class="biyeji_pic"><div><img id="biyeji_page_3_0"style="position:absolute"src=""></div></div><div id="biyeji_page3_1"class="biyeji_pic"><div><img id="biyeji_page_3_1"style="position:absolute"src=""></div></div><div id="biyeji_page4_0"class="biyeji_pic"><div><img id="biyeji_page_4_0"style="position:absolute"src=""></div></div><div id="biyeji_page4_1"class="biyeji_pic"><div><img id="biyeji_page_4_1"style="position:absolute"src=""></div></div><div id="biyeji_page5_0"class="biyeji_pic"><div><img id="biyeji_page_5_0"style="position:absolute"src=""></div></div><div id="biyeji_page5_1"class="biyeji_pic"><div><img id="biyeji_page_5_1"style="position:absolute"src=""></div></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl9/1.png"style="position:absolute;top:-100px;left:200px;width:60px;-webkit-animation:piaoluo 10s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl9/2.png"style="position:absolute;top:-100px;left:300px;width:40px;-webkit-animation:piaoluo 10s linear 2.5s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl9/3.png"style="position:absolute;top:-100px;left:400px;width:50px;-webkit-animation:piaoluo 10s linear 7.5s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl9/1.png"style="position:absolute;top:-100px;left:500px;width:60px;-webkit-animation:piaoluo 10s linear 5s infinite"><div id="pagetitle"style="pointer-events: none;position:absolute;width:410px;height:200px;top:238px;left:45px;font-size:40px;color:#fff;overflow:hidden;text-shadow:5px 6px 4px rgba(0, 0, 0, 0.2);"><div style="position:absolute;width:410px;height:200px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent"style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;color:#DEA42E;"></div></div></div></div></div>');
            var biyeji_index=0; 
    var images_url_index=0;

    var biyeji_range=[[{w:145,h:135},{w:110,h:112},{w:165,h:160}],[{w:254,h:175},{w:110,h:108},{w:113,h:110},{w:106,h:102}],[{w:335,h:232}],[{w:188,h:120},{w:259,h:168}],[{w:182,h:175},{w:150,h:148}],[{w:158,h:154},{w:241,h:168}]]


    function biyeji_init()
    {
        biyeji_showpage_index();
        setInterval(biyeji_showpage_index,4700);
        // biyeji_cut_image(0,0,1)
        // biyeji_loadimage();
    }

    function biyeji_showpage_index()
    {
        switch(biyeji_index)
        {
            case 0:biyeji_showpage0();break;
            case 1:biyeji_showpage1();break;
            case 2:biyeji_showpage2();break;
            case 3:biyeji_showpage3();break;
            case 4:biyeji_showpage4();break;
            case 5:biyeji_showpage5();break;
        }
        biyeji_index++;
        if(biyeji_index==6)
            biyeji_index=0;
    }
    
    function id (name) 
    {
        return document.getElementById(name)
    }

    function biyeji_showpage0 () 
    {

        for(var i=0;i<3;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                ////log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_0_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            ////log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page0_1').style.display='block';
        id('biyeji_page0_1').style.webkitAnimation='aa_in_bounce_right0 2s ease';

        // alert(id('biyeji_page_0_0').src+id('biyeji_page_0_0').width+id('biyeji_page_0_0').style.left)

        setTimeout(function()
        {
            id('biyeji_page0_0').style.display='block';
            id('biyeji_page0_0').style.webkitAnimation='aa_in_bounce_up 2s ease';
        },100);

        setTimeout(function()
        {
            id('biyeji_page0_2').style.display='block';
            id('biyeji_page0_2').style.webkitAnimation='aa_in_bounce_left 2s ease';
        },200);

        setTimeout(function()
        {
            id('biyeji_page0_0').style.webkitAnimation='aa_out_bounce_down 2s ease forwards';
            id('biyeji_page0_1').style.webkitAnimation='aa_out_bounce_right 2s ease forwards';
            id('biyeji_page0_2').style.webkitAnimation='aa_out_bounce_left0 2s ease forwards';
        },4000);

        // alert(id('biyeji_page_0_0').width)
    }

    function biyeji_showpage1 ()
    {
        for(var i=0;i<4;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                ////log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_1_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            ////log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page1_0').style.display='block';
        id('biyeji_page1_0').style.webkitAnimation='aa_in_bounce_down 2s ease';


        id('biyeji_page1_1').style.display='block';
        id('biyeji_page1_1').style.webkitAnimation='aa_in_bounce_up 2s ease';

        setTimeout(function()
        {
            id('biyeji_page1_2').style.display='block';
            id('biyeji_page1_2').style.webkitAnimation='aa_in_bounce_right0 2s ease';

            id('biyeji_page1_3').style.display='block';
            id('biyeji_page1_3').style.webkitAnimation='aa_in_bounce_left 2s ease';
        },100);

        setTimeout(function()
        {
            id('biyeji_page1_0').style.webkitAnimation='aa_out_bounce_up 2s ease forwards';
            id('biyeji_page1_1').style.webkitAnimation='aa_out_bounce_down 2s ease forwards';
            id('biyeji_page1_2').style.webkitAnimation='aa_out_bounce_right 2s ease forwards';
            id('biyeji_page1_3').style.webkitAnimation='aa_out_bounce_left0 2s ease forwards';
        },4000)
    }

    function biyeji_showpage2 ()
    {
        for(var i=0;i<1;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                //log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_2_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            //log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page2_0').style.display='block';
        id('biyeji_page2_0').style.webkitAnimation='aa_in_bounce_center 2s ease';

        setTimeout(function()
        {
            id('biyeji_page2_0').style.webkitAnimation='aa_out_bounce_left0 2s ease forwards';
        },4000)
    }

    function biyeji_showpage3 ()
    {
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                //log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_3_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            //log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page3_0').style.display='block';
        id('biyeji_page3_0').style.webkitAnimation='aa_in_bounce_right0 2s ease';

        id('biyeji_page3_1').style.display='block';
        id('biyeji_page3_1').style.webkitAnimation='aa_in_bounce_left 2s ease';

        setTimeout(function()
        {
            id('biyeji_page3_0').style.webkitAnimation='aa_out_bounce_down 2s ease forwards';
            id('biyeji_page3_1').style.webkitAnimation='aa_out_bounce_up 2s ease forwards';
        },4000)
    }

    function biyeji_showpage4 ()
    {
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                //log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_4_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            //log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page4_0').style.display='block';
        id('biyeji_page4_0').style.webkitAnimation='aa_in_bounce_right0 2s ease';

        id('biyeji_page4_1').style.display='block';
        id('biyeji_page4_1').style.webkitAnimation='aa_in_bounce_left 2s ease';

        setTimeout(function()
        {
            id('biyeji_page4_0').style.webkitAnimation='aa_out_bounce_up 2s ease forwards';
            id('biyeji_page4_1').style.webkitAnimation='aa_out_bounce_down 2s ease forwards';
        },4000)
    }

    function biyeji_showpage5 ()
    {
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_image_urls.length)
                images_url_index=0;
            while(Onload_image_urls[images_url_index] == 'not find' || Onload_image_urls[images_url_index] == 'loading')
            {
                //log(Onload_image_urls[images_url_index]);
                images_url_index++;
                if(images_url_index == Onload_image_urls.length)
                    images_url_index = 0;
            }
            var myimg=id('biyeji_page_5_'+i);
            biyeji_cut_image(biyeji_index,i);
            myimg.src=Onload_image_urls[images_url_index];
            //log(myimg.src);
            images_url_index++;
            myimg.onclick=function() {
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
        }

        id('biyeji_page5_0').style.display='block';
        id('biyeji_page5_0').style.webkitAnimation='aa_in_bounce_up 2s ease';

        id('biyeji_page5_1').style.display='block';
        id('biyeji_page5_1').style.webkitAnimation='aa_in_bounce_down 2s ease';

        setTimeout(function()
        {
            id('biyeji_page5_0').style.webkitAnimation='aa_out_bounce_right 2s ease forwards';
            id('biyeji_page5_1').style.webkitAnimation='aa_out_bounce_left0 2s ease forwards';
        },4000)
    }

    function biyeji_cut_image(pageid,pageid_index)
    {
        // var img=new Image();
        // img.src=Onload_image_urls[images_url_index];
        var imgheight=imagesize[images_url_index*2+1];
        var imgwidth=imagesize[images_url_index*2];
        // alert(imgheight+'-'+imgwidth);
        // var imgheight=id('biyeji_page_'+pageid+'_'+pageid_index).height;
        // var imgwidth=id('biyeji_page_'+pageid+'_'+pageid_index).width;
        var image_bili=imgwidth/imgheight;

        var my_img=id('biyeji_page_'+pageid+'_'+pageid_index);
        // id('biyeji_page_'+pageid+'_'+pageid_index).src=Onload_image_urls[images_url_index];

        if((biyeji_range[pageid][pageid_index].w/biyeji_range[pageid][pageid_index].h)>image_bili)
        {
            my_img.width=biyeji_range[pageid][pageid_index].w;
            my_img.height=biyeji_range[pageid][pageid_index].w/image_bili;
            my_img.style.left='0px';
            my_img.style.top='-'+(my_img.height-biyeji_range[pageid][pageid_index].h)/2+'px';
        }
        else
        {
            my_img.height=biyeji_range[pageid][pageid_index].h;
            my_img.width=biyeji_range[pageid][pageid_index].h*image_bili;
            my_img.style.top='0px';
            my_img.style.left='-'+(my_img.width-biyeji_range[pageid][pageid_index].w)/2+'px';
            // //log(id('biyeji_page_'+pageid+'_'+pageid_index).height)
            // //log(id('biyeji_page_'+pageid+'_'+pageid_index).width)
            // //log(id('biyeji_page_'+pageid+'_'+pageid_index).style.top)
            // //log(id('biyeji_page_'+pageid+'_'+pageid_index).style.left)
        }
    }
    var myimage=[];

    Onload_image_urls = [];
    var have_num = 0;
    var error_num = 0;
    var myimg_name=['biyeji_page_0_0','biyeji_page_0_1','biyeji_page_0_2','biyeji_page_1_0','biyeji_page_1_1','biyeji_page_1_2','biyeji_page_1_3','biyeji_page_2_0','biyeji_page_3_0','biyeji_page_3_1','biyeji_page_4_0','biyeji_page_4_1','biyeji_page_5_0','biyeji_page_5_1']

    var imagesize=[];
    function biyeji_loadimage()
    {
        var img;


        begin_titletime = new Date();
        begin_titletime = begin_titletime.getTime();
        //showtitle();
        for(var i=0;i<images.length;i++)
        {
            img=new Image();
            img.src=images[i][1];
            img.index=i;
            Onload_image_urls[i] = 'loading';
            img.onload=myonload;
            img.onerror = myonerror;

        }
    }
    function myonerror(event)
    {
        var img = event.target;
        var index = img.index;
        Onload_image_urls[index] = 'not find';
        if(index<10)
            error_num++;

        if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
        {   
            reshow = false;
            canshow =false;
            if(have_num == 0)
                return;

            biyeji_init();
        }
    }

    var img_id=0;
    canshow = true;
    reshow = false;
    var delaytime = 4000;
    function myonload(event)
    {
        var img=event.target;
        var this_index=img.index;
        if(this_index<10)
            have_num++;
        imagesize[this_index*2]=img.width;
        imagesize[this_index*2+1]=img.height;
        Onload_image_urls[this_index] = img.src;

        if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
        {   
            reshow = false;
            canshow =false;
            if(have_num == 0)
                return;

            biyeji_init();
        }
    }

    function distitle()
    {
        id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
        biyeji_init();
    }
    function showtitle()
    {
        id('pagetitle').style.webkitAnimation = 'fadein 1s linear both';
        id('titlecontent').innerHTML = e_desc;
    }
    call_me(biyeji_loadimage);
    load_init_modules();
            
    }
}
