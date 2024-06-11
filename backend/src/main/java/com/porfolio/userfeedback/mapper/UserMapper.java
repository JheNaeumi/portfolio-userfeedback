package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.AvgRatingDto;
import com.porfolio.userfeedback.dto.RatingDto;
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
    public static RatingDto mapToUserDtoRating(User user) {
        RatingDto ratingDto = new RatingDto();
        ratingDto.setRating(user.getRating());
        ratingDto.setId(user.getId());
        return ratingDto;
    }
    public static AvgRatingDto mapToUserDtoCountAverage(Long count, Long avg){
        AvgRatingDto userDtoRatingCountAverage = new AvgRatingDto();
        userDtoRatingCountAverage.setCount(count);
        userDtoRatingCountAverage.setAvgRating(avg);
        return userDtoRatingCountAverage;
    }


}
