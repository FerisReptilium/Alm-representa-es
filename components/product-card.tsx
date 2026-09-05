import type { Product } from "@/data/home";

export function ProductCard({ product }: { product: Product }) {
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <article className="productCard">
      <div className="productMedia productMediaReal">
        <img
          className="productImage"
          src={product.image}
          alt={product.alt}
          loading="lazy"
          style={{ objectPosition: product.imagePosition }}
        />
        <span className="productBadge">{product.badge}</span>
        <span className="productCategory">{product.category}</span>
      </div>
      <div className="productInfo">
        <p className="productBrand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="productDescription">{product.description}</p>
        <ul className="productFeatures" aria-label={`Benefícios de ${product.name}`}>
          {product.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="priceRow"><strong>{product.price}</strong></div>
        <a className="quickBuy" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name} pelo WhatsApp`}>
          Consultar pelo WhatsApp <span>↗</span>
        </a>
      </div>
    </article>
  );
}
