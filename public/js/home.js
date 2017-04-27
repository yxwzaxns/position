/**
 * Created by aong on 4/27/17.
 */
$(function () {
    $('#image').cropper({
        // aspectRatio: 16 / 9,
        guides: false,
        // center: false,
        // modal: false,
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        }
    });
    $('#up').on('click', function () {
        console.log('up')
        $('#image').cropper('move', 0, 5);
    })
    $('#down').on('click', function () {
        $('#image').cropper('move', 0, -5);
    })
    //left
    $('#left').on('click', function () {
        $('#image').cropper('move', 5, 0);
    })
    //right
    $('#right').on('click', function () {
        $('#image').cropper('move', -5, 0);
    })
    $('#reset').on('click', function () {
        $('#image').cropper('reset');
    })

    $('#big').on('click', function () {
        $('#image').cropper('zoom', 0.1);
    })
    $('#small').on('click', function () {
        $('#image').cropper('zoom', -0.1);
    })
});
