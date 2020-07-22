import { IComposer } from './composer.interface';

export  class Composer {
    composers: Array<IComposer>;

// create a constructor to list 5 composer in array with composerId, fullName, and genre
    constructor() {
        this.composers = [
            {composerId: 101, fullName: 'Johann Strauss', genre: 'Classical, Romantic'},
            {composerId: 102, fullName: 'Antonio Vivaldi', genre: 'Classical, Baroque'},
            {composerId: 103, fullName: 'Claudio Monteverdi', genre: 'Classical, Opera'},
            {composerId: 104, fullName: 'Niccolò Paganini', genre: 'Classical, Romantic'},
            {composerId: 105, fullName: 'Gabriel Fauré ', genre: 'Classical, Dance/Electronic'},
    ]
}

getComposers() {
    return this.composers;

}

getComposer(composerId: number) {
    for (const composer of this.composers) {
        if (composer.composerId === composerId){
            return composer;


            }
        }
    }
}