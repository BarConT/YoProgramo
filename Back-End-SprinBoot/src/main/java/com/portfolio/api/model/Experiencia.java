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
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String nombreEmpresa;
    private String fechaInicio;
    private String fechaFin;
    private String descripcion;
    private String tipoEmpleo;

    public Experiencia() {
    }

    public Experiencia(Long id, String nombreEmpresa, String fechaInicio, String fechaFin, String descripcion, String tipoEmpleo) {
        this.id = id;
        this.nombreEmpresa = nombreEmpresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.tipoEmpleo = tipoEmpleo;
    }
    
}
