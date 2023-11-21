import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommentComponent } from './comment/comment.component';
import { WorldComponent } from './world/world.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ArchiveComponent } from './archive/archive.component';
import { NationalComponent } from './national/national.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FashionComponent } from './fashion/fashion.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingleComponent,
    SidebarComponent,
    CommentComponent,
    WorldComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
    SportsComponent,
    SliderComponent,
    ProductDetailsComponent,
    CommentComponent,
    SearchFormComponent,
    ArchiveComponent,
    NationalComponent,
    BusinessComponent,
    TechComponent,
    HealthComponent,
    EntertainmentComponent,
    FashionComponent,
    TravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
