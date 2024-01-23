package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.UserDto;
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
}
