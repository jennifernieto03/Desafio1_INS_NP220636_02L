"use client";
import { useState } from "react";

import { Headers } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { LoginForm } from "./components/LoginForm"; // nuevo componente
import { RegisterForm } from "./components/RegistrerForm"; // nuevo componente
import { Invoice } from "./components/Invoice"; // nuevo componente

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  return (
    <>
      {!user ? (
        <>
          <RegisterForm users={users} setUsers={setUsers} />
          <LoginForm users={users} setUser={setUser} />
        </>
      ) : (
        <>
          <Headers
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            user={user}
          />

          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />

          <Invoice
            products={allProducts}
            total={total}
            user={user}
          />
        </>
      )}
    </>
  );
}
