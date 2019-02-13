public class Main{
	public static void main(String[] args){
		Mediator mediator = new MediatorImpl();
		User minsoo = new User("MinSoo", mediator);
		User jihoon = new User("JiHoon", mediator);
		User sanghoon = new User("SangHoon", mediator);

		minsoo.sendMessage("안녕 상훈아!!", sanghoon);
		minsoo.sendMessage("단체 공지: 금일 7시에 회의가 있겠습니다.", null);
	}
}