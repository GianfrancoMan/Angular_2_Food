import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular_2_Food';
  private router:Router = inject(Router);

  onTerm(term:string) {
    console.log("AppComponent ", term)
    this.router.navigate(['/reload'], {queryParams:{data:term}});
  }
}
