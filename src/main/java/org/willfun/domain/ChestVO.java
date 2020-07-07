package org.willfun.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ChestVO {

	private int item_safe_no; //ë³´ê??’ˆ?˜ ê¸ˆê³  ë²ˆí˜¸
	private int item_no; //ë³´ê??’ˆ ê³ ìœ ë²ˆí˜¸
	private String item_name; //ë³´ê??’ˆ ?´ë¦?
	private String item_class; //ë³´ê??’ˆ ë¶„ë¥˜
	private String item_remark; //ë³´ê??’ˆ ë¹„ê³ 
	private char item_stat; //ê¸ˆê³ ?ƒ?ƒœ(F/E) Fì¡´ì¬, Eë¹?
	private Date item_keep_start; //ë³´ê??’ˆ ë³´ê? ?‹œ?‘ ?‹œê°?
	private Date item_keep_end; //ë³´ê??’ˆ ë³´ê? ë§Œë£Œ ?‹œê°?
	
	private String keyword;
	
}
