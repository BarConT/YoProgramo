package com.portfolio.api.service;

import com.portfolio.api.model.AcercaDe;
import com.portfolio.api.repository.AcercaDeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service
public class AcercaDeService implements IAcercaDeService{

    @Autowired
    public AcercaDeRepository acercaDeRepository;
    
    @Override
    public List<AcercaDe> obtenerAcercaDe() {
        return acercaDeRepository.findAll();
    }

    @Override
    public AcercaDe crearAcercaDe(AcercaDe acercaDe) {
        return acercaDeRepository.save(acercaDe);
    }

    @Override
    public void borrarAcercaDe(Long id) {
        acercaDeRepository.deleteById(id);
    }

    @Override
    public AcercaDe obtenerAcercaDe(Long id) {
        return acercaDeRepository.findById(id).orElse(null);
    }

    @Override
    public void modificarAcercaDe(AcercaDe acercaDe) {
        acercaDeRepository.save(acercaDe);
    }
    
    
}
