import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/data/Persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  personaLista: Persona[] = [];
  isUserLogged: boolean = false;
  modal: boolean = false;
  tituloModal: string = "";
  personaForm: FormGroup;

  constructor(private datosPortfolio:PortfolioService,
              private authService:AuthService,
              private formBuilder: FormBuilder) {
                this.personaForm = this.formBuilder.group({
                  id: [''],
                  nombre: ['', [Validators.required]],
                  apellido: ['', [Validators.required]],
                  correo: ['', [Validators.required]],
                  profesion: ['', [Validators.required]],
                  urlFoto: ['', [Validators.required]]
                })
               }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.recargarDatos();
  }

  recargarDatos() {
    this.datosPortfolio.obtenerDatosPersona().subscribe((data: Persona[]) => this.personaLista = data )
  }

  cargarForm(persona: Persona) {
    this.personaForm.setValue({
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      correo: persona.correo,
      profesion: persona.profesion,
      urlFoto: persona.urlFoto
    });
  }

  limpiarForm() {
    this.personaForm.setValue({
      id: '',
      nombre: '',
      apellido: '',
      correo: '',
      profesion: '',
      urlFoto: ''
    });
  }

  onSubmit() {
    if (this.personaForm.get('id')?.value == '') {
      this.datosPortfolio.guardarNuevaPersona(this.personaForm.value).subscribe((nuevaPersona: Persona)=> {
        this.personaLista.push(nuevaPersona);
      });
    } 
    else {
      this.datosPortfolio.modificarPersona(this.personaForm.value).subscribe(()=> {
        this.recargarDatos();
      });
    }
    this.cerrarModal();
  }

    abrirModalNuevo() {
      this.tituloModal = "Nueva Persona";
      this.limpiarForm();
      this.modal = true;
    }
  
    abrirModalEditar(index: number) {
      console.log(index)
      this.tituloModal = "Editar Persona";
      this.limpiarForm();
      this.modal = true;
      let persona: Persona = this.personaLista[index];
      this.cargarForm(persona);
    }
  
    abrirModalEliminar(index: number) {
      if (confirm("¿Está seguro que desea borrar el registro?")) {
        let persona: Persona = this.personaLista[index];
        this.datosPortfolio.borrarPersona(persona.id).subscribe(()=> {
          this.recargarDatos();
        }); 
      }
    }
  
    cerrarModal() {
      this.modal = false;
    }

}
