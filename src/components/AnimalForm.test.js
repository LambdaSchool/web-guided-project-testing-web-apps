import { render, screen } from "@testing-library/react";
import React from "react";
import AnimalForm from "./AnimalForm";

test("AnimalForm component renders without blowing up", () => {
    render(<AnimalForm />);
});

test("User can add a new animal by filling out the form", () => { 
    // Arrange: render & grab the elements we need
    render(<AnimalForm />);

    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);
    const submitButton = getByRole('button', { name: /submit/i });

    // Act: fill out the form and click the button

    // Assert
});