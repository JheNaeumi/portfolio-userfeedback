package com.porfolio.userfeedback.service;


import com.porfolio.userfeedback.entity.Stats;

public interface StatService {

    Stats getStats();

    Stats updateView();

    Stats updateDate();

}
