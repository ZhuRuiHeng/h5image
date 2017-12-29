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
        $("#div_player").append('<div id="background_container"><div id="pcKgfVaEu-an-obj-1"><div><img height="815"width="500"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/bg1.jpg"></div></div><div id="pcKgfVaEu-an-obj-2"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-3"><div><img height="24"width="21"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/1.png"></div></div><div id="pcKgfVaEu-an-obj-4"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-5"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-6"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-7"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-8"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-9"><div><img height="20"width="20"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/2.png"></div></div><div id="pcKgfVaEu-an-obj-10"><div><img height="24"width="21"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/1.png"></div></div><div id="pcKgfVaEu-an-obj-11"><div><img height="24"width="21"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/1.png"></div></div><div id="pcKgfVaEu-an-obj-12"><div><img height="24"width="21"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/1.png"></div></div><div id="pcKgfVaEu-an-obj-13"><div><img height="24"width="21"src="http://referer-image.szwwy.com/coolphoto/img/tpl31/1.png"></div></div></div><div id="scene1"class="scene"></div><div id="scene0"class="scene"></div>');
        started = false;
        scene_sel = 0;
        image_sel = 0;
        show_images = [];
        is_android = false;
        show_flip_timer = 0;
        show_out_timer = 0;
        clean_timer = 0;
        show_in_timer = 0;

        show_ins  = ['in_zoom_down', 'in_zoom_up', 'in_zoom_left', 'in_zoom_right', 'in_center'];
        show_outs = ['out_zoom_down', 'out_zoom_up', 'out_zoom_left', 'out_zoom_right', 'out_center'];

        function reset_scene()
        {
            clearTimeout(clean_timer);
            clearTimeout(show_in_timer);
            clearTimeout(show_out_timer);
            clearTimeout(show_flip_timer);

            clean_timer     = 0;
            show_in_timer   = 0;
            show_out_timer  = 0;
            show_flip_timer = 0;
            started         = false;
            scene_sel       = 0;
            image_sel       = 0;
            show_images     = [];

            for(var i=0; i<5; i++)
            {
                scene0.band[i].style.webkitAnimation  = '';
                scene0.band2[i].style.webkitAnimation = '';
                scene1.band[i].style.webkitAnimation  = '';
                scene1.band2[i].style.webkitAnimation = '';
            }

            scene0.style.webkitAnimation = '';
            scene1.style.webkitAnimation = '';

            scene0.style.visibility = 'hidden';
            scene1.style.visibility = 'hidden';

            load_images();
            check_to_start();
        }

        function randi(min, max)
        {
            return min + Math.floor(Math.random() * (max - min));
        }

        function test_android()
        {
            var u = navigator.userAgent;

            return u.indexOf('Android') > -1;
        }

        function show_in()
        {
            apply_images();

            var in_ani = show_ins[randi(0, show_ins.length)];
            var scene = document.getElementById('scene' + scene_sel);
            scene.style.visibility = 'visible';

            scene.style.webkitAnimation = in_ani + ' 1.4s ease-in-out both';
            show_flip_timer = setTimeout(show_flip, 3000);
        }

        function apply_flip(i)
        {
            var scene = document.getElementById('scene' + scene_sel);
            scene.visibility = 'visible';
            scene.band2[i].style.webkitAnimation = 'flip 1.8s ease-in-out both';
            scene.band[i].style.webkitAnimation = 'step_back 1.8s ease-in-out both';
        }

        function show_flip()
        {
            var scene = document.getElementById('scene' + scene_sel);
            scene.visibility = 'visible';

            for(var i=0; i<5; i++)
            {
                var delay = 0.3 * i;
                
                //if(is_android)
                //{
                //  delay = 0;
                //}

                scene.band2[i].style.webkitAnimation = 'flip 1.8s ease-in-out ' + delay + 's both';
                scene.band[i].style.webkitAnimation = 'step_back 1.8s ease-in-out ' + delay + 's both';
                //delay = 100 * i;
                //setTimeout("apply_flip("+i+")", delay);
            }

            show_out_timer = setTimeout(show_out, 4300);
        }

        function show_out()
        {
            var out_ani = show_outs[randi(0, show_ins.length)];
            var scene = document.getElementById('scene' + scene_sel);

            clean_timer = setTimeout("clean_animation("+scene_sel+")", 1000);

            if(scene_sel == 0)
            {
                scene_sel = 1;
            }
            else
            {
                scene_sel = 0;
            }

            scene.style.webkitAnimation = out_ani + ' 1s ease-in-out both';
            image_sel += 2;

            show_in_timer = setTimeout(show_in, 400);
        }

        function clean_animation(scene_idx)
        {
            var scene = document.getElementById('scene' + scene_idx);

            for(var i=0; i<5; i++)
            {
                var delay = 0.1 * i;
                scene.band2[i].style.webkitAnimation = '';
                scene.band[i].style.webkitAnimation = '';
            }
        }

        function create_flip(flip)
        {
            flip.band = [];
            flip.band2 = [];
            flip.front = [];
            flip.back = [];

            for(var i=0; i<5; i++)
            {
                var band = document.createElement('div');
                band.className = 'band';
                band.style.left = 100*i + 'px';
                flip.appendChild(band);
                flip.band.push(band);

                var band2 = document.createElement('div');
                band2.className = 'band2';
                band.appendChild(band2);
                flip.band2.push(band2);

                var back = document.createElement('div');
                back.className = 'back';
                band2.appendChild(back);
                flip.back.push(back);

                var front = document.createElement('div');
                front.className = 'front';
                band2.appendChild(front);
                flip.front.push(front); 
            }
        }

        function calc_image(img)
        {
            var w = img.width;
            var h = img.height;

            h = h * (500 / w);
            w = 500;

            if(h < 500)
            {
                w = w * (500 / h);
                h = 500;
            }

            w = Math.floor(w);
            h = Math.floor(h);

            var x = Math.floor((500 - w) / 2);
            var y = Math.floor((500 - h) / 2);

            //log('resize '+img.width+','+img.height+' to '+w+','+h);

            img.pos = x + 'px ' + y + 'px';
            img.l = x;
            img.t = y;
            img.si = w + 'px ' + h + 'px';
            img.ok = true;
        }

        function check_to_start()
        {
            if(!started)
            {
                started = true;
                begin_show();
            }
        }

        function set_band_image(div, img, i)
        {
            div.style.backgroundImage = 'url('+img.src+')';
            div.style.backgroundSize  = img.si;
            var x = img.l - 100 * i;
            var y = img.t;
            div.style.backgroundPosition = x + 'px ' + y + 'px';
            div.style.backgroundRepeat = 'no-repeat';
            //log(div.style.backgroundPosition);
        }

        function apply_images()
        {
            var scene = document.getElementById('scene' + scene_sel);
            var n1 = image_sel % show_images.length;
            var n2 = (image_sel + 1) % show_images.length;
            var front_img = show_images[n1];
            var back_img = show_images[n2];
            
            for(var i=0; i<5; i++)
            {
                var front = scene.front[i];
                var back  = scene.back[i];
                set_band_image(front, front_img, i);
                set_band_image(back, back_img, i);
            }

            scene.style.visibility = 'visible';
        }

        function begin_show()
        {
            show_in();
        }

        function on_image_load(event)
        {
            var img = event.target;
            calc_image(img);

            if(!started && show_images[0].ok && show_images[1].ok)
            {
                started = true;
                begin_show();
            }
        }

        function load_images()
        {
            for(var i=0; i<images.length; i++)
            {
                var img = new Image();
                img.index = i;
                img.ok = false;
                img.onload = on_image_load;
                img.src = images[i][1];
                //log(img.src);
                show_images.push(img);
            }

            if(images.length == 1)
            {
                show_images.push(show_images[0]);
            }
        }

        function flip_init()
        {
            is_android = test_android();

            create_flip(scene0);
            create_flip(scene1);

            load_images();
        }

        call_me(flip_init);    
        load_init_modules();    
    }
}
