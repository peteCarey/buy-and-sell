import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import {Listing } from "../types/types"

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingsId: string): void{
    alert(`Deleting yoiur listing with id ${listingsId}`);

  }

}
