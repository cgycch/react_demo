package com.cch.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration
@SpringBootApplication(scanBasePackages="com.cch.demo")
public class ReactDemoApplication {

	public static void main(String[] args) {
		System.out.println("react demo application is starting...");
		SpringApplication.run(ReactDemoApplication.class, args);
		System.out.println("react demo application is running...");
	}

}
