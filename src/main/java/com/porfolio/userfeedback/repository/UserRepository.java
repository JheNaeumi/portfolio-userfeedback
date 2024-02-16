package com.porfolio.userfeedback.repository;

import com.porfolio.userfeedback.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM user WHERE rating IS NOT NULL", nativeQuery = true)
    List<User> findAllUserRatings();
    @Query(value = "SELECT rating FROM user WHERE rating IS NOT NULL", nativeQuery = true)
    List<Long> findAllLongRatings();

}
