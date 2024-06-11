package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.UserDto;
import com.porfolio.userfeedback.dto.AvgRatingDto;
import com.porfolio.userfeedback.dto.RatingDto;
import com.porfolio.userfeedback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public ResponseEntity<List<RatingDto>>getAllRatings(){
        List<RatingDto> ratingDto =userService.getAllRatings();
        return ResponseEntity.ok(ratingDto);
    }
    @GetMapping(path = "/rating/avg+count")
    public ResponseEntity<AvgRatingDto> calculateRatings() {
        AvgRatingDto userDtoFeedback = userService.getAverageAndCountRatings();
        return ResponseEntity.ok(userDtoFeedback);
    }

}
