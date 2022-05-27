package com.portfolio.api.repository;

import com.portfolio.api.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Long>{
    
}
