package com.portfolio.api.service;

import com.portfolio.api.model.Usuario;
import com.portfolio.api.model.dto.UserDto;

/**
 *
 * @author BarConT
 */
public interface IAuthService {
    
    public boolean isUserEnabled(UserDto userDto);
    public void crearUsuario(Usuario usuario) throws Exception;
   
}
