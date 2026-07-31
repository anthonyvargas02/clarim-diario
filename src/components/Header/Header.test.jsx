import {render, screen} from '@testing-library/react' 
import { MemoryRouter } from 'react-router-dom'
import {AuthProvider} from '../../contexts/AuthContext'
import Header from './Header'
import { beforeEach, describe, expect } from 'vitest'

function renderizarHeader(){
    render(
        <MemoryRouter>
            <AuthProvider>
                <Header trma="light" aoAlternarTema={() => {}}/>
            </AuthProvider>
        </MemoryRouter>
    )
}

describe('Header', () => {
    beforeEach(() => localStorage.clear())

    it('mostra o link quando ninguém está logado', () =>{
        renderizarHeader()
        expect(screen.getByText('Entrar')).toBeInTheDocument()
    })

    it('mostra a saudação quando há usuário salvo', () =>{
        localStorage.setItem('usuario', JSON.stringify({nome: 'Anthony'}))

        renderizarHeader()
        expect(screen.getByText(/Anthony/)).toBeInTheDocument()
    })
})