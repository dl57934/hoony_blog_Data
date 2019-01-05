class Main{
	public static void main(String[] args){
		Singleton obj1 = Singleton.getInstance();
		Singleton obj2 = Singleton.getInstance();
		
		if(obj1.equals(obj2)){
			System.out.println("동일하다");
		}
		else {
			System.out.println("다르다");
		}
		System.out.println("END");
	}
}