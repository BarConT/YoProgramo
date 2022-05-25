import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosLista: any;
  isUserLogged: boolean = false;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerDatos().subscribe(data => this.proyectosLista = data.proyectos);
  }

}
