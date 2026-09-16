import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-preschool-in-agartala',
  templateUrl: './preschool-in-agartala.component.html',
  styleUrls: ['./preschool-in-agartala.component.css']
})
export class PreschoolInAgartalaComponent implements OnInit{
  headerTitle="Preschool In Agartala"
  readMore:boolean=true
  readLess:boolean=false
  readMoreContent:boolean=false
constructor(private activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    let getRout = this.activeRoute.snapshot.paramMap.get('city');
  }

  showContent(val:any){
  if(val == 1){
    this.readMore=false
    this.readLess=true
    this.readMoreContent = true
  }
  if(val == 2){
    this.readMore=true
    this.readLess=false
    this.readMoreContent = false
  }
  }


}
