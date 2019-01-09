package prototype;
import java.util.*;

public class Manger{
	HashMap hashMap = new HashMap();
	public void put(String name, Proto object){
		hashMap.put(name, object);
	}

	public Proto getCloneData(String key){
		Proto findProto = (Proto)hashMap.get(key);
		return findProto.cloneObject();
	}
}