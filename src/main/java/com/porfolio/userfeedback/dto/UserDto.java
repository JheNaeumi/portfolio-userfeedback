package com.porfolio.userfeedback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private  Long id;
    private String name;
    private String comments;
    private String email;
    private Long rating;

}
