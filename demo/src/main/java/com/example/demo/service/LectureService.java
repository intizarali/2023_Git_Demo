package com.example.demo.service;

import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.example.demo.model.Lecture;

@Service
public class LectureService {
	private Set<Lecture> lectures = ConcurrentHashMap.newKeySet();

	public LectureService() {
		lectures.add(
				Lecture.builder().id(1l).author("Ali Intizar").subject("Introduction to the Web Applications and HTML")
						.preface("What is the Web?\n" + "How is the Web built?\n"
								+ "What is W3C and why it is so important?\n" + "What are the HTTP, FTP and HTTPS?\n"
								+ "What is a URI, URL, IP, and DNS?\n" + "What is HTML and where to find it?")
						.build());
		lectures.add(Lecture.builder().id(2l).author("Ali Intizar").subject("HTML5 and CSS")
				.preface("Web Protocols\n" + " HTTP Methods(GET, POST, …)\n" + " XML (extensible Markup Language)\n"
						+ " XHTML (Well-formed HTML)\n" + " HTML Forms \n" + " DOM (Document Object Model)")
				.build());
		lectures.add(Lecture.builder().id(3l).author("Ali Intizar").subject("Java Script")
				.preface("Syntax of JavaScript\n" + "Variables, functions, classes, objects, …\n" + "\n"
						+ "Dynamic Web Contents\n" + "\n" + "Events Handling and Actions\n" + "\n" + "Forms Validation")
				.build());
	}

	public List<Lecture> listLectures() {
		List<Lecture> lectureList = List.copyOf(lectures);
		return lectureList;
	}

	public Lecture createLecture(Lecture lecture) {
		lectures.add(lecture);
		return lecture;

	}

	public boolean canCreateLecture(Lecture lecture) {
		return !lectures.contains(lecture);
	}
}
