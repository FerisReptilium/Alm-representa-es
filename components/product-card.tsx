type Product = {
  name: string;
  brand: string;
  price: string;
  badge: string;
  image: string;
  alt: string;
  imagePosition: string;
};

export function ProductCard({ product }: { product: Product }) {
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
        <button className="wishlist" aria-label={`Favoritar ${product.name}`}>♡</button>
      </div>
      <div className="productInfo">
        <p className="productBrand">{product.brand}</p>
        <h3>{product.name}</h3>
        <div className="priceRow"><strong>{product.price}</strong></div>
        <button className="quickBuy">Comprar pelo WhatsApp <span>↗</span></button>
      </div>
    </article>
  );
}
