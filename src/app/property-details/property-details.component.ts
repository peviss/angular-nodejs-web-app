import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public propertyId;
  public propertyType;
  public propertyOperation;
  public propertyAddress;
  public propertyDescription;
  public propertyPrice;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let type = params.get('type');
      let operation = params.get('operation');
      let address = params.get('address');
      let description = params.get('descrition');
      let price = params.get('price');

      this.propertyId = id;
      this.propertyType = type;
      this.propertyOperation = operation;
      this.propertyAddress = address;
      this.propertyDescription = description;
      this.propertyPrice = price;

    });

  }
}
