package com.porfolio.userfeedback.service;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.AvgRatingDto;
import com.porfolio.userfeedback.dto.RatingDto;

import java.util.List;

public interface UserService {

    UserDto addUserFeedback(UserDto userDto);

    List<RatingDto> getAllRatings();

    AvgRatingDto getAverageAndCountRatings();


}
