package com.portfolio.api.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author BarConT
 */
@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String nombre;
    private String apellido;
    private String correo;
    private String profesion;

    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String correo, String profesion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.profesion = profesion;
    }
   
}
