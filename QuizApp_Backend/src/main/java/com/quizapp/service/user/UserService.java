package com.quizapp.service.user;

import com.quizapp.entities.User;

public interface UserService {

    User createUser(User user);
    Boolean hasUserWithEmail(String email);
    User login(User user);

}
