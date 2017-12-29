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
            $("#div_player").append('<div id="baby_container" style="width:500px;height:815px;position:absolute;overflow:hidden;"><img id="baby_back" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/bg.jpg"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/3.png" style="position:absolute;top:270px;left:500px;-webkit-animation:yunmove 12s linear 9s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/3.png" style="position:absolute;top:170px;left:500px;width:60px;-webkit-animation:yunmove 12s linear 6s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/4.png" style="position:absolute;top:210px;left:500px;width:50px;-webkit-animation:yunmove 12s linear 3s infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/4.png" style="position:absolute;top:30px;left:500px;width:40px;-webkit-animation:yunmove 12s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/5.png" style="position:absolute;top:140px;left:150px;-webkit-transform-origin:100% 100%;-webkit-animation:qiqiumove 4s ease-in-out infinite alternate"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/6.png" style="position:absolute;top:120px;left:260px;-webkit-transform-origin:100% 100%;-webkit-animation:qiqiumove 4s ease-in-out 1s infinite alternate;-webkit-transform:rotate(-5deg)"><div id="baby_page_0_0"><div class="baby_div_0_0"><img id="baby_img_0_0" style="position:absolute;"></div><img class="baby_div_0_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_0_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_0_0" class="vertical_div"><div class="vertical_box baby_div_0_0"><img id="vertical_baby_img_0_0" style="position:absolute;"></div><img class="vertical_border_0_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_0_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_0_1"><div class="baby_div_0_1"><img id="baby_img_0_1" style="position:absolute;"></div><img class="baby_div_0_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_0_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_0_1" class="vertical_div"><div class="vertical_box baby_div_0_1"><img id="vertical_baby_img_0_1" style="position:absolute;"></div><img class="vertical_border_0_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_0_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_1_0"><div class="baby_div_1_0"><img id="baby_img_1_0" style="position:absolute;"></div><img class="baby_div_1_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_1_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_1_0" class="vertical_div"><div class="vertical_box baby_div_1_0"><img id="vertical_baby_img_1_0" style="position:absolute;"></div><img class="vertical_border_1_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_1_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_1_1"><div class="baby_div_1_1"><img id="baby_img_1_1" style="position:absolute;"></div><img class="baby_div_1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_1_1" class="vertical_div"><div class="vertical_box baby_div_1_1"><img id="vertical_baby_img_1_1" style="position:absolute;"></div><img class="vertical_border_1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_1_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_2_0"><div class="baby_div_2_0"><img id="baby_img_2_0" style="position:absolute;"></div><img class="baby_div_2_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_2_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_2_0" class="vertical_div"><div class="vertical_box baby_div_2_0"><img id="vertical_baby_img_2_0" style="position:absolute;"></div><img class="vertical_border_2_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_2_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_2_1"><div class="baby_div_2_1"><img id="baby_img_2_1" style="position:absolute;"></div><img class="baby_div_2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_2_1" class="vertical_div"><div class="vertical_box baby_div_2_1"><img id="vertical_baby_img_2_1" style="position:absolute;"></div><img class="vertical_border_2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_2_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_3_0"><div class="baby_div_3_0"><img id="baby_img_3_0" style="position:absolute;"></div><img class="baby_div_3_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_3_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_3_0" class="vertical_div"><div class="vertical_box baby_div_3_0"><img id="vertical_baby_img_3_0" style="position:absolute;"></div><img class="vertical_border_3_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_3_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_3_2"><div class="baby_div_3_2"><img id="baby_img_3_2" style="position:absolute;"></div><img class="baby_div_3_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_3_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_3_2" class="vertical_div"><div class="vertical_box baby_div_3_2"><img id="vertical_baby_img_3_2" style="position:absolute;"></div><img class="vertical_border_3_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_3_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_3_1"><div class="baby_div_3_1"><img id="baby_img_3_1" style="position:absolute;"></div><img class="baby_div_3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_3_1" class="vertical_div"><div class="vertical_box baby_div_3_1"><img id="vertical_baby_img_3_1" style="position:absolute;"></div><img class="vertical_border_3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_3_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_4_0"><div class="baby_div_4_0"><img id="baby_img_4_0" style="position:absolute;"></div><img class="baby_div_4_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_4_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_4_0" class="vertical_div"><div class="vertical_box baby_div_4_0"><img id="vertical_baby_img_4_0" style="position:absolute;"></div><img class="vertical_border_4_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_4_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_4_1"><div class="baby_div_4_1"><img id="baby_img_4_1" style="position:absolute;"></div><img class="baby_div_4_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_4_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_4_1" class="vertical_div"><div class="vertical_box baby_div_4_1"><img id="vertical_baby_img_4_1" style="position:absolute;"></div><img class="vertical_border_4_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_4_1" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_4_2"><div class="baby_div_4_2"><img id="baby_img_4_2" style="position:absolute;"></div><img class="baby_div_4_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_4_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_4_2" class="vertical_div"><div class="vertical_box baby_div_4_2"><img id="vertical_baby_img_4_2" style="position:absolute;"></div><img class="vertical_border_4_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_4_2" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="baby_page_5_0"><div class="baby_div_5_0"><img id="baby_img_5_0" style="position:absolute;"></div><img class="baby_div_5_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png"><img class="baby_div_5_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="position:absolute;-webkit-animation:diandian 0.5s linear infinite alternate"></div><div id="vertical_baby_page_5_0" class="vertical_div"><div class="vertical_box baby_div_5_0"><img id="vertical_baby_img_5_0" style="position:absolute;"></div><img class="vertical_border_5_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/7.png" ><img class="vertical_border_5_0" src="http://referer-image.szwwy.com/coolphoto/img/tpl7/8.png" style="-webkit-animation:diandian 0.5s linear infinite alternate"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/9.png" style="position:absolute;width:70px;top:580px;left:500px;-webkit-animation:qiqiufei 12s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/10.png" style="position:absolute;width:50px;top:250px;left:500px;-webkit-animation:qiqiufei 12s 3s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/10.png" style="position:absolute;width:50px;top:700px;left:500px;-webkit-animation:qiqiufei 12s 9s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl7/9.png" style="position:absolute;width:70px;top:800px;left:340px;-webkit-animation:qiqiufei 12s 6s linear infinite"><div id="pagetitle" style="pointer-events: none;position:absolute;width:410px;height:200px;top:238px;left:45px;font-size:40px;color:#B57932;overflow:hidden;opacity:0;"><div style="position:absolute;width:410px;height:200px;top:0px;left:0px;overflow:hidden;"><div style="position:absolute;width:410px;height:200px;display:table;overflow:hidden;"><div id="titlecontent" style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size:40px;line-height:70px;"></div></div></div></div></div>');
        var images_url_index=0;
    var have_num = 0;
    var error_num = 0;

    var image_size=[];

    var Onload_imgs = new Array();
    var canshow = true;
    var reshow = false;

    var timeout0;
    var timeout1;
    var timeout2;
    var timeout3;
    var timeout4;
    var timeout5;

    var delaytime = 4000;

    function reset_all()
    {
        clearTimeout(timeout0);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);

        images_url_index=0;
        have_num = 0;
        error_num = 0;
        
        image_size=[];

        Onload_imgs = [];

        canshow = true;

        id('baby_page_1_0').style.webkitAnimation='';
        id('baby_page_1_1').style.webkitAnimation='';
        id('vertical_baby_page_1_0').style.webkitAnimation='';
        id('vertical_baby_page_1_1').style.webkitAnimation='';
        id('baby_page_2_0').style.webkitAnimation='';
        id('baby_page_2_1').style.webkitAnimation='';
        id('vertical_baby_page_2_0').style.webkitAnimation='';
        id('vertical_baby_page_2_1').style.webkitAnimation='';
        id('baby_page_3_0').style.webkitAnimation='';
        id('baby_page_3_1').style.webkitAnimation='';
        id('baby_page_3_2').style.webkitAnimation='';
        id('vertical_baby_page_3_0').style.webkitAnimation='';
        id('vertical_baby_page_3_1').style.webkitAnimation='';
        id('vertical_baby_page_3_2').style.webkitAnimation='';
        id('baby_page_4_0').style.webkitAnimation='';
        id('baby_page_4_1').style.webkitAnimation='';
        id('baby_page_4_2').style.webkitAnimation='';
        id('vertical_baby_page_4_0').style.webkitAnimation='';
        id('vertical_baby_page_4_1').style.webkitAnimation='';
        id('vertical_baby_page_4_2').style.webkitAnimation='';
        id('baby_page_5_0').style.webkitAnimation='';
        id('vertical_baby_page_5_0').style.webkitAnimation='';
        id('baby_page_0_0').style.webkitAnimation='';
        id('baby_page_0_1').style.webkitAnimation='';
        id('vertical_baby_page_0_0').style.webkitAnimation='';
        id('vertical_baby_page_0_1').style.webkitAnimation='';

        id('baby_page_1_0').style.display = 'none';
        id('baby_page_1_1').style.display = 'none';
        id('vertical_baby_page_1_0').style.display = 'none';
        id('vertical_baby_page_1_1').style.display = 'none';
        id('baby_page_2_0').style.display = 'none';
        id('baby_page_2_1').style.display = 'none';
        id('vertical_baby_page_2_0').style.display = 'none';
        id('vertical_baby_page_2_1').style.display = 'none';
        id('baby_page_3_0').style.display = 'none';
        id('baby_page_3_1').style.display = 'none';
        id('baby_page_3_2').style.display = 'none';
        id('vertical_baby_page_3_0').style.display = 'none';
        id('vertical_baby_page_3_1').style.display = 'none';
        id('vertical_baby_page_3_2').style.display = 'none';
        id('baby_page_4_0').style.display = 'none';
        id('baby_page_4_1').style.display = 'none';
        id('baby_page_4_2').style.display = 'none';
        id('vertical_baby_page_4_0').style.display = 'none';
        id('vertical_baby_page_4_1').style.display = 'none';
        id('vertical_baby_page_4_2').style.display = 'none';
        id('baby_page_5_0').style.display = 'none';
        id('vertical_baby_page_5_0').style.display = 'none';
        id('baby_page_0_0').style.display = 'none';
        id('baby_page_0_1').style.display = 'none';
        id('vertical_baby_page_0_0').style.display = 'none';
        id('vertical_baby_page_0_1').style.display = 'none';

        reshow = false;
        baby_loadimage();
    }
    function baby_show_page_0 () 
    {
        if(reshow == true)
            return;
        var moshi=[0,0];
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;

            var id_img=id('baby_img_0_'+i);

            baby_cut_image(0,i);
            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi[i] = 0;
            else
                moshi[i] = 1;
                        
            images_url_index++;
        }

        if (moshi[0]==1)
        {
            id('vertical_baby_page_0_0').style.display='block';
            id('vertical_baby_page_0_0').style.webkitAnimation='ani_0_0 5s ease forwards';
        }
        else
        {
            id('baby_page_0_0').style.display='block';
            id('baby_page_0_0').style.webkitAnimation='ani_0_0 5s ease forwards'; 
        }

        if (moshi[1]==1)
        {
            id('vertical_baby_page_0_1').style.display='block';
            id('vertical_baby_page_0_1').style.webkitAnimation='ani_0_1 5s ease forwards';
        }
        else
        {
            id('baby_page_0_1').style.display='block';
            id('baby_page_0_1').style.webkitAnimation='ani_0_1 5s ease forwards';
        }

        id('baby_page_1_0').style.display='none';
        id('baby_page_1_1').style.display='none';
        id('baby_page_1_0').style.webkitAnimation='';
        id('baby_page_1_1').style.webkitAnimation='';

        id('vertical_baby_page_1_0').style.display='none';
        id('vertical_baby_page_1_1').style.display='none';
        id('vertical_baby_page_1_0').style.webkitAnimation='';
        id('vertical_baby_page_1_1').style.webkitAnimation='';

        timeout0 = setTimeout(baby_show_page_1,5000)
            
    }

    function baby_show_page_1 ()
    {
        if(reshow == true)
            return;

        var moshi=[0,0];
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;
            
            var id_img=id('baby_img_1_'+i);

            baby_cut_image(1,i);

            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi[i] = 0;
            else
                moshi[i] = 1;
            
            images_url_index++;
        }
 
        if (moshi[0]==1) 
        {
            id('vertical_baby_page_1_0').style.display='block';
            id('vertical_baby_page_1_0').style.webkitAnimation='ani_1_0 5s ease forwards';
        }
        else
        {
            id('baby_page_1_0').style.display='block';
            id('baby_page_1_0').style.webkitAnimation='ani_1_0 5s ease forwards';
        }

        if (moshi[1]==1)
        {
            id('vertical_baby_page_1_1').style.display='block';
            id('vertical_baby_page_1_1').style.webkitAnimation='ani_1_1 5s ease forwards';
        }
        else
        {
            id('baby_page_1_1').style.display='block';
            id('baby_page_1_1').style.webkitAnimation='ani_1_1 5s ease forwards';
        }   

        id('baby_page_2_0').style.display='none';
        id('baby_page_2_1').style.display='none';
        id('baby_page_2_0').style.webkitAnimation='';
        id('baby_page_2_1').style.webkitAnimation='';
        id('vertical_baby_page_2_0').style.display='none';
        id('vertical_baby_page_2_1').style.display='none';
        id('vertical_baby_page_2_0').style.webkitAnimation='';
        id('vertical_baby_page_2_1').style.webkitAnimation='';

        timeout1 = setTimeout(baby_show_page_2,5000)

    }

    function baby_show_page_2 ()
    {
        if(reshow == true)
            return;

        var moshi=[0,0];
        for(var i=0;i<2;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;
            
            var id_img=id('baby_img_2_'+i);

            baby_cut_image(2,i);
            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi[i] = 0;
            else
                moshi[i] = 1;
            
            images_url_index++;
        }

        if (moshi[0]==1)
        {
            id('vertical_baby_page_2_0').style.display='block';
            id('vertical_baby_page_2_0').style.webkitAnimation='ani_2_0 5s ease forwards';
        }
        else
        {
            id('baby_page_2_0').style.display='block';
            id('baby_page_2_0').style.webkitAnimation='ani_2_0 5s ease forwards';
        }

        if (moshi[1]==1)
        {
            id('vertical_baby_page_2_1').style.display='block';
            id('vertical_baby_page_2_1').style.webkitAnimation='ani_2_1 5s ease forwards';
        }
        else
        {
            id('baby_page_2_1').style.display='block';
            id('baby_page_2_1').style.webkitAnimation='ani_2_1 5s ease forwards';       
        }

        id('baby_page_3_0').style.display='none';
        id('baby_page_3_1').style.display='none';
        id('baby_page_3_2').style.display='none';
        id('baby_page_3_0').style.webkitAnimation='';
        id('baby_page_3_1').style.webkitAnimation='';
        id('baby_page_3_2').style.webkitAnimation='';
        id('vertical_baby_page_3_0').style.display='none';
        id('vertical_baby_page_3_1').style.display='none';
        id('vertical_baby_page_3_2').style.display='none';
        id('vertical_baby_page_3_0').style.webkitAnimation='';
        id('vertical_baby_page_3_1').style.webkitAnimation='';
        id('vertical_baby_page_3_2').style.webkitAnimation='';

        timeout2 = setTimeout(baby_show_page_3,5000)
    }

    function baby_show_page_3 ()
    {
        if(reshow == true)
            return;

        var moshi=[0,0,0];
        for(var i=0;i<3;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;
            
            var id_img=id('baby_img_3_'+i);

            baby_cut_image(3,i);
            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi[i] = 0;
            else
                moshi[i] = 1;
            
            images_url_index++;
        }

        if(moshi[0]==1)
        {
            id('vertical_baby_page_3_0').style.display='block';
            id('vertical_baby_page_3_0').style.webkitAnimation='ani_3_0 5s ease forwards';
        }
        else
        {
            id('baby_page_3_0').style.display='block';
            id('baby_page_3_0').style.webkitAnimation='ani_3_0 5s ease forwards';
        }
        if (moshi[2]==1)
        {
            id('vertical_baby_page_3_2').style.display='block';
            id('vertical_baby_page_3_2').style.webkitAnimation='ani_3_2 5s ease forwards';
        }
        else
        {
            id('baby_page_3_2').style.display='block';
            id('baby_page_3_2').style.webkitAnimation='ani_3_2 5s ease forwards';
        }
        if (moshi[1]==1)
        {
            id('vertical_baby_page_3_1').style.display='block';
            id('vertical_baby_page_3_1').style.webkitAnimation='ani_3_1 5s ease forwards'
        }
        else
        {
            id('baby_page_3_1').style.display='block';
            id('baby_page_3_1').style.webkitAnimation='ani_3_1 5s ease forwards'  
        }

        id('baby_page_4_0').style.display='none';
        id('baby_page_4_1').style.display='none';
        id('baby_page_4_2').style.display='none';
        id('baby_page_4_0').style.webkitAnimation='';
        id('baby_page_4_1').style.webkitAnimation='';
        id('baby_page_4_2').style.webkitAnimation='';
        id('vertical_baby_page_4_0').style.display='none';
        id('vertical_baby_page_4_1').style.display='none';
        id('vertical_baby_page_4_2').style.display='none';
        id('vertical_baby_page_4_0').style.webkitAnimation='';
        id('vertical_baby_page_4_1').style.webkitAnimation='';
        id('vertical_baby_page_4_2').style.webkitAnimation='';

        timeout3 = setTimeout(baby_show_page_4,5000)
    }

    function baby_show_page_4 ()
    {
        if(reshow == true)
            return;

        var moshi=[0,0,0];
        for(var i=0;i<3;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;
            
            var id_img=id('baby_img_4_'+i);

            baby_cut_image(4,i);
            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi[i] = 0;
            else
                moshi[i] = 1;
            
            images_url_index++;
        }

        if(moshi[0]==1)
        {
            id('vertical_baby_page_4_0').style.display='block';
            id('vertical_baby_page_4_0').style.webkitAnimation='ani_4_0 5s ease forwards';
        }
        else
        {
            id('baby_page_4_0').style.display='block';
            id('baby_page_4_0').style.webkitAnimation='ani_4_0 5s ease forwards';
        }
        if (moshi[1]==1)
        {
            id('vertical_baby_page_4_1').style.display='block';
            id('vertical_baby_page_4_1').style.webkitAnimation='ani_4_1 5s ease forwards';
        }
        else
        {
            id('baby_page_4_1').style.display='block';
            id('baby_page_4_1').style.webkitAnimation='ani_4_1 5s ease forwards';
        }
        if (moshi[2]==1)
        {
            id('vertical_baby_page_4_2').style.display='block';
            id('vertical_baby_page_4_2').style.webkitAnimation='ani_4_2 5s ease forwards';
        }
        else
        {
            id('baby_page_4_2').style.display='block';
            id('baby_page_4_2').style.webkitAnimation='ani_4_2 5s ease forwards';
        }

        id('baby_page_5_0').style.display='none';
        id('baby_page_5_0').style.webkitAnimation='';
        id('vertical_baby_page_5_0').style.display='none';
        id('vertical_baby_page_5_0').style.webkitAnimation='';

        timeout4 = setTimeout(baby_show_page_5,5000);

    }

    function baby_show_page_5 ()
    {
        if(reshow == true)
            return;

        var moshi=0;
        for(var i=0;i<1;i++)
        {
            if(images_url_index>=Onload_imgs.length)
                images_url_index=0;
            
            var id_img=id('baby_img_5_'+i);

            baby_cut_image(5,i);
            if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                moshi = 0;
            else
                moshi = 1;
            
            images_url_index++;
        }

        if (moshi==1)
        {
            id('vertical_baby_page_5_0').style.display='block';
            id('vertical_baby_page_5_0').style.webkitAnimation='ani_3_1 5s ease forwards';
        }
        else
        {
            id('baby_page_5_0').style.display='block';
            id('baby_page_5_0').style.webkitAnimation='ani_3_1 5s ease forwards';
        }


        id('baby_page_0_0').style.display='none';
        id('baby_page_0_1').style.display='none';
        id('baby_page_0_0').style.webkitAnimation='';
        id('baby_page_0_1').style.webkitAnimation='';
        id('vertical_baby_page_0_0').style.display='none';
        id('vertical_baby_page_0_1').style.display='none';
        id('vertical_baby_page_0_0').style.webkitAnimation='';
        id('vertical_baby_page_0_1').style.webkitAnimation='';

        timeout5 = setTimeout(baby_show_page_0,5000)
    }


    function id(name)
    {
        return document.getElementById(name)
    }

    function baby_cut_image(index,page_index)
    {
        if(reshow == true)
            return;

        while(Onload_imgs[images_url_index] == 'not find' || Onload_imgs[images_url_index] == 'loading')
        {
            console.log(Onload_imgs[images_url_index]);
            images_url_index++;
            if(images_url_index == Onload_imgs.length)
                images_url_index = 0;
        }

        var imgwidth=image_size[images_url_index*2];
        var imgheight=image_size[images_url_index*2+1];

        var img_bili=imgwidth/imgheight;

        if(img_bili<1)
        {

            moshi = 1;
        }
        else
        {
            moshi = 0;
        }
        if (moshi==1)
        {
            var img_obj=id('vertical_baby_img_'+index+'_'+page_index);
        }
        else
        {
            var img_obj=id('baby_img_'+index+'_'+page_index);
        }


        // console.log(imgwidth,imgheight,img_bili);

        if(img_bili>(647/419))
        {
            img_obj.height=419;
            img_obj.width=419*img_bili;
            img_obj.style.top='0px';
            img_obj.style.left='-'+((img_obj.width-647)/2)+'px';
        }
        else
        {
            // alert(img_obj.height)
            if(img_bili<1)
            {
                if(img_bili>(419/647))
                {
                    img_obj.height=647;
                    img_obj.width=647*img_bili;
                    img_obj.style.top='0px';
                    img_obj.style.left='-'+((img_obj.width-419)/2)+'px';
                }
                else
                {
                    img_obj.width=419;
                    img_obj.height=419/img_bili;
                    img_obj.style.left='0px';
                    img_obj.style.top='-'+((img_obj.height-647)/2)+'px';
                }

            }
            else
            {
                img_obj.width=647;
                img_obj.height=647/img_bili;
                img_obj.style.left='0px';
                img_obj.style.top='-'+((img_obj.height-419)/2)+'px';
            }

        }

        img_obj.src=Onload_imgs[images_url_index];
        //console.log(img_obj.src);
        var src = img_obj.src;
        img_obj.parentNode.parentNode.getElementsByTagName('img')[1].onclick=function() {
                
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



    function baby_loadimage()
    {

        begin_titletime = new Date();
        begin_titletime = begin_titletime.getTime();
        showtitle();

        for(var i=0;i<images.length;i++)
        {
            var img=new Image();
            img.src=images[i][1];
            img.index = i;
            Onload_imgs[i] = 'loading';
            img.onload=baby_onload;
            img.onerror = image_onerror;
        }

    }

    function image_onerror(event)
    {
        var img = event.target;
        var index = img.index;
        if(index<10)
            error_num ++;
        Onload_imgs[index] = 'not find';


        if((have_num+error_num >= 10 || slider_images_url.length == (have_num+error_num)) && canshow == true)
        {
            reshow = false;
            canshow =false;
            if(have_num == 0)
                return;
            baby_show_page_0();
        }
    }

    function baby_onload(event)
    {
        if(reshow == true)
            return;
        var img=event.target;
        var index = img.index;

        if(index<10)
        {
            have_num++;
        }
        Onload_imgs[index]=img.src;
        image_size[index*2]=img.width;
        image_size[index*2+1]=img.height;


        if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
        {
            reshow = false;
            canshow =false;
            if(have_num == 0)
                return;
            baby_show_page_0();
        }
        
    }

    function showtitle()
    {
        id('pagetitle').style.webkitAnimation = 'aa_in_bounce_center 1s ease both';
        // id('titlecontent').innerHTML = e_desc;
    }
    function distitle()
    {
        id('pagetitle').style.webkitAnimation = 'aa_out_bounce_center 1s ease both';
        baby_show_page_0();
    }
    call_me(baby_loadimage);
    load_init_modules();     

    function reload_scene()
    {
        reshow = true;
        reset_all();
    }

    }
}
