package com.portfolio.api.service;

import com.portfolio.api.model.Experiencia;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IExperienciaService {
    
    public List <Experiencia> obtenerExperiencia ();
    public Experiencia crearExperiencia (Experiencia experiencia);
    public void borrarExperiencia (Long id);
    public Experiencia obtenerExperiencia (Long id);
    public void modificarExperiencia (Experiencia experiencia);
}
