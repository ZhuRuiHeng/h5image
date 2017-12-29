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
        $("#div_player").append('<div id="container"><img id="back"src="/Application/Weixin/View/Coolphoto/img/tpl26/bg.jpg"style="opacity:0.5;width:500px;height:815px;"><img id="houmu"src="/Application/Weixin/View/Coolphoto/img/tpl26/houmu.png"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/fengyuan.png"style="position:absolute;top:123px;left:-100px;-webkit-animation: fengye 12s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/fengyuan.png"style="position:absolute;top:200px;left:-100px;-webkit-animation: fengye1 15s 5s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/fengyuan.png"style="position:absolute;top:-100px;left:100px;-webkit-animation: fengye2 10s 8s linear infinite"><img id="qianmu"src="/Application/Weixin/View/Coolphoto/img/tpl26/qianmu.png"><img id="zuosuo"src="/Application/Weixin/View/Coolphoto/img/tpl26/zuo.png"><img id="yousuo"src="/Application/Weixin/View/Coolphoto/img/tpl26/yousuo.png"><div id="mupai"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/mupai.png"style="width:460px;"><div id="img_box"style="display:none"><div id="img_con"class="img_con"><canvas id="canvas"></canvas><img id="img"width="310"style="position:absolute;left:0px;top:0px;"></div></div><div id="img_box1"style="opacity:0"><div id="img_con1"class="img_con"><canvas id="canvas1"></canvas><img id="img1"width="310"style="position:absolute;left:0px;top:0px;"></div></div><img id="dingzuo"src="/Application/Weixin/View/Coolphoto/img/tpl26/ding.png"><img id="dingyou"src="/Application/Weixin/View/Coolphoto/img/tpl26/ding.png"><div id="pagetitle"style="position:absolute;width:356px;height:200px;top:217px;left:53px;font-size:35px;color:#653C29;overflow:hidden;opacity:1;"><div style="display:table;width:336px;height:200px;top:0px;left:10px;position:absolute;text-align:center;overflow:hidden;position:absolute;"><div id="titlecontent"style="display:table-cell;width:336px;height:200px;vertical-align:middle;line-height:150%;oveflow:hidden;position:absolute;"></div></div></div></div><div style="position:absolute;left:94px;top:102px;-webkit-animation: fengye5 13s 8s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/ye.png"style="position:absolute;-webkit-animation: fengye6 8s linear infinite"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/ying.png"style="opacity:0.7;position:absolute;top:20px;left:40px;-webkit-animation: fengye6 8s linear infinite"></div><img src="/Application/Weixin/View/Coolphoto/img/tpl26/ye.png"style="position:absolute;top:56px;left:255px;-webkit-animation: fengye4 10s linear infinite"><img id="houye"src="/Application/Weixin/View/Coolphoto/img/tpl26/houye.png"><img id="xiaye"src="/Application/Weixin/View/Coolphoto/img/tpl26/xiaye.png"><img id="qianye"src="/Application/Weixin/View/Coolphoto/img/tpl26/houye.png"><img id="fenggai"src="/Application/Weixin/View/Coolphoto/img/tpl26/fenga.png"><div style="position:absolute;top:-100px;left:-100px;-webkit-animation: feng3 13s 3s linear infinite;"><img src="/Application/Weixin/View/Coolphoto/img/tpl26/fengyuan3.png"style="position:absolute;-webkit-animation: fengye3 3s ease-in-out infinite alternate"></div></div>');
        var mul_table = [
        512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
        454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
        482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
        437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
        497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
        320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
        446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
        329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
        505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
        399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
        324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
        268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
        451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
        385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
        332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
        289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
        
        var shg_table = [
                 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 
                17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 
                19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
                20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 
                23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

        function stackBlurImage( imageID, canvasID, radius, blurAlphaChannel )
        {
                    
            var img = document.getElementById( imageID );
            var w = img.naturalWidth;
            var h = img.naturalHeight;
               
            var canvas = document.getElementById( canvasID );
              
            canvas.style.width  = w + "px";
            canvas.style.height = h + "px";
            canvas.width = w;
            canvas.height = h;
            
            var context = canvas.getContext("2d");
            context.clearRect( 0, 0, w, h );
            context.drawImage( img, 0, 0 );

            if ( isNaN(radius) || radius < 1 ) return;
            
            if ( blurAlphaChannel )
                stackBlurCanvasRGBA( canvasID, 0, 0, w, h, radius );
            else 
                stackBlurCanvasRGB( canvasID, 0, 0, w, h, radius );
        }


        function stackBlurCanvasRGBA( id, top_x, top_y, width, height, radius )
        {
            if ( isNaN(radius) || radius < 1 ) return;
            radius |= 0;
            
            var canvas  = document.getElementById( id );
            var context = canvas.getContext("2d");
            var imageData;
            
            try {
              try {
                imageData = context.getImageData( top_x, top_y, width, height );
              } catch(e) {
              
                // NOTE: this part is supposedly only needed if you want to work with local files
                // so it might be okay to remove the whole try/catch block and just use
                // imageData = context.getImageData( top_x, top_y, width, height );
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                    imageData = context.getImageData( top_x, top_y, width, height );
                } catch(e) {
                    alert("Cannot access local image");
                    throw new Error("unable to access local image data: " + e);
                    return;
                }
              }
            } catch(e) {
              alert("Cannot access image");
              throw new Error("unable to access image data: " + e);
            }
                    
            var pixels = imageData.data;
                    
            var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, 
            r_out_sum, g_out_sum, b_out_sum, a_out_sum,
            r_in_sum, g_in_sum, b_in_sum, a_in_sum, 
            pr, pg, pb, pa, rbs;
                    
            var div = radius + radius + 1;
            var w4 = width << 2;
            var widthMinus1  = width - 1;
            var heightMinus1 = height - 1;
            var radiusPlus1  = radius + 1;
            var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
            
            var stackStart = new BlurStack();
            var stack = stackStart;
            for ( i = 1; i < div; i++ )
            {
                stack = stack.next = new BlurStack();
                if ( i == radiusPlus1 ) var stackEnd = stack;
            }
            stack.next = stackStart;
            var stackIn = null;
            var stackOut = null;
            
            yw = yi = 0;
            
            var mul_sum = mul_table[radius];
            var shg_sum = shg_table[radius];
            
            for ( y = 0; y < height; y++ )
            {
                r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
                
                r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
                g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
                b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
                a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );
                
                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                a_sum += sumFactor * pa;
                
                stack = stackStart;
                
                for( i = 0; i < radiusPlus1; i++ )
                {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack.a = pa;
                    stack = stack.next;
                }
                
                for( i = 1; i < radiusPlus1; i++ )
                {
                    p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
                    r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
                    g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
                    b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
                    a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;
                    
                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    a_in_sum += pa;
                    
                    stack = stack.next;
                }
                
                
                stackIn = stackStart;
                stackOut = stackEnd;
                for ( x = 0; x < width; x++ )
                {
                    pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
                    if ( pa != 0 )
                    {
                        pa = 255 / pa;
                        pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                        pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                        pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
                    } else {
                        pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
                    }
                    
                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    a_sum -= a_out_sum;
                    
                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    a_out_sum -= stackIn.a;
                    
                    p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
                    
                    r_in_sum += ( stackIn.r = pixels[p]);
                    g_in_sum += ( stackIn.g = pixels[p+1]);
                    b_in_sum += ( stackIn.b = pixels[p+2]);
                    a_in_sum += ( stackIn.a = pixels[p+3]);
                    
                    r_sum += r_in_sum;
                    g_sum += g_in_sum;
                    b_sum += b_in_sum;
                    a_sum += a_in_sum;
                    
                    stackIn = stackIn.next;
                    
                    r_out_sum += ( pr = stackOut.r );
                    g_out_sum += ( pg = stackOut.g );
                    b_out_sum += ( pb = stackOut.b );
                    a_out_sum += ( pa = stackOut.a );
                    
                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    a_in_sum -= pa;
                    
                    stackOut = stackOut.next;

                    yi += 4;
                }
                yw += width;
            }

            
            for ( x = 0; x < width; x++ )
            {
                g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
                
                yi = x << 2;
                r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
                g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
                b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
                a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);
                
                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                a_sum += sumFactor * pa;
                
                stack = stackStart;
                
                for( i = 0; i < radiusPlus1; i++ )
                {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack.a = pa;
                    stack = stack.next;
                }
                
                yp = width;
                
                for( i = 1; i <= radius; i++ )
                {
                    yi = ( yp + x ) << 2;
                    
                    r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
                    g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
                    b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
                    a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;
                   
                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    a_in_sum += pa;
                    
                    stack = stack.next;
                
                    if( i < heightMinus1 )
                    {
                        yp += width;
                    }
                }
                
                yi = x;
                stackIn = stackStart;
                stackOut = stackEnd;
                for ( y = 0; y < height; y++ )
                {
                    p = yi << 2;
                    pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
                    if ( pa > 0 )
                    {
                        pa = 255 / pa;
                        pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
                        pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
                        pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
                    } else {
                        pixels[p] = pixels[p+1] = pixels[p+2] = 0;
                    }
                    
                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    a_sum -= a_out_sum;
                   
                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    a_out_sum -= stackIn.a;
                    
                    p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
                    
                    r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
                    g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
                    b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
                    a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));
                   
                    stackIn = stackIn.next;
                    
                    r_out_sum += ( pr = stackOut.r );
                    g_out_sum += ( pg = stackOut.g );
                    b_out_sum += ( pb = stackOut.b );
                    a_out_sum += ( pa = stackOut.a );
                    
                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    a_in_sum -= pa;
                    
                    stackOut = stackOut.next;
                    
                    yi += width;
                }
            }
            
            context.putImageData( imageData, top_x, top_y );
            
        }


        function stackBlurCanvasRGB( id, top_x, top_y, width, height, radius )
        {
            if ( isNaN(radius) || radius < 1 ) return;
            radius |= 0;
            
            var canvas  = document.getElementById( id );
            var context = canvas.getContext("2d");
            var imageData;
            
            try {
              try {
                imageData = context.getImageData( top_x, top_y, width, height );
              } catch(e) {
              
                // NOTE: this part is supposedly only needed if you want to work with local files
                // so it might be okay to remove the whole try/catch block and just use
                // imageData = context.getImageData( top_x, top_y, width, height );
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                    imageData = context.getImageData( top_x, top_y, width, height );
                } catch(e) {
                    alert("Cannot access local image");
                    throw new Error("unable to access local image data: " + e);
                    return;
                }
              }
            } catch(e) {
              alert("Cannot access image");
              throw new Error("unable to access image data: " + e);
            }
                    
            var pixels = imageData.data;
                    
            var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
            r_out_sum, g_out_sum, b_out_sum,
            r_in_sum, g_in_sum, b_in_sum,
            pr, pg, pb, rbs;
                    
            var div = radius + radius + 1;
            var w4 = width << 2;
            var widthMinus1  = width - 1;
            var heightMinus1 = height - 1;
            var radiusPlus1  = radius + 1;
            var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
            
            var stackStart = new BlurStack();
            var stack = stackStart;
            for ( i = 1; i < div; i++ )
            {
                stack = stack.next = new BlurStack();
                if ( i == radiusPlus1 ) var stackEnd = stack;
            }
            stack.next = stackStart;
            var stackIn = null;
            var stackOut = null;
            
            yw = yi = 0;
            
            var mul_sum = mul_table[radius];
            var shg_sum = shg_table[radius];
            
            for ( y = 0; y < height; y++ )
            {
                r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
                
                r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
                g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
                b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
                
                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                
                stack = stackStart;
                
                for( i = 0; i < radiusPlus1; i++ )
                {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack = stack.next;
                }
                
                for( i = 1; i < radiusPlus1; i++ )
                {
                    p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
                    r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
                    g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
                    b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
                    
                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    
                    stack = stack.next;
                }
                
                
                stackIn = stackStart;
                stackOut = stackEnd;
                for ( x = 0; x < width; x++ )
                {
                    pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
                    pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
                    pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
                    
                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    
                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    
                    p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
                    
                    r_in_sum += ( stackIn.r = pixels[p]);
                    g_in_sum += ( stackIn.g = pixels[p+1]);
                    b_in_sum += ( stackIn.b = pixels[p+2]);
                    
                    r_sum += r_in_sum;
                    g_sum += g_in_sum;
                    b_sum += b_in_sum;
                    
                    stackIn = stackIn.next;
                    
                    r_out_sum += ( pr = stackOut.r );
                    g_out_sum += ( pg = stackOut.g );
                    b_out_sum += ( pb = stackOut.b );
                    
                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    
                    stackOut = stackOut.next;

                    yi += 4;
                }
                yw += width;
            }

            
            for ( x = 0; x < width; x++ )
            {
                g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
                
                yi = x << 2;
                r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
                g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
                b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
                
                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                
                stack = stackStart;
                
                for( i = 0; i < radiusPlus1; i++ )
                {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack = stack.next;
                }
                
                yp = width;
                
                for( i = 1; i <= radius; i++ )
                {
                    yi = ( yp + x ) << 2;
                    
                    r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
                    g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
                    b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
                    
                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    
                    stack = stack.next;
                
                    if( i < heightMinus1 )
                    {
                        yp += width;
                    }
                }
                
                yi = x;
                stackIn = stackStart;
                stackOut = stackEnd;
                for ( y = 0; y < height; y++ )
                {
                    p = yi << 2;
                    pixels[p]   = (r_sum * mul_sum) >> shg_sum;
                    pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
                    pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
                    
                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    
                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    
                    p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
                    
                    r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
                    g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
                    b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
                    
                    stackIn = stackIn.next;
                    
                    r_out_sum += ( pr = stackOut.r );
                    g_out_sum += ( pg = stackOut.g );
                    b_out_sum += ( pb = stackOut.b );
                    
                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    
                    stackOut = stackOut.next;
                    
                    yi += width;
                }
            }
            
            context.putImageData( imageData, top_x, top_y );
            
        }

        function BlurStack()
        {
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.a = 0;
            this.next = null;
        }
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
var delaytime = 4000;
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
    showtitle();

    id('img1').style.webkitAnimation = '';
    id('img').style.webkitAnimation = '';
    id('img_box1').style.webkitAnimation = '';
    id('img_box').style.webkitAnimation = '';
    clearTimeout(timeout0);
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    canshow = true;


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

