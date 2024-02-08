package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.UserDto;
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
        UserDtoRating userDto = new UserDtoRating();
        userDto.setRating(user.getRating());
        userDto.setId(user.getId());
        // You may set other fields if needed, or just return the UserDto with the rating
        return userDto;
    }


}
