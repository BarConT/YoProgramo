package com.portfolio.api.repository;

import com.portfolio.api.model.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface EducacionRepository extends JpaRepository <Educacion, Long> {
    
}
