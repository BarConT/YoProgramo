package com.portfolio.api.repository;

import com.portfolio.api.model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface ExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
