package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoFeedback;
import com.porfolio.userfeedback.dto.UserDtoRating;
import com.porfolio.userfeedback.entity.User;
import com.porfolio.userfeedback.util.Rating;

import java.util.List;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getComments(),
                user.getEmail(),
                user.getRating()
        );

    }
    public static  User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getComments(),
                userDto.getEmail(),
                userDto.getRating()
        );
    }
    public static UserDtoRating mapToUserDtoRating(User user) {
        UserDtoRating userDto = new UserDtoRating();
        userDto.setRating(user.getRating());
        userDto.setId(user.getId());
        return userDto;
    }
    public static UserDtoFeedback mapToUserDtoFeedback(Long count, Long avg){
        UserDtoFeedback userDtoFeedback = new UserDtoFeedback();
        userDtoFeedback.setCount(count);
        userDtoFeedback.setAvgRating(avg);
        return  userDtoFeedback;
    }


}
