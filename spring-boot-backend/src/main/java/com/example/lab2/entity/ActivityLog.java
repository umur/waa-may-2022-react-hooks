package com.example.lab2.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Duration;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ActivityLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDateTime localDateTime;
    private String operation;
    private Duration duration;

    public ActivityLog(LocalDateTime localDateTime, String operation, Duration duration) {
        this.localDateTime = localDateTime;
        this.operation = operation;
        this.duration = duration;
    }
}
