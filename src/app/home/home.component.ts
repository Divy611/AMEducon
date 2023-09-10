import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
//import { Aos } from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      once: false,
      //offset: 120,
    });
    document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => Aos.refresh()));
  }
}
