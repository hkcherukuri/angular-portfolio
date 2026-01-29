import { Component, AfterViewInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements AfterViewInit {

  ngAfterViewInit() {
    const form = document.getElementById('contact-form') as HTMLFormElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      emailjs.sendForm(
        'service_qf38u48',
        'template_ut8w6db',
        form,
        'bJCGrfTrPS3h4rTkI'
      ).then(() => {
        alert('Message sent successfully!');
        form.reset();
      }).catch((error) => {
        alert('Failed to send message');
        console.error(error);
      });
    });
  }
}
