import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  exclusive = new Subject<any>();
  username = new BehaviorSubject<any>('avb786');
  videoEmit = new ReplaySubject<any>(3, 5000);
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
