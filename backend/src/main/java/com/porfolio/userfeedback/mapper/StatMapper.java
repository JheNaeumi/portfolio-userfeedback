package com.porfolio.userfeedback.mapper;

import com.porfolio.userfeedback.dto.StatDto;
import com.porfolio.userfeedback.entity.Stats;

public class StatMapper {
    public static StatDto MaptoStatDto(Stats stats){
        return new StatDto(
                stats.getViewCount(),
                stats.getDate()
        );
    }
}
