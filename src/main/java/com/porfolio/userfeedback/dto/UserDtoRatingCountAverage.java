package com.porfolio.userfeedback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDtoRatingCountAverage {
    private Long count;
    private Long avgRating;
    //needs improvement not sure if this should be in the backend
}
