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
import { NationalComponent } from './national/national.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FashionComponent } from './fashion/fashion.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'single', component: SingleComponent},
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'world', component: WorldComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'product', component: ProductDetailsComponent},
  { path: 'national', component: NationalComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'tech', component: TechComponent},
  { path: 'health', component: HealthComponent},
  { path: 'entertain', component: EntertainmentComponent},
  { path: 'fashion', component: FashionComponent},
  { path: 'travel', component: TravelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: 'https://aii.wdpf55.com/angular/'}]
})
export class AppRoutingModule { }
