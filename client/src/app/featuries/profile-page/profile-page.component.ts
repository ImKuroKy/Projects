import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  user = {
    name: '',
    phone: '',
    email: '',
    bio: '',
    avatar: '',
    background: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    // Логика для перехода на компонент редактирования данных
  }
}
