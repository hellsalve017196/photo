//default controllers

angular.module('starter.controller', [])
  //photoCtrl for taking pic,$cordovaCamera is used for the cordova camera plugin implementation
.controller('photoCtrl', function ($scope,$cordovaCamera)
  {
        // taking the photo event Listener
        $scope.take_photo = function () {

          //default attributes to take images
          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            //success

            deg = 60; // rotation option in deg

            $scope.imgSrc = "data:image/jpeg;base64," + imageData;  // setting the img src
            $scope.style = '-webkit-transform: rotate(' + deg + 'deg)'; // styling the image element

          }, function(err) {
            //error

            alert("error occured");

          });
        }

  });
