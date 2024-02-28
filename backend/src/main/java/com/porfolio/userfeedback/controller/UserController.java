package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoRatingCountAverage;
import com.porfolio.userfeedback.dto.UserDtoRating;
import com.porfolio.userfeedback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping(path = "/rating")
    public ResponseEntity<List<UserDtoRating>>getAllRatings(){
        List<UserDtoRating> userDtoRating =userService.getAllRatings();
        return ResponseEntity.ok(userDtoRating);
    }
    @GetMapping(path = "/rating/avg+count")
    public ResponseEntity<UserDtoRatingCountAverage> calculateRatings() {
        UserDtoRatingCountAverage userDtoFeedback = userService.getAverageAndCountRatings();
        return ResponseEntity.ok(userDtoFeedback);
    }

}
