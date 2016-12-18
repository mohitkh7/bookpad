import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the BookDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html'
})
export class BookDetail {

	public book;
	showOption=1;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
  	//from parameter
		/*this.id=this.navParams.get('book').id;
		this.title=this.navParams.get('book').title;
		this.author=this.navParams.get('book').author;*/
		this.book=this.navParams.get('book');
		this.book.issueDate=this.dateFormat(new Date(this.book.issueDate));
		this.book.returnDate=this.dateFormat(new Date(this.book.returnDate),2);
		this.book.returnOnDate=this.dateFormat(new Date(this.book.returnOnDate));
  }

  ionViewWillEnter() {
    //To something when view load
    this.showOption=this.book.status;

  }

  dateFormat(dt,flag=1)
  {
  	let symbol="-";
  	let date=dt.getDate();
  	let month=dt.getMonth();
  	//adding one cause 0-11 and  extra 0 for 02
  	month+=1;
  	if(month<9)
  		month="0"+month;
  	let year=dt.getFullYear();
  	let hour=dt.getHours();
  	if(hour<10)
  		hour="0"+hour;	//adding extra 0
  	let min=dt.getMinutes();
  	if(min<10)
  		min="0"+min;	//adding extra 0
  	if(flag==2)
  		return date+symbol+month+symbol+year; 
  	else
  		return date+symbol+month+symbol+year+"  "+hour+":"+min; 
  }


}
