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
        $("#div_player").append('<div id="container"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/bg.jpg"><div id="divv"><div id="div4"class="divv"></div><div id="div3"class="divv"></div><div id="div2"class="divv"></div><div id="div1"class="divv"></div><img id="maskv"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/kuang1.png"></div><div id="divh"><div id="div4h"class="divh"></div><div id="div3h"class="divh"></div><div id="div2h"class="divh"></div><div id="div1h"class="divh"></div><img id="maskh"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/kuang2.png"></div><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/up.png"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/xing.png"style="left:126px;top:600px;-webkit-animation: xing 5s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/xing.png"style="left: 308px;top: 8px;width: 35px;-webkit-animation: xing1 3s linear infinite"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/xing.png"style="left: 290px;top: 39px;width: 40px;-webkit-animation: xing2 1.5s linear infinite alternate"><div id="word"><img id="word1"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi2.png"><img id="word2"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi3.png"style="left:25px;top:0px;"><img id="word3"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi1.png"><img id="word4"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi4.png"style="left:25px;"><img id="word5"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi.png"><img id="word6"src="http://referer-image.szwwy.com/coolphoto/img/tpl24/wenzi5.png"style="left:25px;"></div><div id="pagetitle"style="position:absolute;width: 306px;height: 75px;top: 353px;left: 101px;"><img src="http://referer-image.szwwy.com/coolphoto/img/tpl24/title.png"style="position:absolute;left:-21px;top:-75px"><div style="position:absolute;width:410px;height:200px;width: 306px;height: 75px;display:table;overflow:hidden;"><div id="titlecontent"style="width:410px;height:200px;vertical-align:middle;display:table-cell;text-align:center;font-size: 28px;line-height: 25px;width: 306px;height: 75px;color: #1D1D1C;text-shadow:2px 0px 1px #818180"></div></div></div></div>');
        var img_biliv = (400/600);
        var img_bilih = (475/350);

        function show1()
        {
            var container = id('div1');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_biliv)
            {
                var img_height = 600;
                var img_width = 600*img_bili;
                var img_left = -(img_width-400)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 400;
                var img_height = 400/img_bili;
                var img_left = 0;
                var img_top = -(img_height-600)/2;
            }

            for(var i = 0;i<8;i++)
            {
                var div = document.createElement('div');
                div.className = 'divv_cell';
                div.style.top = i*75+'px';

                var div_img = document.createElement('div');
                div_img.className = 'divv_img';
                div_img.id = 'img1_'+i;
                div_img.style.backgroundSize = img_width+'px '+img_height + 'px';
                div_img.style.backgroundPosition = img_left+'px '+(img_top-75*i)+'px';
                div_img.style.webkitAnimation = 'ani_1 1s linear both';

                div_img.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

                div.appendChild(div_img);

                container.appendChild(div);
            }

            container = id('div1h');
            for(var i=0;i<5;i++)
            {
                var div = document.createElement('div');
                div.className = 'divh_cell';
                div.style.top = i*70 + 'px';

                var div_img = document.createElement('div');
                div_img.className = 'divh_img';
                div_img.id = 'img1h_'+i;

                div.appendChild(div_img);

                container.appendChild(div);
            }


            image_url_index++;

        }

        function show1h()
        {
            var container = id('div1h');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_bilih)
            {
                var img_height = 350;
                var img_width = 350*img_bili;
                var img_left = -(img_width-475)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 475;
                var img_height = 475/img_bili;
                var img_left = 0;
                var img_top = -(img_height-350)/2;
            }
            for(var i=0;i<5;i++)
            {
                var div = document.createElement('div');
                div.className = 'divh_cell';
                div.style.top = i*70 + 'px';

                var div_img = document.createElement('div');
                div_img.className = 'divh_img';
                div_img.id = 'img1h_'+i;

                div_img.style.backgroundSize = img_width+'px '+img_height + 'px';
                div_img.style.backgroundPosition = img_left+'px '+(img_top-70*i)+'px';
                div_img.style.webkitAnimation = 'anih_1 1s linear both';

                div_img.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

                div.appendChild(div_img);

                container.appendChild(div);
            }

            container = id('div1');
            for(var i = 0;i<8;i++)
            {
                var div = document.createElement('div');
                div.className = 'divv_cell';
                div.style.top = i*75+'px';

                var div_img = document.createElement('div');
                div_img.className = 'divv_img';
                div_img.id = 'img1_'+i;

                div.appendChild(div_img);

                container.appendChild(div);
            }

            image_url_index++;

        }

        function showpage2()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    show2();
                }
                else
                {
                    show2_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    show2_htov();
                }
                else
                {
                    show2h();
                }
            }

            before_type = img_type;
            image_url_index++;

            setTimeout(showpage3,4000)
        }
        function show2()
        {
            for(var i = 0;i<8; i++)
            {
                var img = id('img1_'+i);
                img.style.webkitAnimation = 'aniout_1 1s linear both';
            }

            cut2();

        }

        function show2_vtoh()
        {
            for(var i = 0;i<8; i++)
            {
                var img = id('img1_'+i);
                img.style.webkitAnimation = 'fadeout 1s linear both';
            }
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';

            cut2h();
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';
        }

        function show2_htov()
        {
            for(var i = 0;i<5; i++)
            {
                var img = id('img1h_'+i);
                img.style.webkitAnimation = 'fadeout 1s linear both';
            }
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';

            cut2();
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';
        }

        function show2h()
        {
            for(var i = 0;i<5;i++)
            {
                var img = id('img1h_'+i);
                img.style.webkitAnimation = 'aniouth_1 1s linear both';
            }

            cut2h();

            // setTimeout(show3h,4000);
        }

        function cleanshow1()
        {
            for(var i = 0;i<8; i++)
            {
                var img = id('img1_'+i);
                if(img == null)
                    return;
                img.style.webkitAnimation = '';
                img.style.backgroundImage = '';
            }
        }

        function cleanshow1h()
        {
            for(var i = 0;i<5; i++)
            {
                var img = id('img1h_'+i);
                if(img == null)
                    return;
                img.style.webkitAnimation = '';
                img.style.backgroundImage = '';
            }
        }

        function cut2()
        {
            var container = id('div2');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_biliv)
            {
                var img_height = 600;
                var img_width = 600*img_bili;
                var img_left = -(img_width-400)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 400;
                var img_height = 400/img_bili;
                var img_left = 0;
                var img_top = -(img_height-600)/2;
            }

            for(var i=0;i<4;i++)
            {
                var div = document.createElement('div');
                div.className = 'divv_cell2';
                div.id = 'div2_'+i;      

                div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                div.style.backgroundSize = img_width+'px '+img_height + 'px';

                if(i==0)
                {
                    div.style.backgroundPosition = img_left + 'px '+img_top + 'px';
                }
                else if(i == 1)
                {
                    div.style.left = '200px';
                    div.style.backgroundPosition = (img_left-200) + 'px '+img_top + 'px';
                }
                else if(i==2)
                {
                    div.style.top = '300px';
                    div.style.backgroundPosition = (img_left) + 'px '+(img_top-300) + 'px';
                }
                else if(i==3)
                {
                    div.style.left = '200px';
                    div.style.top = '300px';
                    div.style.backgroundPosition = (img_left-200) + 'px '+(img_top-300) + 'px';
                }

                // div.appendChild(img);

                container.appendChild(div);

            }

            container = id('div2h')
            for(var i=0;i<4;i++)
            {
                var div = document.createElement('div');
                div.className = 'divh_cell2';
                div.id = 'div2h_'+i;

                if(i==1)
                {
                    div.style.left = '240px';
                }
                else if(i==2)
                {
                    div.style.top = '175px';
                }
                else if(i==3)
                {
                    div.style.left = '240px';
                    div.style.top = '175px';
                }

                container.appendChild(div);
            }
        }

        function cut2h()
        {
            var container = id('div2h');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_bilih)
            {
                var img_height = 350;
                var img_width = 350*img_bili;
                var img_left = -(img_width-475)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 475;
                var img_height = 475/img_bili;
                var img_left = 0;
                var img_top = -(img_height-350)/2;
            }

            for(var i=0;i<4;i++)
            {
                var div = document.createElement('div');
                div.className = 'divh_cell2';
                div.id = 'div2h_'+i;

                div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                div.style.backgroundSize = img_width+'px '+img_height + 'px';

                if(i==0)
                {
                    div.style.backgroundPosition = img_left + 'px '+img_top + 'px';
                }
                else if(i==1)
                {
                    div.style.left = '240px';
                    div.style.backgroundPosition = (img_left-240) + 'px '+img_top + 'px';
                }
                else if(i==2)
                {
                    div.style.top = '175px';
                    div.style.backgroundPosition = img_left + 'px '+(img_top-175) + 'px';
                }
                else if(i==3)
                {
                    div.style.left = '240px';
                    div.style.top = '175px';
                    div.style.backgroundPosition = (img_left-240) + 'px '+(img_top-175) + 'px';
                }

                container.appendChild(div);
            }


            container = id('div2');
            for(var i=0;i<4;i++)
            {
                var div = document.createElement('div');
                div.className = 'divv_cell2';
                div.id = 'div2_'+i;      

                if(i==0)
                {
                    div.style.backgroundPosition = img_left + 'px '+img_top + 'px';
                }
                else if(i == 1)
                {
                    div.style.left = '200px';
                }
                else if(i==2)
                {
                    div.style.top = '300px';
                }
                else if(i==3)
                {
                    div.style.left = '200px';
                    div.style.top = '300px';
                }
                container.appendChild(div);

            }


        }

        function cleanshow2()
        {
            for(var i = 0;i<4;i++)
            {
                var div = id('div2_'+i);
                if(div == null)
                    return;
                div.style.webkitAnimation = '';
                div.style.backgroundImage = '';
            }
        }

        function cleanshow2h()
        {
            for(var i = 0;i<4;i++)
            {
                var div = id('div2h_'+i);
                if(div==null)
                    return;
                div.style.webkitAnimation = '';
                div.style.backgroundImage = '';
            } 
        }

        function showpage3()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    show3();
                }
                else
                {
                    show3_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    show3_htov();
                }
                else
                {
                    show3h();
                }
            }

            before_type = img_type;
            image_url_index++;

            setTimeout(showpage4,4000)
        }

        function show3()
        {
            id('div2_0').style.webkitAnimation = 'div2_0 1.5s linear both';
            id('div2_1').style.webkitAnimation = 'div2_1 1.5s linear both';
            id('div2_2').style.webkitAnimation = 'div2_2 1.5s linear both';
            id('div2_3').style.webkitAnimation = 'div2_3 1.5s linear both';

            cut3();

        }

        function show3_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            cut3h();
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';
        }



        function show3h()
        {
            id('div2h_0').style.webkitAnimation = 'div2h_0 1.5s linear both';
            id('div2h_1').style.webkitAnimation = 'div2h_1 1.5s linear both';
            id('div2h_2').style.webkitAnimation = 'div2h_2 1.5s linear both';
            id('div2h_3').style.webkitAnimation = 'div2h_3 1.5s linear both';

            cut3h();

        }

        function show3_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            cut3();
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';
        }

        function cut3()
        {
            var container = id('div3');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_biliv)
            {
                var img_height = 600;
                var img_width = 600*img_bili;
                var img_left = -(img_width-400)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 400;
                var img_height = 400/img_bili;
                var img_left = 0;
                var img_top = -(img_height-600)/2;
            }

            for(var i =0; i<4;i++)
            {
                for(var j=0;j<6;j++)
                {
                    var div = document.createElement('div');
                    div.className = 'divv_cell3';
                    div.id= 'div_'+i+'_'+j;

                    div.style.backgroundSize = img_width + 'px '+img_height + 'px';
                    div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                    div.style.backgroundPosition = (img_left-i*100)+'px '+(img_top-j*100)+'px';

                    div.style.left = i*100+'px';
                    div.style.top = j*100 + 'px';

                    var delayanitime = (4000+rand(0,1000))/1000;
                    div.style.webkitAnimation = 'fadeout 1s '+delayanitime + 's linear both';

                    container.appendChild(div);
                }
            }

            container = id('div3h')
            for(var i=0;i<5;i++)
            {
                for(var j=0;j<5;j++)
                {
                    var div = document.createElement('div');
                    div.className = 'divh_cell3';
                    div.id = 'divh_'+ i + '_'+j;

                    div.style.left = i*95 + 'px';
                    div.style.top = j*70 + 'px';

                    var delayanitime = (4000+rand(0,1000))/1000;
                    div.style.webkitAnimation = 'fadeout 1s '+delayanitime + 's linear both';

                    container.appendChild(div);
                }
            }

        }

        function cut3h()
        {
            var container = id('div3h');

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if(img_bili>img_bilih)
            {
                var img_height = 350;
                var img_width = 350*img_bili;
                var img_left = -(img_width-475)/2;
                var img_top = 0;
            }
            else
            {
                var img_width = 475;
                var img_height = 475/img_bili;
                var img_left = 0;
                var img_top = -(img_height-350)/2;
            }

            for(var i=0;i<5;i++)
            {
                for(var j=0;j<5;j++)
                {
                    var div = document.createElement('div');
                    div.className = 'divh_cell3';
                    div.id = 'divh_'+ i + '_'+j;

                    div.style.backgroundSize = img_width + 'px '+img_height + 'px';
                    div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

                    div.style.left = i*95 + 'px';
                    div.style.top = j*70 + 'px';

                    div.style.backgroundPosition = (img_left-i*95) + 'px '+(img_top-j*70)+'px';

                    var delayanitime = (4000+rand(0,1000))/1000;
                    div.style.webkitAnimation = 'fadeout 1s '+delayanitime + 's linear both';

                    container.appendChild(div);
                }
            }

            container = id('div3');
            for(var i =0; i<4;i++)
            {
                for(var j=0;j<6;j++)
                {
                    var div = document.createElement('div');
                    div.className = 'divv_cell3';
                    div.id= 'div_'+i+'_'+j;

                    div.style.left = i*100+'px';
                    div.style.top = j*100 + 'px';

                    var delayanitime = (4000+rand(0,1000))/1000;

                    container.appendChild(div);
                }
            }

        }


        function cleanshow3()
        {
            for(var i=0;i<4;i++)
            {
                for(var j=0;j<6;j++)
                {
                    var div = id('div_'+i+'_'+j);
                    if(div == null)
                        return;
                    div.style.webkitAnimation = '';
                    div.style.backgroundImage = '';
                }
            }
        }

        function cleanshow3h()
        {
            for(var i=0;i<5;i++)
            {
                for(var j=0;j<5;j++)
                {
                    var div = id('divh_'+i+'_'+j);
                    if(div == null)
                        return;
                    div.style.webkitAnimation = '';
                    div.style.backgroundImage = '';
                }
            }
        }

        function showpage4()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    cut4();
                }
                else
                {
                    show4_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    show4_htov();
                }
                else
                {
                    cut4();
                }
            }

            before_type = img_type;
            image_url_index++;

            cleanshow1();
            cleanshow1h();

            setTimeout(shownextpage1,4000)
        }

        function rand(min,max)
        {
            return min+Math.floor(Math.random()*(max-min+1));
        }

        function show4_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';

            cut4();
        }

        function show4_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';

            cut4();

        }



        function cut4()
        {
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_type)
            {
                if(img_bili>img_biliv)
                {
                    var img_height = 600;
                    var img_width = 600*img_bili;
                    var img_left = -(img_width-400)/2;
                    var img_top = 0;
                }
                else
                {
                    var img_width = 400;
                    var img_height = 400/img_bili;
                    var img_left = 0;
                    var img_top = -(img_height-600)/2;
                }
                var div = id('div4');
            }
            else
            {
                if(img_bili>img_bilih)
                {
                    var img_height = 350;
                    var img_width = 350*img_bili;
                    var img_left = -(img_width-475)/2;
                    var img_top = 0;
                }
                else
                {
                    var img_width = 475;
                    var img_height = 475/img_bili;
                    var img_left = 0;
                    var img_top = -(img_height-350)/2;
                }
                var div = id('div4h');
            }
            div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div.style.backgroundSize = img_width +'px '+img_height + 'px';
            div.style.backgroundPosition = img_left + 'px '+img_top  +'px';
        }

        function shownextpage1()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    shownext1();
                }
                else
                {
                    shownext1_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    shownext1_htov();
                }
                else
                {
                    shownext1();
                }
            }

            before_type = img_type;
            image_url_index++;

            cleanshow2();
            cleanshow2h();

            setTimeout(shownextpage2,4000)
        }

        function shownext1_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext1();
        }

        function shownext1_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext1();
        }

        function shownext1()
        {
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_type)
            {
                if(img_bili>img_biliv)
                {
                    var img_height = 600;
                    var img_width = 600*img_bili;
                    var img_left = -(img_width-400)/2;
                    var img_top = 0;
                }   
                else
                {
                    var img_width = 400;
                    var img_height = 400/img_bili;
                    var img_left = 0;
                    var img_top = -(img_height-600)/2;
                }  
                var divheight = 75;

                for(var i=0;i<8;i++)
                {
                    var div_img = id('img1_'+i);

                    div_img.style.webkitAnimation = 'ani_1 1s linear both';
                    div_img.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                    div_img.style.backgroundSize = img_width + 'px ' + img_height + 'px';   
                    div_img.style.backgroundPosition = img_left + 'px '+ (img_top - divheight*i)+'px';

                }
            }
            else
            {
                if(img_bili>img_bilih)
                {
                    var img_height = 350;
                    var img_width = 350*img_bili;
                    var img_left = -(img_width-475)/2;
                    var img_top = 0;
                }   
                else
                {
                    var img_width = 475;
                    var img_height = 475/img_bili;
                    var img_left = 0;
                    var img_top = -(img_height-350)/2;
                }    

                var divheight = 70;

                for(var i=0;i<5;i++)
                {
                    var div_img = id('img1h_'+i);

                    div_img.style.webkitAnimation = 'ani_1 1s linear both';
                    div_img.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                    div_img.style.backgroundSize = img_width + 'px ' + img_height + 'px';   
                    div_img.style.backgroundPosition = img_left + 'px '+ (img_top - divheight*i)+'px';

                }
            }

        }

        function shownextpage2()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    shownext2();
                }
                else
                {
                    shownext2_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    shownext2_htov();
                }
                else
                {
                    shownext2();
                }
            }

            before_type = img_type;
            image_url_index++;

            cleanshow3();
            cleanshow3h();

            setTimeout(shownextpage3,4000)
        }

        function shownext2()
        {
            getimginfo();
            if(before_type && img_type)
            {
                for(var i = 0;i<8; i++)
                {
                    var img = id('img1_'+i);
                    img.style.webkitAnimation = 'aniout_1 1s linear both';
                }
            }
            else if((!before_type) && (!img_type))
            {
                for(var i = 0;i<5; i++)
                {
                    var img = id('img1h_'+i);
                    img.style.webkitAnimation = 'aniout_1 1s linear both';
                }
            }
            if(img_type)
            {
                var divheight = 300;
                var divwidth = 200;
                var divname = 'div2_';
            }
            else
            {
                var divheight = 175;
                var divwidth = 240;
                var divname = 'div2h_';
            }

            for(var i=0;i<4;i++)
            {
                div = id(divname+i);
                div.style.backgroundSize = img_width + 'px '+img_height + 'px';
                div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

                if(i==0)
                {
                    div.style.backgroundPosition = img_left + 'px '+img_top + 'px';
                }
                else if(i==1)
                {
                    div.style.backgroundPosition = (img_left -divwidth) + 'px '+img_top + 'px';
                }
                else if(i==2)
                {
                    div.style.backgroundPosition = img_left + 'px '+ (img_top-divheight)+'px';
                }
                else
                {
                    div.style.backgroundPosition = (img_left-divwidth) + 'px ' + (img_top -divheight) + 'px';
                }
            }

        }

        function shownext2_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext2();
        }

        function shownext2_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext2();
        }


        var img_height;
        var img_width;
        var img_left;
        var img_top;
        function getimginfo()
        {
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_type)
            {
                if(img_bili>img_biliv)
                {
                    img_height = 600;
                    img_width = 600*img_bili;
                    img_left = -(img_width-400)/2;
                    img_top = 0;
                }   
                else
                {
                    img_width = 400;
                    img_height = 400/img_bili;
                    img_left = 0;
                    img_top = -(img_height-600)/2;
                }  
            }
            else
            {
                if(img_bili>img_bilih)
                {
                    img_height = 350;
                    img_width = 350*img_bili;
                    img_left = -(img_width-475)/2;
                    img_top = 0;
                }   
                else
                {
                    img_width = 475;
                    img_height = 475/img_bili;
                    img_left = 0;
                    img_top = -(img_height-350)/2;
                }    
            }

        }

        function shownextpage3()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    shownext3();
                }
                else
                {
                    shownext3_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    shownext3_htov();
                }
                else
                {
                    shownext3();
                }
            }

            before_type = img_type;
            image_url_index++;

            setTimeout(shownextpage4,4000)
        }

        function shownext3_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext3();
        }

        function shownext3_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext3();
        }

        function shownext3()
        {
            getimginfo();
            if (img_type)
            {
                for(var i=0;i<4;i++)
                {
                    for(var j=0;j<6;j++)
                    {
                        var div = id('div_'+i+'_'+j);

                        div.style.backgroundSize = img_width + 'px '+img_height + 'px';
                        div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                        div.style.backgroundPosition = (img_left-i*100)+'px '+(img_top-j*100)+'px';

                        var delayanitime = (4000+rand(0,1000))/1000;
                        div.style.webkitAnimation = 'fadeout 1s '+delayanitime + 's linear both';
                    }
                }
                if(before_type)
                {
                    id('div2_0').style.webkitAnimation = 'div2_0 1.5s linear both';
                    id('div2_1').style.webkitAnimation = 'div2_1 1.5s linear both';
                    id('div2_2').style.webkitAnimation = 'div2_2 1.5s linear both';
                    id('div2_3').style.webkitAnimation = 'div2_3 1.5s linear both';
                }
            }
            else
            {
                for(var i=0;i<5;i++)
                {
                    for(var j=0;j<5;j++)
                    {
                        var div = id('divh_'+i+'_'+j);

                        div.style.backgroundSize = img_width + 'px '+img_height + 'px';
                        div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
                        div.style.backgroundPosition = (img_left-i*95)+'px '+(img_top-j*70)+'px';

                        var delayanitime = (4000+rand(0,1000))/1000;
                        div.style.webkitAnimation = 'fadeout 1s '+delayanitime + 's linear both';
                    }
                } 
                if(!before_type)
                {
                    id('div2h_0').style.webkitAnimation = 'div2h_0 1.5s linear both';
                    id('div2h_1').style.webkitAnimation = 'div2h_1 1.5s linear both';
                    id('div2h_2').style.webkitAnimation = 'div2h_2 1.5s linear both';
                    id('div2h_3').style.webkitAnimation = 'div2h_3 1.5s linear both';
                }
            }
        }

        function shownextpage4()
        {
            setImageindex();

            if(before_type)
            {
                if(img_type)
                {
                    shownext4();
                }
                else
                {
                    shownext4_vtoh();
                }
            }
            else
            {
                if(img_type)
                {
                    shownext4_htov();
                }
                else
                {
                    shownext4();
                }
            }

            before_type = img_type;
            image_url_index++;

            cleanshow1();
            cleanshow1h();

            setTimeout(shownextpage1,4000)
        }

        function shownext4_vtoh()
        {
            id('divv').style.webkitAnimation = 'fadeout 1s linear both';
            id('divh').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext4();
        }

        function shownext4_htov()
        {
            id('divh').style.webkitAnimation = 'fadeout 1s linear both';
            id('divv').style.webkitAnimation = 'fadein 1s 1s linear both';

            shownext4();
        }

        function shownext4()
        {
            getimginfo();
            if(img_type)
            {
                var div = id('div4');
            }
            else
            {
                var div = id('div4h');
            }
            div.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div.style.backgroundSize = img_width + 'px '+img_height + 'px';
            div.style.backgroundPosition = img_left + 'px '+img_top + 'px';
        }

        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadein 0.8s linear both';
            //id('titlecontent').innerHTML = e_desc;
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'fadeout 0.5s linear both';

            setImageindex();
            before_type = img_type;

            if(img_type==true)
            {
                id('divv').style.webkitAnimation = 'fadein 0.5s linear both';
                show1();
            }
            else
            {
                id('divh').style.webkitAnimation = 'fadein 0.5s linear both';
                show1h();
            }

            setTimeout(showpage2,4000)
        }

        var img_type;
        var before_type;
        function setImageindex()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                //log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            if(image_size_width[image_url_index]/image_size_height[image_url_index]<1)
            {
                img_type = true;
            }
            else
                img_type = false;
        }


        function id(name)
        {
            return document.getElementById(name);
        }

        var wordindex = 1;

        function setupwords()
        {
            //log(wordindex);
            var objname = 'word'+wordindex;
            id(objname).style.webkitAnimation = 'fadeout 1s ease-out both';

            if(wordindex == 1)
            {
                id('word6').style.webkitAnimation = '';
            }
            else
            {
                id('word'+(wordindex-1)).style.webkitAnimation = '';
            }

            wordindex ++;
            if(wordindex == 7)
                wordindex = 1;
            id('word'+wordindex).style.webkitAnimation = 'fadein 1s 0.3s ease-in both';
        }

        var line1 = id('line1');
        var line1index = 1;
        // function setline1()
        // {
        //     if(line1index == 34)
        //         line1index = 1;
        //     line1.src='http://referer-image.szwwy.com/coolphoto/img/tpl24/'+line1index+'.png';
        //     line1index ++ ;
        // }

        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;

        var delaytime=5000;
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
            //showtitle();
            canshow = true;
            for(var i=0;i<images.length;i++)
            {
                var img=new Image();
                img.index=i;
                img.src=images[i][1];
                img.onload=image_onload;
                img.onerror= image_onerror;
                Onload_imgs_url[i] = 'loading';
            }     

            id('word1').style.webkitAnimation = 'keepfadeout 1s linear both';
            setInterval(setupwords,4000)

            // setInterval(setline1,80);  
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
                distitle();
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

            //log(Onload_imgs_url[index]);
            //log(have_num + '-' + error_num);

            if((have_num + error_num >= 10 ||images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;

                if(have_num == 0)
                    return;
                distitle();

            }
        }
        call_me(load_images);
        load_init_modules();    
    }
}
