package org.willfun.domain;

import java.util.List;

import lombok.Data;

@Data
public class MemberDTO {
	private int mem_no;
	private String email;
	private String mem_pwd;
	private String mem_name;
	private String tel;
	private String zipcode;
	private boolean enabled;
	private List<AuthDTO> authList;
	
	public boolean hasRole(String role) {
        for (AuthDTO auth : authList)
            if (auth.isRole(role))
                return true;

        return false;
    }
	
	public MemberDTO() {
		
	}
	public MemberDTO(String email) {
		super();
		this.email = email;
	}

}
