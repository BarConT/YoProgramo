package com.portfolio.api.service;

import com.portfolio.api.model.Tecnologia;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface ITecnologiaService {
    
    public List <Tecnologia> obtenerTecnologia ();
    public Tecnologia crearTecnologia (Tecnologia tecnologia);
    public void borrarTecnologia (Long id);
    public Tecnologia obtenerTecnologia (Long id);
    public void modificarTecnologia (Tecnologia tecnologia);
}
