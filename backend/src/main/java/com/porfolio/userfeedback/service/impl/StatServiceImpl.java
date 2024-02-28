package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.dto.StatDto;
import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.mapper.StatMapper;
import com.porfolio.userfeedback.repository.StatRepository;
import com.porfolio.userfeedback.service.StatService;
import com.porfolio.userfeedback.util.DateFormat;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class StatServiceImpl implements StatService {

    private StatRepository statRepository;


    //Updates the Views +1
    @Override
    public StatDto updateView() {
        StatDto statDto = getStat();
        Stats stat = statRepository.getAllofStat();
        stat.setViewCount(stat.getViewCount()+1);
        statRepository.save(stat);
        return statDto;
    }
    //Update the Date with current date
    @Override
    public StatDto updateDate() {
        StatDto statDto = getStat();
        Stats stat = statRepository.getAllofStat();
        String date = DateFormat.MMddyyyy();
        stat.setDate(date);
        statRepository.save(stat);
        return statDto;
    }
    //Gets All the current Stats & checks if repository is empty
    @Override
    public StatDto getStat() {
       Stats stat = statRepository.getAllofStat();
       //creates an initial repository if its empty
        if(stat==null){
            stat = new Stats(1L,0L, DateFormat.MMddyyyy());
            statRepository.save(stat);
        }
        return StatMapper.MaptoStatDto(stat);
    }
}
