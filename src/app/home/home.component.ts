import { Component, Input, OnInit, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, finalize, map, switchMap } from 'rxjs';
import { Fruit } from '../models/fruit.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private route:ActivatedRoute = inject(ActivatedRoute);
  private dataService:DataService = inject(DataService);
  private router:Router = inject(Router);

  searchWord?:string;

  fruitData!:Fruit[];

  ngOnInit(): void {

      this.dataService.getData().subscribe( {
        next: (data) => {
          this.fruitData = data;
          this.dataService.setCurrentFruits(this.fruitData);
        },
        error: (err) => {
          console.log(`Error: ${err.message}`);
        },
        complete: ()=> {
          this.route.queryParams.subscribe( (p:any) => {
            console.log("HomeComponent ", p)
            if(p.data && p.data !== '') {
              console.log("HomeComponent ", p.data)
              this.filterData(p.data);
            }
            this.fruitData.forEach( d => {
              d.urlImg = this.dataService.getImage(d.name);
            });
          })
        }
      });

  }

  onClickFruit(id:number) {
    this.router.navigate(['detail/', id]);
  }

  private filterData(searchTerm:string) {
    let data = this.fruitData.filter( f => f.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()));
    if(data.length > 0) {
      this.fruitData = data;
      this.dataService.setCurrentFruits(this.fruitData);
    }
  }

}
