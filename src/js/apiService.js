export default class ApiService{
    constructor(){
        this.searchQuery =""
        this.page = 1;
    }

    fetchGallery(){
        const BASE_URL = `https://pixabay.com/api/?key=23619099-a04eeaf87ea4b7be140530c42&q=${this.searchQuery}&per_page=12&page=${this.page}`

        return fetch(BASE_URL).then(res => res.json()).then(data => {
            this.incrementPage();
            console.log(data);
            return data});
    }

    incrementPage(){
        this.page+=1;
    }

    resetPage(){
        this.page=1;
    }

    get query(){
        return this.searchQuery
    }

    set query (newQuery){
        this.searchQuery = newQuery 
    }
}
