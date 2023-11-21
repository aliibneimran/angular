import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { WorldComponent } from './world/world.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'single/:id', component: SingleComponent},
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'world', component: WorldComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'product', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: 'https://aii.wdpf55.com/angular/'}]
})
export class AppRoutingModule { }
