package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.StatDto;
import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.service.StatService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;


@AllArgsConstructor
@RestController
@RequestMapping("/api/stats")
public class StatsController {
    private StatService statsService;

    @GetMapping(path = "/get")
    public ResponseEntity<StatDto> getAllofStats(){
        StatDto statDto = statsService.getStat();
        return ResponseEntity.ok(statDto);
    }

    @PatchMapping(path = "/update/views")
    public ResponseEntity<StatDto> updateViews() {
        StatDto statDto = statsService.updateView();
        return ResponseEntity.ok(statDto);
    }

    @PatchMapping(path = "/update/last_updated")
    public ResponseEntity<StatDto> updateLastUpdated() {
        StatDto statDto = statsService.updateDate();
        return ResponseEntity.ok(statDto);
    }

}
