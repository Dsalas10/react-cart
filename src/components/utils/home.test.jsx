import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../home/Home";

// Mockear el componente Products

describe("Home Component", () => {
  test("renders Home component with heading, text, and button", () => {
    render(<Home />);

    // Verificar que el título esté en el documento
    expect(screen.getByText(/food made with love/i)).toBeInTheDocument();
    // Verificar que el botón esté en el documento
    expect(screen.getByText(/order now/i)).toBeInTheDocument();

    console.log(screen.debug()); // Esto imprimirá el HTML renderizado en la consola
  });
});
