package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.UserDtoFeedback;
import com.porfolio.userfeedback.dto.UserDtoRating;
import com.porfolio.userfeedback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;
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
    @GetMapping(path = "/rating/avg")
    public ResponseEntity<UserDtoFeedback> calculateRatings() {
        long overallRatings = userService.getAverageRatings();
        UserDtoFeedback response = new UserDtoFeedback();
        response.setAvgRating(overallRatings);
        return ResponseEntity.ok(response);
    }
    @GetMapping(path = "/rating/count")
    public ResponseEntity<UserDtoFeedback> countRatings() {
        long countRating = userService.getCountRatings();
        UserDtoFeedback response = new UserDtoFeedback();
        response.setCount(countRating);
        return ResponseEntity.ok(response);
    }
}
