import  React from 'react'
// import { Button, FormControl } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export const Searchbar = () => {
    return (
        <div  >
            <InputGroup size="sm" id="putGroup"  >
                <FormControl 
                    id="bar"
                    placeholder="Search Games"
                    aria-label="Search Games"
                />
                <Button id="searchButton">
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}
