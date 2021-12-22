package fr.univlille.ulillexplore;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaticFile {
    @GetMapping("/.well-known/assetlinks.json")
    public ResponseEntity<String> getAssertLingks() {
        String json = "[{\n" +
                "  \"relation\": [\"delegate_permission/common.handle_all_urls\"],\n" +
                "  \"target\": {\n" +
                "    \"namespace\": \"android_app\",\n" +
                "    \"package_name\": \"com.e.ulillexplore\",\n" +
                "    \"sha256_cert_fingerprints\":\n" +
                "    [\"F6:A0:06:0D:70:5C:44:A7:0F:6F:07:17:E0:F9:3D:CB:89:74:8E:73:69:5A:BB:E6:8D:D2:C8:19:C0:8E:4C:53\"]\n" +
                "  }\n" +
                "}]";
        final HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<String>(json, header, HttpStatus.OK);
    }
}