import { useState } from 'react';
import Swal from 'sweetalert2';

export const Headers = ({
allProducts,
setAllProducts,
total,
countProducts,
setCountProducts,
setTotal,
}) => {

const handleClearCart = () => {
  Swal.fire({
    title: '¿Vaciar carrito?',
    text: 'Esta acción eliminará todos los productos del carrito.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      onCleanCart(); // Aquí llamas a tu función que limpia el carrito
      Swal.fire('¡Carrito vaciado!', 'Tu carrito ha sido limpiado.', 'success');
    }
  });
};

const [active, setActive] = useState(false);
const onDeleteProduct = product => {
const results = allProducts.filter(
item => item.id !== product.id
);
setTotal(total - product.price * product.quantity);
setCountProducts(countProducts - product.quantity);
setAllProducts(results);
};
const onCleanCart = () => {
setAllProducts([]);
setTotal(0);
setCountProducts(0);
};
return (
<header>
    <h1>Tienda de Tecnología, software y hardware</h1>
<div className='container-icon'>
<div className='container-cart-icon'
onClick={() => setActive(!active)}
>
<img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
alt="carrito"
className="icon-cart" />

<div className='count-products'>
<span id='contador-productos'>{countProducts}</span>
</div>
</div>
<div
className={`container-cart-products ${
active ? '' : 'hidden-cart'
}`}
>
{Array.isArray(allProducts) && allProducts.length ? (
<>
<div className='row-product'>
{allProducts.map(product => (
<div className='cart-product' key={product.id}>
<div className='info-cart-product'>
 <span className='cantidad-producto-carrito'>
 {product.quantity}
 </span>
<img src={product.urlImage} width="80" height="80" alt="" srcset="" />
 <p className='titulo-producto-carrito'>
 {product.title}
 </p>
 <span className='precio-producto-carrito'>
 ${product.price}
 </span>
</div>
<img src="https://cdn-icons-png.flaticon.com/512/786/786195.png"
alt="cerrar"
className="icon-close"
onClick={() => 
Swal.fire({
  title: "Estas seguro?",
  text: "No puedes revertir los cambios!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, eliminar!"
}).then((result) => {
  if (result.isConfirmed) {
    onDeleteProduct(product)
    Swal.fire({
      title: "Producto eliminado!",
      text: "Producto removido correctamente.",
      icon: "success"
    });
  }
})}
/>
</div>
))}
</div>
<div className='cart-total'>
<h3>Total:</h3>
<span className='total-pagar'>${total}</span>
</div>
<button className='btn-clear-all' onClick={handleClearCart}>
  Vaciar carrito
</button>
</>
) : (
<p className='cart-empty'>El carrito está vacío</p>
)}
</div>
</div>
</header>
);
};