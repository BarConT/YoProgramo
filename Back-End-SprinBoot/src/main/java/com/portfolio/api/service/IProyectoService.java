package com.portfolio.api.service;

import com.portfolio.api.model.Proyecto;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IProyectoService {
    
    public List <Proyecto> obtenerProyectos ();
    public Proyecto crearProyecto (Proyecto proyecto);
    public void borrarProyecto (Long id);
    public Proyecto obtenerProyecto (Long id);
    public void modificarProyecto (Proyecto proyecto);

}
