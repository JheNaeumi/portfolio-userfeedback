package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto>addUserFeedback(@RequestBody UserDto userDto){
        UserDto savedUser = userService.addUserFeedback(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
}
