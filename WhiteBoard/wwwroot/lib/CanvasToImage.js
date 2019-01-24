function canvasToImage() {
    var canvas = document.getElementById('canvas');
    //canvas.deactivateAll().renderAll();
    var image = canvas.toDataURL({
        format: 'jpeg',
        quality: 1
    });

    $.ajax({
        type: 'POST',
        url: "../../HomeController/UploadImage/",
        data: { imageData: image }
    });
    //    .success(function (data, status) {
    //    alert('success')
    //}).error(function (err) {
    //    console.log(err);
    //});
}