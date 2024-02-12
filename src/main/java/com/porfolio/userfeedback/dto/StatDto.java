package com.porfolio.userfeedback.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StatDto {
    private Long id;
    private Long viewCount;
    private String date;
}
