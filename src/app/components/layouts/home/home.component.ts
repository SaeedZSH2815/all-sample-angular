import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from '../../first/first.component';

import { AccordionCollapseComponent } from "../../accordion-collapse/accordion-collapse.component";
import { initFlowbite } from 'flowbite';


@Component({
  selector: '[app-home]',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, AccordionCollapseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    console.log('ds')
    initFlowbite();

  }
}
