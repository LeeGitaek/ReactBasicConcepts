import React, { useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProducts({ salesOnly: checked });
    const handleChange = () => setChecked((prev) => !prev);

    // useEffect(() => {
    //     setLoading(true);
    //     setError(undefined);
    //     fetch(`data/${checked ? 'sale_': ''}products.json`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log('🔥 fetched the most recent data from network!');
    //             setProducts(data);
    //         }).catch(e=>setError('🙃Error!'))
    //         .finally(()=> setLoading(false));

    //     return () => {
    //         console.log('🧶 Clean!');
    //     };
    // }, [checked]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

    return (
        <>
            <input type='checkbox' value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>      
        </>
    );
}