package structural.flyweightPatternJava;

import java.util.HashMap;

public class FlyweightFactory {
    private HashMap<String, Flyweight> flyweights = new HashMap<String, Flyweight>();

    public Flyweight getFlyweight(String key, String base64Code) {
        if(!flyweights.containsKey(key)) {
            flyweights.put(key, new Flyweight(base64Code));
        }
        return flyweights.get(key);
    }
}
