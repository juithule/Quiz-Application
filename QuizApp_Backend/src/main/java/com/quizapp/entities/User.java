package com.quizapp.entities;
import com.quizapp.Enum.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String email;
    private String password;
    private String name;
    private UserRole role;

    public void setName(String admin) {
        name = admin;

    }

    public void setEmail(String mail) {
        email = mail;
    }

    public void setRole(UserRole userRole) {
        role= userRole;
    }

    public void setPassword(String pass) {
        password = pass;
    }


    public String getEmail() {
        return email;
    }


    public String getPassword() {
         return password;
    }
}
