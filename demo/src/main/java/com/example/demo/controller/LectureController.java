package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Lecture;
import com.example.demo.service.LectureService;

@RestController
public class LectureController {

	private final LectureService lectureService;

	public LectureController(LectureService lectureService) {
		this.lectureService = lectureService;
	}

	@GetMapping("/lectures")
    @CrossOrigin(origins = "*")
	public ResponseEntity<List<Lecture>> listLectures() {

		return ResponseEntity.ok(lectureService.listLectures());

	}

	@PostMapping("/lectures")
	@CrossOrigin(origins = "*")
	public ResponseEntity<Lecture> createLectures(@RequestBody Lecture lecture) {
		if (lectureService.canCreateLecture(lecture)) {
			Lecture created = lectureService.createLecture(lecture);
			return ResponseEntity.ok(created);
		}
		return ResponseEntity.badRequest().build();

	}
}
