import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  lang: string;
  constructor() {
    this.lang = localStorage.getItem('lang');
  }
  p = 1;
  numofrecors = 4;
  users = [
    {
      id: 1,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$40',
    },
    {
      id: 2,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
    },
    {
      id: 3,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$42',
    },
    {
      id: 4,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$50',
    },
    {
      id: 5,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$40',
    },
    {
      id: 6,
      img: './assets/Avatar3.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
    },
    {
      id: 7,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$42',
    },
    {
      id: 8,
      img: './assets/Avatar4.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$50',
    },
    {
      id: 9,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$70',
    },
    {
      id: 10,
      img: './assets/Avatar3.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
    },
    {
      id: 11,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$42',
    },
    {
      id: 12,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$50',
    },
    {
      id: 13,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$40',
    },
    {
      id: 14,
      img: './assets/Avatar4.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
    },
    {
      id: 15,
      img: './assets/Avatar4.jpg',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$42',
    },
    {
      id: 16,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$50',
    },
    {
      id: 17,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$40',
    },
    {
      id: 18,
      img: './assets/Avatar3.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
    },
    {
      id: 19,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      nameAr: 'أحمد محمود',
      ticketNumber: 'C-101',
      rateTicket: '$42',
    },
    {
      id: 20,
      img: './assets/Avatar4.jpg',
      name: 'Muhammad Al-Ghareeb',
      nameAr: 'محمد الغريب',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$50',
    },
  ];
  goTo() {
    if (this.p >= 5) return;
    this.p = this.p + 1;
  }
  goBack() {
    if (this.p === 1) return;
    this.p = this.p - 1;
  }
  setOne() {
    this.p = 1;
  }
  setTwo() {
    this.p = 2;
  }
  setThree() {
    this.p = 3;
  }
  setFour() {
    this.p = 4;
  }
  setFive() {
    this.p = 5;
  }
}
