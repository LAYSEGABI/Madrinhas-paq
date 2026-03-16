import React from "react";
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
                jovens de Florianópolis.
              </h1>
              <p className="hero-description">
                Torne-se uma Madrinha do PAQ e faça parte de uma comunidade
                empresarial que investe em desenvolvimento real e impacto
                social.
              </p>
              <div className="hero-actions">
                <a href="https://w.app/vt27hb" className="btn-primary">
                  Quero ser Madrinha <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* SECÇÃO: O PROBLEMA */}
        <section className="problem-section">
          <div className="problem-grid">
            <div className="problem-gallery">
              <div className="gallery-column pt-offset">
                <img src={Foto1} alt="Mentoria" />
                <img src={Foto2} alt="Colaboração" />
              </div>
              <div className="gallery-column">
                <img src={Foto3} alt="Desenvolvimento" />

                <img src={Foto4} alt="Desenvolvimento" />
              </div>
            </div>
            <div className="problem-text">
              <h2 className="section-title">O Problema</h2>
              <p>
                Muitos jovens talentosos enfrentam barreiras que limitam o seu
                desenvolvimento pessoal e profissional.
              </p>
              <p>
                O PAQ atua diretamente no fortalecimento de competências,
                mentoria personalizada e acesso a oportunidades reais.
              </p>
              <div className="quote-box">
                <p>
                  Mas isto só é possível com empresas que acreditam no impacto
                  coletivo.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECÇÃO: A SOLUÇÃO */}
        <section className="solution-section">
          <div className="container-center">
            <h2 className="solution-title">
              A Solução — Programa de Madrinhas
            </h2>
            <p className="solution-subtitle">
              Empresas madrinhas contribuem mensalmente para garantir a
              continuidade da comunidade de aprendizagem e recebem:
            </p>

            <div className="benefits-grid">
              <BenefitCard
                icon={<TrendingUp className="icon-blue" size={32} />}
                title="Relatórios de impacto"
                desc="Transparência total sobre o desenvolvimento dos jovens apoiados e progresso da comunidade."
              />
              <BenefitCard
                icon={<Users className="icon-blue" size={32} />}
                title="Ações internas"
                desc="Possibilidade de envolver os seus colaboradores com palestras, mentorias e voluntariado."
              />
              <BenefitCard
                icon={<Award className="icon-blue" size={32} />}
                title="Reconhecimento"
                desc="A sua marca posicionada como investidora social oficial nos canais do PAQ."
              />
              <BenefitCard
                icon={<Share2 className="icon-blue" size={32} />}
                title="Rede empresarial"
                desc="Conexão com outras empresas madrinhas que partilham os mesmos valores de impacto."
              />
              <BenefitCard
                icon={<Target className="icon-blue" size={32} />}
                title="Pirâmide do Bem"
                desc="Acesso exclusivo ao ecossistema de transformação contínua e inovação social do PAQ."
              />
              <div className="benefit-highlight">
                <p>Garantindo a continuidade e estabilidade do programa.</p>
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
                <div className="impaq-content border-top-layout">
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
                <div className="impaq-image-container">
                  <img src={anaju} alt="Trabalhando em tecnologia" />
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

        {/* SECÇÃO: ACESSO AO SITE OFICIAL */}
        <section className="external-link-section">
          <div className="container-small">
            <div className="bridge-card">
              <div className="bridge-content">
                <span className="bridge-badge">Conheça nossa história</span>
                <h2 className="bridge-title">
                  Quer mergulhar fundo no ecossistema do{" "}
                  <span className="highlight">PAQ?</span>
                </h2>
                <p className="bridge-text">
                  Explore nossos projetos, conheça nossa metodologia e veja como
                  estamos impactando as periferias de Florianópolis através da
                  tecnologia.
                </p>
              </div>
              <div className="bridge-action">
                <a
                  href="https://prototipandoaquebrada.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-paq"
                >
                  Visitar Site Oficial <Share2 size={20} />
                </a>
              </div>
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
              <a href="https://w.app/vt27hb" className="btn-primary">
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
