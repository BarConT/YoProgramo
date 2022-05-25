import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista: any;
  isUserLogged: boolean = false;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerDatos().subscribe(data => this.experienciaLista = data.experiencia);
  }

}
