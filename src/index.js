
import galleryTamplate from './templates/countriesTemplate.hbs'
import refs from './js/refs'
import ApiService from './js/apiService'

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
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
newApiService.fetchGallery().then(createGallery);
}

function onLoadMore(){
    newApiService.fetchGallery().then(createGallery);
}

function createGallery(data){
refs.gallery.insertAdjacentHTML("beforeend", galleryTamplate(data))
}

function clearGallery(){
    refs.gallery.innerHTML=''  
}

const element = document.querySelector('.photo-card');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
