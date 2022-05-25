import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  tecnologiasLista: any;
  isUserLogged: boolean = false;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerDatos().subscribe(data => this.tecnologiasLista = data.tecnologias);
  }

}
