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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl41/bg1.jpg"><img id="snow_top"src="http://referer-image.szwwy.com/coolphoto/img/tpl41/shang.png"><div class="zuoyou"><div id="div1vmask"style="display:none"></div></div><div class="zuoyou"><div id="div1v"style="display:none"><img id="img1v"style="position:absolute"></div></div><div class="zuoyou"><div id="div1vlight"style="display:none"></div></div><div class="zuoyou"><div id="div1hmask"style="display:none"></div></div><div class="zuoyou"><div id="div1h"style="display:none"><img id="img1h"style="position:absolute"></div></div><div class="zuoyou"><div id="div1hlight"style="display:none"></div></div><div class="shangxia1"><div id="div21h"class="div2h"style="display:none"><img id="img21h"style="position:absolute"></div></div><div class="shangxia2"><div id="div22h"class="div2h"style="display:none"><img id="img22h"style="position:absolute"></div></div><div class="shangxia1"><div id="div21v"class="div2v"style="display:none"><img id="img21v"style="position:absolute"></div></div><div class="shangxia2"><div id="div22v"class="div2v"style="display:none"><img id="img22v"style="position:absolute"></div></div><div id="div31h"class="div3h"style="display:none"><div class="zhuangdong1h div3hzhuang"><img id="img31h"style="position:absolute"></div></div><div id="div32h"class="div3h"style="display:none"><div class="zhuangdong2h div3hzhuang"><img id="img32h"style="position:absolute"></div></div><div id="div33h"class="div3h"style="display:none"><div class="zhuangdong3h div3hzhuang"><img id="img33h"style="position:absolute"></div></div><div id="div31v"class="div3v"style="display:none"><div class="zhuangdong1h div3vzhuang"><img id="img31v"style="position:absolute"></div></div><div id="div32v"class="div3v"style="display:none"><div class="zhuangdong2h div3vzhuang"><img id="img32v"style="position:absolute"></div></div><div id="div33v"class="div3v"style="display:none"><div class="zhuangdong3h div3vzhuang"><img id="img33v"style="position:absolute"></div></div><img id="snow1"src="http://referer-image.szwwy.com/coolphoto/img/tpl41/150.png"style="left:320px;top:-155px;"><img id="snow"src="http://referer-image.szwwy.com/coolphoto/img/tpl41/150.png"style="left:39px;top:134px;"><div id="pagetitle"style="pointer-events: none;pointer:none"><div style="width:440px;left:30px;height:180px;font-size:40px;color:#fff;position:absolute;top:250px;overflow:hidden;text-align:center;text-shadow: 1px 1px 1px #000"><div style="width:440px;height:180px;position:absolute;display:table"><div id="titlecontent"style="width:400px;height:150px;display:table-cell;vertical-align:middle;line-height:150%;"></div></div></div></div></div>');
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
        var delaytime;
        var img_bili;
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
            //showtitle();
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
        function image_onerror()
        {
            var img = event.target;
            var index = img.index;
            error_num ++;
            Onload_imgs_url[index] = 'not find';
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if((have_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
                timeout0 = setTimeout(show1,1500);  
            }
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;

            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;
            have_num++;
            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);
            if((have_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                distitle();
                timeout0 = setTimeout(show1,1500);
            }
        }
        function showtitle()
        {
            if(reshow == true)
                return;
            var content = id('titlecontent');
            var html_text = '<div id="texttitle" style="display:block;width:440px;">';

            for(var i = 0;i<e_desc.length;i++)
            {
                var j = i%11;
                html_text = html_text + '<span id="span'+i+'" style="position:relative;-webkit-animation: wordrotate 1.5s linear '+j*0.2+'s both">'+ e_desc[i]+'</span>';
                if(j == 10)
                    html_text = html_text + '<br>';
            }
            content.innerHTML = html_text + '</div>';
        }
        function distitle()
        {
            if(reshow == true)
                return;
            // var content = id('titlecontent');
            // var html_text = '<div id="texttitle" style="display:block;width:440px;">';

            // for(var i = 0;i<e_desc.length;i++)
            // {
            //     var j = 11-i%11;
            //     html_text = html_text + '<span id="span'+i+'" style="position:relative;-webkit-animation: wordrotateout 1s linear '+j*0.1+'s both">'+ e_desc[i]+'</span>';
            //     if(i%11 == 10)
            //         html_text = html_text + '<br>';
            // }
            // content.innerHTML = html_text + '</div>'
            id('snow').style.webkitAnimation = 'xuehua 15s linear infinite';
            id('snow1').style.webkitAnimation = 'xuehua1 15s 2s linear infinite';
        }

        function show1()
        {
            setImage('1');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            if(img_bili > 1)
            {
                id('div1hmask').style.display = 'block';
                id('div1h').style.display = 'block';
                id('div1hlight').style.display = 'block';
                id('div1vmask').style.display = 'none';
                id('div1v').style.display = 'none';
                id('div1vlight').style.display = 'none';
                id('div1hmask').style.webkitAnimation = 'show_div1vmask 1s ease-out both';
                id('div1h').style.webkitAnimation = 'fadein 0.3s linear 1s both';
                id('div1hlight').style.webkitAnimation = 'show_div1vlight 0.8s linear 1s both';  
            }
            else
            {
                id('div1vmask').style.display = 'block';
                id('div1v').style.display = 'block';
                id('div1vlight').style.display = 'block';
                id('div1hmask').style.display = 'none';
                id('div1h').style.display = 'none';
                id('div1hlight').style.display = 'none';
                id('div1vmask').style.webkitAnimation = 'show_div1vmask 1s ease-out both';
                id('div1v').style.webkitAnimation = 'fadein 0.3s linear 1s both';
                id('div1vlight').style.webkitAnimation = 'show_div1vlight 0.8s linear 1s both'; 
            }
            timeout1 = setTimeout(show1_out,4000)
        }
        function show1_out()
        {
            id('div1vmask').style.opacity = 1;
            id('div1vlight').style.webkitAnimation = 'out_div1vlight 0.8s ease-out both';
            id('div1v').style.webkitAnimation = 'fadeout1 0.7s ease-out both';
            id('div1vmask').style.webkitAnimation = 'out_div1vmask 1s 0.9s linear both';
            id('div1hmask').style.opacity = 1;
            id('div1hlight').style.webkitAnimation = 'out_div1vlight 0.8s ease-out both';
            id('div1h').style.webkitAnimation = 'fadeout1 0.7s ease-out both';
            id('div1hmask').style.webkitAnimation = 'out_div1vmask 1s 0.9s linear both';


            id('div21v').style.webkitAnimation = '';
            id('div22v').style.webkitAnimation = '';
            id('div21h').style.webkitAnimation = '';
            id('div22h').style.webkitAnimation = '';
            id('div21v').style.display = 'none';
            id('div22v').style.display = 'none';
            id('div21h').style.display = 'none';
            id('div22h').style.display = 'none';
            timeout2 = setTimeout(show2,1500);
        }
        function show2()
        {
            setImage('21');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili > 1)
            {
                id('div21h').style.webkitAnimation = 'in_div21h 7s linear both';
            }
            else
            {
                id('div21v').style.webkitAnimation = 'in_div21v 7s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            setImage('22');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili > 1)
            {
                id('div22h').style.webkitAnimation = 'in_div22h 7s linear both';
            }
            else
            {
                id('div22v').style.webkitAnimation = 'in_div22v 7s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            id('div31h').style.display = 'none';
            id('div32h').style.display = 'none';
            id('div33h').style.display = 'none';
            id('div31h').style.webkitAnimation = '';
            id('div32h').style.webkitAnimation = '';
            id('div33h').style.webkitAnimation = '';
            id('div31v').style.display = 'none';
            id('div32v').style.display = 'none';
            id('div33v').style.display = 'none';
            id('div31v').style.webkitAnimation = '';
            id('div32v').style.webkitAnimation = '';
            id('div33v').style.webkitAnimation = '';
            timeout3 = setTimeout(show3,7000);
        }
        function show3()
        {
            setImage('33');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili > 1)
            {
                id('div33h').style.webkitAnimation = 'in_div33h 14s linear both';
            }
            else
            {
                id('div33v').style.webkitAnimation = 'in_div33v 14s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            setImage('32');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili > 1)
            {
                id('div32h').style.webkitAnimation = 'in_div32h 14s linear both';
            }
            else
            {
                id('div32v').style.webkitAnimation = 'in_div32v 14s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            setImage('31');
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili > 1)
            {
                id('div31h').style.webkitAnimation = 'in_div31h 14s linear both';
            }
            else
            {
                id('div31v').style.webkitAnimation = 'in_div31v 14s linear both';
            }
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            timeout4 = setTimeout(show1,14000);
        }


        function setImage(pageid,img_bili)
        {
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var img_obj;
            var div_obj;
            var div_obj1;
            if(pageid == '1')
            {
                if(img_bili>1)
                {
                    img_obj = id('img1h');
                    if(img_bili > (440/300))
                    {
                        img_obj.style.height = '300px';
                        img_obj.style.width = 300*img_bili + 'px';
                        img_obj.style.top = '0px';
                        img_obj.style.left = -((300*img_bili-440)/2)+'px';
                    }
                    else
                    {
                        img_obj.style.width = '440px';
                        img_obj.style.height = 440/img_bili + 'px';
                        img_obj.style.left = '0px';
                        img_obj.style.top = -((440/img_bili-300)/2)+'px';
                    }
                    id('div1v').style.display = 'none';
                    id('div1h').style.display = 'block';
                }
                else
                {
                    img_obj = id('img1v');
                    if(img_bili >(381/553))
                    {
                        img_obj.style.height = '553px';
                        img_obj.style.width = 553*img_bili + 'px';
                        img_obj.style.top = '0px';
                        img_obj.style.left = -((553*img_bili-381)/2)+'px';
                    }
                    else
                    {
                        img_obj.style.width = '381px';
                        img_obj.style.height = 381/img_bili + 'px';
                        img_obj.style.left = '0px';
                        img_obj.style.top = -((381/img_bili-553)/2)+'px';
                    }
                    id('div1v').style.display = 'block';
                    id('div1h').style.display = 'none';
                }
            }
            else
            {
                var imgname = 'img'+pageid;
                var divname = 'div'+pageid;
                if(img_bili > 1)
                {
                    img_obj = id(imgname + 'h');
                    div_obj = id(divname + 'h');
                    div_obj1 = id(divname + 'v');

                    div_obj.style.display = 'block';
                    div_obj1.style.display = 'none';

                    var img_width = 450;
                    var img_height = 300

                    if(img_bili >(img_width/300))
                    {
                        img_obj.style.height = img_height+'px';
                        img_obj.style.width = img_height*img_bili + 'px';
                        img_obj.style.top = '0px';
                        img_obj.style.left = -((img_height*img_bili-img_width)/2)+'px';
                    }
                    else
                    {
                        img_obj.style.width = img_width+'px';
                        img_obj.style.height = img_width/img_bili + 'px';
                        img_obj.style.left = '0px';
                        img_obj.style.top = -((img_width/img_bili-img_height)/2)+'px';
                    }
                }
                else
                {
                    img_obj = id(imgname + 'v');
                    div_obj = id(divname + 'v');
                    div_obj1 = id(divname + 'h');

                    div_obj.style.display = 'block';
                    div_obj1.style.display = 'none';

                    var img_width;
                    var img_height;
                    if(pageid == '21' || pageid == '22')
                    {
                        img_width = 350;
                        img_height = 500;
                    }
                    else
                    {
                        img_width = 300;
                        img_height = 450;
                    }

                    if(img_bili >(img_width/500))
                    {
                        img_obj.style.height = img_height+'px';
                        img_obj.style.width = img_height*img_bili + 'px';
                        img_obj.style.top = '0px';
                        img_obj.style.left = -((img_height*img_bili-img_width)/2)+'px';
                    }
                    else
                    {
                        img_obj.style.width = img_width+'px';
                        img_obj.style.height = img_width/img_bili + 'px';
                        img_obj.style.left = '0px';
                        img_obj.style.top = -((img_width/img_bili-img_height)/2)+'px';
                    }
                }
            }
            img_obj.src = Onload_imgs_url[image_url_index];
            //log(img_obj.id+img_obj.src);
        }
        call_me(load_images);
        load_init_modules();
        function reload_scene()
        {
            reshow = true;
            clearnodes();
            load_images();
        }
        function clearnodes()
        {
            id('snow').style.webkitAnimation = '';
            id('snow1').style.webkitAnimation = '';
            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div21h').style.webkitAnimation = '';
            id('div22h').style.webkitAnimation = '';
            id('div21v').style.webkitAnimation = '';
            id('div22v').style.webkitAnimation = '';
            id('div31h').style.webkitAnimation = '';
            id('div32h').style.webkitAnimation = '';
            id('div33h').style.webkitAnimation = '';
            id('div31v').style.webkitAnimation = '';
            id('div32v').style.webkitAnimation = '';
            id('div33v').style.webkitAnimation = '';
            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div21h').style.display = 'none';
            id('div22h').style.display = 'none';
            id('div21v').style.display = 'none';
            id('div22v').style.display = 'none';
            id('div31h').style.display = 'none';
            id('div32h').style.display = 'none';
            id('div33h').style.display = 'none';
            id('div31v').style.display = 'none';
            id('div32v').style.display = 'none';
            id('div33v').style.display = 'none';
            id('titlecontent').innerHTML = '';
            id('div1hmask').style.display = 'none';
            id('div1hlight').style.display = 'none';
            id('div1hmask').style.webkitAnimation = '';
            id('div1hlight').style.webkitAnimation = '';
            id('div1vmask').style.display = 'none';
            id('div1vlight').style.display = 'none';
            id('div1vmask').style.webkitAnimation = '';
            id('div1vlight').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
        }    
    }
}
