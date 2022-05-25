package com.portfolio.api.controller;

import com.portfolio.api.model.Educacion;
import com.portfolio.api.service.EducacionService;
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
public class EducacionController {
    
    @Autowired
    private EducacionService educacionService;
    
    @PostMapping ("educacion/create")
    public void crearEducacion(@RequestBody Educacion educ) {
        educacionService.crearEducacion(educ);
    }
    
    @GetMapping ("educacion/read")
    @ResponseBody
    public List <Educacion> obtenerEducacion() {
        return educacionService.obtenerEducacion();
    }
    
    @GetMapping ("educacion/read/{id}")
    @ResponseBody
    public Educacion obtenerEducacion(@PathVariable Long id) {
        return educacionService.obtenerEducacion(id);
    }
    
    @PutMapping ("educacion/update")
    public void editarEducacion(@RequestBody Educacion educacion) {
        educacionService.modificarEducacion(educacion);
    }
    
    @DeleteMapping ("educacion/delete/{id}")
    public void borrarEducacion(@PathVariable Long id) {
        educacionService.borrarEducacion(id);
    }
    
}
