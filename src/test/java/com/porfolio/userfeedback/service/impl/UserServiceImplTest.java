package com.porfolio.userfeedback.service.impl;

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
    public void testCalculateRatings() {
        // Prepare test data
        List<Long> mockRatings = Arrays.asList(3L, 4L, 5L);
        when(userRepository.findAllIntRatings()).thenReturn(mockRatings);

        // Invoke the method to be tested
        long result = userService.getAverageRatings();

        // Verify the result
        assertEquals(4L, result); // Adjust the expected result based on your test data

    }

    @Test
    public void testCalculateRatingsWithNoRatings() {
        // Prepare test data for no ratings
        when(userRepository.findAllIntRatings()).thenReturn(Collections.emptyList());

        // Invoke the method to be tested
        long result = userService.getAverageRatings();

        // Verify the result when there are no ratings
        assertEquals(0L, result);
    }

    @Test
    public void testCalculateRatingsWithNullRatings() {
        // Prepare test data for null ratings
        when(userRepository.findAllIntRatings()).thenReturn(null);

        // Invoke the method to be tested
        long result = userService.getAverageRatings();

        // Verify the result when ratings are null
        assertEquals(0L, result);
    }

    // Add more test cases as needed


}