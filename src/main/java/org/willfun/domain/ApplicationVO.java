package org.willfun.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ApplicationVO {

	private int app_no; //?���??��?�� 고유 번호
	private int app_mem; //?���??�� 멤버 고유 번호
	private int app_safe_no;
	private int app_item_no; //?���??�� 금고 고유 번호
	
	private String app_content; //?���??��?��
	private char app_type; // ?���??�� ???�� (R?��?��, K보�?)
	private char app_stat; // ?���??�� �?리자 ?��?�� ?���?(Y : �?리자 ?��?��, N : 미승?��, R : ?��?�� 거절,  C : 처리 ?���?)
	
	private Date app_date;
}
