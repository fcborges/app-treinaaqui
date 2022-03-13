import { EnemComponent } from './enem/enem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ProfissaoMedicinaComponent } from './profissao-medicina/profissao-medicina.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'profissao-medicina', component: ProfissaoMedicinaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'enem', component: EnemComponent },
  { path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
