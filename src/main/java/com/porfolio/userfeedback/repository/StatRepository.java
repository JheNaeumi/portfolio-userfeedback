package com.porfolio.userfeedback.repository;

import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StatRepository extends JpaRepository<Stats, Long> {

    @Query(value = "SELECT * FROM stats WHERE id IS NOT NULL", nativeQuery = true)
    Stats getAllofStat();

}
