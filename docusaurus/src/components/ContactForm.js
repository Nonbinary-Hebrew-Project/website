import React from "react"
export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3e6c3aea-9f96-41af-bcb1-b70fdda24ef6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
        <div style={{display:"flex", flexDirection: "column"}}>

        Name:
        <input type="text" name="name" required/>
        Email:
        <input type="email" name="email" required/>
        Message:
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>
        </div>

      </form>
      <span>{result}</span>

    </div>
  );
}