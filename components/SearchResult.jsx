import { search_prod } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { useSearchStore } from "../store/search";
import SearchComponent from "./SearchComponent";

const SearchRegister = () => {
    const searchTerm = useSearchStore((state) => state.searchTerm);

    const { data, isError, isLoading } = useQuery(['products', searchTerm], () => search_prod(searchTerm), {
        enabled: !!searchTerm, // Esto evita que la consulta se ejecute hasta que searchTerm no esté vacío
    });

    if (isLoading) return <div>Cargando...</div>; //crear loader
    if (isError) return <div>Error al cargar el Historial.</div>;

    return (
        <div className="flex justify-center">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
                {data && data.products.map((product, index) => (
                    // Asumiendo que tienes un componente ProductCard y tus productos tienen una propiedad 'id' o algo único
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default SearchRegister;
