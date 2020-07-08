package org.willfun.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.willfun.domain.MemberDTO;

public interface MemberService {
	
	public void register(MemberDTO user);
	
	public void registerAuthority(@Param("email") String email, @Param("auth") String auth);
		
	/** 회원 아이디 중복 체크 */
	public MemberDTO idCheck(String mem_id); 
	
	public void sendMail(MemberDTO MemberDTO);
	
	public List<String> findId(HttpServletResponse response, String mem_email) throws Exception;
	
	public void findPassword(HttpServletResponse response, MemberDTO MemberDTO) throws Exception;
	
	public int modify(MemberDTO MemberDTO);
	
	public MemberDTO changePassword(MemberDTO MemberDTO, String oldPassword, HttpServletResponse response) throws Exception;
	
	public MemberDTO allUserById(String mem_id);
	
	public void findPasswordAndroid(HttpServletResponse response, MemberDTO MemberDTO) throws Exception;

	public void sendMailAndroid(MemberDTO MemberDTO);
	
	public void sendMailPhoto(MemberDTO MemberDTO);
	
	public List<MemberDTO> AlertServer();
}
	