import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LiftingGearComponent } from './lifting-gear/lifting-gear.component';
import { LiftingEquipmentComponent } from './lifting-equipment/lifting-equipment.component';
import { LiftingGearNewComponent } from './lifting-gear-new/lifting-gear-new.component';
import { LiftingGearUpdateComponent } from './lifting-gear-update/lifting-gear-update.component';
import { LiftingGearSearchComponent } from './lifting-gear-search/lifting-gear-search.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { DownloadDocumentComponent } from './download-document/download-document.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'gear', component: LiftingGearComponent},
  {path: 'equipment', component: LiftingEquipmentComponent},
  {path: 'gear-new', component: LiftingGearNewComponent},
  {path: 'gear-update', component: LiftingGearUpdateComponent},
  {path: 'gear-search', component:LiftingGearSearchComponent },
  {path: 'auth', component: AuthComponent },
  { path: 'authorized', redirectTo: "auth", pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path:'callback', component:CallbackComponent},
  {path:'custom', component:CustomTemplateComponent},
  {path: 'download', component: DownloadDocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
