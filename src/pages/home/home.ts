import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';

import { AddBook } from '../add-book/add-book';

import { UpdateBook } from '../update-book/update-book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public books=[];
	message;

  constructor(public navCtrl: NavController, public dataService: Data) {
  	 
  }

  ionViewWillEnter(){
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
  }

  //Change status to give No.
  changeStatus(book_object,target){
  	book_object.status=target;
  	this.dataService.saveData('book',this.books);
  }

  

  //remove book from list
  removeBook(book_object){
  	let i=this.books.indexOf(book_object);
  	this.books.splice(i,1);
  	this.dataService.saveData('book',this.books);	
  }

  bookList(status){
  	let arr=this.books.filter(book=>(book.status==status));
  	return arr;
  }

  bookLength(status){
  	
  }
  //open Add Book page 
  openAddBook(){
  	this.navCtrl.push(AddBook);
  }
  //open update Page
  openUpdateBook(book_object){
  	this.navCtrl.push(UpdateBook,{book:book_object});
  }
}
