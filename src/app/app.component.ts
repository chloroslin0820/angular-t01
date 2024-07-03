import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  postTexts = [
    'Hallo, mein Name ist Chloros! Ich bin hier, um neue Freunde zu finden',
    'Hallo zusammen. Freut mich, dass ich hier seid!!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse',
  ];

  postImages = [
    '/hamsters/h01.jpg',
    '/hamsters/h02.jpg',
    '/hamsters/h03.jpg',
    '/hamsters/h04.jpg',
    '/hamsters/h05.jpg',
    '/hamsters/h06.jpg',
    '/hamsters/h07.jpg',
    '/hamsters/h08.jpg',
  ]
}
