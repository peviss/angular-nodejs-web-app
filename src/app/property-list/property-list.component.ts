import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties = [];

  constructor(private propertyService: PropertyService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.propertyService.getAllProperties()
        .subscribe(data => this.properties = data);
  }

  onSelect(property) {

     this.router.navigate([property.id], { relativeTo: this.route });
  }


}
