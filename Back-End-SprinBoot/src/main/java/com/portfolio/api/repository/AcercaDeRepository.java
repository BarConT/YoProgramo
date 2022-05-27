package com.portfolio.api.repository;

import com.portfolio.api.model.AcercaDe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author BarConT
 */
@Repository
public interface AcercaDeRepository extends JpaRepository<AcercaDe, Long>{
    
}
