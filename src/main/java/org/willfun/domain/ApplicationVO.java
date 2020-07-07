package org.willfun.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ApplicationVO {

	private int app_no; //?š”ì²??‚¬?•­ ê³ ìœ  ë²ˆí˜¸
	private int app_mem; //?š”ì²??•œ ë©¤ë²„ ê³ ìœ  ë²ˆí˜¸
	private int app_safe_no;
	private int app_item_no; //?š”ì²??•œ ê¸ˆê³  ê³ ìœ  ë²ˆí˜¸
	
	private String app_content; //?š”ì²??‚¬?œ 
	private char app_type; // ?š”ì²??˜ ???… (R?ˆ˜? ¹, Kë³´ê?)
	private char app_stat; // ?š”ì²??˜ ê´?ë¦¬ì ?Š¹?¸ ?—¬ë¶?(Y : ê´?ë¦¬ì ?Š¹?¸, N : ë¯¸ìŠ¹?¸, R : ?Š¹?¸ ê±°ì ˆ,  C : ì²˜ë¦¬ ?™„ë£?)
	
	private Date app_date;
}
