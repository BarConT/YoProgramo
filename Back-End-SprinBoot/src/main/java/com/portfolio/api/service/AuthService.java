package com.portfolio.api.service;

import com.portfolio.api.model.Usuario;
import com.portfolio.api.model.dto.UserDto;
import com.portfolio.api.repository.AuthRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author BarConT
 */
@Service    
public class AuthService implements IAuthService {
    
    @Autowired
    public AuthRepository authRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public boolean isUserEnabled(UserDto userDto) {
        boolean isUserEndabled = false;
        List <Usuario> usuarios = authRepository.findByUsuarioAndIsEnabledTrue(userDto.getUsuario());
        if (!usuarios.isEmpty()) {
            if (passwordEncoder.matches(userDto.getPassword(), usuarios.get(0).getPassword())) {
                isUserEndabled = true;
            }
        }
        return isUserEndabled;
    }
    
    public void crearUsuario(Usuario usuario) throws Exception {
        List <Usuario> usuarios = authRepository.findByUsuarioAndIsEnabledTrue(usuario.getUsuario());
        if (!usuarios.isEmpty()) {
            throw new Exception("El usuario ya existe");
        } else {
            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
            usuario.setEnabled(true);
            authRepository.save(usuario);
        }    
    }
    
}
