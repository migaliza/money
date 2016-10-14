
document.addEventListener("deviceready",onDeviceReady,false);
var pictureSource;
var destinationType;
function onDeviceReady(){
	pictureSource=navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}
function capturePhoto(){
	navigator.camera.getPicture(onPhotoDataSuccess,onFail,{quality:50,destinationType:destinationType.DATA_URL});

}



/*function openCamera(){
	alert("you clicked me");
	var srcType = Camera.PictureSourceType.CAMERA;
	var options = setOptions(srcType);
	var func = createNewFileEntry;
alert(srcType)
navigator.camera.getPicture(function cameraSuccess(imageUri){
	displayImage(imageUri);
		func(imageUri);

},function cameraError(error){
	console.debug("unable to obtain picture: "+error,"app");
},options);

var elem = document.getElementById('imageFile');
elem.src = imageUri;
}

function onSuccess(imageURL){
	var image = document.getElelement('pictureTaken');
	image.src = imageURI;
}


function onFail(message){
	alert('Failed because:'+message);
}
*/

function barcode(){
	cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}