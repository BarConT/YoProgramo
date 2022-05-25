import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaDe:any;
  isUserLogged: boolean = false;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();

    this.datosPortfolio.obtenerDatos().subscribe(data => this.acercaDe = data.acerca_de);
  }

}
