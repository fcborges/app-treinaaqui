import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {

  constructor( private router: Router ) {  }

  showFiller = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  medicinaProfissao() {
    this.router.navigate(['/profissao-medicina']);
  }

  enem() {
    this.router.navigate(['/enem']);
  }

  cursos() {
    this.router.navigate(['/cursos']);
  }

  home() {
    this.router.navigate(['/home']);
  }

}