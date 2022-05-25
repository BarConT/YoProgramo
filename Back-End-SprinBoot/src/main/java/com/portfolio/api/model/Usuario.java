package com.portfolio.api.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author BarConT
 */
@Getter @Setter
@Entity
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String usuario;
    private String password;
    private String email;
    private boolean isEnabled;

    public Usuario() {
    }

    public Usuario(Long id, String usuario, String password, String email, boolean isEnabled) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.email = email;
        this.isEnabled = isEnabled;
    }

    @Override
    public String toString() {
        return "Usuario{" + "id=" + id + ", usuario=" + usuario + ", password=" + password + ", email=" + email + ", isEnabled=" + isEnabled + '}';
    }
    
}
