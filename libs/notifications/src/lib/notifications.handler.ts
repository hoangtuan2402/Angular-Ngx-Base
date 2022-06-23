import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddNotification, DeleteNotification, MarkAllAsRead, MarkAsRead } from './notifications.actions';
import { SwPush } from '@angular/service-worker';
import { AppNotification } from './app-notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationsHandler {
  constructor(private actions$: Actions, private store: Store, private readonly swPush: SwPush) {


    if (this.swPush.isEnabled) {
      this.swPush.messages.subscribe((message: { notification: Notification }) => {
        if (message.notification.data.targetType) {
          this.store.dispatch(new AddNotification(new AppNotification(message.notification.data)));
        }
      });
      this.swPush.notificationClicks.subscribe(({ action, notification: { title, ...notification } }) => {
        console.log(`action: ${action}, title: ${title}, notification`, notification);
      });
    }
  }
}
