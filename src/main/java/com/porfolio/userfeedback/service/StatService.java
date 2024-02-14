package com.porfolio.userfeedback.service;


import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.dto.StatDto;
public interface StatService {

    Stats getStats();

    Stats updateView();

    Stats updateDate();

    StatDto getAllStat();

}
