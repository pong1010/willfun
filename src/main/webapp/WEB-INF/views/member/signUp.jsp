<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../header.jsp" %>


		<div id="join">
			<div class="crowdy-login-layout mb100">
				<div class="hidden-sm hidden-md hidden-lg crowdy-login-backBtn">
					<i aria-hidden="true" class="fa fa-angle-left"></i>
				</div>
				<div class="crowdy-login-tilte">
					1분이면 끝나는 <br class="hidden-xs">회원가입<span
						class="crowdy-color-blue">.</span>
				</div>
				<ul role="tablist"
					class="nav nav-tabs nav-justified crowdy-nav-custom mt70 xs-mt20 xs-mb15">
					<li role="presentation" class="active"><a
						href="javascript:void(0)" aria-controls="individual" role="tab"
						data-toggle="tab" aria-expanded="true">개인회원</a></li>
					<li role="presentation" class=""><a href="javascript:void(0)"
						aria-controls="corporation" role="tab" data-toggle="tab"
						aria-expanded="false">법인회원</a></li>
					<li role="presentation" class=""><a href="javascript:void(0)"
						aria-controls="combination" role="tab" data-toggle="tab"
						aria-expanded="false">조합회원</a></li>
				</ul>
<script>
	function signTerm(){
		
		var view = document.getElementById("signTermPage");
		if(view.style.display == 'none'){
			view.style.display = 'block';
		} else{
			view.style.display = 'none';
		}
		
		$("#signTerm").toggleClass("fa-angle-up");
		$("#signTerm").toggleClass("fa-angle-down");
		
	}
