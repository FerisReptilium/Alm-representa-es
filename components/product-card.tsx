type Product = {
  name: string;
  brand: string;
  price: string;
  oldPrice: string;
  badge: string;
  imageTone: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="productCard">
      <div className={`productMedia ${product.imageTone}`}>
        <span className="productBadge">{product.badge}</span>
        <button className="wishlist" aria-label={`Favoritar ${product.name}`}>♡</button>
        <div className="mockProduct" aria-hidden="true"><span className="mockCap"></span><span className="mockLabel">ALM<br/>BEAUTY</span></div>
      </div>
      <div className="productInfo">
        <p className="productBrand">{product.brand}</p>
        <h3>{product.name}</h3>
        <div className="priceRow"><strong>{product.price}</strong>{product.oldPrice && <del>{product.oldPrice}</del>}</div>
        <button className="quickBuy">Comprar pelo WhatsApp <span>↗</span></button>
      </div>
    </article>
  );
}
