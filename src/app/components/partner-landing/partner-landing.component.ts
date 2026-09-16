import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-partner-landing',
  templateUrl: './partner-landing.component.html',
  styleUrls: ['./partner-landing.component.css']
})
export class PartnerLandingComponent implements OnInit {
  headerTitle:any=""
constructor(private activeRoute:ActivatedRoute) {
  
}
  ngOnInit(): void {
    let params = this.activeRoute.snapshot.paramMap.get('partnerLanding'); 
    this.headerTitle = params
  }

}
