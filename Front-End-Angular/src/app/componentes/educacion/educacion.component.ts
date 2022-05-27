import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from '../../data/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista: Educacion[] = [];
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  educacionForm: FormGroup;

  constructor(
    private datosPortfolio:PortfolioService,
    private authService:AuthService,
    private formBuilder: FormBuilder) {
      this.educacionForm = this.formBuilder.group({
        id: [''],
        instituto: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        periodo: ['', [Validators.required]],
        urlLogo: ['', [Validators.required]]
      })
     }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosEducacion().subscribe((data: Educacion[]) => this.educacionLista = data);
  }

  cargarForm(educacion: Educacion) {
    this.educacionForm.setValue({
      id: educacion.id,
      instituto: educacion.instituto,
      titulo: educacion.titulo,
      periodo: educacion.periodo,
      urlLogo: educacion.urlLogo
    });
  }

  limpiarForm() {
    this.educacionForm.setValue({
      id: '',
      instituto: '',
      titulo: '',
      periodo: '',
      urlLogo: ''
    });
  }

  onSubmit() {
    if (this.educacionForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevaEducacion(this.educacionForm.value).subscribe((nuevaEducacion: Educacion)=> {
        this.educacionLista.push(nuevaEducacion);
      });
    } 
    else {
      this.datosPortfolio.modificarEducacion(this.educacionForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

  abrirModalNuevo() {
    this.tituloModal = "Nueva Educación";
    this.limpiarForm();
    this.modal = true;
  }

  abrirModalEditar(index: number) {
    this.tituloModal = "Editar Educación";
    this.limpiarForm();
    this.modal = true;
    let educacion: Educacion = this.educacionLista[index];
    this.cargarForm(educacion);
  }

  abrirModalEliminar(index: number) {
    if (confirm("¿Está seguro que desea borrar el registro?")) {
      let educacion: Educacion = this.educacionLista[index];
      this.datosPortfolio.borrarEducacion(educacion.id).subscribe(()=> {
        this.recargarDatos();
      }); 
    }
  }

  cerrarModal() {
    this.modal = false;
  }

}
