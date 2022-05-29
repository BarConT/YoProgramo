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
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String instituto;
    private String titulo;
    private String periodo;

    public Educacion() {
    }

    public Educacion(String instituto, String titulo, String periodo) {
        this.instituto = instituto;
        this.titulo = titulo;
        this.periodo = periodo;
    }
    
    
}
