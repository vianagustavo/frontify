import { Component } from '@angular/core';

@Component({
  selector: 'frontify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontify';

  messageArray: string[] = [];

  saveMessage(messageValue: string) {
    this.messageArray.push(messageValue);
    console.log(this.messageArray);
  }
}
