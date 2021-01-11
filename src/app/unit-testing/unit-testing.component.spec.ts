import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';
import { Routes, RouterModule } from "@angular/router";



describe('UnitTestingComponent', () => {

  const routes: Routes = [{ path: '', component: UnitTestingComponent }];
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestingComponent],
      imports: [RouterModule.forChild(routes)]
    })
      .compileComponents();
  }));

  // 1: matcher type is 'toBe()', it will match the return value of the function
  it('Should return the value as integer and equals to 30', () => {
    expect(component.additionFunc(10, 20)).toBe(30);
  });



  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UnitTestingComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


});
