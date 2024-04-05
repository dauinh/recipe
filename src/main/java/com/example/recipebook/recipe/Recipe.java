package com.example.recipebook.recipe;

import java.util.ArrayList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Recipe {
    private @Id @GeneratedValue Long id;
	private String title;
	private String description;
	private ArrayList<String> ingredients;
	private String instruction;
	// private String cookTime;
	// private int numStep;

	private Recipe() {}
	
	public Recipe(String title, String description, ArrayList<String> ingredients, String instruction) {
		this.title = title;
		this.description = description;
		this.ingredients = ingredients;
		this.instruction = instruction;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ArrayList<String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(ArrayList<String> ingredients) {
		this.ingredients = ingredients;
	}

	public String getInstruction() {
		return instruction;
	}

	public void setInstruction(String instruction) {
		this.instruction = description;
	}

}
