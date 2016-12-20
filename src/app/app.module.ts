import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddBook } from '../pages/add-book/add-book';
import { UpdateBook } from'../pages/update-book/update-book';
import { BookDetail } from '../pages/book-detail/book-detail';
import { Notification } from '../pages/services/notification';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBook,
    UpdateBook,
    BookDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBook,
    UpdateBook,
    BookDetail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data, Notification]
})
export class AppModule {}
