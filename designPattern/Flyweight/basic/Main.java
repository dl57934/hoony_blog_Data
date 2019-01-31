import java.io.*;

public class Main{
	public static void main(String[] args) throws Exception{
		BufferedReader bfr = new BufferedReader(new InputStreamReader(System.in));
		String strname = bfr.readLine();
		BigString bs = new BigString(strname);
		bs.print();
	}
}