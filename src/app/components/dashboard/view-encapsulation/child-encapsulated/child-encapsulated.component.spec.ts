import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEncapsulatedComponent } from './child-encapsulated.component';

describe('ChildEncapsulatedComponent', () => {
  let component: ChildEncapsulatedComponent;
  let fixture: ComponentFixture<ChildEncapsulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEncapsulatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEncapsulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
