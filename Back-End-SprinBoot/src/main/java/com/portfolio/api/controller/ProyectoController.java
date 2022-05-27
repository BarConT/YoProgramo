package com.portfolio.api.controller;

import com.portfolio.api.model.Proyecto;
import com.portfolio.api.service.ProyectoService;
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
public class ProyectoController {
    
    @Autowired
    private ProyectoService proyectoService;
    
    @PostMapping ("proyecto/create")
    public Proyecto crearProyecto(@RequestBody Proyecto proyecto) {
        return proyectoService.crearProyecto(proyecto);
    }
    
    @GetMapping ("proyecto/read")
    @ResponseBody
    public List <Proyecto> obtenerProyectos() {
        return proyectoService.obtenerProyectos();
    }
    
    @GetMapping ("proyecto/read/{id}")
    @ResponseBody
    public Proyecto obtenerProyecto(@PathVariable Long id) {
        return proyectoService.obtenerProyecto(id);
    }
    
    @PutMapping ("proyecto/update")
    public void modificarProyecto(@RequestBody Proyecto proyecto) {
        proyectoService.modificarProyecto(proyecto);
    }
    
    @DeleteMapping ("proyecto/delete/{id}")
    public void borrarProyecto(@PathVariable Long id) {
        proyectoService.borrarProyecto(id);
    }
    
}
