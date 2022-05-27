package com.portfolio.api.controller;

import com.portfolio.api.model.Experiencia;
import com.portfolio.api.service.ExperienciaService;
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
public class ExperienciaController {
    
    @Autowired
    private ExperienciaService experienciaService;
    
    @PostMapping ("experiencia/create")
    public Experiencia crearExperiencia(@RequestBody Experiencia experiencia) {
        return experienciaService.crearExperiencia(experiencia);
    }
    
    @GetMapping ("experiencia/read")
    @ResponseBody
    public List <Experiencia> obtenerExperiencia() {
        return experienciaService.obtenerExperiencia();
    }
    
    @GetMapping ("experiencia/read/{id}")
    @ResponseBody
    public Experiencia obtenerExperiencia(@PathVariable Long id) {
        return experienciaService.obtenerExperiencia(id);
    }
    
    @PutMapping ("experiencia/update")
    public void modificarExperiencia(@RequestBody Experiencia experiencia) {
        experienciaService.modificarExperiencia(experiencia);
    }
    
    @DeleteMapping ("experiencia/delete/{id}")
    public void borrarExperiencia(@PathVariable Long id) {
        experienciaService.borrarExperiencia(id);
    }
}
