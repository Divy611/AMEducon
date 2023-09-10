import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      once: false,
      //offset: 120,
    });
    document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => Aos.refresh()));
  }
}
