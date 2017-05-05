/**
 * Created by aong on 4/27/17.
 */
$(function () {
    map_info = {'size':[1100,590],'map_url':'xxxx','rate':[1.18,1.235],'current_position':[200,200]};
    path = [[62, 663], [62, 664], [62, 665], [63, 651], [63, 652], [63, 653], [63, 654], [63, 655], [63, 656], [63, 657], [63, 658], [63, 659], [63, 660], [63, 661], [63, 662], [63, 666], [63, 667], [63, 668], [63, 669], [63, 670], [63, 671], [63, 672], [63, 673], [63, 674], [63, 675], [63, 676], [64, 646], [64, 647], [64, 648], [64, 649], [64, 650], [64, 677], [64, 678], [64, 679], [64, 680], [65, 642], [65, 643], [65, 644], [65, 645], [66, 639], [66, 640], [66, 641], [67, 636], [67, 637], [67, 638], [68, 633], [68, 634], [68, 635], [69, 631], [69, 632], [70, 628], [70, 629], [70, 630], [71, 626], [71, 627], [72, 624], [72, 625], [73, 623], [74, 621], [74, 622], [75, 619], [75, 620], [76, 617], [76, 618], [77, 616], [78, 615], [79, 613], [79, 614], [80, 612], [81, 610], [81, 611], [82, 609], [83, 608], [84, 607], [85, 605], [85, 606], [86, 604], [87, 603], [88, 602], [89, 601], [90, 600], [91, 599], [92, 598], [93, 597], [94, 596], [95, 595], [96, 594], [97, 593], [98, 592], [99, 591], [100, 590], [101, 589], [102, 588], [103, 587], [104, 586], [105, 585], [106, 585], [107, 584], [108, 583], [109, 582], [110, 581], [111, 580], [112, 580], [113, 579], [114, 578], [115, 577], [116, 577], [117, 576], [118, 575], [119, 574], [120, 574], [121, 573], [122, 572], [123, 572], [124, 571], [125, 570], [126, 569], [127, 569], [128, 568], [129, 567], [130, 567], [131, 566], [132, 565], [133, 565], [134, 564], [135, 563], [136, 563], [137, 562], [138, 561], [139, 561], [140, 560], [141, 559], [142, 559], [143, 558], [144, 558], [145, 557], [146, 556], [147, 556], [148, 555], [149, 555], [150, 554], [151, 553], [152, 553], [153, 552], [154, 552], [155, 551], [156, 550], [157, 550], [158, 549], [159, 549], [160, 548], [161, 547], [162, 547], [163, 546], [164, 546], [165, 545], [166, 545], [167, 544], [168, 544], [169, 543], [170, 542], [171, 542], [172, 541], [173, 541], [174, 540], [175, 540], [176, 539], [177, 539], [178, 538], [179, 537], [180, 537], [181, 536], [182, 536], [183, 535], [184, 535], [185, 534], [186, 534], [187, 533], [188, 533], [189, 532], [190, 532], [191, 531], [192, 531], [193, 530], [194, 529], [195, 529], [196, 528], [197, 528], [198, 527], [199, 527], [200, 526], [201, 526], [202, 525], [203, 525], [204, 524], [205, 524], [206, 523], [207, 523], [208, 522], [209, 522], [210, 521], [211, 521], [212, 520], [213, 520], [214, 519], [215, 519], [216, 518], [217, 518], [218, 517], [219, 517], [220, 516], [221, 516], [222, 515], [223, 515], [224, 514], [225, 514], [226, 513], [227, 512], [228, 512], [229, 511], [230, 511], [231, 510], [232, 510], [233, 509], [234, 509], [235, 508], [236, 508], [237, 507], [238, 507], [239, 506], [240, 506], [241, 505], [242, 505], [243, 504], [244, 504], [245, 503], [246, 503], [247, 502], [248, 502], [249, 501], [250, 501], [251, 500], [252, 500], [253, 499], [254, 499], [255, 498], [256, 498], [257, 497], [258, 497], [259, 496], [260, 496], [261, 495], [262, 494], [263, 494], [264, 493], [265, 493], [266, 492], [267, 492], [268, 491], [269, 491], [270, 490], [271, 490], [272, 489], [273, 489], [274, 488], [275, 488], [276, 487], [277, 487], [278, 486], [279, 485], [280, 485], [281, 484], [282, 484], [283, 483], [284, 483], [285, 482], [286, 482], [287, 481], [288, 481], [289, 480], [290, 479], [291, 479], [292, 478], [293, 478], [294, 477], [295, 477], [296, 476], [297, 476], [298, 475], [299, 474], [300, 474], [301, 473], [302, 473], [303, 472], [304, 472], [305, 471], [306, 470], [307, 470], [308, 469], [309, 469], [310, 468], [311, 468], [312, 467], [313, 466], [314, 466], [315, 465], [316, 465], [317, 464], [318, 463], [319, 463], [320, 462], [321, 461], [322, 461], [323, 460], [324, 460], [325, 459], [326, 458], [327, 458], [328, 457], [329, 457], [330, 456], [331, 455], [332, 455], [333, 454], [334, 453], [335, 453], [336, 452], [337, 451], [338, 451], [339, 450], [340, 449], [341, 449], [342, 448], [343, 447], [344, 447], [345, 446], [346, 445], [347, 445], [348, 444], [349, 443], [350, 443], [351, 442], [352, 441], [353, 440], [354, 440], [355, 439], [356, 438], [357, 437], [358, 437], [359, 436], [360, 435], [361, 434], [362, 434], [363, 433], [364, 432], [365, 432], [366, 431], [367, 430], [368, 429], [369, 428], [370, 428], [371, 427], [372, 426], [373, 425], [374, 424], [375, 423], [376, 423], [377, 422], [378, 421], [379, 420], [380, 419], [381, 418], [382, 418], [383, 417], [384, 416], [385, 415], [386, 414], [387, 413], [388, 412], [389, 411], [390, 410], [391, 409], [392, 408], [393, 407], [394, 406], [395, 405], [396, 404], [397, 403], [398, 403], [399, 401], [399, 402], [400, 400], [401, 399], [402, 398], [403, 397], [404, 396], [405, 395], [406, 394], [407, 393], [408, 392], [409, 390], [409, 391], [410, 389], [411, 388], [412, 387], [413, 385], [413, 386], [414, 384], [415, 383], [416, 382], [417, 380], [417, 381], [418, 379], [419, 378], [420, 376], [420, 377], [421, 375], [422, 374], [423, 372], [423, 373], [424, 371], [425, 369], [425, 370], [426, 367], [426, 368], [427, 366], [428, 364], [428, 365], [429, 363], [430, 361], [430, 362], [431, 359], [431, 360], [432, 357], [432, 358], [433, 355], [433, 356], [434, 354], [435, 352], [435, 353], [436, 350], [436, 351], [437, 348], [437, 349], [438, 346], [438, 347], [439, 343], [439, 344], [439, 345], [440, 341], [440, 342], [441, 338], [441, 339], [441, 340], [442, 336], [442, 337], [443, 333], [443, 334], [443, 335], [444, 330], [444, 331], [444, 332], [445, 328], [445, 329], [446, 324], [446, 325], [446, 326], [446, 327], [447, 321], [447, 322], [447, 323], [448, 317], [448, 318], [448, 319], [448, 320], [449, 313], [449, 314], [449, 315], [449, 316], [450, 308], [450, 309], [450, 310], [450, 311], [450, 312], [451, 303], [451, 304], [451, 305], [451, 306], [451, 307], [452, 297], [452, 298], [452, 299], [452, 300], [452, 301], [452, 302], [453, 252], [453, 253], [453, 254], [453, 255], [453, 256], [453, 257], [453, 258], [453, 259], [453, 287], [453, 288], [453, 289], [453, 290], [453, 291], [453, 292], [453, 293], [453, 294], [453, 295], [453, 296], [454, 260], [454, 261], [454, 262], [454, 263], [454, 264], [454, 265], [454, 266], [454, 267], [454, 268], [454, 269], [454, 270], [454, 271], [454, 272], [454, 273], [454, 274], [454, 275], [454, 276], [454, 277], [454, 278], [454, 279], [454, 280], [454, 281], [454, 282], [454, 283], [454, 284], [454, 285], [454, 286]];
    p = '<img id="path" src="http://localhost:8000/images/po.gif">';
    path_div = '<div id="path_div"></div>div>';
    xy = '<img id="path" src="http://localhost:8000/images/path.gif">';
    $('#image').cropper({
        // aspectRatio: 16 / 9,
        guides: false,
        // autoCrop: false,
        center: false,
        viewMode:0,
        // dragMode: 'none',
        // aspectRatio: 1,
        center: false,
        autoCropArea: 1,
        // modal: false,
        // highlight: false,
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
            // $('#table')[0]
            $('#table td.v')[0].innerText= e.x;
            $('#table td.v')[1].innerText= e.y;
            $('#table td.v')[2].innerText= e.width;
            $('#table td.v')[3].innerText= e.height;
            $('#table td.v')[4].innerText= e.rotate;
            $('#table td.v')[5].innerText= e.scaleX;
            $('#table td.v')[6].innerText= e.scaleY;

            init_p(e)
        }
    });
    function init_p(e) {
        //get current position
        cp = [200,200];
        if($('#path')[0] == undefined){
            $('.cropper-view-box').append(p);
        }
        dp = $('.cropper-view-box img');
        lp = parseFloat(map_info.current_position[0]) * map_info.rate[0] * (parseFloat(dp[0].style.width) / parseFloat(1298)) - 16;
        dp[1].style.left = lp;
        tp = parseFloat(map_info.current_position[1]) * map_info.rate[1] * (parseFloat(dp[0].style.height) / parseFloat(729)) - 16;
        dp[1].style.top = tp;
        dp[1].style.transform = dp[0].style.transform;
        // draw path
        if($('#path_div')[0] != undefined){
            $('#path_div').children().remove();
        }else{
            $('.cropper-view-box').append(path_div);
        }
        for(var i=0;i<path.length;){
            var img = new Image();
            img.className = 'path_xy';
            img.src = 'http://localhost:8000/images/path.gif';
            img.style.left = parseFloat(path[i][1]) * map_info.rate[1] * (parseFloat(dp[0].style.width) / parseFloat(1298)) - 2.5;
            img.style.top = parseFloat(dp[0].style.height) - parseFloat(path[i][0]) * map_info.rate[0] * (parseFloat(dp[0].style.height) / parseFloat(729)) - 2.5;
            // if(dp[0].style.transform != 'none'){
            //     transform_style = dp[0].style.transform.split(' ');
            //     // console.log(transform_style)
            //     transform_style[1] = transform_style[1].replace('-','');
            //     transform_style = transform_style.join(' ');
            //     img.style.transform = transform_style;
            // }
            img.style.transform = dp[0].style.transform;
            $('#path_div').append(img);
            i += 1;
        }
        // write rate of map

        $('#table td.v')[7].innerText = (parseFloat(dp[0].style.width) / parseFloat(1298));

    }
    var intup, intdown, intleft, intright, intbig, intsmall;

    function doupaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('move', 0, 5);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }
    function dodownaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('move', 0, -5);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }
    function doleftaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('move', 5, 0);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }
    function dorightaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('move', -5, 0);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }
    function dobigaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('zoom', 0.1);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }
    function dosmallaction() {
        // if (!mouseStillDown) { return; } // we could have come back from
        // SetInterval and the mouse is no longer down
        $('#image').cropper('zoom', -0.1);

        // if (mouseStillDown) { setInterval("doaction", 1000); }
    }

    $('#up').on('click', function () {
        console.log('up');
        doupaction();
    });
    $('#down').on('click', function () {
        $('#image').cropper('move', 0, -5);
    });
    //left
    $('#left').on('click', function () {
        $('#image').cropper('move', 5, 0);
    });
    //right
    $('#right').on('click', function () {
        $('#image').cropper('move', -5, 0);
    });
    $('#reset').on('click', function () {
        $('#image').cropper('reset');
    });

    $('#big').on('click', function () {
        $('#image').cropper('zoom', 0.1);
    });
    $('#small').on('click', function () {
        $('#image').cropper('zoom', -0.1);
    });
    $('#up').mousedown(function(){
        intup = setInterval(function() { doupaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
    $('#down').mousedown(function(){
        intup = setInterval(function() { dodownaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
    $('#left').mousedown(function(){
        intup = setInterval(function() { doleftaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
    $('#right').mousedown(function(){
        intup = setInterval(function() { dorightaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
    $('#big').mousedown(function(){
        intup = setInterval(function() { dobigaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
    $('#small').mousedown(function(){
        intup = setInterval(function() { dosmallaction(); }, 100);
    }).mouseup(function() {
        clearInterval(intup);
    });
});
