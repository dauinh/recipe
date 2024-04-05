package com.example.recipebook.recipe;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final RecipeRepository repository;

    @Autowired
    public DatabaseLoader(RecipeRepository repository) {
		this.repository = repository;
	}

    @Override
    public void run(String... args) throws Exception {
        String title = "Chocolate milk";
        String description = "Delicious drink";
        ArrayList<String> ingredients = new ArrayList<>(Arrays.asList("200gr dark chocolate", "500ml milk", "100ml heavy cream"));
        String instruction = "1. Heat chocolate \n2. Pour milk and heavy cream when hot";
        this.repository.save(new Recipe(title, description, ingredients, instruction));
    }
    
}
