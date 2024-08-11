import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Mike",
      position: "Student",
      message:
        "The fact that the assignments are graded means that there’s incentive to work on them, solve problems, and ask questions",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgt9DJg2NwSx3TMoQIfBG0RFrHHkKzpHI9w&s",
    },
    {
      id: 4,
      name: "Sara",
      position: "Student",
      message:
        "The course exceeded my expectations especially in the depth of information supplied and the access to the instructor for feedback ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnnzte7_Hoq5Wo8pgn0E7Q0vZ-82hQ7MhEQ&s",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;