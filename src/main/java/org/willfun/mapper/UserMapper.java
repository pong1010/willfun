package org.willfun.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.willfun.domain.AuthVO;
import org.willfun.domain.UserVO;

public interface UserMapper {

	    public void insertUser(UserVO user);
	   
	    public boolean insertAuthority(@Param("mem_id") String mem_id, @Param("auth") String auth);
  
	    //Î°úÍ∑∏?ù∏
	    public UserVO read(String mem_id);
	    
	    public UserVO getMember(UserVO userVO);
	    
	    /** ?öå?õê ?ïÑ?ù¥?îî Ï§ëÎ≥µ Ï≤¥ÌÅ¨ */
	    public UserVO idCheck(String mem_id); 

	    public List<UserVO> selectUser();
	    
	    
	    public List<AuthVO> selectAuth(String mem_id);
	    
	   
	    public UserVO selectUserById(String mem_id);
	        
	    public void deleteAuthority(@Param("mem_id") String mem_id, @Param("role") String role);

	    public List<String> findId(String mem_email);
	    
	    public int findPassword(UserVO user);
	    
	    public int modify(UserVO userVO);
	    
	    public int changePassword(UserVO userVO);
	    
	    public UserVO information(String mem_id);

		public UserVO allUserById(String mem_id);
		
		public List<UserVO> findAdmin(char mem_stat);
	    
}
