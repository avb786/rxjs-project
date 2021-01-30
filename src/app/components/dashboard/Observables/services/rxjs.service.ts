import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }
  printToLi(count: any, containerId: any) {
    let eleContainer = document.createElement('li');
    eleContainer.innerHTML = `Video:${count}`;
    eleContainer.classList.add('list-group-item')
    const getEleContainer = document.getElementById(containerId);
    getEleContainer?.appendChild(eleContainer)
  }
}
