import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { SharedService } from './services/shared.service';
import { UserServiceClient } from './services/user.service.client';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/buyer/login/login.component';
import { MyaccountComponent } from './components/buyer/myaccount/myaccount.component';
import { RegisterComponent } from './components/buyer/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LivingRoomComponent } from './components/showroom/living-room/living-room.component';
import { BedroomComponent } from './components/showroom/bedroom/bedroom.component';
import { BathroomComponent } from './components/showroom/bathroom/bathroom.component';
import { OutdoorRoomsComponent } from './components/showroom/outdoor-rooms/outdoor-rooms.component';
import {WishlistServiceClient} from './services/wishlist.service.client';
import { AboutUsComponent } from './components/company/about-us/about-us.component';
import { VisitComponent } from './components/visit/visit.component';
import { DiySComponent } from './components/diy-s/diy-s.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShowroomComponent,
    BuyerComponent,
    CartComponent,
    LoginComponent,
    MyaccountComponent,
    RegisterComponent,
    WishlistComponent,
    LivingRoomComponent,
    BedroomComponent,
    BathroomComponent,
    OutdoorRoomsComponent,
    AboutUsComponent,
    VisitComponent,
    DiySComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAj1T9BN60_cl5m6y3jmHvmIiig0lCWgvo'
    })
  ],
  providers: [UserServiceClient, WishlistServiceClient, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
