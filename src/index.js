import galleryTamplate from './templates/galleryTemplate.hbs'
import refs from './js/refs'
import ApiService from './js/apiService'
//import "./js/lightbox"

import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
defaultModules.set(PNotifyMobile, {})

const newApiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.seeMore.addEventListener('click', onLoadMore)

function onSearch(e){
e.preventDefault();
clearGallery()
newApiService.query = e.currentTarget.elements.query.value;
newApiService.resetPage();
newApiService.fetchGallery().then(createGallery).catch(onError);
}

function onLoadMore(){
    newApiService.fetchGallery().then(createGallery).catch(onError);
    const lastElId = data[data.length - 1].id;
    scrollEnd(lastElId);
}

function createGallery(data){
    if(data.total === 0){
        refs.gallery.innerHTML = ''
        alert({text: `Incorrect search query entered. Images not found!`});
        return} else if(data.total > 0){
    success({text: `Photos successfully found`});
    refs.gallery.insertAdjacentHTML("beforeend", galleryTamplate(data))
}}


function scrollEnd(id) {
    document.getElementById(id).scrollIntoView({
  behavior: 'smooth',
  block: 'end',
}); 
}

function clearGallery(){
    refs.gallery.innerHTML=''  
}

function onError(err){
    refs.gallery.innerHTML = '';
    error({text:`Oops, samething went wrong`});
    return 
}



