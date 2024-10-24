import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { MasterLayoutComponent } from './components/layouts/master-layout/master-layout/master-layout.component';
import { first } from 'rxjs';

export const routes: Routes = [


  {path:'',component:MasterLayoutComponent,
    loadChildren:()=>import('./app.routes2').then((c)=>c.routes2)
  },

  {path:'ali',component:FirstComponent,
    children:
    [
      {path:'c',component:SecondComponent }
    ]

  },

];