function image_onerror(event)
{
    var img = event.target;
    var index = img.index;
    if(index<10)
        error_num ++;
    Onload_imgs_url[index] = 'not find';
    console.log(Onload_imgs_url[index]);
    console.log(have_num + '-' + error_num);
    if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                        {
                            distitle();
                        },dis_titletime);
                }
            }
        }
        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_in_fade_down 1s linear both';
            //id('titlecontent').innerHTML = e_desc;
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_out_fade_down 1s linear both';
            setTimeout(first_show,1000);
        }
        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img=event.target;
            var index = img.index;
            if(index<10)
                have_num++;
            console.log(Onload_imgs_url[index]);
            console.log(have_num + '-' + error_num);
            Onload_imgs_url[index]=img.src;
            image_size_width[index]=img.width;
            image_size_height[index]=img.height;

            if((have_num+error_num >= 10 || images.length == (have_num+error_num)) && canshow == true)
            {   

                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                        {
                            distitle();
                        },dis_titletime);
                }
            }
        }

        function first_show() //第一张模糊淡化
        {
            if(reshow == true)
                    return;
            id('img_box').style.display = 'block';
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            id('img').src = Onload_imgs_url[image_url_index];
            var canvas = id('canvas');
            // canvas.style.opacity = 0;
            var cxt = canvas.getContext('2d');

            var n_img = new Image();
            n_img.id = 'n_img';
            n_img.crossOrigin = 'anonymous';
            n_img.src = Onload_imgs_url[image_url_index];
            console.log(n_img.src);
            canvas.appendChild(n_img);

            n_img.onload = function()
            {
                if(reshow == true)
                    return;
                var canvas = id('canvas');
                stackBlurImage('n_img','canvas',50);
                var canvas_bili = 310/canvas.width;
                canvas.style.webkitTransform = 'scale('+canvas_bili+')';
                cut_images('img_con');

                timeout1 = setTimeout(second_show,1000);
            }
        }

        function cut_images(pagename)
        {
            if(reshow == true)
                    return;
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var img_obj = id(pagename);
            if(img_bili<(310/445))
            {
                img_obj.style.top = -((310/img_bili-445)/2)+'px';
            }
            else
            {
                img_obj.style.top = '0px';
            }
        }

        function second_show()
        {
            if(reshow == true)
                    return;
            image_url_index++;
            if(image_url_index ==  Onload_imgs_url.length)
            {
                image_url_index = 0;
            }
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            id('img_box1').style.opacity = 0;
            id('img_box1').style.webkitAnimation = '';
            id('img1').style.webkitAnimation = '';
            id('img1').src = Onload_imgs_url[image_url_index];
            console.log(id('img1').src);
            var canvas = id('canvas1');
            if(id('n_img1'))
                canvas.removeChild(id('n_img1'));
            var cxt = canvas.getContext('2d');

            var n_img = new Image();
            n_img.id = 'n_img1';
            n_img.crossOrigin = 'anonymous';
            n_img.src = Onload_imgs_url[image_url_index];
            canvas.appendChild(n_img);

            n_img.onload = function()
            {
                if(reshow == true)
                    return;
                var canvas = id('canvas1');
                stackBlurImage('n_img1','canvas1',50);
                var canvas_bili = 310/canvas.width;
                canvas.style.webkitTransform = 'scale('+canvas_bili+')';
                cut_images('img_con1');

                id('img_box').style.webkitAnimation = 'fadeout 1s linear 1s both';
                id('img').style.webkitAnimation = 'fadeout 1.5s linear forwards';

                id('img1').style.opacity = 0;
                id('img_box1').style.webkitAnimation = 'fadein 1s linear 1s both';
                id('img1').style.webkitAnimation = 'fadein 1s 2s linear both';


                timeout2 = setTimeout(third_show,4000);
            }
        }

        function third_show()
        {
            if(reshow == true)
                    return;
            image_url_index ++;
            if(image_url_index == Onload_imgs_url.length)
            {
                image_url_index = 0;
            }
            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            id('img_box').style.opacity = 0;
            id('img_box').style.webkitAnimation = '';
            id('img').style.webkitAnimation = '';
            id('img').src = Onload_imgs_url[image_url_index];
            console.log(id('img').src);
            var canvas = id('canvas');
            canvas.removeChild(id('n_img'));
            var cxt = canvas.getContext('2d');

            var n_img = new Image();
            n_img.id = 'n_img';
            n_img.crossOrigin = 'anonymous';
            n_img.src = Onload_imgs_url[image_url_index];
            canvas.appendChild(n_img);

            n_img.onload = function()
            {
                if(reshow == true)
                    return;
                var canvas = id('canvas');
                stackBlurImage('n_img','canvas',50);
                var canvas_bili = 310/canvas.width;
                canvas.style.webkitTransform = 'scale('+canvas_bili+')';
                cut_images('img_con');

                id('img_box1').style.webkitAnimation = 'fadeout 1s linear 1s both';
                id('img1').style.webkitAnimation ='fadeout 1s linear forwards';
                id('img_box').style.webkitAnimation = 'fadein 1s linear 1s both';
                id('img').style.webkitAnimation = 'fadein 1s linear 2s both';

                timeout3 = setTimeout(second_show,4000);
            }

        }

        call_me(load_images);
        load_init_modules();    
    }
}
