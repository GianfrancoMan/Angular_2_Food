import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() emitTerm:EventEmitter<string> = new EventEmitter();
  isSearchBar:boolean = false

  public toggleSearchBar() {
    this.isSearchBar = !this.isSearchBar;
  }

  public onSubmit(form:NgForm) {
    this.isSearchBar = !this.isSearchBar;
    let term = form.value.name;
    this.emitTerm.emit(term);
  }
}
