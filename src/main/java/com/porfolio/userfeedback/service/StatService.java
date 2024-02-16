package com.porfolio.userfeedback.service;


import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.dto.StatDto;
public interface StatService {


    StatDto updateView();

    StatDto updateDate();

    StatDto getStat();

}
