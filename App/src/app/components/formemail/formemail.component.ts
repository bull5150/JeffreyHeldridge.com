import { Component, OnInit } from '@angular/core';
import { EmailapiService } from 'src/app/services/emailapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { email } from 'src/app/models/email_models';

@Component({
  selector: 'formemail',
  templateUrl: './formemail.component.html',
  styleUrls: ['./formemail.component.css']
})
export class FormemailComponent implements OnInit {

  public emailForm: FormGroup;
  public postForm: email;
  public alert: boolean;

  constructor(private emailService: EmailapiService, private formBuilder: FormBuilder) { }

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
