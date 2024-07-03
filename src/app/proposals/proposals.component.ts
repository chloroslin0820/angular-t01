import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  names = ['Marius', 'Fransiska', 'Josephine', 'Patrick'];
  descriptions = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad-Liebhaber']
  imgs = ['/hamsters/h05.jpg', '/hamsters/h06.jpg', '/hamsters/h07.jpg', '/hamsters/h08.jpg'];
}
