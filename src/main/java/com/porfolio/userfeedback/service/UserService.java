package com.porfolio.userfeedback.service;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.util.Rating;

import java.util.List;

public interface UserService {

    UserDto addUserFeedback(UserDto userDto);

    List<UserDto> getAllRatings();

}
