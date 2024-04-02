import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { AppModule } from '../app.module';
import { DataService } from '../services/data.service';
import { Fruit } from '../models/fruit.model';

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

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let dataServiceSpy = jasmine.createSpyObj<DataService>("DataService", ['getCurrentFruits']);
  let dataService:any;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers:[{provide:DataService, useValue:dataServiceSpy}]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(DetailComponent);
      component = fixture.componentInstance;
      dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("The fruit retrieved is the correct fruit", ()=>{
    component.fruitId = 3;
    component.fruit = mockFruits[2];
    expect(component.fruit?.family).toEqual("family3");
  })
});
