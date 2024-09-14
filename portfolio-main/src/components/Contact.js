import React from "react";
import './css/Api.css';
function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "69970d9c-cf60-4bd8-b4bd-3714de95f458");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required className="form-input" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" required className="form-textarea"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Form</button>
      </form>
      <span className="result-message">{result}</span>
    </div>
  );
}

export default App;