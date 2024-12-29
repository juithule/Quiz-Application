package com.quizapp.controller;

import com.quizapp.dto.TestDTO;
import com.quizapp.service.test.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/test")
@CrossOrigin("*")
public class TestController {


    @Autowired
    private TestService testService;

    public ResponseEntity<?> createTest(@RequestBody TestDTO dto){
        try{
            return new ResponseEntity<>(testService.createTest(dto), HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}