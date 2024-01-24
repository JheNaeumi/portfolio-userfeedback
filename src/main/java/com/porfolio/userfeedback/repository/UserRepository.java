package com.porfolio.userfeedback.repository;

import com.porfolio.userfeedback.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = "SELECT * FROM user WHERE rating", nativeQuery = true)
    public List<User> findallRatings();
}
