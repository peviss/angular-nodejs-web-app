import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties = [];

  constructor(private porpertyService: PropertyServiceService) { }


  ngOnInit() {
    this.porpertyService.getProperties()
        .subscribe(data => this.properties = data);
  }
  onSelect(){

  }

}
