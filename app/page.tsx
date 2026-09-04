import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PromoMosaic } from "@/components/promo-mosaic";
import { ProductCard } from "@/components/product-card";
import { AiAssistant } from "@/components/ai-assistant";
import { brands, categories, needs, products } from "@/data/home";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="container pageStack">
        <Hero />

        <section className="benefitStrip" aria-label="Benefícios">
          <div><span>01</span><p><b>Representação oficial</b><small>Experiência dedicada à Febella Makeup.</small></p></div>
          <div><span>02</span><p><b>Frete pelo CEP</b><small>Estimativa local e nacional.</small></p></div>
          <div><span>03</span><p><b>Atendimento humano</b><small>Finalize também pelo WhatsApp.</small></p></div>
          <div><span>04</span><p><b>Beauty AI</b><small>Descubra o produto ideal.</small></p></div>
        </section>

        <section className="needSection" id="febella">
          <div className="needCopy">
            <p className="eyebrow">FEBELLA MAKEUP</p>
            <h2>Beleza acessível, versátil e pronta para vender.</h2>
            <p>A ALM representa a Febella Makeup e organiza a experiência digital para descoberta de produtos, atendimento e geração de pedidos.</p>
          </div>
          <div className="needChips">
            <a href="#catalogo"><span>01</span>Rosto<em>→</em></a>
            <a href="#catalogo"><span>02</span>Olhos<em>→</em></a>
            <a href="#catalogo"><span>03</span>Lábios<em>→</em></a>
            <a href="#catalogo"><span>04</span>Preparação<em>→</em></a>
            <a href="#catalogo"><span>05</span>Sobrancelhas<em>→</em></a>
            <a href="#catalogo"><span>06</span>Cabelo & Corpo<em>→</em></a>
          </div>
        </section>

        <PromoMosaic />

        <section className="sectionBlock" id="catalogo">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">CATÁLOGO FEBELLA</p><h2>Compre por categoria</h2></div>
            <a href="#">Ver todas <span>→</span></a>
          </div>
          <div className="categoryGrid">
            {categories.map((category) => (
              <a className="categoryCard" href="#" key={category.name}>
                <span className="categoryIcon">{category.icon}</span>
                <span><b>{category.name}</b><small>{category.subtitle}</small></span>
                <em>↗</em>
              </a>
            ))}
          </div>
        </section>

        <section className="needSection" id="rotina">
          <div className="needCopy">
            <p className="eyebrow">ESCOLHA PELO EFEITO</p>
            <h2>O que você quer destacar hoje?</h2>
            <p>Comece pelo resultado desejado. Depois, nossa Beauty Assistant ajuda a encontrar opções dentro do catálogo.</p>
          </div>
          <div className="needChips">
            {needs.map((need, index) => <a href="#" key={need}><span>0{index + 1}</span>{need}<em>→</em></a>)}
          </div>
        </section>

        <section className="sectionBlock">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">FEBELLA EM DESTAQUE</p><h2>Produtos para começar</h2></div>
            <a href="#">Ver catálogo <span>→</span></a>
          </div>
          <div className="productGrid">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </section>

        <section className="campaignGrid">
          <article className="campaignCard campaignSoft"><p className="eyebrow">MULTIUSO</p><h2>Jelly Tint</h2><p>Um destaque visual para campanhas de lábios, blush e maquiagem prática.</p><a href="#catalogo">Ver produto →</a></article>
          <article className="campaignCard campaignDark"><p className="eyebrow">BEAUTY AI</p><h2>Não sabe qual escolher?</h2><p>Conte o resultado que você procura e receba sugestões com base no catálogo da loja.</p><a href="#rotina">Começar agora →</a></article>
          <article className="campaignCard campaignBlush"><p className="eyebrow">MAKEUP PREP</p><h2>Blindagem 3 em 1</h2><p>Uma solução versátil para preparação, diluição e fixação da maquiagem.</p><a href="#catalogo">Conhecer →</a></article>
        </section>

        <section className="brandSection">
          <div className="sectionHeading"><p className="eyebrow">MARCA REPRESENTADA</p><h2>Febella Makeup</h2></div>
          <div className="brandRail">{brands.map((brand) => <a href="#febella" key={brand}>{brand}</a>)}</div>
        </section>

        <section className="newsletter">
          <p className="eyebrow">ALM BEAUTY LETTER</p><h2>Novidades, lançamentos e oportunidades comerciais.</h2><p>Receba atualizações sobre produtos, campanhas e condições da ALM.</p>
          <form><input type="email" placeholder="seuemail@exemplo.com" aria-label="Seu e-mail"/><button type="submit">Quero receber</button></form>
        </section>
      </div>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div><a className="brand footerBrand" href="#"><span className="brandMain">ALM</span><span className="brandSub">BEAUTY · MAKEUP · REPRESENTAÇÕES</span></a><p>Representação, beleza e experiência digital com foco em atendimento e conversão.</p></div>
          <div><strong>Catálogo</strong><a href="#febella">Febella Makeup</a><a href="#catalogo">Rosto</a><a href="#catalogo">Olhos</a><a href="#catalogo">Lábios</a></div>
          <div><strong>Atendimento</strong><a href="#">WhatsApp</a><a href="#">Entrega</a><a href="#">Trocas e devoluções</a><a href="#">FAQ</a></div>
          <div><strong>Institucional</strong><a href="#">Sobre</a><a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Contato</a></div>
        </div>
        <div className="container footerBottom"><span>© 2026 ALM Representações. Conteúdo comercial em validação.</span><span>Brasil · PT-BR</span></div>
      </footer>
      <AiAssistant />
    </main>
  );
}
