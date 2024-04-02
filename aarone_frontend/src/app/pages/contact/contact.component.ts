import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  banner = {
    image: "assets/images/background/bg-map.png",
    title: "Putting a plan to action, to assure your satisfaction!",
    page: "Contact Us"
  }

  formValidators = {
    query: [Validators.required, Validators.maxLength(500)],
    name: [Validators.required, Validators.maxLength(100)],
    email: [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z]+')],
  }

  contactUsForm: FormGroup = this.formBuilder.group({
    name: ['', this.formValidators.name],
    email: ['', this.formValidators.email],
    query: ['', this.formValidators.query]
  })
  constructor(private router: Router, private contactService: ContactService, private formBuilder: FormBuilder) {}

  onSubmit(): boolean {
    let contactUs = this.contactUsForm.getRawValue();
    console.log('Form raw values', contactUs);

    if(this.contactUsForm.invalid) {
      console.info('Form is invalid!')
      return false
    }
    this.contactService.create(contactUs).subscribe(
      response => {
        console.log('contact us created: ', contactUs)
        this.router.navigate(['thank-you']);
      },
      error => {
        console.error('contact us creation error: ', error)
      }
    )
    return false
  }

}
