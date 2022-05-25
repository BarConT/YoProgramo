import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista: any;
  isUserLogged: boolean = false;

  constructor(
    private datosPortfolio:PortfolioService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerDatos().subscribe(data => this.educacionLista=data.educacion);
  }

}
