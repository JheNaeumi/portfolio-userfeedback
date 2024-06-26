package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.AvgRatingDto;
import com.porfolio.userfeedback.dto.RatingDto;
import com.porfolio.userfeedback.entity.User;
import com.porfolio.userfeedback.mapper.UserMapper;
import com.porfolio.userfeedback.repository.UserRepository;
import com.porfolio.userfeedback.service.UserService;
import com.porfolio.userfeedback.util.Rating;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<RatingDto> getAllRatings() {
       List<User> users = userRepository.findAllUserRatings();
       return users.stream().map((user) -> UserMapper.mapToUserDtoRating(user)).collect(Collectors.toList());
    }
    // get Average + Count Ratings
    @Override
    public AvgRatingDto getAverageAndCountRatings() {
        List<Long> ratings = userRepository.findAllLongRatings();
        Rating rating = new Rating();
        return UserMapper.mapToUserDtoCountAverage(rating.getCountRating(ratings), rating.calculateAverageRating(ratings));
    }

}
