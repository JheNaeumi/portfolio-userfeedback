package com.porfolio.userfeedback.service;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoFeedback;
import com.porfolio.userfeedback.dto.UserDtoRating;

import java.util.List;

public interface UserService {

    UserDto addUserFeedback(UserDto userDto);

    List<UserDtoRating> getAllRatings();

    UserDtoFeedback getAverageAndCountRatings();


}
