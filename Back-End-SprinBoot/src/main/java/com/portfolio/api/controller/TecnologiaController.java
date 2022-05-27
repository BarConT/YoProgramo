package com.portfolio.api.controller;

import com.portfolio.api.model.Tecnologia;
import com.portfolio.api.service.TecnologiaService;
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
public class TecnologiaController {
    
    @Autowired
    private TecnologiaService tecnologiaService;
    
    @PostMapping ("tecnologia/create")
    public Tecnologia crearTecnologia(@RequestBody Tecnologia tecnologia) {
        return tecnologiaService.crearTecnologia(tecnologia);
    }
    
    @GetMapping ("tecnologia/read")
    @ResponseBody
    public List <Tecnologia> obtenerTecnologia() {
        return tecnologiaService.obtenerTecnologia();
    }
    
    @GetMapping ("tecnologia/read/{id}")
    @ResponseBody
    public Tecnologia obtenerTecnologia(@PathVariable Long id) {
        return tecnologiaService.obtenerTecnologia(id);
    }
    
    @PutMapping ("tecnologia/update")
    public void modificarTecnologia(@RequestBody Tecnologia tecnologia) {
        tecnologiaService.modificarTecnologia(tecnologia);
    }
    
    @DeleteMapping ("tecnologia/delete/{id}")
    public void borrarTecnologia(@PathVariable Long id) {
        tecnologiaService.borrarTecnologia(id);
    }
    
}
