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
                "}]";
        final HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<String>(json, header, HttpStatus.OK);
    }
}