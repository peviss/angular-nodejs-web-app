import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../property-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties = [];

  constructor(private porpertyService: PropertyServiceService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.porpertyService.getProperties()
        .subscribe(data => this.properties = data);
  }

  onSelect(property) {

     this.router.navigate([property.id], { relativeTo: this.route });
  }


}
