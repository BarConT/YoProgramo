package com.portfolio.api.service;

import com.portfolio.api.model.Educacion;
import com.portfolio.api.repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service
public class EducacionService implements IEducacionService {
    
    @Autowired
    public EducacionRepository educacionRepository;

    @Override
    public List<Educacion> obtenerEducacion() {
        return educacionRepository.findAll();
    }

    @Override
    public void crearEducacion(Educacion educacion) {
        educacionRepository.save(educacion);
    }

    @Override
    public void borrarEducacion(Long id) {
        educacionRepository.deleteById(id);
    }

    @Override
    public Educacion obtenerEducacion(Long id) {
        return educacionRepository.findById(id).orElse(null);
    }

    @Override
    public void modificarEducacion(Educacion educacion) {
        educacionRepository.save(educacion);
    }
    
}
