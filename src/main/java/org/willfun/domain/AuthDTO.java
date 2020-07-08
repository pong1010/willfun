package org.willfun.domain;

import lombok.Data;

@Data
public class AuthDTO{
	private String email; 
	private String auth;
	
	  public boolean isRole(String role) {
	        return auth.equals("ROLE_" + role.toUpperCase());
	    }

}
 