</script>

				<label
					class="crowdy-check-container01 crowdy-login-agreeText01 mt20 xs-mt0">전체동의
					<input id="checkboxAll" type="checkbox"> 
					<span onclick="checkClick()" class="crowdy-check-mark01"></span>
				</label> <i id="signTerm" aria-hidden="true" onclick="signTerm();"
					class="fa ml20 crowdy-login-customArr fa-angle-up"></i>
					
				<!---->
				<div id="signTermPage" class="ml20 mt10">
					<div class="crowdy-login-agreeContainer">
						<label class="crowdy-check-container01 crowdy-login-agreeText">회원가입
							기본약관(필수) <input class="check" type="checkbox"> <span
							class="crowdy-check-mark01"></span>
						</label>
						<div class="crowdy-login-paperShow">전문보기</div>
					</div>
					<div class="member_join_terms">
						<p>
							<strong>회원가입 기본약관</strong>
						</p>
						<p>
							<strong>제 1 조 목적<br></strong>본 약관은 주식회사 크라우디(이하 “회사”)에서 운영하는
							투자형 및 리워드형 크라우드펀딩(https://www.ycrowdy.com)과 MOAH 모바일 어플리케이션을 통하여
							제공하는 인터넷 관련 제반서비스(이사 “서비스”)의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타
							필요한 사항을 규정함을 목적으로 합니다.
						</p>
						<p>&nbsp;</p>
						<p>
							<strong>제 2 조 용어의 정의<br></strong>본 약관에서 사용하는 용어의 정의는 다음과
							같습니다.
						</p>
						<ol>
							<li>서비스 : 회원이본 약관에 따라 이용할 수 있는 회사가 제공하는 모든 서비스를 의미합니다.</li>
							<li>회원 : 본 약관에 따라 회사와 서비스 이용계약을 체결하고 홈페이지를 통하여 서비스를 이용할 수 있는
								자격을 부여 받은 자를 말합니다.</li>
							<li>아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의
								조합을 의미합니다.</li>
							<li>비밀번호 : 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한
								문자 또는 숫자의 조합을 의미합니다.</li>
							<li>게시물 : 회원이 서비스를 이용함에 있어 홈페이지의 게시판에 게재한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상
								등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.</li>
						</ol>
						<p>이 약관에 사용하는 용어의 정의는 각 항에서 정의하는 것을 제외하고는 관계법령 및 일반적인 상관관계에
							의합니다.</p>
						<p>&nbsp;</p>
						<p>
							<strong>제 3 조 서비스의 제공</strong>
						</p>
						<p>1.회사는 투자형 크라우드펀딩 서비스 (CROWDY 투자), 리워드형 크라우드펀딩 서비스 (CROWDY
							리워드)와 MOAH 모바일 어플리케이션 서비스를 제공하고 있으며, 위의 모든서비스의 회원을 통합하여 운영 및 관리하고
							있습니다.</p>
						<p>이에 MOAH 모바일 어플리케이션 서비스에 가입하여 회원이 되는 경우, 회사의 그 외 다른 서비스 또한
							이용 가능합니다.</p>
						<ul>
							<li>본 약관에 따라 회원이 된 자는 다음 각 호의 서비스를 이용할 수 있습니다.</li>
						</ul>
						<ol>
							<li>투자형 크라우드펀딩 서비스 (CROWDY 투자)</li>
							<li>리워드형 크라우드펀딩 서비스 (CROWDY 리워드)</li>
							<li>MOAH 모바일 어플리케이션 서비스</li>
							<li>위 각 호 서비스 제공을 위해 필요하거나 이에 부수되는 서비스</li>
						</ol>
						<ul>
							<li>회원은 제2항 각 호 서비스와 관련된 개별 서비스를 이용하기 위하여 개별 약관에 따른 추가적인 약정을
								회사와 체결하여야 합니다. 이 경우 각 개별 서비스의 구체적인 내용은 각 서비스별 개별약관에서 정한 바에 따릅니다.</li>
							<li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 회사는 서비스를 일정범위로
								분할하여 각 범위 별로 이용가능시간을 별도로 지정할 수 있으며 이러한 경우에는 그 내용을 사전에 공지합니다.</li>
							<li>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는
								경우 서비스의 제공을 일시적으로 중단할 수 있으며, 이 경우 회사는 회원에게 통지합니다. 다만, 회사가 사전에
								통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.</li>
							<li>회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에
								공지한 바에 따릅니다.&nbsp;</li>
						</ul>
						<p>
							<strong>제 4 조 서비스의 변경</strong>
						</p>
						<ul>
							<li>회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부
								서비스를 변경할 수 있습니다.</li>
							<li>서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및
								제공일자 등이 그 변경 전에 해당 서비스 초기화면에 게시됩니다.</li>
							<li>회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 수정, 중단, 변경할
								수 있으며, 이에 대하여 관계법령에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 5 조 이용계약의 체결</strong>
						</p>
						<ul>
							<li>회사가 본 약관에 따라 제공하는 서비스를 이용하기 위하여 회원은 회사와 서비스이용계약(이하
								“이용계약”)을 체결하여 회원가입에 따른 회원의 자격을 부여 받아야 합니다.</li>
							<li>서비스를 이용하고자 하는 자(이하 "이용신청자")가 본 약관의 내용에 대하여 동의를 한 다음 회사가
								제공하는 양식에 따라 정보 입력을 하고 회원가입신청을 하면 서비스에 대한 이용신청(이하 “이용신청”)이 있는 것으로
								보며, 이용신청에 대하여 회사가 승낙함으로써 이용계약이 체결됩니다.</li>
							<li>제2항의 회원가입신청 절차의 방법과 내용은 회원이 개인(자연인)인 경우와 법인, 조합인 등 경우에
								따라 다를 수 있습니다.</li>
							<li>회사는 관계 법령에 따라 이용신청자가 제1항에 따라 입력한 정보에 대한 사실 확인을 위하여 필요한
								경우 이용신청자에게 증빙 자료의 제출을 요청할 수 있으며, 이용신청자는 이에 따라 증빙자료를 제출하여야 합니다.</li>
							<li>회사는 다음 각 호에 해당하는 이용신청에 대하여는 승낙을 하지 않을 수 있습니다.</li>
						</ul>
						<ol>
							<li>이용신청자가 이전에 본 약관에 의하여 회원자격을 상실한 적이 있는 경우(회사의 회원 재가입 승낙을
								얻은 경우 제외)</li>
							<li>이용신청자가 본 약관에 의하여 이전에 회사로부터 서비스 이용제한 조치를 받은 상태에서 이용계약을
								해지하고 다시 이용신청을 한 경우</li>
							<li>제2항의 이용신청 시 실명이 아니거나 타인의 명의를 이용하여 이용신청을 한 경우</li>
							<li>제2항의 이용신청 시 필요한 정보를 입력하지 않거나 허위의 정보를 기재한 경우</li>
							<li>제4항에 따라 요청 받은 사실확인을 위한 증빙자료를 제출하지 않은 경우</li>
							<li>14세 미만 아동이 법정대리인의 동의를 얻지 아니한 경우</li>
							<li>사회의 안녕과 질서, 미풍양속을 저해할 우려가 있는 경우</li>
							<li>타인의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협할 우려가 있는 경우</li>
							<li>위법 또는 부당한 목적으로 이용신청을 한 경우</li>
							<li>본 약관을 위반하며 신청하는 경우</li>
						</ol>
						<ul>
							<li>회사는 다음 각 호의 경우에 승낙을 유보할 수 있습니다.</li>
						</ul>
						<ol>
							<li>제공하는 서비스 관련 설비의 용량이 부족한 등 여유가 없는 경우</li>
							<li>기타 서비스 제공을 위한 재정적, 기술적 문제가 있다고 판단되는 경우</li>
						</ol>
						<ul>
							<li>회사는 본 약관 및 개별약관에서 정한 바에 따라 회원 별 서비스의 이용시간, 이용횟수, 메뉴 등을
								세분하여 달리 적용할 수 있습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 6 조 서비스 이용료</strong>
						</p>
						<ul>
							<li>회사는 제 3 조에 따른 서비스를 이용하는 회원에 대하여 서비스 별 개별약관에서 정하는 수수료를
								징수할 수 있으며, 서비스 이용을 위한 접속통신망의 이용료는 회원이 직접 납부하여야 합니다.</li>
							<li>회원이 타 유료서비스에 접속하여 서비스를 이용하는 경우에 부과되는 일체의 요금은 회원이 해당 서비스
								업체에 지불하여야 합니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 7 조 회원의 이용계약 해지 등</strong>
						</p>
						<ul>
							<li>회원은 서비스 중단을 원할 경우 회사가 제공하는 양식에 따라 회원탈퇴신청을 하면 이용계약 해지의
								의사표시를 한 것으로 보며, 회사에 해지의 의사표시가 도달한 때에 이용계약의 해지 효력이 발생합니다.</li>
							<li>해지 효력이 발생한 때로부터 회원은 회원의 자격을 상실하며, 회사가 제공하는 모든 서비스를 이용할 수
								없게 됩니다.</li>
							<li>제1항에도 불구하고 회원이 서비스 별 개별 약관에 따라 회사의 개별 서비스를 이용하고 있는 경우에는
								회원탈퇴신청이 제한될 수 있습니다.</li>
							<li>제2항에도 불구하고 이용계약의 해지 효력이 발생할 당시 당해 회원이 회사가 제공하는 서비스를 통해
								진행 중인 거래 또는 절차가 있다면 당해 서비스에 관한 개별약관 또는 회사의 안내에 따라 정산 절차를 거쳐야
								합니다.</li>
							<li>회원이 제1항과 제2항에 따라 이용계약을 해지하여 회원자격을 상실하게 될 경우, 당해 회원은 본
								약관에 따라 다시 회원가입을 신청하는 데 있어 제한을 받을 수 있습니다.</li>
							<li>회원이 제1항과 제2항에 따라 이용계약을 해지할 경우, 관계법령 및 개인정보취급방침에 따라 회사가
								회원정보를 보유하는 경우를 제외하고는 회원의 모든 데이터는 소멸됩니다. 다만, 이 경우에도 타인에 의해 담기,
								스크랩 등이 되어 재 게시되거나, 공용게시판에 등록된 게시물 등은 삭제되지 않을 수 있습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 8 조 회사의 이용계약의 제한, 해지 등</strong>
						</p>
						<ul>
							<li>회사는 회원에게 다음 각 호의 해지 사유가 있는 경우 5일 이상으로 정한 기간 내에 그 해지 사유의
								시정을 요구하고, 이와 같이 정한 기간 내에 회원이 이를 시정하지 아니하면 회사는 이용계약을 해지할 수 있습니다.</li>
						</ul>
						<ol>
							<li>제5조 제5항 각 호 에서 정한 승낙거부사유가 있음이 밝혀진 경우</li>
							<li>회원이 공공질서 및 미풍양속에 위배되는 거래행위를 하거나 시도한 경우</li>
							<li>회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우</li>
							<li>주민등록법을 위반한 명의도용 및 결제도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의
								제공 및 운영방해, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법")을 위반한 불법통신 및
								해킹, 악성프로그램의 배포, 접속권한 초과행위 등 관계법령을 위반한 경우</li>
							<li>제3자의 결제수단이나 개인정보를 도용한 경우</li>
							<li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해행위를 한 경우</li>
							<li>회사 및 기타 제3자의 권리나 명예, 신용, 기타 정당한 이익을 침해하는 행위를 한 경우</li>
							<li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속 에 반하는 정보를 홈페이지에공개 또는
								게시하는 행위</li>
							<li>회사의 동의 없이 영리를 목적으로 서비스를 이용한 경우</li>
							<li>기타 위법하거나 부당한 목적으로 서비스를 이용한 경우</li>
							<li>제17조 제5항 단서의 경우에 해당하는 경우</li>
							<li>본 약관에 위반하는 행위를 한 경우</li>
						</ol>
						<ul>
							<li>제1항의 경우에도 불구하고 회사는 제1항 각 호의 사유가 시정이 가능하다고 인정되는 경우 회원에게 그
								사유를 통지를 하고 일정한 기간 동안 회원에게 경고, 일시 정지, 영구이용정지 등으로 서비스의 이용을 단계적으로
								제한할 수 있습니다. 다만, 개별 서비스의 이용제한에 관한 조건 및 세부내용은 각 서비스의 개별약관 또는 회사가
								미리 고지한 정책에서 정하는 바에 의합니다.</li>
							<li>제1항에 따라 이용계약이 해지된 경우 해지되기 전까지 회원이 서비스 이용을 통해 획득한 혜택 등도
								모두 소멸되며, 회사는 이에 대해 별도로 보상하지 않습니다.</li>
							<li>본 조에 따라 서비스 이용을 제한하거나 이용계약을 해지하는 경우에는 회사는 제12조에 따라
								통지합니다.</li>
							<li>회원이 제1항과 제2항에 따라 이용계약을 해지하여 회원자격을 상실하게 될 경우, 당해 회원은 본
								약관에 따라 다시 회원가입을 신청하는 데 있어 제한을 받을 수 있습니다.</li>
							<li>회원은 제1항과 제2항에 따른 이용해지 또는 이용제한 등에 대하여 회사가 제공하는 양식과 절차에 따라
								이의신청을 할 수 있습니다. 이 경우 이의신청이 정당하다고 회사가 인정하는 경우 회사는 서비스의 이용을 재개합니다.</li>
						</ul>
						<p>
							<strong>제 9 조 회원정보의 수집과 보호</strong>
						</p>
						<ul>
							<li>회사는 서비스 제공을 위하여 이용계약의 체결 시 필요한 정보(이하 “회원정보”)를 수집할 수 있으며,
								그 외에도 수집목적 또는 이용목적을 밝혀 회원으로부터 정보를 수집할 수 있습니다. 이 경우 회사는 회원으로부터
								정보수집에 대한 동의를 받으며, 회원은 정보제공에 동의를 한 이후에도 회사가 제공하는 양식에 따라 그 동의를 철회할
								수 있습니다.</li>
							<li>회원의 개인정보의 수집, 보호 및 사용에 대해서는 관계법령 및 회사의 개인정보취급방침이 적용됩니다.
								다만, 회사의 홈페이지 이외의 링크된 사이트에서는 회사의 개인정보취급방침이 적용되지 않습니다.</li>
							<li>관계 법령에 따라 회원정보의 이용과 제3자에 대한 정보 제공을 허용하고 있는 경우를 제외하고 회사는
								제1항에 따라 회원으로부터 동의를 받은 목적 외에 회원의 동의 없이 다른 제3자에게 회원정보를 제공하지 않습니다.</li>
							<li>회사는 정보통신망법 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다.</li>
							<li>회사의 개인정보취급 관리책임자 및 연락처는 아래와 같습니다.</li>
							<li>
								<p>성명: 김기석, 김주원</p>
								<p>직위: 대표이사</p>
								<p>E-mail: info@ycrowdy.com</p>
								<p>전화: 02)6954-2568</p>
								<p>Fax: 02)6442-2565&nbsp;</p>
							</li>
						</ul>
						<p>
							<strong>제 10 조 회원의 회원정보 관리에 대한 의무</strong>
						</p>
						<ul>
							<li>회원의 아이디와 비밀번호를 포함한 회원정보에 관한 관리책임은 회원에게 있습니다.</li>
							<li>회사는 회원의 아이디가 개인정보 유출의 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나 회사 및
								회사의 운영자로 오인할 우려가 있는 경우, 해당 아이디의 이용을 제한할 수 있습니다.</li>
							<li>회원은 주민등록번호, 동일숫자, 연속숫자 등의 비밀번호를 사용하지 말아야 하며 타인이 쉽게 추측할 수
								있는 비밀번호 사용을 자제하여 관리에 유의하여야 합니다.</li>
							<li>회원은 아이디, 비밀번호 등을 포함한 회원정보를 타인에게 누설하여서는 아니 되며, 만약 누설하였을
								경우 지체 없이 회사에게 이러한 사실을 [서면 또는 전자우편]의 방법으로 통지하여 알려야 합니다.</li>
							<li>회원은 회원정보를 제3자가 양도, 대여, 이용하도록 하여서는 아니 됩니다.</li>
							<li>회원은 제3자에 의해 회원정보가 도용되거나 사용되고 있음을 인지한 경우에는 이를 즉시 회사에 제4항과
								같은 방법으로 통지하고 회사의 안내에 따라야 합니다.</li>
							<li>제4항과 제6항의 경우에 해당 회원이 회사에 그 사실을 통지하지 않거나, 통지한 경우에도 회사의
								안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임을 지지 않습니다.&nbsp;</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 11 조 회원정보의 변경</strong>
						</p>
						<ul>
							<li>회원은 서비스 내 “회원정보” 화면을 통하여 회원의 정보를 열람하고 수정할 수 있습니다. 다만,
								서비스의 제공 및 관리를 위해 필요한 실명, 주민등록번호, 아이디 등은 수정이 불가능할 수 있습니다.</li>
							<li>회원은 회원가입신청 시 입력한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로
								회사에 대하여 그 변경사항을 알려야 하며, 이와 같이 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는
								책임지지 않습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 12 조 회원에 대한 통지</strong>
						</p>
						<ul>
							<li>회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 서비스 내 전자우편주소,
								전자쪽지 등으로 할 수 있습니다.</li>
							<li>회사는 회원 전체에 대한 통지의 경우 7일 이상 회사의 게시판에 게시함으로써 제1항의 통지에 갈음할
								수 있습니다.&nbsp;</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 13 조 정보의 제공 및 광고의 게재</strong>
						</p>
						<ul>
							<li>회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로
								회원에게 제공할 수 있습니다. 다만, 회원은 관계법령에 따른 거래 관련 정보 및 고객문의 등에 대한 답변 등을
								제외하고는 언제든지 전자우편의 수신에 대하여 거절할 수 있습니다.</li>
							<li>제1항의 정보를 전화 및 모사전송기기에 의하여 전송하려고 하는 경우에는 회원의 사전 동의를 받아서
								전송합니다. 다만, 회원의 거래관련 정보 및 고객문의 등에 대하여 회사가 회신을 하는 경우에는 제외됩니다.</li>
							<li>회사는 서비스화면, 홈페이지, 전자우편 등에 회사 또는 제휴업체의 광고를 게재할 수 있습니다. 다만,
								회원은 광고가 게재된 전자우편의 수신에 대하여 거절할 수 있습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 14 조 게시물의 관리 등</strong>
						</p>
						<ul>
							<li>회원이 홈페이지 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다. 다만 회사와의
								별도 계약이나 협의에 따라 게시물의 제작 행위 주체자에게 저작권이 귀속 될 수 있습니다.</li>
							<li>회원이 홈페이지 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션 등에 의해 노출될 수
								있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우 회사는
								저작권법 규정을 준수하며, 회원은 회사의 고객센터 또는 서비스 내 관리기능을 통해 해당 게시물에 대해 삭제,
								검색결과 제외, 비공개 등의 조치를 회사가 정한 절차에 따라 요구할 수 있습니다.</li>
							<li>회사는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우에는 회원의 동의를 받습니다.</li>
							<li>회원의 게시물이 정보통신망법 및 저작권법 등 관계법령에 위반되는 내용을 포함하거나 권리침해가 인정될
								만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에 회사는 삭제, 비공개 등의 조치를 취할 수
								있습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 15 조 권리의 귀속</strong>
						</p>
						<ul>
							<li>서비스에 대한 저작권 및 지적재산권은 회사에 귀속됩니다. 다만, 회원의 게시물 및 제휴계약에 따라
								제공된 저작물 등은 제외됩니다.</li>
							<li>회사는 서비스와 관련하여 회원에게 본 약관에 따라 "아이디", “콘텐츠” 등을 포함한 서비스를 이용할
								수 있는 이용권한만을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							&nbsp;<strong>제 16 조 책임제한</strong>
						</p>
						<ul>
							<li>개별약관에서 개별 서비스에 관한 회사의 책임범위를 별도로 정한 경우 그에 따릅니다.</li>
							<li>회사는 천재지변 또는 이에 준하는 불가항력, 정보통신설비상의 문제(보수, 점검, 교체, 고장,
								통신두절 등)으로 인하여 서비스를 원활하게 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
							<li>회사는 제3자 또는 회원의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지
								않습니다.</li>
							<li>회사는 회원이 홈페이지에 게재한 정보, 자료, 사실에 대하여 신뢰도, 정확성 등을 보증하지 않으며,
								회사의 고의 또는 과실이 없는 한 회원이 이를 신뢰함에 따라 입은 손해에 대하여 책임을 지지 않습니다.</li>
							<li>회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 개별적으로 거래 등을 한 경우에는
								책임을 지지 않습니다.</li>
							<li>회사는 무료로 제공되는 서비스 이용과 관련하여 관계법령에 특별한 규정이 없는 한 책임을 지지
								않습니다.</li>
							<li>회사는 독자적으로 운영되는 회사의 서비스 화면과 링크 등으로 연결된 사이트를 운영하는 법인(이하
								“피연결회사”) 또는 홈페이지에 게재되어 있거나 회사의 제휴업체와 회원과 사이에 이루어진 교신, 거래 및 이로 인해
								발생한 손해, 손실 등에 대하여 책임을 지지 않습니다.</li>
							<li>회사는 피연결회사가 온라인 또는 오프라인을 통해 제공하는 정보나 서비스에 대하여는 일체의 책임을 지지
								않습니다.</li>
						</ul>
						<p>
							<strong>제 17 조 약관의 게시와 개정</strong>
						</p>
						<ul>
							<li>회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
							<li>회사는 약관의 규제에 관한 법률, 정보통신망법 등 관계법령을 위반하지 않는 범위에서 본 약관을 개정할
								수 있습니다.</li>
							<li>회사가 약관을 개정할 경우에는 적용일자를 명시하여 제1항의 방법에 따라 그 개정약관을 [7]일 이상
								공지합니다. 다만, 회원에게 불리한 내용으로 약관의 개정이 있는 경우에는 공지 외에 일정기간 서비스 내 전자우편,
								전자쪽지, 로그인시 동의창 등의 전자적 수단을 통해 따로 명확히 통지하도록 합니다.</li>
							<li>회사가 제3항에 따라 개정약관을 공지 또는 통지하면서 회원에게 [5]일 기간 내에 의사표시를 하지
								않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를
								하지 아니한 경우 회원이 개정약관에 동의한 것으로 봅니다.</li>
							<li>회원이 개정약관의 적용에 동의하지 않는 경우 회사는 개정약관의 내용을 적용하지 않으며, 이 경우
								회원은 제7조에서 정한 바에 따라 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이
								있는 경우에는 회사가 동의하지 않은 회원과의 이용계약을 해지할 수 있습니다.</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 18 조 약관의 효력 및 해석</strong>
						</p>
						<ul>
							<li>회사는 회사가 제공하는 개별 서비스에 대해서는 별도의 이용약관 및 운영정책, 세부지침(이하 "개별약관
								등")을 둘 수 있으며, 해당 내용이 본 약관과 상충할 경우에는 "개별약관 등"이 우선하여 적용됩니다.</li>
							<li>본 약관에서 정하지 아니한 사항이나 해석에 대해서는 "개별약관 등" 및 관계법령 또는 상 관례에
								따릅니다.&nbsp;</li>
						</ul>
						<p>&nbsp;</p>
						<p>
							<strong>제 19 조 준거법 및 재판관할</strong>
						</p>
						<ul>
							<li>회사와 회원 간 제기된 소송은 대한민국법을 준거법으로 합니다.</li>
							<li>회사와 회원 간 발생한 분쟁에 관한 소송은 민사소송법에 따른 전속적 합의관할에 따라 대한민국
								서울중앙지방법원을 전속적 관할법원으로 합니다.</li>
						</ul>
					</div>
					<div class="crowdy-login-agreeContainer">
						<label class="crowdy-check-container01 crowdy-login-agreeText">CROWDY
							이용약관(필수) <input class="check" type="checkbox"> <span
							class="crowdy-check-mark01"></span>
						</label>
						<div class="crowdy-login-paperShow">전문보기</div>
					</div>
					<!---->
					<div class="crowdy-login-agreeContainer">
						<label class="crowdy-check-container01 crowdy-login-agreeText">개인정보
							취급방침(필수) <input class="check" type="checkbox"> <span
							class="crowdy-check-mark01"></span>
						</label>
						<div class="crowdy-login-paperShow">전문보기</div>
					</div>
					<!---->
					<div class="crowdy-login-agreeContainer">
						<label class="crowdy-check-container01 crowdy-login-agreeText">크라우디의
							소식과 다양한 안내(선택) <input class="check" type="checkbox" checked="checked">
							<span class="crowdy-check-mark01"></span>
						</label>
					</div>
				</div>
				<hr class="mt20">
				
				<div id="socialLogin">
				<div class="crowdy-btn-03 mt35 xs-mt25">
					<div class="crowdy-btn-centerLayout">
						<div class="crowdy-facebook-icon" style="margin-right: 10px;"></div>
						<div>페이스북으로 회원가입</div>
					</div>
				</div>
				<div class="displayFlex mt20 xs-mt15">
					<div class="crowdy-btn-03 mr15 xs-mr10">
						<div class="crowdy-btn-centerLayout">
							<div class="crowdy-kakao-icon" style="margin-right: 10px;"></div>
							<div>카카오로 회원가입</div>
						</div>
					</div>
					<div class="crowdy-btn-03">
						<div class="crowdy-btn-centerLayout">
							<div class="crowdy-naver-icon" style="margin-right: 10px;"></div>
							<div>네이버로 회원가입</div>
						</div>
					</div>
				</div>
				<div class="mt30 xs-mt10">
					<hr class="crowdy-login-hr">
					<span class="crowdy-login-txtWidth">또는</span>
					<hr class="crowdy-login-hr">
				</div>
				</div>	<!-- 소셜로그인 끝 -->
<script type="text/javascript">

	function checkClick(){
		
		$("#checkboxAll").click(function(){
			if($("input:checkbox[id=checkboxAll]").prop("checked")){
				$("input[type=checkbox]").prop("checked", true);
			} else{
				$("input[type=checkbox]").prop("checked", false);
			}
		});
	}
		
</script>
				
	<div id="eSign" onclick="phoneAuth();" class="crowdy-btn-03 mt30 xs-mt5">이메일로 회원가입</div>
<script>
	function phoneAuth(){
		
		var social = document.getElementById("socialLogin");
		
		if(social.style.display == 'none'){
			social.style.display = 'block';
		} else{
			social.style.display = 'none';
		}
		
		var view = document.getElementById("phoneAuth");
		var eSign = document.getElementById("eSign");
		
		if(view.style.display == 'none'){
			view.style.display = 'block';
			eSign.style.display = "none";
		} else{
			view.style.display = 'none';
			eSign.style.display = "block";
		}
		
	}
</script>

	
<script type="text/javascript">
var csrfHeaderName = "${_csrf.headerName}";
var csrfTokenValue = "${_csrf.token}";

$(document).ajaxSend(function(e, xhr, options){
	xhr.setRequestHeader(csrfHeaderName, csrfTokenValue);
});

// 인증번호
var authNum = 0;
$(function(){
	$("#numAuth").click(function(){
		$.ajax({
			url : "/member/sendSMS",
			type : "POST",
			data : {
				phone : $("#phone").val()
			},
			success : function(result) {
				alert(result);
				authNum = result;
			}
		});
		console.log("성공");
		console.log(authNum);
	});
});	
</script>
		<!-- 이메일 회원가입 누를시 이벤트 처리 -->
	<div id="phoneAuth" style="display: none;">
	<div class="crowdy-login-desc2 mt30 xs-mt20 crowdy-font-bold">
	휴대폰 인증을 먼저 진행해 주세요.
	</div>
		<div id="numInput" class="crowdy-focus-change">
			<label class="crowdy-label-01 mt30">휴대폰번호 입력</label>
			<div class="displayFlex">
				<input type="text" autocomplete="new-password" pattern="[0-9]*"
					inputmode="numeric" maxlength="11" id="phone"
					placeholder="(-) 없이 휴대폰 번호를 입력해주세요!" class="crowdy-input-01 mb15">
				<div onclick="requestAuth();" id="numAuth" class="crowdy-login-request">인증번호 요청</div>
			</div>
		</div>
	</div>
		
		<script type="text/javascript">
			function requestAuth(){
				
				p = $("#phone").val();
				alert(p);
				var dis = document.getElementById("requestAuthClickAfter");
				
				if(dis.style.display == 'none'){
					dis.style.display = 'block';
				} else{
					dis.style.display = 'none';
				}
				
			}
		</script>
		
		<div id="requestAuthClickAfter" style="display: none;">
			<div class="crowdy-focus-change">
				<label class="crowdy-label-01">인증번호 입력</label>
				<div class="displayFlex">
					<input type="text" autocomplete="new-password" pattern="[0-9]*"
						inputmode="numeric" maxlength="11" class="crowdy-input-01"
						style="border-right: none;" id="mem_auth"> <span
						class="crowdy-login-timer">5:00</span>
				</div>
			</div>
			<div onclick="nextForm();" class="crowdy-btn-02 crowdy-btn-fixed mt30">다음</div>
		</div>
		
		<script type="text/javascript">
			function nextForm(){
				var mem_auth = $("#mem_auth").val();

				console.log(authNum);
				console.log(mem_auth);
				if(authNum != mem_auth){
					alert("인증번호가 다릅니다. 다시 입력 해주세요.");
				} else{
					requestAuth();
					memberForm();
					var numInput = document.getElementById("numInput");
					numInput.style.display = 'none';
					
				}
				
			}
		</script>
		
		<script type="text/javascript">
			function memberForm(){
				var memberForm = document.getElementById("memberForm");
				
				if(memberForm.style.display == 'none'){
					memberForm.style.display = 'block';
				} else{
					memberForm.style.display = 'none';
				}
			}
		</script>
	
	<script type="text/javascript">
		function signSubmit(){
			alert(p);
			var phoneValue = p;
			alert(phoneValue);
			var formPost = document.getElementById("signPost");
			formPost.tel.value = phoneValue;
			
			f.action="/member/signUpComplete";
			f.submit();
		}
	</script>
	
	<div id="memberForm" style="display: none;">
	<form id="signPost" action="/member/signUpComplete" method="post">
	<input type="hidden" name="${_csrf.parameterName }" value="${_csrf.token }"/>
	<input type="hidden" name="tel">
			<div class="crowdy-focus-change">
				<label class="crowdy-label-01 mt25 xs-mt15" for="memName">이름</label>
				<input type="text" id="memName" name="mem_name"
					class="crowdy-input-01" aria-required="true" aria-invalid="false">
				<!---->
			</div>

			<div class="crowdy-focus-change">
				<label class="crowdy-label-01 mt15" for="memEmail">이메일 (ID)</label>
				<input type="email" id="memEmail" name="email"
					placeholder="이메일(ID)을 입력하세요" class="crowdy-input-01"
					aria-required="true" aria-invalid="false">
				<!---->
			</div>

			<div class="crowdy-focus-change">
				<label for="memPwd" class="crowdy-label-01 mt15">비밀번호</label> <input
					type="password" id="memPwd" name="mem_pwd"
					placeholder="8자 이상의 글자와 숫자 조합으로 해주세요!" class="crowdy-input-01"
					aria-required="true" aria-invalid="false">
				<!---->
			</div>

			<div class="crowdy-focus-change">
				<label for="memPwdConfirm" class="crowdy-label-01 mt15">비밀번호
					확인</label> <input type="password" id="memPwdConfirm" name="memPwdConfirm"
					class="crowdy-input-01" aria-required="true" aria-invalid="false">
				<!---->
			</div>

			<button onclick="signSubmit();" class="crowdy-btn-02 crowdy-btn-fixed mt40">회원가입</button>
	</form>
	</div>
		<!---->
				<!---->
				<form name="form_chk" method="post">
					<input type="hidden" name="m" value="checkplusSerivce"> <input
						type="hidden" name="EncodeData" id="encodeData" value="">
					<input type="hidden" name="param_r1"
						value="accountSetting.authResult"> <input type="hidden"
						name="param_r2" value=""> <input type="hidden"
						name="param_r3" value="">
				</form>
		</div>

		<!-- 
		<footer th:replace="fragments/footer"></footer>
		 -->
		<div class="clearfix"></div>
		<!-- Channel Plugin Scripts -->
		<script>
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var d = window.document;
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "14395221-358d-4eaf-aa74-7af315752ed0"
  });
