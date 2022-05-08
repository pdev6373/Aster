import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aster';
  links = [
    {
      linkText: 'Top Stories',
      linkIcon: '../assets/img/home.svg',
    },
    {
      linkText: 'Around the World',
      linkIcon: '../assets/img/globe.svg',
    },
    {
      linkText: 'Business',
      linkIcon: '../assets/img/briefcase.svg',
    },
    {
      linkText: 'Health',
      linkIcon: '../assets/img/activity.svg',
    },
    {
      linkText: 'Covid 19',
      linkIcon: '../assets/img/shield.svg',
    },
    {
      linkText: 'Entertainment',
      linkIcon: '../assets/img/play-circle.svg',
    },
    {
      linkText: 'Sports',
      linkIcon: '../assets/img/award.svg',
    },
    {
      linkText: 'Discussion',
      linkIcon: '../assets/img/message.svg',
    },
    {
      linkText: 'Notification',
      linkIcon: '../assets/img/bell.svg',
    },
    {
      linkText: 'News Feed Settings',
      linkIcon: '../assets/img/settings.svg',
    },
  ];

  newsCategories = [
    'All',
    'Android',
    'Cricket',
    'Iphone',
    'Google',
    'Nano Technology',
    'Mental Health',
  ];
}
