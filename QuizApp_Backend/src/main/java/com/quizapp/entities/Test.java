package com.quizapp.entities;


import com.quizapp.dto.TestDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Entity
@Data
public class Test {
    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private Long time;

    public TestDTO getDto(){
        TestDTO testDTO = new TestDTO();

        testDTO.setId(id);
        testDTO.setTitle(title);
        testDTO.setDescription(description);
        testDTO.setTime(time);

        return testDTO;

    }

    public void setTitle(String title) {
    }

    public void setDescription(String description) {
    }

    public void setTime(Long time) {
    }
}
