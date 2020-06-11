import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShortenerFormComponent } from './shortener-form/shortener-form.component';
import { HeaderComponent } from './header/header.component';
import { TopLinksComponent } from './top-links/top-links.component';
import { HitsComponent } from './hits/hits.component';
import { FoaterComponent } from './foater/foater.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ShortenerFormComponent,
    HeaderComponent,
    TopLinksComponent,
    HitsComponent,
    FoaterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
