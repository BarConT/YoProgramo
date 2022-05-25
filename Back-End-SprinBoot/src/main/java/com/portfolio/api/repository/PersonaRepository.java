package com.portfolio.api.repository;

import com.portfolio.api.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface PersonaRepository extends JpaRepository <Persona, Long> {
    
}
