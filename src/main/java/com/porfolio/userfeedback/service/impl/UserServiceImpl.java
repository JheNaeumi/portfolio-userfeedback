package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoAvgRating;
import com.porfolio.userfeedback.entity.User;
import com.porfolio.userfeedback.mapper.UserMapper;
import com.porfolio.userfeedback.repository.UserRepository;
import com.porfolio.userfeedback.service.UserService;
import com.porfolio.userfeedback.util.Rating;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.UndeclaredThrowableException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    // create Userfeedback
    @Override
    public UserDto addUserFeedback(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User saveuser = userRepository.save(user);

        return UserMapper.mapToUserDto(saveuser);
    }
    // get All Ratings from Users
    @Override
    public List<UserDtoAvgRating> getAllRatings() {
       List<User> users = userRepository.findAllRatings();
       return users.stream().map((user) -> UserMapper.mapToUserDtoAvgRating(user) ).collect(Collectors.toList());
    }
    // get Average Ratings
    @Override
    public Long getAverageRatings() {
        List<Long> ratings = userRepository.findAllIntRatings();
        if(ratings==null||ratings.isEmpty()){
            return 0L;
        }
        Rating rating = new Rating();
        return rating.calculateAverageRating(ratings);
    }


}
