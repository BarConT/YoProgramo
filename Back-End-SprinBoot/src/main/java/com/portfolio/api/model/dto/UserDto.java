package com.portfolio.api.model.dto;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author BarConT
 */
@Getter @Setter
public class UserDto {
    private String usuario;
    private String password;

    public UserDto() {
    }

    public UserDto(String usuario, String password) {
        this.usuario = usuario;
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserDto{" + "usuario=" + usuario + ", password=" + password + '}';
    }
    
}
