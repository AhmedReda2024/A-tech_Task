import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  constructor() {}

  numberDetails = {
    name: 'german_extermination_company...',
    country: 'hashemite_kingdom_of_jordan',
    protocol: 'vodafone_egypt',
    balanceUsed: '5000 EGP',
    currentBalance: '5000 EGP',
    lastShipment: '29/12/2024',
    extensions: '09',
    client: 'German extermination company...',
    appointmentDate: '1/12/2024',
    cancellationDate: '-',
    appointmentOfficer: 'Abdul Rahim Ismail Nasef',
    localMinutes: '7654',
    internationalMinutes: '122',
    amount: '61890 EGP',
  };

  tableData = [
    {
      client: 'German extermination company...',
      appointmentDate: '01/12/2024',
      cancellationDate: '-',
      appointmentOfficer: 'Abdul Rahim Ismail Nasef',
      localMinutes: '7654',
      internationalMinutes: '122',
      amount: '61890 EGP',
    },
    {
      client: 'German extermination company...',
      appointmentDate: '1/12/2024',
      cancellationDate: '1/12/2024',
      appointmentOfficer: 'Abdul Rahim Ismail Nasef',
      localMinutes: '7654',
      internationalMinutes: '122',
      amount: '61890 EGP',
    },
    {
      client: 'German extermination company...',
      appointmentDate: '1/12/2024',
      cancellationDate: '1/12/2024',
      appointmentOfficer: 'Abdul Rahim Ismail Nasef',
      localMinutes: '7654',
      internationalMinutes: '122',
      amount: '61890 EGP',
    },
    {
      client: 'German extermination company...',
      appointmentDate: '1/12/2024',
      cancellationDate: '1/12/2024',
      appointmentOfficer: 'Abdul Rahim Ismail Nasef',
      localMinutes: '7654',
      internationalMinutes: '122',
      amount: '61890 EGP',
    },
    {
      client: 'German extermination company...',
      appointmentDate: '1/12/2024',
      cancellationDate: '1/12/2024',
      appointmentOfficer: 'Abdul Rahim Ismail Nasef',
      localMinutes: '7654',
      internationalMinutes: '122',
      amount: '61890 EGP',
    },
  ];

  creationDate = '01/12/2024';
  creationTime = '04:30 PM';
  creator = 'abdul_rahim_ismail_nasef';
}
