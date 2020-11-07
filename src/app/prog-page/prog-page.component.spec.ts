import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgPageComponent } from './prog-page.component';

describe('ProgPageComponent', () => {
  let component: ProgPageComponent;
  let fixture: ComponentFixture<ProgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
