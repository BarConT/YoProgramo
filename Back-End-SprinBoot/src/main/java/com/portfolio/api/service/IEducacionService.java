package com.portfolio.api.service;

import com.portfolio.api.model.Educacion;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IEducacionService {
    
    public List <Educacion> obtenerEducacion ();
    public void crearEducacion (Educacion educacion);
    public void borrarEducacion (Long id);
    public Educacion obtenerEducacion (Long id);
    public void modificarEducacion (Educacion educacion);
}
