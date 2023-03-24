import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackereffectComponent } from './hackereffect/hackereffect.component';
import { FancymenuComponent } from './fancymenu/fancymenu.component';
import { FooterComponent } from './footer/footer.component';
import { MypinterestgalleryComponent } from './mypinterestgallery/mypinterestgallery.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { MastheadVidComponent } from './masthead-vid/masthead-vid.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ThreejsrendererComponent } from './threejsrenderer/threejsrenderer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBs0FmL75Xgi6DbdZbotLbRorSJqGetssc',
  authDomain: 'bvlint-sandbox.firebaseapp.com',
  projectId: 'bvlint-sandbox',
  storageBucket: 'bvlint-sandbox.appspot.com',
  messagingSenderId: '834938609327',
  appId: '1:834938609327:web:22e4be4b0fa22ad176be5a',
  measurementId: 'G-9DMBHFG28W',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HackereffectComponent,
    FancymenuComponent,
    FooterComponent,
    MypinterestgalleryComponent,
    StarterPokemonComponent,
    MastheadVidComponent,
    ContactFormComponent,
    ThreejsrendererComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
