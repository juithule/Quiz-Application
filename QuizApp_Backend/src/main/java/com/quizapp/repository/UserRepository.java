package com.quizapp.repository;

import com.quizapp.Enum.UserRole;
import com.quizapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByRole(UserRole userRole);

    Boolean findFirstByEmail(String email);

    Optional<User> findByEmail(String email);
}
