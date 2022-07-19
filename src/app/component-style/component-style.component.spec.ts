import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleComponent } from './component-style.component';

describe('ComponentStyleComponent', () => {
  let component: ComponentStyleComponent;
  let fixture: ComponentFixture<ComponentStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
