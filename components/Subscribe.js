import React, { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    // const res = await fetch('/api/subscribe', {
    //   body: JSON.stringify({
    //     email: inputEl.current.value
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // });

    // const { error } = await res.json();

    // if (error) {
    //   // 4. If there was an error, update the message in state.
    //   setMessage(error);

    //   return;
    // }
    try {
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        console.log("listid, apikey is: ",LIST_ID, API_KEY);
        // 4. API keys are in the form <key>-us3.
        const DATACENTER = API_KEY.split('-')[1];
    
        // 5. The status of 'subscribed' is equivalent to a double opt-in.
        const data = {
          email_address: inputEl.current.value,
          status: 'subscribed'
        };
        console.log("data is",data);
    
        // 6. Send a POST request to Mailchimp.
        const response = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
          {
            body: JSON.stringify(data),
            headers: {
              Authorization: `apikey ${API_KEY}`,
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        );
    
        // 7. Swallow any errors from Mailchimp and return a better error message.
        if (response.status >= 400) {
          console.log( `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`);
        }
    
        // 8. If we made it this far, it was a success! 🎉
      } catch (error) {
          console.log("Error is occured");
        return false;
      }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Email Address'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        required
        type="email"
      />
      <div>
        {message
          ? message
          : `I'll only send emails when new content is posted. No spam.`}
      </div>
      <button type="submit">{'✨ Subscribe 💌'}</button>
    </form>
  );
}