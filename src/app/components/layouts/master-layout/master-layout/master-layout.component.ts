import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HomeComponent],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {

}
