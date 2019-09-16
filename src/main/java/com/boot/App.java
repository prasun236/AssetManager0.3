package com.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello world!
 *
 */
@SpringBootApplication
public class App 
{
    public static void main( String[] args ) {
        SpringApplication.run(App.class, args);
    }
}

/*http://localhost:9090/index.html#/
 * http://localhost:9090/
 * http://localhost:9090/api/v1/shipwrecks/1
 */