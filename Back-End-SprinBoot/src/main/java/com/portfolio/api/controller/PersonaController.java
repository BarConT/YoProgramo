package com.portfolio.api.controller;

import com.portfolio.api.model.Persona;
import com.portfolio.api.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    private IPersonaService personaServi;
    
    @GetMapping ("/api/nombre")
    public String nombre() {
        return "Diego Barale";
    }
    
    @PostMapping ("api/nueva/persona")
    public void agregarPersona(@RequestBody Persona pers) {
        personaServi.crearPersona(pers);
    }
    
    @GetMapping ("api/ver/personas")
    @ResponseBody
    public List <Persona> verPersonas() {
        return personaServi.verPersonas();
    }
    
    @DeleteMapping ("api/borrar/persona/{id}")
    public void borrarPersona(@PathVariable Long id) {
        personaServi.borrarPersona(id);
    }
}
