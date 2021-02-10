import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  public items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Concepts',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'Topics',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'On Change Detection',
                      icon:'pi pi-list',
                      routerLink: 'changeDetection'
                  },
                  {
                      label:'View Encapsulation',
                      icon:'pi pi-list',
                      routerLink: 'viewEncapsulation'
                  },
                  {
                    label:'Input Output',
                    icon:'pi pi-list',
                    routerLink: 'inputOutput'
                },

                  ]
              },
              {
                  label:'Forms',
                  icon:'pi pi-fw pi-file',
                  items: [
                    {
                        label:'Reactive-Forms',
                        icon:'pi pi-list',
                        routerLink: 'reactiveForms'
                    },
                  ]
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'RxJs Operators',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'FromEvent',
                  icon:'pi pi-fw pi-align-left',
                  routerLink: 'fromEvent'
              },
              {
                  label:'Interval-Timer',
                  icon:'pi pi-fw pi-align-right',
                  routerLink: 'intervalTimer'
              },
              {
                  label:'Of-From',
                  icon:'pi pi-fw pi-align-center',
                  routerLink: 'ofFromEvent'
              },
              {
                  label:'To-Array',
                  icon:'pi pi-fw pi-align-center',
                  routerLink: 'toArray'
              },
              {
                label:'Custom-Observable',
                icon:'pi pi-fw pi-align-center',
                routerLink: 'customObservable'
            },
            {
                label:'Map-Operator',
                icon:'pi pi-fw pi-align-center',
                routerLink: 'mapOperator'
            },
            {
                label:'Pluck-Operator',
                icon:'pi pi-fw pi-align-center',
                routerLink: 'pluckOperator'
            },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Search',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Filter',
                      icon:'pi pi-fw pi-filter',
                      items:[
                          {
                              label:'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      icon:'pi pi-fw pi-bars',
                      label:'List'
                  }
                  ]
              }
          ]
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      }
  ];
  }

}
