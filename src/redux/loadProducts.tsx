"use client";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";
import { useTypedDispatch } from "./store";

export default function LoadProducts() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <></>;
}
