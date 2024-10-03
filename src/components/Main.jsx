import imagem from "../assets/mulher-sorrindo.jpg";
import imagem1 from "../assets/mulher-pensativa.jpg";
import imagem2 from "../assets/mulher.jpg";
import { useState } from "react";
import "./Main.scss";

function Main() {
  // Estado para um formulário
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para a mensagem de confirmação
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
     const { name, value } = e.target;
     setForm({ ...form, [name]: value });

    //  Limpa a mensagem de confirmação quando o usuário começa a digitar

    setConfirmationMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage("Formulário enviado com sucesso!");


  // Limpa os campos do formulário

  setForm({
    name: "",
    email: "",
    message: "",
  });
  };


  // primeira seção
  const name = "Marta Hudson";
  const paragraph = "Project Manager";
  const paragraph2 =
    "Looking for my next opportunity to makr a change. The digital way";
  const button1 = "more about";
  const button2 = "contact me";

  //  segunda seção
  const paragraph3 = "I advise companies and NGOs in initiatives and campaign";
  const paragraph4 =
    "For more than 15 years, I`ve been working with international clients on a range of project, gathering experience in diverse areas. I Look forward to hearing about your project and plan its success together. ";
  const ButtonSegundaSecao = "contact";

  //   terceira seção
  const TituloTerceiraSecao = "Work Experience";
  //   ------
  const year1 = 2023;
  const year2 = 2024;
  const TextParagraph = "Advisor, South Company";
  const TextParagraph2 =
    "'In this position, I led a team of more than 40 professional and volunteer staff members, from various company departments'";
  //   ------
  const year3 = 2022;
  const year4 = 2023;
  const TextParagraph3 = "Consultant, North Company";
  const TextParagraph4 =
    "'In this position, I led a team of more than 40 professional and volunteer staff members, from various company departments'";
  //   --------
  const year5 = 2021;
  const year6 = 2022;
  const TextParagraph5 = "Project manager, East Company";
  const TextParagraph6 =
    "'In this position, I led a team of more than 40 professional and volunteer staff members, from various company departments'";

  return (
    <main>
      {/* Primeira seção */}
      <section className="d-lg-flex">
        <div className="box">
          <div data-aos="fade-right">
            <h1 className="fw-bolder text-light text-center mt-5">{name}</h1>
          </div>

          <p className="h5 text-light fw-bold text-center">{paragraph}</p>
          <p className="text-center text-lg-center text-light fw-bold fs-4 mt-5">{paragraph2}</p>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <button className="btn-1 py-3 px-4 me-3 mt-5 mb-5">{button1}</button>
            <div>
              <button className="btn-2 py-3 px-4 mt-5 mb-5">{button2}</button>
            </div>
          </div>
        </div>

        <div className="box-01">
          <div data-aos="fade-left">
            <img
              className="p-4 mulher_sorrindo w-100"
              src={imagem}
              alt="Imagem de uma mulher sorrindo"
              style={{ width: "25rem", height: "40rem" }}
            />
          </div>
        </div>
      </section>{" "}
      {/* segunda seção */}
      <section className="d-lg-flex container mt-5">
        <div>
          <div data-aos="fade-right">
            <img
              className="w-100"
              src={imagem1}
              alt="Imagem de uma mulher pensativa"
              style={{ width: "25rem", height: "25rem" }}
            />
          </div>
        </div>
        <div className="text-lg-start ms-3 mt-5">
          <div data-aos="fade-left">
            <h6 className="fs-2 w-75 mb-5">{paragraph3}</h6>
          </div>

          <p className="fs-5 mb-5">{paragraph4}</p>
          <button className="btn-01 py-3 px-5 fs-5">
            {ButtonSegundaSecao}
          </button>
        </div>
      </section>{" "}
      {/* terceira seção */}
      <section className="container mt-5 container_fundo">
        <div className="p-5">
          <div data-aos="fade-left">
            <h1 className="text-light fw-light fs-2 mb-5 text-center text-lg-start">
              {TituloTerceiraSecao}
            </h1>
          </div>

          <p className="fs-4 text-light fw-bold text-center text-lg-start">
            {year1} - {year2}
          </p>
          <div className="text-center text-lg-start">
            <div data-aos="fade-right">
              <p className="h3 text-light">{TextParagraph}</p>
            </div>

            <p className="h5 mb-5 text-light">
              <em>{TextParagraph2}</em>
            </p>
          </div>

          <p className="fs-4 text-light fw-bold text-center text-lg-start">
            {year3} - {year4}
          </p>
          <div className="text-center text-lg-start">
            <div data-aos="fade-right">
              <p className="h3 text-light">{TextParagraph3}</p>
            </div>

            <p className="h5 text-light mb-5">
              <em>{TextParagraph4}</em>
            </p>
          </div>

          <p className="fs-4 text-light fw-bold text-center text-lg-start">
            {year5} - {year6}
          </p>
          <div className="text-center text-lg-start">
            <div data-aos="fade-right">
              <p className="h3 text-light">{TextParagraph5}</p>
            </div>

            <p className="h5 text-light">{TextParagraph6}</p>
          </div>
        </div>
      </section>{" "}
      {/* quarta seção */}
      <section className="container d-lg-flex justify-content-lg-center align-content-lg-center box_education mt-5 text-center text-lg-start">
        <div>
          <div data-aos="fade-right">
            <h2
              className="fs-1 fw-light
          "
            >
              Education
            </h2>
          </div>
        </div>

        <div>
          <p className="fw-bold fs-5">2012 - 1016</p>
          <div data-aos="fade-left">
            <p className="h5 fs-5">New York University</p>
          </div>

          <p className="fs-5 fw-lighter">A simple text how exemple</p>
          <p className="fw-bolder fs-5">2016 - 1020</p>
          <div data-aos="fade-left">
            <p className="fw-bold fs-5">Texas University</p>
          </div>

          <p className="fs-4 fw-lighter">A simple text how exemple</p>
        </div>
      </section>{" "}
      {/* quinta seção */}
      <section className="box_secao text-light text-center text-lg-center mt-5">
        <div className="d-lg-flex container justify-content-lg-around p-5">
          <div data-aos="fade-right">
            <h3 className="fs-1">Professional skills</h3>
          </div>

          <div className="">
            <div className="d-lg-flex gap-5">
              <p className="fs-5 fw-bold">Entrepreeurial Mindset</p>
              <p className="fs-5 fw-bold">Go-to-Mrket Plannig</p>
            </div>
            <div className="d-lg-flex gap-5">
              <p className="fs-5 fw-bold">Teamwork & Collaboration</p>
              <p className="fs-5 fw-bold">Digital Analytics</p>
            </div>
          </div>
        </div>
        <div className="d-lg-flex container justify-content-lg-around">
          <div data-aos="fade-right">
            <h4 className="fs-1 mb-5">Languages</h4>
          </div>

          <div>
            <p className="fs-5 fw-bold mb-5">English</p>
            <p className="fs-5 fw-bold mb-5">French</p>
          </div>
          <div>
            <p className="fs-5 fw-bold mb-5">Dutch</p>
            <p className="fs-5 fw-bold mb-4">Spanish</p>
          </div>
        </div>
      </section>{" "}
      {/* sexta seção */}
      <section className="d-lg-flex gap-5">
        <div className="bg_form">
          <img
            className="text-start text-lg-start ms-5 mt-5"
            src={imagem2}
            alt="Imagem de uma mulher sorrindo alegrimente"
            style={{ with: "30rem", height: "10rem" }}
          />
          <div data-aos="fade-right">
            <p className="text-start text-lg-start ms-5 fs-2 mt-3 fw-bold text-light paragraph_text">
              Get in Touch
            </p>
          </div>

          <p className="w-75 text-start text-lg-start ms-5 fs-5 fw-bold text-light">
            Want to hear more about how i can help your project secceed. Send me
            an email or call me and let's talk about your needs
          </p>
          <p className="text-start text-lg-start ms-5 fw-bold text-light fs-5">
            Call:
            <span style={{ color: "#000" }} className="ms-2">
              +55 83 98768-7872
            </span>
          </p>
          <p className="text-start text-lg-start ms-5 fs-5 fw-bold text-light">
            Write:{" "}
            <a href="http://www.linkedin.com/in/ryan-fron-end" className="ms-2">
              Ryan@linkedin
            </a>
          </p>
        </div>
        {/* Formulário */}
        <section className="fundo mt-5 container">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className="w-100"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="w-100"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  className="w-100"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
{/* Exibir a mensagem após o envio do formulário */}
            {confirmationMessage && <p className="message_envio">{confirmationMessage}</p>}

              </div>
              <button type="submit" className="py-3 px-5 mb-5 button">
                Enviar
              </button>
            </form>
            
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
