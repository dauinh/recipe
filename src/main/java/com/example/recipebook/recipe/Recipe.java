package com.example.recipebook.recipe;

import jakarta.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {
    private @Id @GeneratedValue Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	@Column(name = "ingredients", columnDefinition = "TEXT")
	private String ingredients;

	@Column(name = "instruction", columnDefinition = "TEXT")
	private String instruction;
	// private String cookTime;
	// private int numStep;

	private Recipe() {}
	
	public Recipe(String title, String description, String ingredients, String instruction) {
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

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getInstruction() {
		return instruction;
	}

	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}

}
