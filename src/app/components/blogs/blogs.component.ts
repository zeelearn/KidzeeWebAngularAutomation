import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of, switchMap, tap } from 'rxjs';
import { ApicallService } from 'src/app/services/apicall.service';
import { HomeSeoService } from 'src/app/services/homeseo.service';
import { ProjectSeoService } from 'src/app/services/projectseo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  project$: Observable<any> | undefined;
  subscriptionnav!: Subscription;
  blogdata:any;
  spinner:boolean=true
  constructor(
    private route: ActivatedRoute,
    private seoService: HomeSeoService,
    private projectService: ProjectSeoService,
    private apiService: ApicallService
  ) {
  }
  ngOnInit(): void {
    this.subscriptionnav = this.projectService
      .onblogMessage()
      .subscribe((message) => {
        this.spinner=false
        if (message) {
      
          this.blogdata = message.text;
        }
      });
  }

}
