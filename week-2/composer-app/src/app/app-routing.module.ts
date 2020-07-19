import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [


  // create path to go to localhost:4200  ComposerList component, about component, and contact component.
  // {
  //   path: ' ',
  //   component: ComposerListComponent


  // },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent

  },
  {

    path: 'contact',
    component: ContactComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
