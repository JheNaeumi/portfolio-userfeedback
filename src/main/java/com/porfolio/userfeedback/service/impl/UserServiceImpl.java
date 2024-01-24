package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.entity.User;
import com.porfolio.userfeedback.mapper.UserMapper;
import com.porfolio.userfeedback.repository.UserRepository;
import com.porfolio.userfeedback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public UserDto addUserFeedback(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User saveuser = userRepository.save(user);

        return UserMapper.mapToUserDto(saveuser);
    }

    @Override
    public List<UserDto> getAllRatings() {

        List<User> users = userRepository.findallRatings();
        return null;
    }


}
