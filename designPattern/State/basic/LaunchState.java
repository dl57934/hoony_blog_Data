
public class LaunchState implements State{
	private static LaunchState singleton = new LaunchState();
	private LaunchState(){}
	public void doClock(Context context, int hour){
		if(hour==13)
			context.changeState(DayState.getInstance());
	}
	public void doUse(Context context){
		context.callSecurity("비상: 점심시간금고 사용!");
	}
	public void doAlarm(Context context){
		context.callSecurity("비상벨(점심)");
	}
	public void doPhone(Context context){
		context.callSecurity("경비센터 자동응답기 호출");
	}
	public static LaunchState getInstance(){
		return singleton;
	}
	public String toString(){
		return "[점심시간]";
	}
}