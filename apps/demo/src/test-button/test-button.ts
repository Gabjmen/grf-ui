import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  imports: [],
  templateUrl: './test-button.html',
  styleUrl: './test-button.scss',
})
export class TestButton {
  onClick($event: any) {
    console.log("hello from Angular button!");
  }
}
