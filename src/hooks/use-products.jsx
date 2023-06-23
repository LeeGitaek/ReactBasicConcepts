import React, {useState, useEffect} from "react";

export default function useProducts({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_': ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥 fetched the most recent data from network!');
                setProducts(data);
            }).catch(e=>setError('🙃Error!'))
            .finally(()=> setLoading(false));

        return () => {
            console.log('🧶 Clean!');
        };
    }, [salesOnly]);

    return [loading, error, products];
}