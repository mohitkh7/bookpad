import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { Data } from '../../providers/data';

import { AddBook } from '../add-book/add-book';
import { UpdateBook } from '../update-book/update-book';
import { BookDetail } from '../book-detail/book-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public books=[];
	message;
	dayDifference;

  constructor(public navCtrl: NavController, public dataService: Data, public alertCtrl: AlertController) {
  	 
  }

  ionViewWillEnter(){
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
  }

  //this function will count day difference
  countDayDifference(book_object){
  	let oneDay = 24*60*60*1000; 
  	let tdt=new Date();
  	let rdt=new Date(book_object.returnDate);
  	let diff=Math.round((rdt.getTime() - tdt.getTime())/(oneDay));
  	if(diff==0)
  		return "Last day";
  	else if(diff==1)
  		return "1 Day left";
  	else if(diff==-1)
  		return Math.abs(diff)+" Day Late";
  	else if(diff<-1)
  		return Math.abs(diff)+" Days late";
  	else
  		return diff+" Days Left";
  }

  //Change status to give No.
  changeStatus(book_object,target){
  	book_object.status=target;
  	if(target==2)
  		book_object.returnOnDate=new Date();
  	if(target==1)
  	{
  		book_object.issueDate=new Date();
  		this.openUpdateBook(book_object);
  	}
  	this.dataService.saveData('book',this.books);
  }

  removeBookAlert(book_object) {
    let confirm = this.alertCtrl.create({
      title: 'Delete',
      message: 'Are you sure to delete this book ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.removeBook(book_object);
          }
        }
      ]
    });
    confirm.present();
  }

  //remove book from list
  removeBook(book_object){
  	let i=this.books.indexOf(book_object);
  	this.books.splice(i,1);
  	this.dataService.saveData('book',this.books);
  	this.navCtrl.setRoot(HomePage);	
  }

  //used to show book as per there status
  bookList(status){
  	let arr=this.books.filter(book=>(book.status==status));
  	return arr;
  }

  noOfBook(status){
  	let ans=0;
  	for(let i=0;i<this.books.length;i++)
  	{
  		if(this.books[i].status==status)
  			ans++;
  	}
  	return ans;
  }
  //open Add Book page 
  openAddBook(){
  	this.navCtrl.push(AddBook);
  }
  //open update Page
  openUpdateBook(book_object){
  	this.navCtrl.push(UpdateBook,{book:book_object});
  }
  //open Book detail
  openBookDetail(book_object){
  	this.navCtrl.push(BookDetail,{book:book_object});
  }
};