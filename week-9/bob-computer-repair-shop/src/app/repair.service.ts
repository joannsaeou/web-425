import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IService } from './repair-service.interface';    // import from interface  file

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  services: Array<IService>;

  constructor() {
    this.services = [
      {
        id: 'A',
        title: 'Password Reset',
        price: 39.99,
        description: ' We will reset your forgotten/lost password '

      },
     {
      id: 'B',
      title: 'Spyware Removal',
      price: 99.99,
      description: ' We will get rid of potential threat and viruses. '
     },
     {
      id: 'C',
      title: 'RAM Upgrade',
      price: 39.99,
      description: ' We will upgrade your RAM to have more memory space.  '
     },
     {
      id: 'D',
        title: 'Software Installation',
        price: 49.99,
        description: ' We will install any type of software program. '
     },
     {
      id: 'E',
      title: 'Tune-Up',
      price: 39.99,
      description: ' We will tune-up your computer to the latest version'
     },
     {
      id: 'F',
      title: 'Keyboard Cleaning ',
      price: 49.99,
      description: ' We will have your keyboard be completely clean, dust-free. '
     },
     {
      id: 'G',
      title: 'Disk Clean-up',
      price: 149.99,
      description: ' We will clean-up your disk and do a removal of all unwanted files.'
     },


    ];
  }

  getServices(): Observable<IService[]> {
    return of(this.services);
  }

  getBook(id: string): IService {
    for (const service of this.services) {
      if (service.id === id) {
        return service;
      }
    }
  }
}
