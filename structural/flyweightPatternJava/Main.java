package structural.flyweightPatternJava;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {
    public static void main(String[] args) {

      String birdImageCode = Base64Codes.birdImageCode;
      String eyeImageCode = Base64Codes.eyeImageCode;
      String solidImageCode = Base64Codes.solidImageCode;

      List<Image> images = new ArrayList<>();
      List<ImageWithBase64> imagesWithBase64 = new ArrayList<>();

      Runtime runtime = Runtime.getRuntime();
      runtime.gc();

      FlyweightFactory factory = new FlyweightFactory();

      // for (int i = 0; i < 1000000; i++) {
      //   int randomNumber = generateRandomNumber();
      //   Flyweight flyweight = null;
      //   if(randomNumber == 3) {
      //     flyweight = factory.getFlyweight("bird", birdImageCode);
      //   } else if (randomNumber == 2) {
      //     flyweight = factory.getFlyweight("eye", eyeImageCode);
      //   } else {
      //     flyweight = factory.getFlyweight("solid", solidImageCode);
      //   }

      //   Image image = new Image("location", flyweight);
      //   images.add(image);
      // }

      // for (int i = 0; i < 1000000; i++) {
      //   System.out.println(images.get(i).getData().getData().charAt(2));
      // }

      for (int i = 0; i < 1000000; i++) {
        int randomNumber = generateRandomNumber();
        ImageWithBase64 image = null;
        if(randomNumber == 3) {
          image = new ImageWithBase64("location1", birdImageCode);
        } else if (randomNumber == 2) {
          image = new ImageWithBase64("location2", eyeImageCode);
        } else {
          image = new ImageWithBase64("location3", solidImageCode);
        }
        imagesWithBase64.add(image);
      }

      for (int i = 0; i < 1000000; i++) {
        System.out.println(imagesWithBase64.get(i).getBase64Code().charAt(2));
      }

      long memory = runtime.totalMemory() - runtime.freeMemory();
      System.out.println("Used memory in bytes: " + memory);
      System.out.println("Used memory in megabytes: " + bytesToMegabytes(memory));
    }

  private static long bytesToMegabytes(long bytes) {
    final long MEGABYTE = 1024L * 1024L;
    return bytes / MEGABYTE;
  }

  private static int generateRandomNumber() {
    Random random = new Random();
    return random.nextInt(3) + 1;
  }
}
