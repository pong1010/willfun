package org.willfun.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.mail.HtmlEmail;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.willfun.domain.MemberDTO;
import org.willfun.mapper.MemberMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class MemberServiceImpl implements MemberService{
	
	@Setter(onMethod_=@Autowired)
	private MemberMapper memberMapper;
	
	@Override
	public void register(MemberDTO user) {
	BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
    
	String password = scpwd.encode(user.getMem_pwd());
    //암호화 하여 password에 저장
    user.setMem_pwd(password);
    memberMapper.insertUser(user);
 	}
	
	@Override
	public void registerAuthority(@Param("email") String email, @Param("auth") String auth) {
	memberMapper.insertAuthority(email, auth);	
	}
	
	
	@Override
	public MemberDTO idCheck(String email){
	return memberMapper.idCheck(email);
	}
	
	@Override
	public List<String> findId(HttpServletResponse response, String email) throws IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		List<String> id = memberMapper.findId(email);		
		if (id == null) {
			out.println("<script>");
			out.println("alert('가입된 아이디가 없습니다.');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return null;
		} else {
			return memberMapper.findId(email);
		}
	}
	
	@Override
	public void sendMail(MemberDTO memberDTO) {
		BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
		// Mail Server 설정
				String charSet = "utf-8";
				String hostSMTP = "smtp.naver.com";
				String hostSMTPid = "springmailtest";
				String hostSMTPpwd = "1!2@3#4$";

				// 보내는 사람 mem_email, 제목, 내용
				String from_email = "springmailtest@naver.com";
				String fromName = "GOWL";
				String subject = "임시 비밀번호 입니다.";
				String msg = memberDTO.getMem_pwd();
				
				
				// 받는 사람 E-Mail 주소
				String mail = memberDTO.getEmail();
				try {
					HtmlEmail email = new HtmlEmail();
					email.setDebug(true);
					email.setCharset(charSet);
					email.setSSL(true);
					email.setHostName(hostSMTP);
					email.setSmtpPort(465);

					email.setAuthentication(hostSMTPid, hostSMTPpwd);
					email.setTLS(true);
					email.addTo(mail, charSet);
					email.setFrom(from_email, fromName, charSet);
					email.setSubject(subject);
					email.setHtmlMsg(msg + "<br><br>" + "비밀번호를 복사하여 바로 개인 정보를 수정하십시오.");			
					email.send();
					String passwordEncode = scpwd.encode(memberDTO.getMem_pwd());
					memberDTO.setMem_pwd(passwordEncode);
					memberMapper.findPassword(memberDTO);
				} catch (Exception e) {
					System.out.println("메일발송 실패 : " + e);
				}
	}
	
	
	
	public void findPassword(HttpServletResponse response, MemberDTO memberDTO) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		// 아이디가 없으면
		if(memberMapper.idCheck(memberDTO.getEmail()) == null) {
			out.print("아이디가 없습니다.");
			out.close(); 
		}
		// 가입에 사용한 이메일이 아니면
		else if(!memberDTO.getEmail().equals(memberDTO.getEmail())) {
			out.print("잘못된 이메일 입니다." + memberDTO.getEmail());
			out.close();
		}else {  
			// 임시 비밀번호 생성
			String pw = "";
			for (int i = 0; i < 12; i++) {
				pw += (char) ((Math.random() * 26) + 97);
			}
			
			memberDTO.setMem_pwd(pw);
			BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
		    scpwd.matches(pw, scpwd.encode(memberDTO.getMem_pwd()));
			// 비밀번호 변경
			memberMapper.findPassword(memberDTO);

			// 비밀번호 변경 메일 발송
			sendMail(memberDTO);
			String passwordEncode = scpwd.encode(memberDTO.getMem_pwd());
			memberDTO.setMem_pwd(passwordEncode);
			out.print("이메일로 임시 비밀번호를 발송하였습니다.");
			out.close();
		}
	}
	
	@Override
	public void sendMailAndroid(MemberDTO memberDTO) {
		// Mail Server 설정
				String charSet = "utf-8";
				String hostSMTP = "smtp.naver.com";
				String hostSMTPid = "springmailtest";
				String hostSMTPpwd = "1!2@3#4$";

				// 보내는 사람 mem_email, 제목, 내용
				String frommem_email = "springmailtest@naver.com";
				String fromName = "GOWL";
				String subject = "임시 비밀번호 입니다.";
				String msg = memberDTO.getMem_pwd();
				
				
				// 받는 사람 E-Mail 주소
				String mail = memberDTO.getEmail();
				try {
					HtmlEmail mem_email = new HtmlEmail();
					mem_email.setDebug(true);
					mem_email.setCharset(charSet);
					mem_email.setSSL(true);
					mem_email.setHostName(hostSMTP);
					mem_email.setSmtpPort(465);

					mem_email.setAuthentication(hostSMTPid, hostSMTPpwd);
					mem_email.setTLS(true);
					mem_email.addTo(mail, charSet);
					mem_email.setFrom(frommem_email, fromName, charSet);
					mem_email.setSubject(subject);
					mem_email.setHtmlMsg(msg + "<br><br>" + "비밀번호를 복사하여 바로 개인 정보를 수정하십시오.");			
					mem_email.send();
					memberMapper.findPassword(memberDTO);
				} catch (Exception e) {
					System.out.println("메일발송 실패 : " + e);
				}
	}
	
	
	public void findPasswordAndroid(HttpServletResponse response, MemberDTO memberDTO) throws Exception{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		// 아이디가 없으면
		if(memberMapper.idCheck(memberDTO.getEmail()) == null) {
			out.print("아이디가 없습니다.");
			out.close(); 
		}
		// 가입에 사용한 이메일이 아니면
		else if(!memberDTO.getEmail().equals(memberDTO.getEmail())) {
			out.print("잘못된 이메일 입니다." + memberDTO.getEmail());
			out.close();
		}else {  
			// 비밀번호 변경 메일 발송
			sendMailAndroid(memberDTO);
		}
	}

	
	
	
	public int modify(MemberDTO memberDTO) {
		return memberMapper.modify(memberDTO);
	}
	
	public MemberDTO changePassword(MemberDTO memberDTO, String oldPassword, HttpServletResponse response) throws Exception{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
		log.info("매칭 테스트 : " + scpwd.matches(oldPassword, scpwd.encode(memberDTO.getMem_pwd())));
		log.info("원래 비밀번호 : " + oldPassword);
		boolean check = scpwd.matches(oldPassword, memberMapper.information(memberDTO.getEmail()).getMem_pwd());
		if(check) { 

			String passwordEncode = scpwd.encode(memberDTO.getMem_pwd());
			memberDTO.setMem_pwd(passwordEncode);
			memberMapper.changePassword(memberDTO);
			out.print("<script>location.href='/mainPage'</script>");
			return memberMapper.information(memberDTO.getEmail());
		} else {		
			out.println("<script>");
			out.println("alert('기존 비밀번호가 다릅니다.');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return null;
		}
	}
	
	public MemberDTO allUserById(String mem_id){
		return memberMapper.allUserById(mem_id);
	}
	
	   @Override
	   public void sendMailPhoto(MemberDTO memberDTO) {
	      // Mail Server 설정
	      String charSet = "utf-8";
	      String hostSMTP = "smtp.naver.com";
	      String hostSMTPid = "springmailtest";
	      String hostSMTPpwd = "1!2@3#4$";

	      // 보내는 사람 mem_email, 제목, 내용
	      String frommem_email = "springmailtest@naver.com";
	      String fromName = "GOWL";
	      String subject = "금고에 비정상적인 접근이 감지되었습니다 확인부탁드립니다.";

	      // 받는 사람 E-Mail 주소
	      String mail = memberDTO.getEmail();
	      try {
	         HtmlEmail mem_email = new HtmlEmail();
	         mem_email.setDebug(true);
	         mem_email.setCharset(charSet);
	         mem_email.setSSL(true);
	         mem_email.setHostName(hostSMTP);
	         mem_email.setSmtpPort(465);

	         mem_email.setAuthentication(hostSMTPid, hostSMTPpwd);
	         mem_email.setTLS(true);
	         mem_email.addTo(mail, charSet);
	         mem_email.setFrom(frommem_email, fromName, charSet);
	         mem_email.setSubject(subject);
	         mem_email.setHtmlMsg("경고" + "<br><br>" + "금고에 비정상적인 접근이 발생했습니다.");         
	         mem_email.send();
	      } catch (Exception e) {
	         System.out.println("메일발송 실패 : " + e);
	      }
	   }
	   
	   public List<MemberDTO> AlertServer() {
	      List<MemberDTO> list = memberMapper.findAdmin('R');
	      return list;
	   }
}
