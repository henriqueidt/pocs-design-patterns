package structural.flyweightPatternJava;

public class Image {
  private String location;
  private Flyweight data;

  public Image(String location, Flyweight data) {
    this.location = location;
    this.data = data;
  }

  public String getLocation() {
    return location;
  }

  public Flyweight getData() {
    return data;
  }
}
