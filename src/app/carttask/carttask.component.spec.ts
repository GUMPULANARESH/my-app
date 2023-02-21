import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttaskComponent } from './carttask.component';

describe('CarttaskComponent', () => {
  let component: CarttaskComponent;
  let fixture: ComponentFixture<CarttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarttaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
