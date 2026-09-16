import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of, switchMap, tap } from 'rxjs';
import { ApicallService } from 'src/app/services/apicall.service';
import { HomeSeoService } from 'src/app/services/homeseo.service';
import { ProjectSeoService } from 'src/app/services/projectseo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  project$: Observable<any> | undefined;
  subscriptionnav!: Subscription;
  testimonydata: any;
  constructor(
    private route: ActivatedRoute,
    private seoService: HomeSeoService,
    private projectService: ProjectSeoService,
    private apiService: ApicallService
  ) {
    //
  }
  ngOnInit(): void {
    this.subscriptionnav = this.projectService
      .onseoMessage()
      .subscribe((message) => {
        if (message) {
          this.testimonydata = message.text;
        }
      });
  }
}
