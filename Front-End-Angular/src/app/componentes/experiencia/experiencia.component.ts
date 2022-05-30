import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from '../../data/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista: Experiencia[] = [];
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  experienciaForm: FormGroup;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService,
              private formBuilder: FormBuilder) {
                this.experienciaForm = this.formBuilder.group({
                  id: [''],
                  nombreEmpresa: ['', [Validators.required]],
                  fechaInicio: ['', [Validators.required]],
                  fechaFin: ['', [Validators.required]],
                  descripcion: ['', [Validators.required]],
                  tipoEmpleo: ['', [Validators.required]]
                })
               }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe((data: Experiencia[]) => this.experienciaLista = data);
  }

  cargarForm(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      id: experiencia.id,
      nombreEmpresa: experiencia.nombreEmpresa,
      fechaInicio: experiencia.fechaInicio,
      fechaFin: experiencia.fechaFin,
      descripcion: experiencia.descripcion,
      tipoEmpleo: experiencia.tipoEmpleo
    });
  }

  limpiarForm() {
    this.experienciaForm.setValue({
      id: '',
      nombreEmpresa: '',
      fechaInicio: '',
      fechaFin: '',
      descripcion: '',
      tipoEmpleo: ''
    });
  }

  onSubmit() {
    if (this.experienciaForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevaExperiencia(this.experienciaForm.value).subscribe((nuevaExperiencia: Experiencia)=> {
        this.experienciaLista.push(nuevaExperiencia);
      });
    } 
    else {
      this.datosPortfolio.modificarExperiencia(this.experienciaForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

  abrirModalNuevo() {
    this.tituloModal = "Nueva Experiencia";
    this.limpiarForm();
    this.modal = true;
  }

  abrirModalEditar(index: number) {
    this.tituloModal = "Editar Experiencia";
    this.limpiarForm();
    this.modal = true;
    let experiencia: Experiencia = this.experienciaLista[index];
    this.cargarForm(experiencia);
  }

  abrirModalEliminar(index: number) {
    if (confirm("¿Está seguro que desea borrar el registro?")) {
      let experiencia: Experiencia = this.experienciaLista[index];
      this.datosPortfolio.borrarExperiencia(experiencia.id).subscribe(()=> {
        this.recargarDatos();
      }); 
    }
  }

  cerrarModal() {
    this.modal = false;
  }

  bajar(index: number) {

    if (index<this.experienciaLista.length-1)  {
      let experiencia1: Experiencia = this.experienciaLista[index];
      let experiencia2: Experiencia = this.experienciaLista[index+1];
  
      [experiencia1.nombreEmpresa, experiencia2.nombreEmpresa] = [experiencia2.nombreEmpresa, experiencia1.nombreEmpresa];
      [experiencia1.fechaInicio, experiencia2.fechaInicio] = [experiencia2.fechaInicio, experiencia1.fechaInicio];
      [experiencia1.fechaFin, experiencia2.fechaFin] = [experiencia2.fechaFin, experiencia1.fechaFin];
      [experiencia1.descripcion, experiencia2.descripcion] = [experiencia2.descripcion, experiencia1.descripcion];
      [experiencia1.tipoEmpleo, experiencia2.tipoEmpleo] = [experiencia2.tipoEmpleo, experiencia1.tipoEmpleo];
  
      this.datosPortfolio.modificarExperiencia(experiencia1).subscribe();
      this.datosPortfolio.modificarExperiencia(experiencia2).subscribe();
  
    }

  }

  subir(index: number) {

    if (index>0) {
      let experiencia1: Experiencia = this.experienciaLista[index];
      let experiencia2: Experiencia = this.experienciaLista[index-1];

      [experiencia1.nombreEmpresa, experiencia2.nombreEmpresa] = [experiencia2.nombreEmpresa, experiencia1.nombreEmpresa];
      [experiencia1.fechaInicio, experiencia2.fechaInicio] = [experiencia2.fechaInicio, experiencia1.fechaInicio];
      [experiencia1.fechaFin, experiencia2.fechaFin] = [experiencia2.fechaFin, experiencia1.fechaFin];
      [experiencia1.descripcion, experiencia2.descripcion] = [experiencia2.descripcion, experiencia1.descripcion];
      [experiencia1.tipoEmpleo, experiencia2.tipoEmpleo] = [experiencia2.tipoEmpleo, experiencia1.tipoEmpleo];

      this.datosPortfolio.modificarExperiencia(experiencia1).subscribe();
      this.datosPortfolio.modificarExperiencia(experiencia2).subscribe();
    }  

  }

}
