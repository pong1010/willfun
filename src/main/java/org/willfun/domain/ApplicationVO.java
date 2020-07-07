package org.willfun.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ApplicationVO {

	private int app_no; //?μ²??¬?­ κ³ μ  λ²νΈ
	private int app_mem; //?μ²?? λ©€λ² κ³ μ  λ²νΈ
	private int app_safe_no;
	private int app_item_no; //?μ²?? κΈκ³  κ³ μ  λ²νΈ
	
	private String app_content; //?μ²??¬? 
	private char app_type; // ?μ²?? ??? (R?? Ή, Kλ³΄κ?)
	private char app_stat; // ?μ²?? κ΄?λ¦¬μ ?Ή?Έ ?¬λΆ?(Y : κ΄?λ¦¬μ ?Ή?Έ, N : λ―ΈμΉ?Έ, R : ?Ή?Έ κ±°μ ,  C : μ²λ¦¬ ?λ£?)
	
	private Date app_date;
}
