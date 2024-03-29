import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrl: './reload.component.scss'
})
export class ReloadComponent {

  private route:ActivatedRoute = inject(ActivatedRoute);
  private router:Router = inject(Router);

  ngOnInit(): void {
    this.reload();
  }

  //The query params contains the url of the view to 'reload'.
  private reload() {
    this.route.queryParams.subscribe(d=> {
      let term = d['data'];
      console.log("ReloadComponent ",term)
      if(term && term !=='') {
        this.router.navigate(['/'], {queryParams:{data:term}});
      }
      else
        this.router.navigate(['/']);
    });

  }

}
