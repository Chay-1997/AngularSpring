import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path:"home",component:HomeComponent
},
{
  path:"",redirectTo:"home",pathMatch:"full"
},
{
  path:"all-customers",component:AllUsersComponent,
},
{
  path:"search",component:SearchComponent
},
{
  path:"register",component:RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
