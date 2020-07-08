package org.willfun.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/article/*")
public class AticleController {
	
	//아티클창
		@GetMapping("/article")
		public String SignUp() {
		
			
			return "article/article";
		}
		
	
	
}
