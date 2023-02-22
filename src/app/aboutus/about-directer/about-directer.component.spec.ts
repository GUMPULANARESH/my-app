import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDirecterComponent } from './about-directer.component';

describe('AboutDirecterComponent', () => {
  let component: AboutDirecterComponent;
  let fixture: ComponentFixture<AboutDirecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDirecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDirecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
