import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Fruit } from '../models/fruit.model';
import { first } from 'rxjs';

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

describe('DataService', () => {
  let dataService: DataService, httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [DataService],
    });
    dataService = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('retrieves all fruits', ()=> {
    dataService.getData().subscribe( data => {
      expect(data).withContext("any data has been retrieved").toBeTruthy();
      expect(data.length).withContext('Number of items is wrong').toBe(3);

      const fruit = data.find( f => f.id === 2);
      expect(fruit?.name).withContext("Fruit's name is wrong").toEqual("Fruit2");
    });

    const  request = httpTestingController.expectOne('https://www.fruityvice.com/api/fruit/all');
    expect(request.request.method).toEqual("GET");

    request.flush(mockFruits);
  })

  it("currentFruits is set correctly", ()=> {
    dataService.setCurrentFruits(mockFruits);
    expect(dataService.currentFruits).toBe(mockFruits);

    let fruits = dataService.getCurrentFruits();
    expect(fruits).toBe(mockFruits);
  })
});
