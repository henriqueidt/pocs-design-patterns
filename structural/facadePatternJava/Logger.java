package structural.facadePatternJava;

import java.util.Date;

public class Logger {
    public void log(String message) {
      System.out.printf("{\n\t\"message\": \"%s\",\n\t\"date\": \"%s\"\n}\n", message, new Date().toString());
    }
}
