import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

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

	title: string ="";
	author: string="";
	description:string ="";
	returnedOnDate="";
	dt=new Date();

	todayDate=this.dt.toISOString();
	
	returnDate=this.dt.toISOString();
	

	books=[];
  constructor(public navCtrl: NavController, public dataService: Data) {
  }

  ionViewWillEnter(){
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
  }

  addBook(){
  	this.books.unshift({id:Math.random(),title:this.title,status:1,author:this.author,description:this.description,issueDate:this.todayDate,returnDate:this.returnDate,returnedOnDate:this.returnedOnDate});
  	this.dataService.saveData('book',this.books);
  	this.navCtrl.pop();
  }

  //format date to dd/mm/yyyy
  dateFormat(dt)
  {
  	let symbol="/";
  	alert(typeof(dt));
  	let date=dt.getDate();
  	let month=dt.getMonth()+1;
  	let year=dt.getFullYear();
  	return date+symbol+month+symbol+year; 
  }
}
