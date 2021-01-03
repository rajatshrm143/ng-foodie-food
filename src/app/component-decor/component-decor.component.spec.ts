import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDecorComponent } from './component-decor.component';

describe('ComponentDecorComponent', () => {
  let component: ComponentDecorComponent;
  let fixture: ComponentFixture<ComponentDecorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDecorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
