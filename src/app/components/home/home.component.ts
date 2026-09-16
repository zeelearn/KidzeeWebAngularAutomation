import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { ApicallService } from 'src/app/services/apicall.service';
import { HomeSeoService } from 'src/app/services/homeseo.service';
import { ProjectSeoService } from 'src/app/services/projectseo.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  project$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private seoService: HomeSeoService,
    private projectService: ProjectSeoService,
    private apiService: ApicallService,
    private ngxSpinner: NgxSpinnerService

  ) {

  }
  ngOnInit(): void {
    this.getseo();
  }
  getseo() {
    let tbody = {
      slug: 'home',
      Projectid: environment.projectid,
    };
    this.apiService.getGetseo(tbody).subscribe((data: any) => {

      this.projectService.sendMessageblog(data?.data?.blog);
      this.projectService.sendMessageseo(data?.data?.testimony);
      this.projectService.sendMessageFaqs(data?.data?.faq);
      this.projectService.setmeta(data?.data);

    });
  }
}
