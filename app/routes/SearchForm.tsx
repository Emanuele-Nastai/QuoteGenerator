import React from "react";

export default function SearchForm() {
  const [quote, setQuote] = React.useState([] as any);
    async function sendRequest(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${event.target[0].value}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': '2zDImS1XlyI9ZtjBaZMWGg==ZYN5E07AvYkVONOH'
        }
    });
      if (response) {
        await response.json().then((data) => {
          setQuote(data);
        });
      } else {
        console.log("non sus :(( mi devo svegliare in questo momento");
      }
    }
    return (
      <div>
        <form onSubmit={sendRequest}>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
        <div>
          {quote && quote.length > 0 && (
            <div>
              <h2>{quote[0].quote}</h2>
              <p>{quote[0].author}</p>
            </div>
          )}
        </div>
    </div>
    )
}