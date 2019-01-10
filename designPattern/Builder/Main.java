public class Main{
	public static void main(String[] args){
		TextBuilder textBuilder = new TextBuilder();
		Director director = new Director(textBuilder);
		director.constructor();
		String result = textBuilder.getResult();
		System.out.println(result);
	}
}