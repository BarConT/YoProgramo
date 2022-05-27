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
public class AcercaDe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String descripcion;

    public AcercaDe() {
    }

    public AcercaDe(Long id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }
    
}
