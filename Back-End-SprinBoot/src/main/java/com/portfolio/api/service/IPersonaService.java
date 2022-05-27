package com.portfolio.api.service;

import com.portfolio.api.model.Persona;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IPersonaService {
    
    public List <Persona> obtenerPersonas ();
    public Persona crearPersona (Persona persona);
    public void borrarPersona (Long id);
    public Persona obtenerPersona (Long id);
    public void modificarPersona (Persona persona);
    
}
