package com.cch.demo.service.impl;

import org.springframework.stereotype.Service;

import com.cch.demo.domain.BaseEntity;
import com.cch.demo.service.BaseService;

@Service
public class BaseServiceImpl implements BaseService{

	@Override
	public String getBaseEntity() {
		return new BaseEntity().toString();
	}

}
