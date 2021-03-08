import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import { BehaviorSubject, ReplaySubject, Subject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  exclusive = new Subject<any>();
  username = new BehaviorSubject<any>('avb786');
  videoEmit = new ReplaySubject<any>(3, 5000);
  asyncVideoEmit = new AsyncSubject<any>();
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

  printPrepend(val: any, containerId: any, header: any, bodyMessage: any, headerColor: any) {
    let eleContainer = document.createElement('div'); 
    eleContainer.classList.add('card');
    eleContainer.classList.add('mb-2');
    eleContainer.classList.add('cards');

    // <div class="card-body">
    let eleContainer2 = document.createElement('div'); 
    eleContainer2.classList.add('card-header');
    eleContainer2.classList.add('h5');
    eleContainer2.classList.add(headerColor);
    eleContainer2.classList.add('text-white');
    eleContainer2.innerHTML = header;

    let eleContainer3 = document.createElement('div'); 
    eleContainer3.classList.add('card-body');
    eleContainer3.innerHTML = bodyMessage;

    eleContainer.appendChild(eleContainer2)
    eleContainer.appendChild(eleContainer3)
    const getEleContainer = document.getElementById(containerId);
    getEleContainer?.prepend(eleContainer)
  }

  fetchData() {
    return this.http.get('https://randomuser.me/api/')

  }
}
