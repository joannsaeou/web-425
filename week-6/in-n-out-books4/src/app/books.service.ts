/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 05 August 2020
 * modified: Joann Saeou
 * Description: Service class for book objects week 5 part 2
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';    // import from interface  file

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '979-8628237182',
        title: '魔道祖师 [Mo Dao Zu Shi]',
        description: 'As the grandmaster who founded demonic cultivation, Wei WuXian roamed the world in his wanton ways, hated by millions for the chaos he created.',
        numOfPages: 1452,
        authors: ['墨香铜臭 - Mò Xiāng Tóngxiù', ]

      },
     {
      isbn: ' 978-0857053008',
      title: 'A Hero Born ',
      description: 'The Song Empire has been invaded by its warlike Jurchen neighbours from the north. Half its territory and its historic capital lie in enemy hands; the peasants toil under the burden of the annual tribute demanded by the victors. ',
      numOfPages: 395,
      authors: ['Jin Yong, Anna Holmwood']
     },
     {
      isbn: 'N/A',
      title: 'Patriarch Reliance - I shall seal the Heavens #1 ',
      description: 'I Shall Seal the Heavens is currently one of the most popular xianxia stories in China. It is about a failed young scholar named Meng Hao who gets forcibly recruited into a Sect of Immortal Cultivators. ',
      numOfPages: 1000,
      authors: ['Er Gen']
     },
     {
      isbn: 'N/A',
      title: 'The Descent of Gods ',
      description: 'Empires rise and fall on the Yulan Continent. Saints, immortal beings of unimaginable power, battle using spells and swords, leaving swathes of destruction in their wake. Magical beasts rule the mountains, where the brave – or the foolish – go to test their strength.  ',
      numOfPages: 400,
      authors: [' 我吃西红柿, Ren Wo Xing']
     },
     {
      isbn: '978-0195907278',
      title: 'The Book and the Sword ',
      description: 'In the Book and Sword, Louis Cha revives the legend about the great eighteenth-century Manchu Emperor Qianlong which claims that he was in fact not a Manchu but a Han Chinese as a result of a "baby swap." ',
      numOfPages: 536,
      authors: [' in Yong, Graham Earnshaw']
     }


    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (const book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
