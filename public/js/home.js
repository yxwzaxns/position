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
});
