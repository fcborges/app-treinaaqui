import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfissaoMedicinaComponent } from './profissao-medicina/profissao-medicina.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { EnemComponent } from './enem/enem.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ProfissaoMedicinaComponent,
    HomeComponent,
    CursosComponent,
    EnemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuPrincipalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
