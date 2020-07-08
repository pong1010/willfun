package org.willfun.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.willfun.domain.AuthDTO;
import org.willfun.domain.MemberDTO;

public interface MemberMapper {

	    public void insertUser(MemberDTO user);
	   
	    public boolean insertAuthority(@Param("email") String email, @Param("auth") String auth);
  
	    //로그?��
	    public MemberDTO read(String mem_id);
	    
	    public MemberDTO getMember(MemberDTO userVO);
	    
	    /** ?��?�� ?��?��?�� 중복 체크 */
	    public MemberDTO idCheck(String mem_id); 

	    public List<MemberDTO> selectUser();
	    
	    
	    public List<AuthDTO> selectAuth(String mem_id);
	    
	   
	    public MemberDTO selectUserById(String mem_id);
	        
	    public void deleteAuthority(@Param("email") String email, @Param("role") String role);

	    public List<String> findId(String mem_email);
	    
	    public int findPassword(MemberDTO user);
	    
	    public int modify(MemberDTO userVO);
	    
	    public int changePassword(MemberDTO userVO);
	    
	    public MemberDTO information(String mem_id);

		public MemberDTO allUserById(String mem_id);
		
		public List<MemberDTO> findAdmin(char mem_stat);
	    
}