</script>
		<!-- End Channel Plugin -->

		<!-- <script>
  ;window.channelPluginSettings = {
    "pluginKey": "14395221-358d-4eaf-aa74-7af315752ed0"
  };
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var d = window.document;
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
</script> -->
	</div>



	<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","112654742726251");fbq("track","PageView");</script>
	<noscript>
		<img height="1" width="1" style="display: none"
			src="https://www.facebook.com/tr?id=112654742726251&amp;ev=PageView&amp;noscript=1">
	</noscript>




	<script type="text/javascript" id="">function fbqSearchKeyword(){var a=document.referrer;if(a){var b=document.createElement("a");b.setAttribute("href",a);a=/[\?&](?:q|query)=([^&#]*)/;if((a=b.search.match(a))&&0<a.length)var c=a[1].replace(/\+/gi,"%20");c&&fbq("trackCustom","SearchKeyword",{hostname:b.hostname,keyword:decodeURIComponent(c)})}}fbqSearchKeyword();</script>

	<script type="text/javascript" id="">(function(e,a){function f(b,a){b.prototype[a]=function(){this._q.push([a].concat(Array.prototype.slice.call(arguments,0)));return this}}function g(b){function a(a){b[a]=function(){b._q.push([a].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<h.length;c++)a(h[c])}var c=e.amplitude||{_q:[],_iq:{}},b=a.createElement("script");b.type="text/javascript";b.integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js";
b.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);b=function(){this._q=[];return this};a="add append clearAll prepend set setOnce unset".split(" ");for(var d=0;d<a.length;d++)f(b,a[d]);c.Identify=b;b=function(){this._q=[];return this};a=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(d=0;d<a.length;d++)f(b,a[d]);c.Revenue=b;var h="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
g(c);c.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();c._iq.hasOwnProperty(a)||(c._iq[a]={_q:[]},g(c._iq[a]));return c._iq[a]};e.amplitude=c})(window,document);amplitude.getInstance().init("88ee3f94796e2cd53036c329ca2a87ec",null,{includeGclid:!0,includeUtm:!0,includeReferrer:!0});</script>
	<div class="scrollToTop">
		<i class="fa fa-angle-up"></i>
	</div>
	<div id="ch-plugin">
		<div id="ch-plugin-core">
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div hidden="" class="sc-cpHetk bVBTPS sc-bhlBdH hzHIzx"
				style="z-index: 100000000 !important;">
				<div class="sc-crNyjn eeabcK">
					<div class="sc-dznXNo waCXL">
						<div name="cancel" size="16" width="44" height="44"
							class="sc-dEoRIm jzoonr"></div>
					</div>
					<div class="sc-gGCbJM cMKBjA">
						<div size="34" class="sc-kpOJdX jfaPvB"></div>
						<div class="sc-ciodno hXDmKN">(알 수 없음)</div>
						<div class="sc-ekulBa hNjHKx">9:00am</div>
					</div>
					<div class="sc-jkCMRl eEDaVW">
						<div class="sc-lcpuFF fzkLGk"></div>
					</div>
				</div>
			</div>
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div size="300" class="sc-htpNat kKcMqw"></div>
			<div class="sc-ifAKCX eyavPk">
				<div class="sc-EHOje hgcFAI">
					<div class="sc-bZQynM kfhBdd textLauncherContent">문의하기</div>
					<div class="sc-gzVnrw dUfzXY textLauncherIcon">
						<div hidden="" class="sc-bxivhb sc-dnqmqq fwAFts">0</div>
					</div>
				</div>
			</div>
		</div>
		<div id="ch-plugin-script" style="display: none"
			class="ch-messenger-hidden">
			<iframe id="ch-plugin-script-iframe"
				style="position: relative !important; height: 100% !important; width: 100% !important; border: none !important;"></iframe>
		</div>
	</div>
	<style data-styled="" data-styled-version="4.4.1"></style>
	<div id="fb-root" class=" fb_reset">
		<div
			style="position: absolute; top: -10000px; width: 0px; height: 0px;">
			<div></div>
		</div>
	</div>
</body>
</html>