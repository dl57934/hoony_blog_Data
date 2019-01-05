package tv;

import framework.*;
import java.util.*;

public class TvFactory extends Factory{
	List <TvProduct> tvs = new ArrayList();

	public TvProduct createTV(String company, String characteristic, String name){
		switch(company){
			case "SamSung":
				return new SamsungTV(name, characteristic);
				
			case "LG":
				return new LgTV(name, characteristic);
				
			case "Sony":
				return new Sony(name, characteristic);	
				
		}
		return new LgTV(name, characteristic);
	}
	public void registerTV(TvProduct tv){
		tvs.add(tv);
	}
}