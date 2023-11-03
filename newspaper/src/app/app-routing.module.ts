import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { TravelComponent } from './travel/travel.component';
import { TechComponent } from './tech/tech.component';
import { FashionComponent } from './fashion/fashion.component';
import { SportComponent } from './sport/sport.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'world', component: WorldComponent},
  { path: 'travel', component: TravelComponent},
  { path: 'tech', component: TechComponent},
  { path: 'fashion', component: FashionComponent},
  { path: 'sport', component: SportComponent},
  { path: 'health', component: HealthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
