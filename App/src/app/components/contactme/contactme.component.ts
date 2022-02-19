import { Component, OnInit } from '@angular/core';
import { EmailapiService } from '../../services/emailapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { email } from '../../models/email_models';
import { NavigationEnd, Router } from '@angular/router';

declare let ga: Function;
@Component({
  selector: 'contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  public emailForm: FormGroup;
  public postForm: email;
  public alert: boolean;

  constructor(private emailService: EmailapiService, private formBuilder: FormBuilder, public router: Router) {
      ga('set', 'page', 'Contact');
      ga('send', 'pageview');
   }

  ngOnInit(): void {
    this.alert = false;
    this.createEmailForm();
  }

  createEmailForm(){
    this.emailForm = this.formBuilder.group({
      fname: "",
      lname: "",
      company: "",
      reason: "",
      email: "",
      reciept: "no",
      message: ""
    });
  }
  submit(){
    console.log(this.emailForm.value.email.indexOf("."));
    if(this.emailForm.value.email.indexOf("@") == -1 || this.emailForm.value.email.indexOf(".") == -1)
    {
      alert("Please enter a valid email address.");
      this.alert = true;
    }
    else
    {
      this.postForm = new email();
      this.postForm.fName = this.emailForm.value.fname;
      this.postForm.lName = this.emailForm.value.lname;
      this.postForm.fromEmail = this.emailForm.value.email;
      this.postForm.company = this.emailForm.value.company;
      this.postForm.reason = this.emailForm.value.reason;
      this.postForm.reciept = this.emailForm.value.reciept;
      this.postForm.message = this.emailForm.value.message;
      this.emailService.postEmail(this.postForm).subscribe(response =>{
        let stringResponse = response;
        if(stringResponse = "success")
        {
          alert("Thanks for taking the time, I have sent the email!")
          this.alert = false;
          this.createEmailForm();
        }
      });
    }
  }
  dismissAlert()
  {
    this.alert = false;
  }
}
