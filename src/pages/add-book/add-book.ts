import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Notification } from '../services/notification';

/*
  Generated class for the AddBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html'
})
export class AddBook {
	
	id=Math.random();
	title: string ="";
	author: string="";
	description:string ="";
	returnedOnDate="";
	dt=new Date();
	todayDate=this.dt.toISOString();
	returnDate=this.dt.toISOString();
	
	book;
	books=[];
  constructor(public navCtrl: NavController, public dataService: Data, public notification: Notification) {
  	//adding 15 days
  	let date=new Date();
  	date.setDate(date.getDate()+15);
  	date.setHours(10,0,0);
  	this.returnDate=date.toISOString();
  }

  ionViewWillEnter(){
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
  }

  addBook(){
  	this.book={id:this.id,title:this.title,status:1,author:this.author,description:this.description,issueDate:this.todayDate,returnDate:this.returnDate,returnedOnDate:this.returnedOnDate};
  	this.books.unshift(this.book);
  	this.dataService.saveData('book',this.books);
  	this.notification.saveReminder(this.book); //Saving save reminder in system notification
  	this.navCtrl.pop();
  }

  /*Saving in system notification 
  saveReminder(){
  	let notificationTime=new Date(this.returnDate);
  	notificationTime.setDate(notificationTime.getDate() - 3); 
  	let notification={
      id: this.id,
      title: 'Book Reminder',
      text: 'You have to return back '+this.title,
      at: notificationTime,
      every: 'day',
      led: 'FF0000' 
  	};
  	LocalNotifications.schedule(notification);
  }*/

  
}
