package com.cch.demo.controller;

import java.net.URI;
import java.net.URISyntaxException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cch.demo.service.BaseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@Api(value = "this is api on the class top")
@RestController
@RequestMapping("/api")
@CrossOrigin
public class MyRestController {

	@Autowired
	private BaseService service;
	
	@ApiOperation(value = "index", notes = "this is index request")
	@RequestMapping(value = "/", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
	public String index(Model model) {
		model.addAttribute("userName", "cgycch");
		return "index";
	}

	@ApiOperation(value = "get info", notes = "this is get info")
	@RequestMapping(value = "/baseInfo", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String getBaseInfo(Model model) {
		System.out.println("##################### getBaseInfo()");
		String baseInfo = service.getBaseEntity();
		model.addAttribute("baseInfo", baseInfo);
		return "index";
	}

	@ApiOperation(value = "query info", notes = "this is query info")
	@ApiImplicitParams({
			@ApiImplicitParam(name = "key1", value = "key one", required = true, paramType = "query", dataType = "String") })
	@RequestMapping(value = "/user", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
	public String queryUser(@RequestParam("key1") String key1) {
		System.out.println("##################### queryUser() " + key1);
		return "hello my friend";
	}
	
	@ApiOperation(value = "redirectMethod", notes = "mock reditect to baidu.com")
	@RequestMapping(value = "/mock/302/redirect", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
	public ResponseEntity<String> redirectMethod(HttpServletRequest request, HttpServletResponse response) throws URISyntaxException {
		System.out.println("redirectMethod...");
//		System.out.println("##################### redirectMethod request" + request);
//		System.out.println("##################### redirectMethod response" + response);
		//return ResponseEntity.status(HttpStatus.FOUND).location(new URI("http://localhost:8080/rest/api/mock/newurl")).body("{\"key\":\"api is /mock/302/redirect\"}");
		return ResponseEntity.status(HttpStatus.FOUND).location(new URI("https://www.baidu.com/")).body("{}");
		//return ResponseEntity.status(HttpStatus.OK).body("{\"key\":\"value\"}");
	}
	
	@ApiOperation(value = "redirectUrl", notes = "mock reditect url")
	@RequestMapping(value = "/mock/newurl", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
	public String redirectUrl() {
		System.out.println("redirectUrl...");
		return "{\"key\":\"api is /mock/newurl\"}";
	}
}
