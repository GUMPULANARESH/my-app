import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivestasktwoComponent } from './directivestasktwo.component';

describe('DirectivestasktwoComponent', () => {
  let component: DirectivestasktwoComponent;
  let fixture: ComponentFixture<DirectivestasktwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivestasktwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivestasktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
