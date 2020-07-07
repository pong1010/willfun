package org.willfun.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.willfun.domain.Criteria;
import org.willfun.domain.ReplyVO;

public interface ReplyMapper {
	
	public void information();
	
	public int insert(ReplyVO vo);
	
	public ReplyVO read(Long cmt_board);
	
	public int delete(Long cmt_id);
	
	public int deleteAll(Long cmt_id);
	
	public int update(ReplyVO reply);
	
	public List<ReplyVO> getListWithPaging(
			@Param("cri") Criteria cri, @Param("cmt_board") Long cmt_board);
	
	public int getCountByCmt_board(Long cmt_board);
}
