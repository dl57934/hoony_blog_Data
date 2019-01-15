public class Director{
	Builder builder;
	public Director(Builder builder){
		this.builder = builder;
	}

	public void constructor(){
		builder.makeTitle("구글 합격 축하드립니다.");
		builder.makeText("구글러가 되신걸 축하 드립니다.");
		builder.makeItem(new String[]{
			"세계적인 기업",
			"구글의 직원이 되신걸 축하드립니다."
		});
		builder.makeText("2021년 12월 까지 이곳으로 와주세요");
		builder.makeItem(new String[]{
			"역삼역 2번 출구",
			"피아낸스 빌딩 22층",
			"으로 오시기 바랍니다."
		});
		builder.close();
	}

	public String getDocuments(){
		return builder.result();
	}
}