package org.willfun.domain;

import lombok.Data;

@Data
public class AttachFileDTO {

	private String fileName; // ?���? ?��?�� ?���?
	private String uploadPath; // ?��로드 경로
	private String uuid; // UUID �?
	private boolean image; // ?��미�? ?���?
}
