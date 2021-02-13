import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(
    private http: HttpClient
  ) { }
  printToLi(count: any, containerId: any) {
    let eleContainer = document.createElement('li');
    eleContainer.innerHTML = `Video:${count}`;
    eleContainer.classList.add('list-group-item')
    const getEleContainer = document.getElementById(containerId);
    getEleContainer?.appendChild(eleContainer)
  }

  fetchData() {
    return this.http.get('https://randomuser.me/api/')

  }
}
