package org.willfun.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.willfun.domain.MemberDTO;
import org.willfun.service.MemberService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

@Controller
@Log4j
@AllArgsConstructor
@RequestMapping("/member*")
public class MemberController { 
	
	private MemberService memberService;
	
	@GetMapping("/signUp")
	public void signPage() {
	}
	
	@PostMapping("/signUpComplete")
	public String create(MemberDTO memberDTO) {
		log.info(memberDTO);
		memberService.register(memberDTO);
		memberService.registerAuthority(memberDTO.getEmail(), "ROLE_USER");
		return "redirect:/main";
    }
	
	
	
	@ResponseBody
	@PostMapping("/idCheck")
    public String idCheck(HttpServletRequest request) {
		String email = request.getParameter("email");
		MemberDTO idCheck = memberService.idCheck(email);
		log.info("아이디 중복 체크 : "  + email + "\t" + idCheck);
		
		String check="";

		if(idCheck != null) {
			 check="yes";         //중복
		} else {
			check="no";         //중복x
		}
		log.info("아이디 중복 결과 : " + check);
		return check;	
    }
	
	@GetMapping("/findIdForm")
	public void findIdForm() {
		
	}
	
	@GetMapping("/findId")
	public void findId() {
		
	}
	
	@PostMapping("/findId")
	public String findId(HttpServletResponse response, @RequestParam("email") String email, Model model) throws Exception{
		model.addAttribute("id", memberService.findId(response, email));
		return "/findId";
	}

	@PostMapping("/findPassword")
	public void findPassword(@ModelAttribute MemberDTO memberDTO, HttpServletResponse response) throws Exception{
		memberService.findPassword(response, memberDTO);
	}
	
	@GetMapping("/findPassword")
	public void findPage() {
		
	}
	 
	@GetMapping("/userEdit")
	public String userEdit() {
		
		return "/userEdit";
	}
	
	@PostMapping("/userEdit")
	public String userEditChange(MemberDTO memberDTO, HttpSession session) {
		memberService.modify(memberDTO);
		session.invalidate();
		return "redirect:/mainPage";
	}
	
	// 비밀번호 변경
	@PostMapping("/changePassword")
	public void changePassword(MemberDTO memberDTO, @RequestParam("oldPassword") String oldPassword, HttpServletResponse response) throws Exception{
//		log.info("원래 비밀번호 : " + oldPassword + "			" + memberDTO + "		" + memberService.changePassword(memberDTO, oldPassword, response));
		memberService.changePassword(memberDTO, oldPassword, response);
	}
	
	@GetMapping("/smsTest")
	public void smsTest() {
		
	}
	
	// 문자 보내기
	@ResponseBody
	@RequestMapping(value = "/sendSMS", method = RequestMethod.POST)
	public String sendSMS(String phone) throws Exception { // 휴대폰 문자보내기

		String api_key = "NCSURQNMCGZSBWGS";
		String api_secret = "E5NMGCPBDMQHWYZ5RH95ZQUQGTRKLBRV";
		Message coolsms = new Message(api_key, api_secret); 
		
		HashMap<String, String> params = new HashMap<String, String>(); 
		
		int key = (int) (Math.random() * 899999) + 100000;
		
		String authNum = "" + key;
		
		params.put("to", phone); 
		params.put("from", "01091212441"); 
		params.put("type", "SMS"); 
		params.put("text", "[WILLFUN] 인증번호[" + key + "]를 입력해주세요."); 
		params.put("app_version", "test app 1.2");
		try {
			
			JSONObject obj = (JSONObject) coolsms.send(params);
			System.out.println(obj.toString());
			
		} catch (CoolsmsException e) {
			
			System.out.println(e.getMessage());
			System.out.println(e.getCode());
			
		}
		
		return authNum;

	}
}
 