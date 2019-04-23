import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LoginComponent} from './components/buyer/login/login.component';
import {RegisterComponent} from './components/buyer/register/register.component';
import {MyaccountComponent} from './components/buyer/myaccount/myaccount.component';
import {ShowroomComponent} from './components/showroom/showroom.component';
import {LivingRoomComponent} from './components/showroom/living-room/living-room.component';
import {BathroomComponent} from './components/showroom/bathroom/bathroom.component';
import {BedroomComponent} from './components/showroom/bedroom/bedroom.component';
import {OutdoorRoomsComponent} from './components/showroom/outdoor-rooms/outdoor-rooms.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {AuthGuard} from './services/auth-guard.service';
import {VisitComponent} from './components/visit/visit.component';
import {DiyListComponent} from './components/diy/diy-list/diy-list.component';
import {DiyEditComponent} from './components/diy/diy-edit/diy-edit.component';
import {DiyNewComponent} from './components/diy/diy-new/diy-new.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'MyAccount', component: MyaccountComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid', component: MyaccountComponent},
  {path: 'Showroom', component: ShowroomComponent},
  {path: 'LivingRoom', component: LivingRoomComponent},
  {path: 'Bathroom', component: BathroomComponent},
  {path: 'Bedroom', component: BedroomComponent},
  {path: 'Outdoor', component: OutdoorRoomsComponent},
  {path: 'wishList', component: WishlistComponent, canActivate: [AuthGuard]},
  // {path: 'user/:uid', component: WishlistComponent},
  {path: 'VisitUs', component: VisitComponent},
   {path: 'diy', component: DiyListComponent, canActivate: [AuthGuard]},
  // {path: 'diy-edit', component: DiyEditComponent, canActivate: [AuthGuard]},
   {path: 'diy-edit/:diyid', component: DiyEditComponent, canActivate: [AuthGuard]},
  {path: 'diy-new', component: DiyNewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
