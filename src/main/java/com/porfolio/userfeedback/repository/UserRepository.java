package com.porfolio.userfeedback.repository;

import com.porfolio.userfeedback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
