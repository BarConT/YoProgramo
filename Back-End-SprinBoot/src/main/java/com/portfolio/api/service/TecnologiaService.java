package com.portfolio.api.service;

import com.portfolio.api.model.Tecnologia;
import com.portfolio.api.repository.TecnologiaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service
public class TecnologiaService implements ITecnologiaService {

    @Autowired
    public TecnologiaRepository tecnologiaRepository;
    
    @Override
    public List<Tecnologia> obtenerTecnologia() {
        return tecnologiaRepository.findAll();
    }

    @Override
    public Tecnologia crearTecnologia(Tecnologia tecnologia) {
        return tecnologiaRepository.save(tecnologia);
    }

    @Override
    public void borrarTecnologia(Long id) {
        tecnologiaRepository.deleteById(id);
    }

    @Override
    public Tecnologia obtenerTecnologia(Long id) {
        return tecnologiaRepository.findById(id).orElse(null);
    }

    @Override
    public void modificarTecnologia(Tecnologia tecnologia) {
        tecnologiaRepository.save(tecnologia);
    }
    
}
