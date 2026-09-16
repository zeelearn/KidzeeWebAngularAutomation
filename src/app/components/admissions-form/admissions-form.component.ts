import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admissions-form',
  templateUrl: './admissions-form.component.html',
  styleUrls: ['./admissions-form.component.css']
})
export class AdmissionsFormComponent implements OnInit {
  admissionForm: FormGroup;
  submitted = false;
  randomOtp: any;
  otpInput: boolean = false
  otp_msg: any;
  otp_ValidMsg: boolean = false
  otp_inValidMsg: boolean = false
  countryList: any;
  stateList: any;
  cityList: any;
  franchiseeList: any;
  studentID: any;
  program_id: any;
  gen_captcha: any;
  constructor(private fb: FormBuilder, private _servie: CommonService, private _activeRoute: ActivatedRoute, private router: Router) {
    this.admissionForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      pinCode: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      otp: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.selectCountry_State_cityList();
    this.generateCAPTCHA()
  }
  get f() {
    return this.admissionForm.controls;
  }

  validationForm() {
    this.submitted = true;
    if (this.admissionForm.invalid) {
      this.submit_captcha();
    } else {
      this.submit_captcha();
    }

  }

  submitForm() {
    if ((this.admissionForm.get('otp')?.value).length == 4) {
      if (this.randomOtp == this.admissionForm.get('otp')?.value) {
        let obj = {
          "City": this.admissionForm.get('city')?.value,
          "Country": this.admissionForm.get('country')?.value,
          "Email": this.admissionForm.get('email')?.value,
          "FirstName": this.admissionForm.get('fname')?.value,
          "HaveSpace": "",
          "LastName": this.admissionForm.get('lname')?.value,
          "Location": this.admissionForm.get('location')?.value,
          "LocationId": this.admissionForm.get('location')?.value,
          "Mobile": this.admissionForm.get('mobile')?.value,
          "PinCode": this.admissionForm.get('pinCode')?.value,
          "Product": "259262000004729208",
          "ProjectId": "1",
          "SoonStartsIn": "",
          "Source": "gclid",
          "gclid": "gclid",
          "State": this.admissionForm.get('state')?.value,
          "Type": "P",
          "WillingToInvest": "",
          "utm_compaign": "Website",
          "utm_medium": "Website",
          "utm_source": "Website",
          "utm_ad": "Website",
          "utm_Content": "Website",
          "utm_Term": "Website",
        }
        this._servie.saveData(obj).subscribe(
          res => {
            this.otp_ValidMsg = false;
            this.otp_inValidMsg = false;
            this.router.navigate(['admission/thankyou'])
            this.admissionForm.reset();
            this.submitted = false
          }
        )
        this.otp_ValidMsg = true;
        this.otp_inValidMsg = false;

      } else {
        alert('Please Enter Valid OTP')
        this.otp_inValidMsg = true;
        this.otp_ValidMsg = false;
      }
    }


  }



  getMobileNO() {
   if ((this.admissionForm.get('mobile')?.value).length == 10) {
      this.sendMobNO();
    }
  }

  sendMobNO() {
    this.randomOtp = Math.floor(1000 + Math.random() * 9000);
    let mobNo = {
      "MobileNo": this.admissionForm.get('mobile')?.value,
      "smsText": `Your Kidzee Verification code is : ${this.randomOtp}`,
      "sResponse": ""
    }
    this._servie.getOtp(mobNo).subscribe(
      res => {
        this.otpInput = true;
      }
    )
  }
  verifyOTP() {
    if ((this.admissionForm.get('otp')?.value).length == 4) {
      if (this.randomOtp == this.admissionForm.get('otp')?.value) {
        this.otp_ValidMsg = true;
        this.otp_inValidMsg = false;
      } else {
        this.otp_inValidMsg = true;
        this.otp_ValidMsg = false;
      }
    }
  }

  selectCountry_State_cityList() {
    this._servie.getState_countryList().subscribe(
      res => {
        this.countryList = res.root.subroot
      })
  }

  selectCountry(selectVal: any) {
    let country = selectVal.target.value
    let filterState = this.countryList.filter((x: any) => {
      return x.Country_Name == country
    })

    this.stateList = filterState[0].State
  }

  selectState(selectVal: any) {
    let state = selectVal.target.value
    let filterCity = this.stateList.filter((x: any) => {
      return x.State_Name == state
    })
    this.cityList = filterCity[0].City
  }

  selectCity(selectVal: any) {
    let city = selectVal.target.value
    let filterFranchisee = this.cityList.filter((x: any) => {
      return x.City_Name == city
    })
    this.franchiseeList = filterFranchisee[0].Franchisee
  }

  generateCAPTCHA() {
    "use strict";

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",

      CAPTCHALength = 6,

      randomCAPTCHA = "",

      i,

      randomNumber;

    for (i = 0; i < CAPTCHALength; i = i + 1) {

      randomNumber = Math.floor(Math.random() * chars.length);

      randomCAPTCHA += chars.substring(randomNumber, randomNumber + 1);
      this.gen_captcha = randomCAPTCHA;
      (document.getElementById("CAPTCHA") as HTMLInputElement).innerHTML = this.gen_captcha;
    }
  }


  // captcha function

  submit_captcha() {
    if ((document.getElementById("input") as HTMLInputElement).value === "") {

      (document.getElementById("wrong") as HTMLInputElement).style.display = "block";

      (document.getElementById("done") as HTMLInputElement).style.display = "none";

      (document.getElementById("wrong") as HTMLInputElement).innerHTML = "This Field Can't Be Empty";
      this.generateCAPTCHA();

    } else if ((document.getElementById("input") as HTMLInputElement).value !== this.gen_captcha) {
      (document.getElementById("done") as HTMLInputElement).style.display = "none";

      (document.getElementById("wrong") as HTMLInputElement).style.display = "block";

      (document.getElementById("wrong") as HTMLInputElement).innerHTML = "Try Again";


      (document.getElementById("input") as HTMLInputElement).value = "";

      this.generateCAPTCHA();

    } else {
      (document.getElementById("wrong") as HTMLInputElement).style.display = 'none'
      this.submitForm();
    }
  }
}
