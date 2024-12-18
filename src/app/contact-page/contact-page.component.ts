import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types/types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = "";
  message: string = "";
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id){
    this.listingService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `hi, I'm interested in your ${this.listing!.name.toLowerCase()}!`
      });
    }  
    else { console.error('Listing ID is null');}
  }

  sendMessage(): void {
    alert("Your message has been sent!");
    this.router.navigateByUrl("/listings");
  }
}
