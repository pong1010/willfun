package org.willfun.domain;

import lombok.Data;

@Data
public class AttachFileDTO {

	private String fileName; // ?λ³? ??Ό ?΄λ¦?
	private String uploadPath; // ?λ‘λ κ²½λ‘
	private String uuid; // UUID κ°?
	private boolean image; // ?΄λ―Έμ? ?¬λΆ?
}
