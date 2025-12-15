import React from "react";
export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6f0d6bbb-3377-4448-92ed-05bbd11c389a");

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
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "3rem" }}>
          <label htmlFor="name-input" style={{fontWeight:"bold"}}>Name:</label>
          <input id="name-input" type="text" name="name" required />

          <label htmlFor="email-input" style={{fontWeight:"bold", paddingTop:"0.5rem"}}>Email address:</label>
          <input id="email-input" type="email" name="email" required />

          <label htmlFor="message-input" style={{fontWeight:"bold", paddingTop:"0.5rem"}}>Message:</label>
          <textarea
            id="message-input"
            name="message"
            required
            rows="4"
            style={{ resize: "vertical" }}
          ></textarea>
          <button
            type="submit"
            style={{ marginTop: "1rem", padding: "0.5rem", cursor: "pointer" }}
          >
            Submit Form
          </button>
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
}
