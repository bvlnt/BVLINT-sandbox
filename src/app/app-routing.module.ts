import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FancymenuComponent } from './fancymenu/fancymenu.component';
import { HomeComponent } from './home/home.component';
import { MypinterestgalleryComponent } from './mypinterestgallery/mypinterestgallery.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { ThreejsrendererComponent } from './threejsrenderer/threejsrenderer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'fancymenu', component: FancymenuComponent },
  { path: 'threejs', component: ThreejsrendererComponent },
  { path: 'pinterest', component: MypinterestgalleryComponent },
  { path: 'pokemon', component: StarterPokemonComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
