package com.portfolio.api.controller;

import com.portfolio.api.model.AcercaDe;
import com.portfolio.api.service.AcercaDeService;
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
public class AcercaDeController {
    
    @Autowired
    private AcercaDeService acercaDeService;
    
    @PostMapping ("acerca-de/create")
    public AcercaDe crearAcercaDe(@RequestBody AcercaDe acercaDe) {
        return acercaDeService.crearAcercaDe(acercaDe);
    }
    
    @GetMapping ("acerca-de/read")
    @ResponseBody
    public List <AcercaDe> obtenerAcercaDe() {
        return acercaDeService.obtenerAcercaDe();
    }
    
    @GetMapping ("acerca-de/read/{id}")
    @ResponseBody
    public AcercaDe obtenerAcercaDe(@PathVariable Long id) {
        return acercaDeService.obtenerAcercaDe(id);
    }
    
    @PutMapping ("acerca-de/update")
    public void modificarAcercaDe(@RequestBody AcercaDe acercaDe) {
        acercaDeService.modificarAcercaDe(acercaDe);
    }
    
    @DeleteMapping ("acerca-de/delete/{id}")
    public void borrarAcercaDe(@PathVariable Long id) {
        acercaDeService.borrarAcercaDe(id);
    }
}
