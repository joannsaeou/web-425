/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 28 August 2020
 * Modified: Joann Saeou
 * Description: creating Book interface week8.2
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
