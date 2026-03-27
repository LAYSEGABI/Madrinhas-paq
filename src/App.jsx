import React, { useState } from "react";

import {
  Calendar,
  MessageCircle,
  Users,
  TrendingUp,
  Award,
  Share2,
  Target,
  ChevronsDown,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./App.css";
import LogoPaq from "./assets/logo_paq.png";
import Foto1 from "./assets/fotos/foto1.png";
import Foto2 from "./assets/fotos/foto2.png";
import Foto3 from "./assets/fotos/foto3.png";
import Foto4 from "./assets/fotos/foto4.png";
import suanam from "./assets/fotos/suanam.png";
import anaju from "./assets/fotos/anaju.png";
import certificado from "./assets/fotos/certificado.png";

export default function App() {
  // Estado para o formulário
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    cargo: "",
    telefone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Substitua 'SEU_ID_DO_FORMSPREE' pelo ID que você vai gerar no passo abaixo
    const FORMSPREE_ID = "SEU_ID_DO_FORMSPREE";

    try {
      const response = await fetch(`https://formspree.io/f/xvzwwlkk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Ops! Ocorreu um erro ao enviar os dados. Tente novamente.");
      }
    } catch {
      alert("Erro na conexão. Verifique sua internet.");
    }
  };

  return (
    <div className="app-container">
      {/* NAVEGAÇÃO FIXA */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            <img src={LogoPaq} className="logo-img" alt="" />
            <span className="logo-text">
              Prototipando a Quebrada - Seja um apoiador
            </span>
            <ChevronsDown size={40} className="nav-icon-arrow seta-nav" />
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* SECÇÃO HERO */}
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-info">
              <div className="badge">Investimento Social</div>
              <h1 className="hero-title">
                A sua empresa pode{" "}
                <span className="highlight">transformar o futuro</span> de
                jovens da Grande Florianópolis.
              </h1>
              <p className="hero-description">
                Gere impacto real, fortaleça o ecossistema de inovação e se
                conecte com a formação de novos talentos.
              </p>
              <div className="hero-actions">
                <a href="#leads" className="btn-primary">
                  Quero ser Madrinha <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO: O QUE É O PAQ (ANTES DO PROBLEMA) */}
        <section className="about-paq-section">
          <div className="container-small">
            <div className="bridge-card">
              <div className="bridge-content">
                <span className="bridge-badge">Quem somos</span>
                <h2 className="bridge-title">
                  Somos o Prototipando a Quebrada, mas pode chamar de{" "}
                  <span className="highlight">PAQ!</span>
                </h2>
                <p className="bridge-text">
                  Nossa missão é{" "}
                  <strong>conectar a juventude da periferia</strong> ao
                  conhecimento e oportunidades do{" "}
                  <strong>ecossistema de tecnologia!</strong>
                </p>
              </div>
              <div className="bridge-action">
                <a
                  href="https://prototipandoaquebrada.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-paq"
                >
                  Conhecer o PAQ <Share2 size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO: O PROBLEMA (OS DESAFIOS) */}
        <section className="problem-section">
          <div className="problem-grid">
            <div className="problem-gallery">
              <div className="gallery-column pt-offset">
                <img src={Foto1} alt="Mentoria" />
                <img src={Foto2} alt="Colaboração" />
              </div>
              <div className="gallery-column">
                <img src={Foto3} alt="Desenvolvimento" />
                <img src={Foto4} alt="Impacto" />
              </div>
            </div>
            <div className="problem-text">
              <h2 className="section-title">Os Desafios</h2>
              <p className="problem-intro">
                Empresas que crescem rapidamente enfrentam desafios cada vez
                mais estratégicos:
              </p>

              <ul className="problem-list">
                <li>
                  <div className="list-dot"></div>
                  <span>
                    Como fortalecer <strong>cultura e propósito</strong> dentro
                    dos times.
                  </span>
                </li>
                <li>
                  <div className="list-dot"></div>
                  <span>
                    Como formar e atrair <strong>novos talentos</strong> para
                    sustentar o crescimento do setor.
                  </span>
                </li>
                <li>
                  <div className="list-dot"></div>
                  <span>
                    Como transformar <strong>impacto social e ESG</strong> em
                    ações reais, que gerem valor para a empresa e para a
                    sociedade.
                  </span>
                </li>
              </ul>

              <p className="problem-conclusion">
                Ao mesmo tempo, o desenvolvimento do ecossistema de inovação
                depende diretamente da formação da próxima geração de
                profissionais.
              </p>

              <div className="quote-box">
                <p>
                  É nesse ponto que o <strong>PAQ atua.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO: A SOLUÇÃO */}
<section className="solution-section">
  <div className="container-center">
    <div className="solution-intro-box">
      <h2 className="solution-title">Sua empresa pode fazer parte da solução!</h2>
      <p className="solution-text-main">
        O Programa Madrinhas do PAQ conecta empresas que querem <strong>gerar impacto real</strong> com iniciativas de desenvolvimento de jovens talentos. 
        Mais do que uma contribuição financeira, é uma parceria estratégica de impacto social, onde as empresas participam ativamente de uma comunidade comprometida com o futuro da inovação na região.
      </p>
    </div>

    <div className="solution-pillars-header">
      <h3 className="solution-title-v2">Como o Programa Madrinhas gera impacto?</h3>
      <p className="solution-subtitle">
        O programa conecta os desafios das empresas com soluções de impacto real, estruturadas em quatro pilares:
      </p>
    </div>

    <div className="benefits-grid">
      <BenefitCard
        icon={<TrendingUp className="icon-blue" size={32} />}
        title="Transformação Social"
        desc="Sua empresa contribui diretamente para ampliar oportunidades e desenvolver jovens com potencial da nossa região. Nosso impacto é o seu impacto."
      />
      <BenefitCard
        icon={<Users className="icon-blue" size={32} />}
        title="Comunidade e Conexões"
        desc="As madrinhas fazem parte da comunidade do PAQ, conectando-se com outras lideranças e acompanhando de perto a transformação na vida dos jovens."
      />
      <BenefitCard
        icon={<Award className="icon-blue" size={32} />}
        title="Qualificação Profissional"
        desc="O apoio fortalece programas que preparam jovens com competências essenciais para o mercado de trabalho e aproxima empresas de novos talentos."
      />
      <BenefitCard
        icon={<Target className="icon-blue" size={32} />}
        title="Ações de Impacto Interno"
        desc="Empresas podem engajar colaboradores em mentorias e iniciativas que conectam propósito, desenvolvimento humano e cultura organizacional."
      />
    </div>

    <div className="solution-quote-final">
      <div className="quote-box">
        <p>“Só quem já teve a vida mudada pela tecnologia, entende o real valor do que estamos fazendo!”</p>
      </div>
    </div>
  </div>
</section>

        {/* SECÇÃO: IMPACTO MENSURÁVEL 
        <section className="impact-section">
          <div className="container-center">
            <div className="impact-header">
              <span className="impact-badge">Métricas da Campanha</span>
              <h2 className="impact-title">Impacto Mensurável</h2>
            </div>

            <div className="impact-grid">
              <div className="metric-card">
                <p className="metric-label">Meta da Campanha</p>
                <p className="metric-number">5</p>
                <p className="metric-footer">Empresas Investidoras</p>
              </div>
              <div className="metric-card dark">
                <p className="metric-label">Investimento Social</p>
                <p className="metric-number highlight">R$ 810</p>
                <p className="metric-footer">Mensal por Madrinha</p>
                <div className="metric-divider">
                  <p>Total mensal: R$ 4.050</p>
                </div>
              </div>
              <div className="metric-card">
                <p className="metric-label">Sustentabilidade Anual</p>
                <p className="metric-number">R$ 48.600</p>
                <p className="metric-footer">Garantia de impacto contínuo</p>
              </div>
            </div>
          </div>
        </section>*/}

        {/* SECÇÃO: IMPAQTÔMETRO CORRIGIDA (Layout Título -> Foto -> Título) */}
        <section className="impaqtometro-section">
          <div className="container-center">
            <div className="impaqtometro-header">
              <h2 className="impaq-title-main">
                IM<span className="highlight-alt">PAQ</span>TÔMETRO:
              </h2>
              <h3 className="impaq-subtitle">O IMPACTO REAL</h3>
            </div>

            <div className="impaq-grid">
              {/* Card 1: Foto em cima, Título embaixo */}
              <div className="impaq-card">
                <div className="impaq-image-container">
                  <img src={certificado} alt="Jovens PAQ" />
                </div>
                <div className="impaq-content">
                  <div className="impaq-icon-circle">
                    <Users size={32} color="white" />
                  </div>
                  <div className="impaq-info">
                    <span className="impaq-number">+500 JOVENS</span>
                    <p className="impaq-desc">impactados em nossos programas</p>
                  </div>
                </div>
              </div>

              {/* Card 2: CORRIGIDO - Título em cima, Foto embaixo */}
              <div className="impaq-card">
                <div className="impaq-image-container">
                  <img src={anaju} alt="Trabalhando em tecnologia" />
                </div>
                <div className="impaq-content ">
                  <div className="impaq-icon-circle">
                    <TrendingUp size={32} color="white" />
                  </div>
                  <div className="impaq-info">
                    <span className="impaq-number">+50% JOVENS</span>
                    <p className="impaq-desc">
                      trabalhando em empresas de tecnologia
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Foto em cima, Título embaixo */}
              <div className="impaq-card">
                <div className="impaq-image-container">
                  <img src={suanam} alt="Injeção financeira" />
                </div>
                <div className="impaq-content">
                  <div className="impaq-icon-circle">
                    <Award size={32} color="white" />
                  </div>
                  <div className="impaq-info">
                    <span className="impaq-number">+780 MIL REAIS</span>
                    <p className="impaq-desc">
                      injetados nas quebradas através dos jovens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: CAPTAÇÃO DE LEADS */}
        <section id="leads" className="leads-section">
          <div className="container-small-form">
            <div className="form-card">
              {!isSubmitted ? (
                <>
                  <div className="form-header">
                    <span className="badge">Contato Direto</span>
                    <h2 className="section-title">Fale conosco</h2>
                    <p>
                      Preencha os dados abaixo para liberar o contato e tirar
                      suas dúvidas sobre o programa.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="leads-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu Nome *"
                        required
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="empresa"
                        placeholder="Sua Empresa *"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="cargo"
                        placeholder="Seu Cargo *"
                        required
                        onChange={handleInputChange}
                      />
                      <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone (opcional)"
                        onChange={handleInputChange}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor E-mail *"
                      required
                      onChange={handleInputChange}
                    />

                    <button type="submit" className="btn-primary form-submit">
                      Liberar Contato <MessageCircle size={20} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="success-icon">
                    <Target size={48} color="#38bdf8" />
                  </div>
                  <h2 className="section-title">Tudo pronto!</h2>
                  <p className="thanks">
                    Obrigado pelo interesse. Clique no botão abaixo para iniciar
                    a conversa no WhatsApp.
                  </p>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=554892035776&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+como+minha+empresa+pode+se+tornar+uma+Madrinha+do+PAQ.&type=phone_number&app_absent=0"
                    className="btn-primary animate-pulse"
                  >
                    Falar no WhatsApp agora <MessageCircle size={24} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="cta-section">
          <div className="container-small-cta">
            <h2 className="cta-title">
              Grandes empresas não apenas crescem.
              <br />
              <span className="highlight">Elas constroem o futuro.</span>
            </h2>
            <div className="cta-buttons">
              <a href="#leads" className="btn-primary">
                <MessageCircle size={24} /> Torne-se Madrinha
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2026 Prototipando a quebrada</p>
            <div className="social-links">
              <a
                target="_blank"
                href="https://www.instagram.com/prototipandoaquebrada/"
              >
                <Instagram className="social-icon" size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/prototipando-a-quebrada/mycompany/"
              >
                <Linkedin className="social-icon" size={24} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-desc">{desc}</p>
    </div>
  );
}
