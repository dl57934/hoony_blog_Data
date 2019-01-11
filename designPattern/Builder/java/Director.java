public class Director{
	Builder builder;

	public Director(Builder builder){
		this.builder = builder;
	}

	public void constructor(){
		builder.setTitle("Greeting");
		builder.setText("아침과 저녁에는");
		builder.setItem(new String[]{
			"안녕하세요",
			"좋은 아침입니다."
			});
		builder.setText("저녁에는");
		builder.setItem(new String[]{
			"안녕하세요",
			"안녕히 주무세요",
			"저녁 드셨나요?"
			} );
		builder.close();
	}
}