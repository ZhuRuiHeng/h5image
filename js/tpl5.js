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
    //loadUserImages();

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
    loadingdef.resolve();

    function play() {
        $("#div_player").append('<div id="beijing"><div id="p26qHinCr-an-obj-1"><div><img  height="1024" width="1024"  src="http://referer-image.szwwy.com/coolphoto/img/tpl5/2000.jpg"></div></div></div>');
        var started = false;
        var show_images = [];
        var current_img = 0;
        var front_img = null;
        var back_img  = null;
        var thin = 20;
        var scene = null;

        var canvas = document.createElement('canvas');
        canvas.width  = 300;
        canvas.height = 150;

        show_ins  = ['in_zoom_down', 'in_zoom_up', 'in_zoom_left', 'in_zoom_right', 'in_center'];
        show_outs = ['out_zoom_down', 'out_zoom_up', 'out_zoom_left', 'out_zoom_right', 'out_center'];

        var is_android = false;

        is_android = test_android();

        cube_sel = [];


        function test_android()
        {
            var u = navigator.userAgent;

            return u.indexOf('Android') > -1;
        }


        function create_cube(cube, parent, i)
        {
            var front  = document.createElement("div");
            var back   = document.createElement("div");
            var left   = document.createElement("div");
            var right  = document.createElement("div");
            var top    = document.createElement("div");
            var bottom = document.createElement("div");

            front.className  = "front";
            back.className   = "back";
            left.className   = "left";
            right.className  = "right";
            top.className    = "top";
            bottom.className = "bottom";

            cube.f = front;
            cube.b = back;
            cube.l = left;
            cube.t = top;
            cube.r = right;
            cube.o = bottom;

            parent.appendChild(back);
            parent.appendChild(top);
            parent.appendChild(bottom);
            parent.appendChild(left);
            parent.appendChild(right);
            parent.appendChild(front);
        }


        function set_side_color(scene, image)
        {
            var colors = get_side_colors(image);

            for(var i=0; i<16; i++)
            {
                var cube = document.getElementById('cube'+i);
                var row = Math.floor(i / 4);
                var col = i % 4;

                var left   = scene.cubes[i].l;
                var top    = scene.cubes[i].t;
                var right  = scene.cubes[i].r;
                var bottom = scene.cubes[i].o;
            
                left.style.backgroundColor = colors.v[row][col];
                top.style.backgroundColor = colors.h[row][col];
                right.style.backgroundColor = colors.v[row][col+1];
                bottom.style.backgroundColor = colors.h[row+1][col];
            }
        }


        function get_side_colors(img)
        {
            var dc = canvas.getContext('2d');
            dc.drawImage(img, 0, 0, canvas.width, canvas.height);

            var h_points = {};
            var h = canvas.height / 3;
            var w = canvas.width / 4;
            for(var row=0; row<5; row++)
            {
                h_points[row] = {};
                for(var col=0; col<4; col++)
                {
                    var x = col * w + (w / 2);
                    var y = row * h;
                    if(y > (canvas.height - 1))
                    {
                        y = canvas.height - 1;
                    }

                    h_points[row][col] = color_str(dc.getImageData(x, y, 1, 1));
                }
            }    

            var v_points = {};
            for(var row=0; row<4; row++)
            {
                v_points[row] = {};
                for(var col=0; col<5; col++)
                {
                    var x = col * w;
                    if(x > (canvas.width - 1))
                    {
                        x = canvas.width - 1;
                    }
                    var y = row * h + (h / 2);
                    v_points[row][col] = color_str(dc.getImageData(x, y, 1, 1));
                }
            }

            colors = {};
            colors.v = v_points;
            colors.h = h_points;

            return colors; 
        }


        function create_cover(i)
        {
            var cover1 = document.createElement("div");
            if(is_android)
            {
                cover1.className = "cover1_android";
            }
            else
            {
                cover1.className = "cover1";
            }
            
            var row = Math.floor(i / 4);
            var col = Math.floor(i % 4);

            cover1.style.left = (col * 125) + "px";
            cover1.style.top  = (row * 125) + "px";

            var cover2 = document.createElement("div");
            cover2.className = "cover2";

            create_cube(cover1, cover2, i);

            cover1.appendChild(cover2);
            cover1.bag = cover2;

            //create_cube(cover1, cover1, i);
            //cover1.bag = cover1;

            return cover1;
        }


        function create_scene()
        {
            var div = document.createElement("div");
            div.className = "scene";
            div.style.visibility = "hidden";
            div.cubes = [];

            for(var i=0; i<16; i++)
            {
                var cover = create_cover(i);
                div.appendChild(cover);
                div.cubes.push(cover);
            }

            document.body.appendChild(div);

            return div;
        }


        function set_cube_sel()
        {
            cube_sel = [];

            for(var i=0; i<16; i++)
            {
                cube_sel.push(rand(0, 3));
            }
        }


        function scene_init()
        {
            set_cube_sel();
            set_cover1_keyframes();
            scene = create_scene();
            load_images();
        }


        function insert_css(code)
        {
            var style  = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = code;
            document.head.appendChild(style);
        }


        function set_cover1_keyframes()
        {
            var full_css = "";

            for(var i=0; i<16; i++)
            {
                var row = Math.floor(i / 4);
                var col = i % 4;

                var dx = [-20, -10, 10, 20];
                var dy = [-20, -10, 10, 20];

                var gx = [125+62, 62, -62, -125-62];
                var gy = [125+62, 62, -62, -125-62];

                var css = "@-webkit-keyframes float_" + i + "_0{";
                css += "0%  {-webkit-transform: translate(0px, 0px) scale3d(1, 1, 1)}";
                css += "100% {-webkit-transform: translate("+dx[col]+"px, "+dy[row]+"px) scale3d(1, 1, 1)}}\n";
                
                css += "@-webkit-keyframes float_" + i + "_1{";
                css += "0% {-webkit-transform: translate("+dx[col]+"px, "+dy[row]+"px) scale3d(1, 1, 1)}";
                css += "100% {-webkit-transform: translate("+gx[col]+"px, "+gy[row]+"px) scale3d(0, 0, 0)}}\n";

                css += "@-webkit-keyframes float_" + i + "_2{";
                css += "0% {-webkit-transform: translate("+gx[col]+"px, "+gy[row]+"px) scale3d(0, 0, 0)}\n";
                css += "100% {-webkit-transform: translate("+dx[col]+"px, "+dy[row]+"px) scale3d(1, 1, 1)}}\n";
            
                css += "@-webkit-keyframes float_" + i + "_3{";
                css += "0% {-webkit-transform: translate("+dx[col]+"px, "+dy[row]+"px) scale3d(1, 1, 1)}";
                css += "100% {-webkit-transform: translate(0px, 0px) scale3d(1, 1, 1)}}\n";

                full_css += css;
            }

            insert_css(full_css);
        }


        function set_cover1_ani()
        {
            for(var i=0; i<16; i++)
            {
                var header = "float_"+i+"_";
                var ani = combine_ani(header, i);

                scene.cubes[i].style.webkitAnimation = ani;
            }
        }


        function combine_ani(header, i)
        {
            var a0 = header + "0 1.5s ease-in-out 0s backwards";
            var a1 = header + "1 1s ease-in 1.5s";
            var a2 = header + "2 2s ease-out 2.5s";
            var a3 = header + "3 1.5s ease-in-out 4.5s forwards";
            var ania = a0 + "," + a1 + "," + a2 + "," + a3;

            var b0 = header + "0 1.5s ease-in-out 0.2s backwards";
            var b1 = header + "1 1s ease-in 1.7s";
            var b2 = header + "2 1s ease-out 2.7s";
            var b3 = header + "3 1.5s ease-in-out 3.7s forwards";
            var anib = b0 + "," + b1 + "," + b2 + "," + b3;

            var c0 = header + "0 1.5s ease-in-out 0.4s backwards";
            var c1 = header + "1 1s ease-in 1.9s";
            var c2 = header + "2 1s ease-out 2.9s";
            var c3 = header + "3 1.5s ease-in-out 3.9s forwards";
            var anic = c0 + "," + c1 + "," + c2 + "," + c3;

        /*
            if(is_android)
            {
                ani = ania;
            }
            else
            {
                if(cube_sel[i] == 1)
                {
                    ani = anib;
                }
                else if(cube_sel[i] == 2)
                {
                    ani = anic;
                }
                else
                {
                    ani = ania;
                }
            }
        */
            ani = ania;
            
            return ani;
        }


        function rand(min, max)
        {
            return 0 + Math.floor(Math.random() * (max - min));
        }


        function set_cover2_ani()
        {
            for(var i=0; i<16; i++)
            {
                var sel    = rand(0, 4);
                var header = "r_"+sel+"_";
                var ani    = combine_ani(header, i);
                scene.cubes[i].bag.style.webkitAnimation = ani;
            }
        }


        function calc_image(img)
        {
            var w = img.width;
            var h = img.height;

            h = h * (500 / w);
            w = 500;

            if(h > 600)
            {
                w = w * (600 / h);
                h = 600;
            }

            img.w = Math.floor(w);
            img.h = Math.floor(h);
        }


        function on_image_load(event)
        {
            var img = event.target;
            img.ok = true;
            calc_image(img);

            if(!started && show_images[0].ok && show_images[1].ok)
            {
                started = true;
                begin_show();
            }
        }


        function apply_side(scene, front_img, back_img)
        {
            var w = scene.offsetWidth;
            var h = scene.offsetHeight;

            var bw = back_img.w;
            var bh = back_img.h;

            for(var i=0; i<16; i++)
            {
                var row = Math.floor(i/4);
                var col = i%4;

                var dx  = Math.floor(w / 4 * col);
                var dy  = Math.floor(h / 4 * row);

                var cube  = scene.cubes[i];
                var front = cube.f;
                var back  = cube.b;
            
                var pos = '-' + dx + 'px -' + dy + 'px';
                
                front.style.backgroundImage    = "url("+front_img.src+")";
                front.style.backgroundSize     = front_img.w+"px "+front_img.h+"px";
                front.style.backgroundPosition = pos;

                var bx = Math.floor(bw / 4 * col);
                var by = Math.floor(bh / 4 * row);
                var bpos = '-' + bx + 'px -' + by + 'px';
                back.style.backgroundImage    = "url("+back_img.src+")";
                back.style.backgroundSize     = back_img.w+"px "+back_img.h+"px";
                back.style.backgroundPosition = bpos;
            }
        }


        function apply_front_images()
        {
            apply_side(scene, front_img, back_img);
            set_side_color(scene, front_img);
        }


        function color_str(point)
        {
            bin = point.data;
            return 'rgb(' + bin[0] + ',' + bin[1] + ',' + bin[2] + ')';
        }


        function resize_scene(scene, w, h)
        {
            scene.style.width  = w + "px";
            scene.style.height = h + "px";
            scene.style.left   = Math.floor((500 - w) / 2) + "px";
            scene.style.top    = Math.floor(350 - h / 2) + "px";

            var pw = w/4;
            var ph = h/4;

            var pws = Math.floor(pw) + 'px';
            var phs = Math.floor(ph) + 'px';

            for(var i=0; i<16; i++)
            {
                var row = Math.floor(i/4);
                var col = i%4;
                var cube = scene.cubes[i];
                cube.style.left   = Math.floor(pw * col)+'px';
                cube.style.top    = Math.floor(ph * row)+'px';
                cube.style.width  = pws;
                cube.style.height = phs;

                cube.bag.style.left   = '0px';
                cube.bag.style.top    = '0px';
                cube.bag.style.width  = pws;
                cube.bag.style.height = phs;

                cube.f.style.width  = pws;
                cube.f.style.height = phs;

                var hf = Math.floor(thin/2);
                var css1 = "translateZ("+hf+"px)";
                cube.f.style.webkitTransform = css1;

                cube.b.style.width  = pws;
                cube.b.style.height = phs;

                var css2 = "rotateY(180deg) translateZ("+hf+"px)";
                cube.b.style.webkitTransform = css2;

                cube.t.style.width  = pws;
                cube.t.style.height = thin+"px";
                var css3 = "rotateX(90deg) translateZ("+hf+"px)";
                cube.t.style.webkitTransform = css3;

                cube.r.style.width = thin+"px";
                cube.r.style.height = phs;
                var t1 = Math.floor(pw - thin / 2);
                var css4 = "rotateY(90deg) translateZ("+t1+"px)";
                cube.r.style.webkitTransform = css4;

                cube.o.style.width = pws;
                cube.o.style.height = thin+"px";
                var t2 = Math.floor(ph - thin / 2);
                var css5 = "rotateX(-90deg) translateZ("+t2+"px)";
                cube.o.style.webkitTransform = css5;

                cube.l.style.width = thin+"px";
                cube.l.style.height = phs;
                var css6 = "rotateY(-90deg) translateZ("+hf+"px)";
                cube.l.style.webkitTransform = css6;
            }
        }


        function repos_back()
        {
            var w = back_img.w;
            var h = back_img.h;
            resize_scene(scene, w, h);
            //apply_front_images();
        }


        function repos_front()
        {
            var w = front_img.w;
            var h = front_img.h;
            resize_scene(scene, w, h);
        }


        function pick_imgs()
        {
            for(var i=0; i<show_images.length; i++)
            {
                var sel = current_img % show_images.length;

                if(show_images[sel].ok)
                {
                    front_img = show_images[sel];
                    current_img++;
                    break;   
                }

                current_img++;
            }

            for(var i=0; i<show_images.length; i++)
            {
                var sel = current_img % show_images.length;

                if(show_images[sel].ok)
                {
                    back_img = show_images[sel];
                    current_img++;
                    break;   
                }

                current_img++;
            }
        }


        function show_in()
        {
            var in_ani = show_ins[rand(0, show_ins.length)];
            scene.style.visibility = 'visible';
            scene.style.webkitAnimation = in_ani + ' 1.4s ease-in-out both';
            setTimeout(brick_action, 1600);
        }


        function brick_action()
        {
            set_cube_sel();
            set_cover1_ani();
            set_cover2_ani();
            setTimeout(repos_back, 2200);
            setTimeout(show_out, 6000);
        }


        function show_out()
        {
            var out_ani = show_outs[rand(0, show_outs.length)];
            scene.style.webkitAnimation = out_ani + ' 1.4s ease-in-out both';
            setTimeout(clean_scene_ani, 1800);
            setTimeout(begin_show, 1900);
        }


        function clean_scene_ani()
        {
            for(var i=0; i<16; i++)
            {
                var cube = scene.cubes[i];
                cube.style.webkitAnimation = "";
                cube.bag.style.webkitAnimation = "";
            }

        }

        function begin_show()
        {
            scene.style.visibility = "visible";
            pick_imgs();
            repos_front();
            apply_front_images();
            show_in();
        }


        function load_images()
        {
            for(var i=0; i<images.length; i++)
            {
                var img = new Image();
                img.index = i;
                img.ok = false;
                img.onload = on_image_load;
                img.crossOrigin = "Anonymous";
                //img.crossOrigin = "http://member2.szwwy.com";
                img.src = images[i][1];
                show_images.push(img);

                if ( img.complete || img.complete === undefined ) {
                    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                    img.src = images[i][1];
                }
            }

            if(images.length == 1)
            {
                show_images.push(show_images[0]);
            }
        }
        call_me(scene_init);
        load_init_modules();     
    }
}
