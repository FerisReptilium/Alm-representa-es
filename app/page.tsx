import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { AiAssistant } from "@/components/ai-assistant";
import { categories, needs, products } from "@/data/home";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <div className="container pageStack">
        <Hero />

        <section className="benefitStrip" aria-label="Benefícios da ALM">
          <div><span>01</span><p><b>Febella Makeup</b><small>Marca representada em destaque.</small></p></div>
          <div><span>02</span><p><b>Atendimento direto</b><small>Venda assistida pelo WhatsApp.</small></p></div>
          <div><span>03</span><p><b>Frete pelo CEP</b><small>Estimativa local e nacional.</small></p></div>
          <div><span>04</span><p><b>Beauty AI</b><small>Ajuda para encontrar o produto certo.</small></p></div>
        </section>

        <section className="finalStatement" id="sobre">
          <div>
            <p className="eyebrow">ALM REPRESENTAÇÕES</p>
            <h2>Feminina na essência. Forte nos negócios.</h2>
            <p>A ALM nasce para conectar marcas de beleza a pessoas, lojistas e novas oportunidades. A identidade combina delicadeza, presença comercial e uma experiência digital moderna.</p>
            <a className="button buttonDark" href="#febella">Conhecer a marca representada</a>
          </div>
          <div className="finalStatementMark" aria-label="Assinatura visual ALM">
            <img src="/brand/alm-logo-oficial.png" alt="ALM Representações — Beleza que conecta negócios" className="finalStatementLogo" />
          </div>
        </section>

        <section className="brandPartnerLockup" aria-label="Parceria ALM e Febella Makeup">
          <img src="/brand/alm-logo-oficial.png" alt="ALM Representações" />
          <span className="brandPartnerDivider" aria-hidden="true" />
          <div className="febellaWordmarkCard"><img src="/brand/febella-wordmark.svg" alt="Febella Makeup"/><small>Marca representada pela ALM</small></div>
        </section>

        <section className="sectionBlock" id="febella">
          <div className="featureIntro">
            <div><p className="eyebrow">MARCA EM DESTAQUE</p><h2>Febella Makeup</h2></div>
            <p>Uma vitrine pensada para transformar catálogo em desejo: produtos acessíveis, visuais marcantes e campanhas com forte apelo para redes sociais e ponto de venda.</p>
          </div>
          <div className="featureCards">
            <article className="featureCard featureCardReal">
              <img src="/images/febella-jelly-tint.webp" alt="Campanha Jelly Tint Febella Makeup" loading="lazy" />
              <div className="featureCardCopy"><h3>Jelly Tint</h3><p>Cor vibrante com efeito natural para combinar com cada estilo.</p><a href="#destaques">Ver no catálogo →</a></div>
            </article>
            <article className="featureCard featureCardReal">
              <img src="/images/febella-magic-blush.webp" alt="Campanha Magic Blush Febella Makeup" loading="lazy" />
              <div className="featureCardCopy"><h3>Magic Blush</h3><p>Brilho delicado e acabamento natural.</p><a href="#destaques">Descobrir →</a></div>
            </article>
            <article className="featureCard featureCardReal">
              <img src="/images/febella-blindagem-3-em-1.webp" alt="Campanha Blindagem 3 em 1 Febella Makeup" loading="lazy" />
              <div className="featureCardCopy"><h3>Blindagem 3 em 1</h3><p>Diluidor, fixador e primer em um só produto.</p><a href="#destaques">Conhecer →</a></div>
            </article>
          </div>
        </section>

        <section className="sectionBlock" id="catalogo">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">COMPRE POR CATEGORIA</p><h2>Encontre o que procura mais rápido.</h2></div>
            <a href="#catalogo">Ver catálogo <span>→</span></a>
          </div>
          <div className="categoryGrid">
            {categories.map((category) => (
              <a className="categoryCard" href="#destaques" key={category.name}>
                <span className="categoryIcon">{category.icon}</span>
                <span><b>{category.name}</b><small>{category.subtitle}</small></span>
                <em>↗</em>
              </a>
            ))}
          </div>
        </section>

        <section className="needSection" id="rotina">
          <div className="needCopy">
            <p className="eyebrow">ESCOLHA PELO RESULTADO</p>
            <h2>O que você quer destacar hoje?</h2>
            <p>Em vez de obrigar a cliente a conhecer cada categoria, a Home também permite começar pelo efeito desejado. A Beauty AI vai usar essa mesma lógica.</p>
          </div>
          <div className="needChips">
            {needs.map((need, index) => <a href="#destaques" key={need}><span>0{index + 1}</span>{need}<em>→</em></a>)}
          </div>
        </section>

        <section className="sectionBlock" id="destaques">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">FEBELLA EM DESTAQUE</p><h2>Produtos que puxam a venda.</h2></div>
            <a href="#atacado">Falar com atendimento <span>→</span></a>
          </div>
          <div className="productGrid">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </section>

        <section className="editorialSection" aria-label="Campanhas editoriais">
          <article className="editorialPanel editorialPink editorialWithImage">
            <img src="/images/febella-jelly-tint.webp" alt="Jelly Tint Febella Makeup" loading="lazy" />
            <div className="editorialCopy"><p className="eyebrow">JELLY TINT</p><h2>Mais cor para o seu dia.</h2><a href="#destaques">Explorar Jelly Tint →</a></div>
          </article>
          <article className="editorialPanel editorialGold editorialWithImage">
            <img src="/images/febella-linha-mel.webp" alt="Linha Mel Febella Makeup" loading="lazy" />
            <div className="editorialCopy"><p className="eyebrow">LINHA MEL</p><h2>Beleza que nutre você.</h2><a href="#destaques">Ver linha de lábios →</a></div>
          </article>
        </section>

        <section className="b2bSection" id="atacado">
          <div>
            <p className="eyebrow">ALM PARA REVENDEDORES</p>
            <h2>Beleza que conecta negócios.</h2>
            <p>A Home também vende a ALM como parceira comercial. O fluxo será preparado para lojistas, revendedores e futuras condições de atacado sem misturar preço público com tabela comercial.</p>
            <div className="heroActions">
              <a className="button buttonGhost" href="#">Falar no WhatsApp</a>
              <a className="button buttonGhost" href="#newsletter">Receber novidades</a>
            </div>
          </div>
          <div className="b2bList">
            <div className="b2bItem"><span>01</span><div><strong>Atendimento comercial</strong><small>Pedido assistido e contato direto com a equipe ALM.</small></div></div>
            <div className="b2bItem"><span>02</span><div><strong>Condições por perfil</strong><small>Estrutura preparada para varejo, revenda e atacado quando a tabela oficial for definida.</small></div></div>
            <div className="b2bItem"><span>03</span><div><strong>Campanhas rotativas</strong><small>Produtos, banners e ofertas poderão mudar sem reconstruir o site.</small></div></div>
            <div className="b2bItem"><span>04</span><div><strong>Dados e conversão</strong><small>Cliques, interesse em produto, WhatsApp e campanhas alimentarão o dashboard.</small></div></div>
          </div>
        </section>

        <section className="serviceGrid" aria-label="Serviços digitais">
          <article className="servicePanel"><span className="serviceNo">01</span><strong>Frete por CEP</strong><p>Entrega local estimada para parceiros próximos e estrutura preparada para Correios, FedEx e futuros conectores de entrega.</p><a href="#">Calcular entrega →</a></article>
          <article className="servicePanel"><span className="serviceNo">02</span><strong>Beauty AI</strong><p>A assistente vai consultar catálogo, benefícios, preços oficiais e campanhas sem expor nenhuma chave privada no navegador.</p><a href="#rotina">Perguntar à assistente →</a></article>
          <article className="servicePanel"><span className="serviceNo">03</span><strong>WhatsApp inteligente</strong><p>Cada produto poderá abrir uma mensagem pronta com nome, quantidade, campanha e origem do clique.</p><a href="#destaques">Escolher produto →</a></article>
          <article className="servicePanel"><span className="serviceNo">04</span><strong>Painel ALM</strong><p>Produtos, preços, banners, campanhas e contatos serão administráveis sem precisar editar o código.</p><a href="#">Conhecer estrutura →</a></article>
        </section>

        <section className="socialSection">
          <div className="featureIntro"><div><p className="eyebrow">CONTEÚDO & SOCIAL</p><h2>Da vitrine para o Instagram.</h2></div><p>O visual da Home conversa com as campanhas da Febella: rosa, brilho, textura, produtos em destaque e chamadas rápidas para compartilhamento.</p></div>
          <div className="socialRail" aria-label="Campanhas Febella Makeup">
            <img src="/images/febella-jelly-tint.webp" alt="Campanha Jelly Tint" loading="lazy" />
            <img src="/images/febella-magic-blush.webp" alt="Campanha Magic Blush" loading="lazy" />
            <img src="/images/febella-linha-mel.webp" alt="Campanha Linha Mel" loading="lazy" />
            <img src="/images/febella-blindagem-3-em-1.webp" alt="Campanha Blindagem 3 em 1" loading="lazy" />
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <p className="eyebrow">ALM BEAUTY LETTER</p><h2>Novidades, lançamentos e oportunidades comerciais.</h2><p>Uma comunicação curta e útil sobre produtos, campanhas e novidades da representação.</p>
          <form><input type="email" placeholder="seuemail@exemplo.com" aria-label="Seu e-mail"/><button type="submit">Quero receber</button></form>
        </section>
      </div>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div><a className="brand footerBrand" href="#"><img src="/brand/alm-logo-oficial.png" alt="ALM Representações" className="footerLogo"/></a><p>Beleza que conecta negócios.</p></div>
          <div><strong>Catálogo</strong><a href="#febella">Febella Makeup</a><a href="#catalogo">Categorias</a><a href="#destaques">Destaques</a><a href="#rotina">Escolha pelo efeito</a></div>
          <div><strong>Atendimento</strong><a href="#atacado">WhatsApp</a><a href="#">Entrega</a><a href="#">Trocas e devoluções</a><a href="#">FAQ</a></div>
          <div><strong>Institucional</strong><a href="#sobre">Sobre a ALM</a><a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Contato</a></div>
        </div>
        <div className="container footerBottom"><span>© 2026 ALM Representações. Conteúdo comercial em validação.</span><span>Brasil · PT-BR</span></div>
      </footer>

      <AiAssistant />
    </main>
  );
}
