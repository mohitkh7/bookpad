import { LocalNotifications } from 'ionic-native';

export class Notification {  
  
  constructor(){}
  
  /*Saving in system notification */
  saveReminder(book_object){
  	let notificationTime=new Date(book_object.returnDate);
  	notificationTime.setDate(notificationTime.getDate() - 3); 
  	let notification={
      id: book_object.id,
      title: 'Book Reminder',
      text: 'You have to return back '+book_object.title,
      at: notificationTime,
      every: 'day',
      led: 'FF0000' 
  	};
  	alert(notification.at);
  	LocalNotifications.schedule(notification);
  }

}