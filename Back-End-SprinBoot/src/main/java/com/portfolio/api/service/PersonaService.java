package com.portfolio.api.service;

import com.portfolio.api.model.Persona;
import com.portfolio.api.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service
public class PersonaService implements IPersonaService {
    
    @Autowired
    public PersonaRepository personaRepository;

    @Override
    public List<Persona> obtenerPersonas() {
        return personaRepository.findAll();
    }

    @Override
    public Persona crearPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        personaRepository.deleteById(id);
    }

    @Override
    public Persona obtenerPersona(Long id) {
        return personaRepository.findById(id).orElse(null);
    }
    
    @Override
    public void modificarPersona(Persona persona) {
        personaRepository.save(persona);
    }
    
}
