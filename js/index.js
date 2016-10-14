
function setIptions(srcType){
	var options = {
		quality:50,
		destinationType: navigator.Camera.DestinationType.FILE_URI,
		sourceType:srcType,
		encodingType:Camera.encodingType.JPEG,
		mediaType: Camera.mediaType.PICTURE,
		allowEdit:true,
		correctOrientation:true
	}
	return options;
}


function openCamera(){
	var srcType = navigator.Camera.PictureSourceType.CAMERA;
	var options = setOptions(srcType);
	var func = createNewFileEntry;

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
