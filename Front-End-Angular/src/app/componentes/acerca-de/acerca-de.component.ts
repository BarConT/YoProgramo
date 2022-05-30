import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { AcercaDe } from 'src/app/data/AcercaDe';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaDeLista: AcercaDe[] = [];
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  acercaDeForm: FormGroup;

  constructor(private datosPortfolio:AcercaDeService,
              private authService:AuthService,
              private formBuilder: FormBuilder) { 
                this.acercaDeForm = this.formBuilder.group({
                  id: [''],
                  descripcion: ['', [Validators.required]]  
                })
              }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosAcercaDe().subscribe((data: AcercaDe[]) => this.acercaDeLista = data);
  }

  cargarForm(acercaDe: AcercaDe) {
    this.acercaDeForm.setValue({
      id: acercaDe.id,
      descripcion: acercaDe.descripcion
    });
  }

  limpiarForm() {
    this.acercaDeForm.setValue({
      id: '',
      descripcion: ''
    });
  }

  onSubmit() {
    if (this.acercaDeForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevoAcercaDe(this.acercaDeForm.value).subscribe((nuevoAcercaDe: AcercaDe)=> {
        this.acercaDeLista.push(nuevoAcercaDe);
      });
    } 
    else {
      this.datosPortfolio.modificarAcercaDe(this.acercaDeForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

  abrirModalNuevo() {
    this.tituloModal = "Nuevo Acerca De";
    this.limpiarForm();
    this.modal = true;
  }

  abrirModalEditar(index: number) {
    this.tituloModal = "Editar Acerca De";
    this.limpiarForm();
    this.modal = true;
    let acercaDe: AcercaDe = this.acercaDeLista[index];
    this.cargarForm(acercaDe);
  }

  abrirModalEliminar(index: number) {
    if (confirm("¿Está seguro que desea borrar el registro?")) {
      let acercaDe: AcercaDe = this.acercaDeLista[index];
      this.datosPortfolio.borrarAcercaDe(acercaDe.id).subscribe(()=> {
        this.recargarDatos();
      }); 
    }
  }

  cerrarModal() {
    this.modal = false;
  }

}
