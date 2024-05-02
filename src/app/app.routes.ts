// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
export const routes: Routes = [
      { path: '', component: HomeComponent }, 
      { path: 'term-of-use', component: TermOfUseComponent }, 
      { path: 'cookie-policy', component: CookiePolicyComponent }, 
      { path: 'privacy-policy', component: PrivacyPolicyComponent }, 
      { path: 'thankyou', component: ThankyouComponent }, 
      { path: 'contact-us', component: ContactUsComponent }



];
