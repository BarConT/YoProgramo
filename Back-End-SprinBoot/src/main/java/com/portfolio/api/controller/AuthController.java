package com.portfolio.api.controller;

import com.portfolio.api.model.Usuario;
import com.portfolio.api.model.dto.UserDto;
import com.portfolio.api.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author BarConT
 */
@RestController
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping ("/login")
    public boolean login(@RequestBody UserDto userDto) {
        return authService.isUserEnabled(userDto);
    }
    
//    @PostMapping ("/register")
//    public void register(@RequestBody Usuario usuario) throws Exception{
//        authService.crearUsuario(usuario);
//    }
}
