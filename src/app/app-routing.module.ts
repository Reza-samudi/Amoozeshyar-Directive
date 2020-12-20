import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersGuard } from './users.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegistrationComponent },
  {path: '' , redirectTo:'/login',pathMatch:'full'},
  {canLoad:[UsersGuard], path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path: '**' , redirectTo:'/login'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
