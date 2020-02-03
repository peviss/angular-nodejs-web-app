import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.propertyId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
