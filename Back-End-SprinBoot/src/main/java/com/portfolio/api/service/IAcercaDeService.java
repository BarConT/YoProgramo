package com.portfolio.api.service;

import com.portfolio.api.model.AcercaDe;
import java.util.List;

/**
 *
 * @author BarConT
 */
public interface IAcercaDeService {
    
    public List <AcercaDe> obtenerAcercaDe ();
    public AcercaDe crearAcercaDe (AcercaDe acercaDe);
    public void borrarAcercaDe (Long id);
    public AcercaDe obtenerAcercaDe (Long id);
    public void modificarAcercaDe (AcercaDe acercaDe);
}
