package org.willfun.controller;

import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.willfun.naver.NaverLoginBO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/login/*")
public class CommonController {
	@GetMapping("/accessError")
	public void accessDenied(Authentication auth, Model model) {
		log.info("access Denied : "+ auth);
		model.addAttribute("msg", "Access Denied");
	}
	
	//로그인
	@GetMapping("/customLogin")
	public void loginInput(String error, String logout, Model model) {
		log.info("error : " + error);
		log.info("logout : " + logout);
		
		if(error != null) {
			model.addAttribute("error", "Login Error Check Your Account");
		}    
		
		if(logout != null) {
			model.addAttribute("logout", "Logout");
		}
	}
	
	//로그아웃
	@GetMapping("/customLogout")
	public void logoutGET() {
		log.info("custom logout");
	}
	
	//로그아웃
	@PostMapping("/customLogout")
	public void logoutPost() {
		log.info("post custom logout");
	}
	
	@RequestMapping(value = "login.do")
	public String initLogin(Model model, HttpSession session) throws Exception {

	NaverLoginBO bo = new NaverLoginBO();
	    /* 구글code 발행 */
	String naverAuthUrl = bo.getAuthorizationUrl(session);

	    /* 생성한 인증 URL을 View로 전달 */
	model.addAttribute("naver_url", naverAuthUrl);

	    /* 생성한 인증 URL을 Model에 담아서 전달 */
	    return "/login/customLogin";
	}
}
