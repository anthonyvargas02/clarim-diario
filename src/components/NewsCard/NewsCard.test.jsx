import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsCard from "./NewsCard";
import { describe, expect } from "vitest";

describe('NewsCard', () => {
    it('Mostra a categoria e o título recebido por props', () => {
    render(
        <MemoryRouter>
            <NewsCard id={1} categoria="Cidade" titulo="Metrô terá horário estendido"/>
        </MemoryRouter>
    )

    expect(screen.getByText('Cidade')).toBeInTheDocument()
    expect(screen.getByText('Metrô terá horário estendido')).toBeInTheDocument()
    
})

})