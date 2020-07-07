package org.willfun.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ChestVO {

	private int item_safe_no; //보�??��?�� 금고 번호
	private int item_no; //보�??�� 고유번호
	private String item_name; //보�??�� ?���?
	private String item_class; //보�??�� 분류
	private String item_remark; //보�??�� 비고
	private char item_stat; //금고?��?��(F/E) F존재, E�?
	private Date item_keep_start; //보�??�� 보�? ?��?�� ?���?
	private Date item_keep_end; //보�??�� 보�? 만료 ?���?
	
	private String keyword;
	
}
