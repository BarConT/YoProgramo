package com.portfolio.api.repository;

import com.portfolio.api.model.Tecnologia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long>{
    
}
