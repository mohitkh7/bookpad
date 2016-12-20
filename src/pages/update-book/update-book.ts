import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Data } from'../../providers/data';
import { Notification } from '../services/notification';

/*
  Generated class for the UpdateBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update-book',
  templateUrl: 'update-book.html'
})
export class UpdateBook {

	books=[];
	book={id:0};
	dt = new Date();
	todayDate=this.dt.toISOString();
  constructor(public navCtrl: NavController,public navParams: NavParams,public dataService: Data, public notification: Notification ) {

  }

  ionViewWillEnter() {
  	//from database
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
    //from parameter
    this.book=this.navParams.get('book');
  }

  updateBook(){
  	for(let i=0;i<this.books.length;i++)
  		if(this.book.id==this.books[i].id)
  		{
        this.books[i]=this.book;
  		}
  	this.dataService.saveData('book',this.books);
  	this.navCtrl.pop();
  }

}
