import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  public selectedType: string = '';
  ngOnInit() {
  }

  onSelectedType(event:any) {
    this.selectedType = event.target.value;
  }

}
