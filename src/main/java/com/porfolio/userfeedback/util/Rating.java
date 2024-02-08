package com.porfolio.userfeedback.util;

import java.util.List;

public class Rating {
    private long avr = 0;
    public long calculateAverageRating(List<Long> arr) {
        if (arr == null || arr.isEmpty()) {
            return 0L;
        }
        for (Long l : arr) {
            avr += l;
        }
        avr = avr / arr.size();
        return avr;
    }
    public long getCountRating(List<Long> arr){
        if (arr == null || arr.isEmpty()) {
            return 0L;
        }
        return arr.size();
    }
}
