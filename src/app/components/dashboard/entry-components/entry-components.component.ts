import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from 'src/app/shared/shared/placeholder.directive';
import { ChildInputComponent } from '../input-output/child-input/child-input.component';
import { Dummy1Component } from './dummy1/dummy1.component';

@Component({
  selector: 'app-entry-components',
  templateUrl: './entry-components.component.html',
  styleUrls: ['./entry-components.component.scss']
})
export class EntryComponentsComponent implements OnInit {
  @ViewChild(PlaceholderDirective)
  childComponent!: PlaceholderDirective;
  dummyComponent:any;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver // Responsible to create the Component
  ) { }

  ngOnInit(): void {
  }


  showComponentDynamically() {
    alert('showComponentDynamically')
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Dummy1Component);
    this.childComponent?.viewContainerRef.clear();
    this.childComponent?.viewContainerRef.createComponent(componentFactory);
    console.log("componentFactory", componentFactory);
    console.log("childComponent", this.childComponent);

  }

  showDummyComponentDynamically(comp:any) {
    if(comp === "dummy")
    this.dummyComponent = Dummy1Component;
    if(comp === "input")
    this.dummyComponent = ChildInputComponent;
  }

}
