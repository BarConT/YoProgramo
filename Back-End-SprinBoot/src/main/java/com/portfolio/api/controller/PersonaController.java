package com.portfolio.api.controller;

import com.portfolio.api.model.Persona;
import com.portfolio.api.service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author BarConT
 */
@RestController
public class PersonaController {
    
    @Autowired
    private PersonaService personaService;
    
    @PostMapping ("persona/create")
    public void agregarPersona(@RequestBody Persona pers) {
        personaService.crearPersona(pers);
    }
    
    @GetMapping ("persona/read")
    @ResponseBody
    public List <Persona> obtenerPersonas() {
        return personaService.obtenerPersonas();
    }
    
    @GetMapping ("persona/read/{id}")
    @ResponseBody
    public Persona obtenerPersonas(Long id) {
        return personaService.obtenerPersona(id);
    }
    
    @PutMapping ("persona/update")
    public void editarPersona(@RequestBody Persona persona) {
        personaService.modificarPersona(persona);
    }
    
    @DeleteMapping ("persona/delete{id}")
    public void borrarPersona(@PathVariable Long id) {
        personaService.borrarPersona(id);
    }
}
