import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropElementComponent } from './crop-element.component';

describe('CropElementComponent', () => {
  let component: CropElementComponent;
  let fixture: ComponentFixture<CropElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
