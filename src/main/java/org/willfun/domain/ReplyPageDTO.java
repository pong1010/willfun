package org.willfun.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class ReplyPageDTO {
	private int cmt_cnt;
	private List<ReplyVO> list;
}
