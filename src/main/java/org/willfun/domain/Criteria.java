package org.willfun.domain;

import org.springframework.web.util.UriComponentsBuilder;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {
	//?��?���? ?�� , ?��?���??�� 출력?�� 개수
	private int pageNum;
	private int amount;
	
	//�??�� 종류?? ?��?��?��
	private String type;
	private String keyword;
	// this(?��?���?, 개수)
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
	
	//URIComponentsBuilder?�� 브라?��???��?�� GET 방식?�� ?��?��미터 ?��?��?�� ?��?��?���? ?��??�?
	public String getListLink() {
		UriComponentsBuilder builder = UriComponentsBuilder.fromPath("")
				.queryParam("pageNum", this.getPageNum())
				.queryParam("amount", this.getAmount())
				.queryParam("type", this.getType())
				.queryParam("keyword", this.getKeyword());
		return builder.toUriString();
	}
}
