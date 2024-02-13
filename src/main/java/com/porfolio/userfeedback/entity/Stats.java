package com.porfolio.userfeedback.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="stats")
public class Stats {
    @Id
    @Column(name = "id")
    private Long id =1L;
    @Column(name ="view_count")
    private Long viewCount;
    @Column(name ="date")
    private String date;

}
