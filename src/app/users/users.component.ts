import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  p = 1;
  numofrecors = 4;
  users = [
    {
      id: 1,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      phone: '0123456789',
      ticketNumber: 'C-101',
      rateTicket: '$40',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '47',
    },
    {
      id: 2,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 3,
      img: './assets/Avatar2.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-103',
      rateTicket: '$45',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 4,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-104',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 5,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-105',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 6,
      img: './assets/Avatar2.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-106',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 7,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-107',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 8,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 9,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 10,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 1,
      img: './assets/Avatar2.png',
      name: 'Ahmed Mahmoud',
      phone: '0123456789',
      ticketNumber: 'C-101',
      rateTicket: '$40',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '47',
    },
    {
      id: 2,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-102',
      rateTicket: '$30',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 3,
      img: './assets/Avatar2.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-103',
      rateTicket: '$45',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 4,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-104',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 5,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-105',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 6,
      img: './assets/Avatar2.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-106',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 7,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-107',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 8,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 9,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 10,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },

    {
      id: 6,
      img: './assets/Avatar2.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-106',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 7,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-107',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 8,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 9,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
    },
    {
      id: 10,
      img: './assets/Avatar.png',
      name: 'Muhammad Al-Ghareeb',
      phone: '0123456789',
      ticketNumber: 'C-108',
      rateTicket: '$54',
      cinemaName:
        '	Cinema Misr, Mall of Arabia, Burj Al-Atan, Saraya Al-Qubba...	',
      cinemaComp: 'Sidnawi Mall, Burj Al Arab',
      numOfPepole: '1',
      numOfPurchases: 'Once',
      ticket: '45',
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
