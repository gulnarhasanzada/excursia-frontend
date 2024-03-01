
import { render, screen } from "@testing-library/react"
import Search from "./Search"

describe('Search component', ()=>{
    test('renders Anywhere as a text', ()=>{
        render(<Search/>);
        expect(screen.getByText('Anywhere')).toBeInTheDocument()
    })

    test('renders Any Week as a text', ()=>{
        render(<Search/>);
        expect(screen.getByText('Any Week')).toBeInTheDocument()
    })

    test('renders Add Guests as a text', ()=>{
        render(<Search/>);
        expect(screen.getByText('Add Guests')).toBeInTheDocument()
    })
})