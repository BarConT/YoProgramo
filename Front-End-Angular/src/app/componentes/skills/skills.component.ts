import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { Tecnologia } from '../../data/Tecnologia';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  tecnologiasLista: any;
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  tecnologiaForm: FormGroup;

  constructor(private datosPortfolio:TecnologiaService,
              private authService:AuthService,
              private formBuilder: FormBuilder) { 
                this.tecnologiaForm = this.formBuilder.group({
                  id: [''],
                  nombre: ['', [Validators.required, Validators.maxLength(100)]],
                  nivel: ['', [Validators.required]]
                })
              }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();  
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosTecnologia().subscribe((data: Tecnologia[]) => this.tecnologiasLista = data);
  }

  cargarForm(tecnologia: Tecnologia) {
    this.tecnologiaForm.setValue({
      id: tecnologia.id,
      nombre: tecnologia.nombre,
      nivel: tecnologia.nivel
    });
  }

  limpiarForm() {
    this.tecnologiaForm.setValue({
      id: '',
      nombre: '',
      nivel: 0,
    });
  }

  onSubmit() {
    if (this.tecnologiaForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevaTecnologia(this.tecnologiaForm.value).subscribe((nuevaTecnologia: Tecnologia)=> {
        this.tecnologiasLista.push(nuevaTecnologia);
      });
    } 
    else {
      this.datosPortfolio.modificarTecnologia(this.tecnologiaForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

  abrirModalNuevo() {
    this.tituloModal = "Nueva Tecnología";
    this.limpiarForm();
    this.modal = true;
  }

  abrirModalEditar(index: number) {
    this.tituloModal = "Editar Tecnología";
    this.limpiarForm();
    this.modal = true;
    let tecnologia: Tecnologia = this.tecnologiasLista[index];
    this.cargarForm(tecnologia);
  }

  abrirModalEliminar(index: number) {
    if (confirm("¿Está seguro que desea borrar el registro?")) {
      let tecnologia: Tecnologia = this.tecnologiasLista[index];
      this.datosPortfolio.borrarTecnologia(tecnologia.id).subscribe(()=> {
        this.recargarDatos();
      }); 
    }
  }

  cerrarModal() {
    this.modal = false;
  }

  bajar(index: number) {

    if (index<this.tecnologiasLista.length-1)  {
      let tecnologia1: Tecnologia = this.tecnologiasLista[index];
      let tecnologia2: Tecnologia = this.tecnologiasLista[index+1];
  
      [tecnologia1.nombre, tecnologia2.nombre] = [tecnologia2.nombre, tecnologia1.nombre];
      [tecnologia1.nivel, tecnologia2.nivel] = [tecnologia2.nivel, tecnologia1.nivel];
      
      this.datosPortfolio.modificarTecnologia(tecnologia1).subscribe();
      this.datosPortfolio.modificarTecnologia(tecnologia2).subscribe();
  
    }

  }

  subir(index: number) {

    if (index>0) {
      let tecnologia1: Tecnologia = this.tecnologiasLista[index];
      let tecnologia2: Tecnologia = this.tecnologiasLista[index-1];

      [tecnologia1.nombre, tecnologia2.nombre] = [tecnologia2.nombre, tecnologia1.nombre];
      [tecnologia1.nivel, tecnologia2.nivel] = [tecnologia2.nivel, tecnologia1.nivel];
      

      this.datosPortfolio.modificarTecnologia(tecnologia1).subscribe();
      this.datosPortfolio.modificarTecnologia(tecnologia2).subscribe();
    }  

  }

}
