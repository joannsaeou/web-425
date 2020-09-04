import { Injectable } from '@angular/core';
import { SRepair } from './shop-service.interface' ;
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export default class Service {



  constructor() {
    this.services = [
      {serviceId: '100', serviceName: 'Disk Clean-Up', price: 149.99},
      {serviceId: '200', serviceName: 'Software Installation', price: 49.99},
      {serviceId: '300', serviceName: 'Password Reset', price: 39.99},
      {serviceId: '400', serviceName: 'Spyware Removal', price: 99.99},
      {serviceId: '500', serviceName: 'Tune-In', price: 89.99},
      {serviceId: '600', serviceName: 'Ram Upgrade', price: 129.99}



    // tslint:disable-next-line:semicolon
    ]

    }
    static serviceId: number;

    services: Array<SRepair>;

    // tslint:disable-next-line: typedef
    getServices() {
      return this.services;
    }
    // tslint:disable-next-line:typedef
    getService(serviceId: number) {
      // tslint:disable-next-line:prefer-const
      for (const service of this.services) {
        if (Service.serviceId === serviceId) {
          return service;
        }
      }
    }
  }
