package org.willfun.domain;

import org.springframework.web.util.UriComponentsBuilder;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {
	//?˜?´ì§? ?ˆ˜ , ?˜?´ì§??‹¹ ì¶œë ¥?  ê°œìˆ˜
	private int pageNum;
	private int amount;
	
	//ê²??ƒ‰ ì¢…ë¥˜?? ?‚¤?›Œ?“œ
	private String type;
	private String keyword;
	// this(?˜?´ì§?, ê°œìˆ˜)
	public Criteria() {
		this(1, 10);
	}
	
	public Criteria(int pageNum, int amount) {
		this.pageNum = pageNum;
		this.amount = amount;
	}
	
	
	public String[] getTypeArr(){
		return type == null? new String[] {}: type.split("");
	}
	
	//URIComponentsBuilder?Š” ë¸Œë¼?š°???—?„œ GET ë°©ì‹?˜ ?ŒŒ?¼ë¯¸í„° ? „?†¡?„ ??™?œ¼ë¡? ?„??ì¤?
	public String getListLink() {
		UriComponentsBuilder builder = UriComponentsBuilder.fromPath("")
				.queryParam("pageNum", this.getPageNum())
				.queryParam("amount", this.getAmount())
				.queryParam("type", this.getType())
				.queryParam("keyword", this.getKeyword());
		return builder.toUriString();
	}
}
