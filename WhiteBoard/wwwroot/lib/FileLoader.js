function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    var img = new Image();
    var context = document.getElementById("canvas").getContext('2d');
    //var span = $(span);

    // Loop through the FileList and render image files as thumbnails.
    //for (var i = files.length - 1, f; f = files[i]; i++) {
    for (var i = 0, f; f = files[i]; i++) {
        //var f = files[0];
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                var span = document.createElement('span');
                //var span = $('#pict');
                span.innerHTML = ['<img class="thumb" ondblclick=onThumbClick(this) src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);
                //img.src = e.target.result;
                context.drawImage(img, 0, 0);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);

        img.src = $('#thumb').src;
        //context.drawImage(img, 0, 0);
    }

    //img.src = $(img.thumb).src; //files[0].target.result;
    //context.drawImage(img, 0, 0);

    //var context = document.getElementById("canvas").getContext("2d");
    //var img = new Image();
    //img.src = //document.getElementsByTagName('img').src;// getElementsByClassName('thumb').src; //$(img).src;
    //context.drawImage(img, 0, 0);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);




