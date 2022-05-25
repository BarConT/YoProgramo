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
    public PersonaRepository personaRepo;

    @Override
    public List<Persona> verPersonas() {
        return personaRepo.findAll();
    }

    @Override
    public void crearPersona(Persona pers) {
        personaRepo.save(pers);
    }

    @Override
    public void borrarPersona(Long id) {
        personaRepo.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
        return personaRepo.findById(id).orElse(null);
    }
    
}
