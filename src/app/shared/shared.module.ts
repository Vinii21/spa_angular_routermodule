import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomePagesComponent,
    AboutPageComponent,
    ContactPagesComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
