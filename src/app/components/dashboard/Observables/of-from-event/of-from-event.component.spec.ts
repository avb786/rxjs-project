import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromEventComponent } from './of-from-event.component';

describe('OfFromEventComponent', () => {
  let component: OfFromEventComponent;
  let fixture: ComponentFixture<OfFromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfFromEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
