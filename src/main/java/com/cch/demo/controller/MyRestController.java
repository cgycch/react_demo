package com.cch.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
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
}
