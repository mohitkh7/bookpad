import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddBook } from '../pages/add-book/add-book';
import { UpdateBook } from'../pages/update-book/update-book';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBook,
    UpdateBook
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBook,
    UpdateBook
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data]
})
export class AppModule {}
