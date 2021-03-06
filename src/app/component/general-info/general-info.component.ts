import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  constructor(public authService: AuthService) {}
  selectedTab;
  menuOptions = [
    {
      path: '/generalInfo/personalIDs',
      name: 'Personal IDs'
    },
    {
      path: '/generalInfo/memberships',
      name: 'memberships'
    },
    {
      path: '/generalInfo/loanobjects',
      name: 'Loan objects'
    },
    {
      path: '/generalInfo/travelinfo',
      name: 'travel info'
    },
    {
      path: '/generalInfo/documents',
      name: 'documents'
    },
    {
      path: '/generalInfo/leisureactivities',
      name: 'leisure activities'
    },
    {
      path: '/generalInfo/communications',
      name: 'communications'
    },
    {
      path: '/generalInfo/address',
      name: 'Address'
    }
  ];
  ngOnInit() {
    this.menuOptions = this.menuOptions.reverse();
  }

  tabOptionClick(tabOption) {}
}
