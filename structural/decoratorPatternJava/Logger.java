package structural.decoratorPatternJava;

import java.util.Date;

public class Logger {
  public static void log(String message) {
    System.out.printf("Log: " + message, new Date().toString());
  }
}
