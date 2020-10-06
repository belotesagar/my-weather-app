import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: "default",
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
