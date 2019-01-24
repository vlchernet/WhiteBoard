function sendCanvasToServer() {
    //function imgToBase64(img) {
    //    var canvas = document.getElementById('canvas');
    //    var dataURL = canvas.toDataURL('image/jpeg');
    //    return dataURL;
    //}

    var canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL('image/jpeg');

    $.ajax({
        url: '../../HomeController/UploadImage/',
        type: 'POST',
        data: "=" + { imageData: dataURL },
        crossDomain: true
    })
}