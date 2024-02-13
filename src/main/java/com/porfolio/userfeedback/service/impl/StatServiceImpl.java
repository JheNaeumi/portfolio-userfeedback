package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.entity.Stats;
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


    @Override
    public Stats getStats() {
        Optional<Stats> optional = statRepository.findById(1L);
        if (!optional.isPresent()) {
            Stats stats = new Stats(1L,0L, DateFormat.MMddyyyy());
            statRepository.save(stats);
            return stats;
        }
        return optional.get();
    }

    @Override
    public Stats updateView() {
        Stats stats = getStats();
        stats.setViewCount(stats.getViewCount()+1);
        return statRepository.save(stats);
    }

    @Override
    public Stats updateDate() {
        String date = DateFormat.MMddyyyy();
        Stats stats = getStats();
        stats.setDate(date);
        return statRepository.save(stats);
    }
}
