public class DayState implements State{
	private static DayState singleton = new DayState();
	private DayState(){}

	public void doClock(Context context, int hour){
		if(hour<9 || hour>=17)
			context.changeState(NightState.getInstance());
		else if(hour==12)
			context.changeState(LaunchState.getInstance());
	}
	public void doUse(Context context){
		context.recordLog("금고 사용(주간)");
	}
	public void doAlarm(Context context){
		context.callSecurity("비상벨(주간)");
	}
	public void doPhone(Context context){
		context.callSecurity("일반통(주간)");
	}
	public static DayState getInstance(){
		return singleton;
	}
	public String toString(){
		return "[주간]";
	}
}