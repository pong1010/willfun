package org.willfun.domain;

import lombok.Data;

@Data
public class AttachFileDTO {

	private String fileName; // ?›ë³? ?ŒŒ?¼ ?´ë¦?
	private String uploadPath; // ?—…ë¡œë“œ ê²½ë¡œ
	private String uuid; // UUID ê°?
	private boolean image; // ?´ë¯¸ì? ?—¬ë¶?
}
