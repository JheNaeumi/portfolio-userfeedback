package com.porfolio.userfeedback.service;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoAvgRating;

import java.util.List;

public interface UserService {

    UserDto addUserFeedback(UserDto userDto);

    List<UserDtoAvgRating> getAllRatings();

    Long getAverageRatings();

}
