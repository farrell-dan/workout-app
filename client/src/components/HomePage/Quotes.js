import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Quotes = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
      const fetchRandomQuote = async () => {
        try {
          const response = await fetch('/api/random-quote'); 
          const data = await response.json();
          setQuote(data.quote); 
        } catch (error) {
          console.error('Error fetching random quote:', error);
        }
      };

      fetchRandomQuote();
    }, []);
  

    console.log(quote)

    return (

        
      <div>
        {<Container>{quote}</Container>}
      </div>
    );
  };



export default Quotes;

const Container =styled.p`
display: flex;
;
`