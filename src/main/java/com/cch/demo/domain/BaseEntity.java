package com.cch.demo.domain;

public class BaseEntity {

	private String id;
	private String name;
	private String phone;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "BaseEntity [id=" + id + ", name=" + name + ", phone=" + phone + "]";
	}

}
