import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './catedra3/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './catedra3/components/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  //{ path: 'posts', component: PostsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
