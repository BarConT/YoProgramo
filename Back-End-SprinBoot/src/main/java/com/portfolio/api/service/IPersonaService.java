package com.portfolio.api.service;

import com.portfolio.api.model.Persona;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IPersonaService {
    
    public List <Persona> verPersonas ();
    public void crearPersona (Persona pers);
    public void borrarPersona (Long id);
    public Persona buscarPersona (Long id);
    
}