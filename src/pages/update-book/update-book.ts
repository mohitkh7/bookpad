import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Data } from'../../providers/data';

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
	title;
	author;
	id;
  constructor(public navCtrl: NavController,public navParams: NavParams,public dataService: Data) {}

  ionViewDidLoad() {
  	//from database
  	this.dataService.getData('book').then((book) => {
      if(book){
        this.books = JSON.parse(book); 
      }
    }); 
    //from parameter
    this.id=this.navParams.get('book').id;
    this.title=this.navParams.get('book').title;
    this.author=this.navParams.get('book').author;
  }

  updateBook(){
  	for(let i=0;i<this.books.length;i++)
  		if(this.id==this.books[i].id)
  		{
  			this.books[i].title=this.title;
  			this.books[i].author=this.author;
  		}
  	this.dataService.saveData('book',this.books);
  	this.navCtrl.pop();
  }

}
