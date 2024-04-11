package com.example.recipebook.recipe;

import org.springframework.web.bind.annotation.RequestMapping;

public class RecipeController {
    @RequestMapping(value = "/")
	public String index() {
		return "index";
	}
}
