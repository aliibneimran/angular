import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { WorldComponent } from './world/world.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'single', component: SingleComponent},
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'world', component: WorldComponent},
  { path: 'sports', component: SportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
