const galleryArray=['cars1.jpg','cars2.jpg','cars3.jpg','cars4.jpg','cars5.jpg','cars6.jpg','cars7.jpg','cars8.jpg','cars9.jpg','cars10.jpg',]






const myGalleryElement=document.getElementById('carGallery');



let bigImageElement=false;

let BigImageContainer = document.createElement('section');
BigImageContainer.id = 'BigImageContainer';
myGalleryElement.appendChild(BigImageContainer);


let smallImagesContainer = document.createElement('section');
smallImagesContainer.id = 'smallImagesContainer';
myGalleryElement.appendChild(smallImagesContainer);



galleryArray.forEach((element,index) => {

if(index==1){

  
   bigImageElement = document.createElement('img');
  bigImageElement.src = `assets/img/${element}`;
  bigImageElement.alt = `Gallery Image ${index + 1}`;
  bigImageElement.id="bigImage";

  BigImageContainer.appendChild(bigImageElement);

}else{
 
  const img = document.createElement('img');
  img.src = `assets/img/${element}`;
  img.alt = `Gallery Image ${index + 1}`;
  img.classList.add('gallery-small');

  img.addEventListener('click', (e) => {

let smallImage=e.target.src

console.log(bigImageElement);
let bigImage=bigImageElement.src



bigImageElement.src=smallImage
e.target.src=bigImage


  })



  smallImagesContainer.appendChild(img);
 
}
  
});