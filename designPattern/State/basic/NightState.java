public class NightState implements State{
	private static NightState singleton = new NightState();

	private NightState(){}

	public void doClock(Context context, int hour){
		if(9 <= hour && hour<17)
			context.changeState(DayState.getInstance());
	}
	public void doUse(Context context){
		context.callSecurity("비상: 야간금고 사용!");
	}
	public void doAlarm(Context context){
		context.callSecurity("비상벨(야간)");
	}	
	public void doPhone(Context context){
		context.recordLog("야간통화 녹음");
	}

	public static NightState getInstance(){
		return singleton;
	}
	public String toString(){
		return "[야간]";
	}
}	