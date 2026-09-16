import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-our-presence',
  templateUrl: './our-presence.component.html',
  styleUrls: ['./our-presence.component.css']
})
export class OurPresenceComponent {
  headerTitle = "Preschool In Agartala"

  constructor(private router: Router) { }
  goTocity(val: any) {
    this.router.navigateByUrl(`preschool-in/${val}`)
  }
}
