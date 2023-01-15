import Navbar from "components/Navbar";

export function Catalog() {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <button type="button" className="btn btn-primary">Buscar</button>
      </div>
    </>
  )
}