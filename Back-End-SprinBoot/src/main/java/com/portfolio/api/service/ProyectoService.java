package com.portfolio.api.service;

import com.portfolio.api.model.Proyecto;
import com.portfolio.api.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service
public class ProyectoService implements IProyectoService{

    @Autowired
    public ProyectoRepository proyectoRepository;
    
    @Override
    public List<Proyecto> obtenerProyectos() {
        return proyectoRepository.findAll();
    }

    @Override
    public Proyecto crearProyecto(Proyecto proyecto) {
        return proyectoRepository.save(proyecto);
    }

    @Override
    public void borrarProyecto(Long id) {
        proyectoRepository.deleteById(id);
    }

    @Override
    public Proyecto obtenerProyecto(Long id) {
        return proyectoRepository.findById(id).orElse(null);
    }

    @Override
    public void modificarProyecto(Proyecto proyecto) {
        proyectoRepository.save(proyecto);
    }
    
}
