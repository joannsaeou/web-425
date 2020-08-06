/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 05 August 2020
 * Modified: Joann Saeou
 * Description: creating Book interface week 5 part 2
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
