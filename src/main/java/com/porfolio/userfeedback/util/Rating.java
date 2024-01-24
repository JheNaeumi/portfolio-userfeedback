package com.porfolio.userfeedback.util;

import java.util.List;

public class Rating {
    public long avr = 0;
    public long averageRating(List<Long> arr){
        for (Long l : arr) {
            avr += l;
        }
        avr = avr/arr.size();
        return avr;
    }
}
