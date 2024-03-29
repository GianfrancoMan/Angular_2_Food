import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '../models/fruit.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  private route:ActivatedRoute = inject(ActivatedRoute);
  private dataService:DataService = inject(DataService);

  fruitId!:number;
  fruit:Fruit | undefined;

  ngOnInit(): void {
      this.fruitId = Number(this.route.snapshot.paramMap.get('id'));
      this.fruit = this.dataService.getCurrentFruits().find( f => f.id === this.fruitId);
      console.log(this.fruit);
  }
}
