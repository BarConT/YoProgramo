import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Proyecto } from '../../data/Proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosLista: Proyecto[] = [];
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  proyectosForm: FormGroup;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService,
              private formBuilder: FormBuilder) {
                this.proyectosForm = this.formBuilder.group({
                  id: [''],
                  nombre: ['', [Validators.required]],
                  descripcion: ['', [Validators.required]],
                  fecha: ['', [Validators.required]],
                  link: ['', [Validators.required]]
                })
               }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosProyectos().subscribe((data: Proyecto[]) => this.proyectosLista = data);
  }

  cargarForm(proyecto: Proyecto) {
    this.proyectosForm.setValue({
      id: proyecto.id,
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      fecha: proyecto.fecha,
      link: proyecto.link
    });
  }

  limpiarForm() {
    this.proyectosForm.setValue({
      id: '',
      nombre: '',
      descripcion: '',
      fecha: '',
      link: ''
    });
  }

  onSubmit() {
    if (this.proyectosForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevoProyecto(this.proyectosForm.value).subscribe((nuevoProyecto: Proyecto)=> {
        this.proyectosLista.push(nuevoProyecto);
      });
    } 
    else {
      this.datosPortfolio.modificarProyecto(this.proyectosForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

  abrirModalNuevo() {
    this.tituloModal = "Nuevo Proyecto";
    this.limpiarForm();
    this.modal = true;
  }

  abrirModalEditar(index: number) {
    this.tituloModal = "Editar Proyecto";
    this.limpiarForm();
    this.modal = true;
    let proyecto: Proyecto = this.proyectosLista[index];
    this.cargarForm(proyecto);
  }

  abrirModalEliminar(index: number) {
    if (confirm("¿Está seguro que desea borrar el registro?")) {
      let proyecto: Proyecto = this.proyectosLista[index];
      this.datosPortfolio.borrarProyecto(proyecto.id).subscribe(()=> {
        this.recargarDatos();
      }); 
    }
  }

  cerrarModal() {
    this.modal = false;
  }

  // get Nombre() {
  //   return this.proyectosForm.get('nombre');
  // }

}
