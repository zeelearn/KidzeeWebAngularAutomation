import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { LegancyComponent } from './components/legancy/legancy.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { FranchiseOpportunityComponent } from './components/franchise-opportunity/franchise-opportunity.component';
import { BlogComponent } from './components/blog/blog/blog.component';
import { PentemindComponent } from './components/pentemind/pentemind.component';
import { PlayGroupComponent } from './components/play-group/play-group.component';
import { NurseryComponent } from './components/nursery/nursery.component';
import { KindergartenComponent } from './components/kindergarten/kindergarten.component';
import { TeacherTrainingComponent } from './components/teacher-training/teacher-training.component';
import { DayCareComponent } from './components/day-care/day-care.component';
import { OurApproachComponent } from './components/our-approach/our-approach.component';
import { VisionComponent } from './components/vision/vision.component';
import { AwardsAndRecognitionComponent } from './components/awards-and-recognition/awards-and-recognition.component';
import { LocateUsComponent } from './components/locate-us/locate-us.component';
import { OurPresenceComponent } from './components/our-presence/our-presence.component';
import { PreschoolInAgartalaComponent } from './components/preschool-in-agartala/preschool-in-agartala.component';
import { PartnerLandingComponent } from './components/partner-landing/partner-landing.component';
import { AdmissionThankyouComponent } from './components/thank-you/admission-thankyou/admission-thankyou.component';
import { FranchiseThankyouComponent } from './components/thank-you/franchise-thankyou/franchise-thankyou.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { InnewsComponent } from './components/innews/innews.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:name', component: BlogComponent },
  { path: 'blog', component: BlogDetailsComponent },
  { path: 'innews', component: InnewsComponent },
  { path: 'preschool-in/:city', component: PreschoolInAgartalaComponent },
  { path: 'admission/thankyou', component: AdmissionThankyouComponent },
  { path: 'franchise/thankyou', component: FranchiseThankyouComponent },
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: 'pentemind', component: PentemindComponent },
      { path: 'legacy', component: LegancyComponent },
      { path: 'admissions', component: AdmissionsComponent },
      { path: 'partner-with-kidzee', component: FranchiseOpportunityComponent },
      { path: 'playgroup', component: PlayGroupComponent },
      { path: 'nursery', component: NurseryComponent },
      { path: 'kindergarten', component: KindergartenComponent },
      {
        path: 'teacher-training-programme',
        component: TeacherTrainingComponent,
      },
      { path: 'Daycare', component: DayCareComponent },
      { path: 'our-approach', component: OurApproachComponent },
      { path: 'vision', component: VisionComponent },
      {
        path: 'awards-and-recognition',
        component: AwardsAndRecognitionComponent,
      },
      { path: 'locateUs', component: LocateUsComponent },
      { path: 'our-presence', component: OurPresenceComponent },
      {
        path: 'best-preschool/:partnerLanding',
        component: PartnerLandingComponent,
      },
      {path:'PrivacyPolicy', component:PrivacyPolicyComponent}
    ],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
