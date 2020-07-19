import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent } from './about/about.component';


// // routing to go to home component
// http://localhost:4200
// http://localhost:4200/home

// // routing to go to contact component
// http://localhost:4200/contact 

// // routing to go to about component
// http://localhost:4200/about


const routes: Routes = [
  {

    path: ' ',
    component: HomeComponent
  },

  { 
    path: 'home',        // requires a path to go to home component
    component: HomeComponent
  },
  {
    path: 'contact',   // requires a path to go to contact component
    component: ContactComponent
  },
  {
    path: 'about',    // requires a path to go to  About component 
    component: AboutComponent


  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
