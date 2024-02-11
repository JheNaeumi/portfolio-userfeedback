package com.porfolio.userfeedback.repository;

import com.porfolio.userfeedback.entity.Stats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatRepository extends JpaRepository<Stats, Long> {

}
