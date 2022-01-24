import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavigatorComponent } from './core/components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    FooterComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
