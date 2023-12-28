import React, { useState, useEffect } from "react";

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
        <h1>Random Quote</h1>
        {quote && <p>{quote}</p>}
      </div>
    );
  };



export default Quotes;