import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { TravelComponent } from './travel/travel.component';
import { TechComponent } from './tech/tech.component';
import { FashionComponent } from './fashion/fashion.component';
import { SportComponent } from './sport/sport.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldComponent,
    TravelComponent,
    TechComponent,
    FashionComponent,
    SportComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
