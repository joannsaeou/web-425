import { Component, OnInit } from '@angular/core';

export default class Composer {

  fullName: string;
  genre: string;


  constructor(fullName: string, genre: string) {

    this.fullName = fullName;
    this.genre = genre;
    }
  }


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  Composer: Array<Composer>;

  constructor() {
    this.Composer = [

      new Composer('Johann Strauss', 'Classical, Romantic'),
      new Composer('Antonio Vivaldi', 'Classical, Baroque'),
      new Composer('Claudio Monteverdi', 'Classical, Opera'),
      new Composer('Niccolò Paganini', 'Classical, Romantic'),
      new Composer('Gabriel Fauré ', 'Classical, Dance/Electronic')

    ]
  }

  ngOnInit(): void {
  }

}


