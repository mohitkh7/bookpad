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
	todayDate: string=new Date().toISOString();
	returnDate=new Date().toISOString();
	/*this.returnDate.setDate(this.returnDate.getDate());
	let returnDate = new Date(new Date().getTime()+(5*24*60*60*1000));*/

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
  	this.books.unshift({id:Math.random(),title:this.title,status:1,author:this.author,issueDate:this.todayDate,returnDate:this.returnDate});
  	this.dataService.saveData('book',this.books);
  	this.navCtrl.pop();
  }
}
