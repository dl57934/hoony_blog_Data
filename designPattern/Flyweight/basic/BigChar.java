import java.io.*;

public class BigChar{
	private String fontdata;

	public BigChar(char charname){
		try{
			BufferedReader reader = new BufferedReader(
				new FileReader("big"+charname+".txt")
			);
			String line;
			StringBuilder buf = new StringBuilder();
			while((line = reader.readLine()) != null){
				buf.append(line);
				buf.append("\n");
			}
			reader.close();
			this.fontdata = buf.toString();
		}catch(IOException e){
			this.fontdata = charname+"?";
		}
	}

	public void print(){
		System.out.print(fontdata);
	}
}