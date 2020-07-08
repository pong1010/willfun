package org.willfun.makefund;

import lombok.Data;

@Data
public class MakeFundDTO {

	private int project_no;
	private String email;
	private int category_no;
	private String fees;
	private String title;
	private int target_money;
	private String project_start;
	private String project_end;
	private String main_img_sname;
	private String main_img_oname;
	private int hash_no;
	private String video_url;
	private int project_img;
	private String project_content;
	private String qna_policy;
	private String qna_tel;
	private String qna_email;
	private String project_url;
	
}
