import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppModule } from '../app.module';
import { DebugElement, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element:DebugElement;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents().then( () => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      fixture.detectChanges();
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("displays form correctly", fakeAsync(()=>{
    component.isSearchBar = true;
    fixture.detectChanges();
    let formElement = element.query(By.css("form"));
    flush();
    expect(formElement).toBeTruthy();
    expect(formElement.nativeElement).toBeTruthy();
  }));


  it("form is not displayed", fakeAsync(()=>{
    component.isSearchBar = false;
    fixture.detectChanges();
    let formElement = element.query(By.css("form"));
    flush();
    expect(formElement).toBeFalsy();
  }));
});
