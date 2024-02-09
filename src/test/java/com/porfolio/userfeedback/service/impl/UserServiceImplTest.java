package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.dto.UserDtoFeedback;
import com.porfolio.userfeedback.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
@SpringBootTest
class UserServiceImplTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;



    @Test
    public void testGetAverageAndCountRatings() {

        // Mocking the data
        List<Long> mockRatings = Arrays.asList(3L, 4L, 5L);
        when(userRepository.findAllIntRatings()).thenReturn(mockRatings);

        // Act
        UserDtoFeedback result = userService.getAverageAndCountRatings();

        // Assert
        assertEquals(4L, result.getAvgRating()); // Replace with your expected average
        assertEquals(3L, result.getCount()); // Replace with your expected count
    }

    @Test
    public void testGetAverageAndCountRatingsWithNoRatings() {
        // Arrange for no ratings
        when(userRepository.findAllIntRatings()).thenReturn(Collections.emptyList());

        // Act
        UserDtoFeedback result = userService.getAverageAndCountRatings();

        // Assert
        assertEquals(0L, result.getAvgRating());
        assertEquals(0L, result.getCount());
    }

    @Test
    public void testGetAverageAndCountRatingsWithNullRatings() {
        // Arrange for null ratings
        when(userRepository.findAllIntRatings()).thenReturn(null);

        // Act
        UserDtoFeedback result = userService.getAverageAndCountRatings();

        // Assert
        assertEquals(0L, result.getAvgRating());
        assertEquals(0L, result.getCount());
    }

    // Add more test cases as needed


}