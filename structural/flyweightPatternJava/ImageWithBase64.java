package structural.flyweightPatternJava;

public class ImageWithBase64 {

    private String location;
    private String base64Code;

    public ImageWithBase64(String location, String base64Code) {
        this.location = location;
        this.base64Code = base64Code;
    }

    public String getLocation() {
        return location;
    }

    public String getBase64Code() {
        return base64Code;
    }
}