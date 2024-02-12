package com.porfolio.userfeedback.service.impl;

import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.repository.StatRepository;
import com.porfolio.userfeedback.service.StatService;
import com.porfolio.userfeedback.util.DateFormat;
import org.springframework.stereotype.Service;

import java.util.Optional;


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
        return null;
    }
}
