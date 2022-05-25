package com.portfolio.api.repository;

import com.portfolio.api.model.Usuario;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface AuthRepository extends JpaRepository<Usuario, Long> {
    List <Usuario> findByUsuarioAndIsEnabledTrue(String usuario);
}
