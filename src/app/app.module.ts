import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AsideComponent } from './admin/aside/aside.component';
import { SectionComponent } from './admin/section/section.component';
import { FooterComponent } from './admin/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    SectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
