package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoRatingCountAverage;
import com.porfolio.userfeedback.dto.UserDtoRating;
import com.porfolio.userfeedback.entity.User;

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
        UserDtoRating userDtoRating = new UserDtoRating();
        userDtoRating.setRating(user.getRating());
        userDtoRating.setId(user.getId());
        return userDtoRating;
    }
    public static UserDtoRatingCountAverage mapToUserDtoCountAverage(Long count, Long avg){
        UserDtoRatingCountAverage userDtoRatingCountAverage = new UserDtoRatingCountAverage();
        userDtoRatingCountAverage.setCount(count);
        userDtoRatingCountAverage.setAvgRating(avg);
        return userDtoRatingCountAverage;
    }


}
