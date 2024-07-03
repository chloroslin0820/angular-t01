import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name: string = 'Chloros';
  @Input() description: string = '3 Jahre alt';
  @Input() img: string = '/hamsters/h01.jpg';
  @Input() canFollow: boolean = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void{}
}
