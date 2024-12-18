import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing }  from "../types/types";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
    listing: Listing|undefined;;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private listingService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
    this.listingService.getListingById(id) 
        .subscribe(listing => this.listing = listing);
    }
    console.log(this.listing);
    if (!this.listing) {
        console.log('Listing not found!');
    }
  }

    onSubmit({ name, description, price }: { name: string; description: string; price: number }): void { 
        if (this.listing) { this.listingService.editListing(this.listing.id, name, description, price)
            .subscribe(() => { this.router.navigateByUrl("/my-listings"); }); 
        } else { 
            console.error('Listing is undefined');
        } 
    }
}
