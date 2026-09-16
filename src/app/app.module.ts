import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LegancyComponent } from './components/legancy/legancy.component';
import { NewsComponent } from './components/news/news.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { KidzeePreeSchoolComponent } from './components/kidzee-pree-school/kidzee-pree-school.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { FranchiseOpportunityComponent } from './components/franchise-opportunity/franchise-opportunity.component';
import { BlogComponent } from './components/blog/blog/blog.component';
import { AllBlogComponent } from './components/blog/all-blog/all-blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { StaticHeaderComponent } from './components/common/static-header/static-header.component';
import { SubMenuComponent } from './components/common/sub-menu/sub-menu.component';
import { PentemindComponent } from './components/pentemind/pentemind.component';
import { PlayGroupComponent } from './components/play-group/play-group.component';
import { NurseryComponent } from './components/nursery/nursery.component';
import { KindergartenComponent } from './components/kindergarten/kindergarten.component';
import { TeacherTrainingComponent } from './components/teacher-training/teacher-training.component';
import { DayCareComponent } from './components/day-care/day-care.component';
import { LocateUsComponent } from './components/locate-us/locate-us.component';
import { OurApproachComponent } from './components/our-approach/our-approach.component';
import { VisionComponent } from './components/vision/vision.component';
import { AwardsAndRecognitionComponent } from './components/awards-and-recognition/awards-and-recognition.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { AdmissionsFormComponent } from './components/admissions-form/admissions-form.component';
import { OurPresenceComponent } from './components/our-presence/our-presence.component';
import { PreschoolInAgartalaComponent } from './components/preschool-in-agartala/preschool-in-agartala.component';
import { CentersInAgartalaComponent } from './components/centers-in-agartala/centers-in-agartala.component';
import { PartnerLandingComponent } from './components/partner-landing/partner-landing.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonHeaderComponent } from './components/common/common-header/common-header.component';
import { AdmissionThankyouComponent } from './components/thank-you/admission-thankyou/admission-thankyou.component';
import { FranchiseThankyouComponent } from './components/thank-you/franchise-thankyou/franchise-thankyou.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InnewsComponent } from './components/innews/innews.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import {MatExpansionModule} from '@angular/material/expansion';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    HeaderComponent,
    FooterComponent,
    LegancyComponent,
    NewsComponent,
    FaqsComponent,
    AboutUsComponent,
    KidzeePreeSchoolComponent,
    TestimonialComponent,
    AdmissionsComponent,
    FranchiseOpportunityComponent,
    BlogComponent,
    AllBlogComponent,
    BlogDetailsComponent,
    StaticHeaderComponent,
    SubMenuComponent,
    PentemindComponent,
    PlayGroupComponent,
    NurseryComponent,
    KindergartenComponent,
    TeacherTrainingComponent,
    DayCareComponent,
    LocateUsComponent,
    OurApproachComponent,
    VisionComponent,
    AwardsAndRecognitionComponent,
    ProgrammesComponent,
    AdmissionsFormComponent,
    OurPresenceComponent,
    PreschoolInAgartalaComponent,
    CentersInAgartalaComponent,
    PartnerLandingComponent,
    CommonHeaderComponent,
    FranchiseThankyouComponent,
    AdmissionThankyouComponent,
    PagenotfoundComponent,
    InnewsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatExpansionModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

