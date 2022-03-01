package com.adszilla.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication(scanBasePackages = "com.adszilla")
public class AdsZillaServer {
	public static void main(String[] args) {
		SpringApplication.run(AdsZillaServer.class, args);
	}
}
