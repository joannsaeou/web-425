import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // tslint:disable-next-line:typedef
  validate(studentIds: number) {
return this.studentIds.some(id => id === studentIds);
  }
}
