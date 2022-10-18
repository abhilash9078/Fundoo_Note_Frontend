import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { IconsComponent } from './components/icons/icons.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { AuthGuardServiceService } from './service/Authservice/auth-guard-service.service';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    DisplaynoteComponent,
    GetallnoteComponent,
    IconsComponent,
    UpdatenoteComponent,
    TrashnoteComponent,
    ArchivenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [
    AuthGuardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
