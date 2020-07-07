/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 7 July 2020
; Modified By: Joann Saeou
; Description:  Demonstrates  how to use TypeScript
;===========================================
*/


import { IPerson } from "./person.interface";

class Person implements IPerson {     /* to export IPerson from person inteface  */

    firstName: string;
    lastName: string;


    constructor (firstName: string, lastName: string) {

        this.firstName = firstName;
        this.lastName = lastName;



    }

}

const myName = new Person("Joann", "Saeou");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);