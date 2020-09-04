import { Component, OnInit } from '@angular/core';
import { SRepair } from '../shop-service.interface';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ServiceComponent implements OnInit {
  [x: string]: any;

  services: Array<SRepair>;
  constructor() {

    this.services = this.Services.getServices(); // dependency injection

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterServices(val));    //  emit value changes event

   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  filterServices(serviceName: string) {
    this.services = this.services.filterServices(serviceName);
  }

}
