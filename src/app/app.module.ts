import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { FeaturedarticleComponent } from './featuredarticle/featuredarticle.component';
import { CheckComponent } from './check/check.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ComboComponent } from './combo/combo.component';
import { PlansComponent } from './plans/plans.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FirstComponent } from './first/first.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ComboAdminComponent } from './combo-admin/combo-admin.component';
import { ComboNewComponent } from './combo-new/combo-new.component';
import { ComboUpdateComponent } from './combo-update/combo-update.component';
import { ComboDeleteComponent } from './combo-delete/combo-delete.component';
import { ComboDetailComponent } from './combo-detail/combo-detail.component';
import { ComboeachComponent } from './comboeach/comboeach.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForgetpasswordComponent,
    ProductComponent,
    ProductdetailComponent,
    AboutusComponent,
    HomeComponent,
    CatalogComponent,
    ServicesComponent,
    TipsComponent,
    FeaturedarticleComponent,
    CheckComponent,
    CartComponent,
    ComboComponent,
    PlansComponent,
    OrderTrackingComponent,
    FirstComponent,
    SignupComponent,
    ProfileComponent,
    ComboAdminComponent,
    ComboNewComponent,
    ComboUpdateComponent,
    ComboDeleteComponent,
    ComboDetailComponent,
    ComboeachComponent,
    NotFoundComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
