package com.porfolio.userfeedback.controller;

import com.porfolio.userfeedback.dto.StatDto;
import com.porfolio.userfeedback.entity.Stats;
import com.porfolio.userfeedback.service.StatService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/stats")
public class StatsController {
    private StatService statsService;
    @GetMapping(path = "/get")
    public ResponseEntity<HashMap<String, Object>> getAllStats() {
        Stats stats = statsService.getStats();
        return ResponseEntity.ok(createResponse("stats", stats));
    }
    @GetMapping(path = "/get/test")
    public ResponseEntity<StatDto> getAllofStats(){
        StatDto statDto = statsService.getAllStat();
        return ResponseEntity.ok(statDto);
    }

    @PatchMapping(path = "/update/views")
    @CrossOrigin
    public ResponseEntity<HashMap<String, Object>> updateViews() {
        Stats stats = statsService.updateView();
        return ResponseEntity.ok(createResponse("stats", stats));
    }

    @PatchMapping(path = "/update/last_updated")
    @CrossOrigin
    public ResponseEntity<HashMap<String, Object>> updateLastUpdated() {
        Stats stats = statsService.updateDate();
        return ResponseEntity.ok(createResponse("stats", stats));
    }

    private HashMap<String, Object> createResponse(String key, Object value) {
        HashMap<String, Object> responseBody = new HashMap<>();
        responseBody.put(key, value);
        return responseBody;
    }
}
