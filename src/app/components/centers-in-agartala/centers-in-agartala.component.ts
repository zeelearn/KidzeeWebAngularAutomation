import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-centers-in-agartala',
  templateUrl: './centers-in-agartala.component.html',
  styleUrls: ['./centers-in-agartala.component.css']
})
export class CentersInAgartalaComponent {
constructor(private router:Router){}
  gotTopage(val:any){
this.router.navigateByUrl(`best-preschool/${val}`)
  }
}
