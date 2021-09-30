import * as basicLightbox from 'basiclightbox'

import refs from './refs'
import galleryTamplate from '../templates/galleryTemplate.hbs'

const {searchForm, gallery, seeMore, img} = refs;

gallery.addEventListener('click', openModal);


function openModal(e){
   const largePhoto = e.target.currentSrc
    if(e.target.nodeName === "IMG"){
        const instance = basicLightbox.create(`
        <img src = "${largePhoto}" width = "800" height="600"/>`)
    instance.show()
    }      
}