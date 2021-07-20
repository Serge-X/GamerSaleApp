import  React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'

export const Searchbar = () => {
    return (
        <div id="searchBar">
            <InputGroup>
                <FormControl 
                    placeholder="Search Games"
                />
                <Button >
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}
