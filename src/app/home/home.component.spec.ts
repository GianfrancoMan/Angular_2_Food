import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { AppModule } from '../app.module';
import { Fruit } from '../models/fruit.model';
import { elementAt, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const mockFruits:Fruit[] = [
  {
    name:"Fruit1",
    id:1,
    family:'family1',
    genus:'genus1',
    order:'order1',
    urlImg:'url1',
    nutritions: {
      carbohydrates:0.10,
      protein:0.15,
      fat:0.20,
      calories:100,
      sugar:0.30
    }
  },
  {
    name:"Fruit2",
    id:2,
    family:'family2',
    genus:'genus2',
    order:'order2',
    urlImg:'url2',
    nutritions: {
      carbohydrates:1.10,
      protein:1.15,
      fat:1.20,
      calories:200,
      sugar:1.30
    }
  },
  {
    name:"Fruit3",
    id:3,
    family:'family3',
    genus:'genus3',
    order:'order3',
    urlImg:'url3',
    nutritions: {
      carbohydrates:2.10,
      protein:2.15,
      fat:2.20,
      calories:300,
      sugar:2.30
    }
  }
]

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element:DebugElement;
  let dataServiceSpy = jasmine.createSpyObj<DataService>("DataService", ['getData', 'setCurrentFruits', 'getImage']);
  let dataService:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers:[{provide:DataService, useValue:dataServiceSpy}]
    })
    .compileComponents().then( () => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    });

  });

  it('should create', fakeAsync(() => {
    dataService.getData.and.returnValue(of(mockFruits));
    fixture.detectChanges();
    flush();
    expect(component).toBeTruthy();
  }));

  it("Data are retrieved correctly", fakeAsync( () => {
    dataService.getData.and.returnValue(of(mockFruits));
    fixture.detectChanges();
    let fruitElements = element.queryAll(By.css(".content-items-item"));
    flush();

    expect(fruitElements).toBeTruthy();
    expect(fruitElements.length).toBe(3);

    let headerElement = fruitElements[1].query(By.css('h3>strong'));
    expect(headerElement.nativeElement.textContent).toEqual(('Fruit2'.toLocaleUpperCase()));
  }) );


});
