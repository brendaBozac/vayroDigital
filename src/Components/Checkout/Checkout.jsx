const Checkout = () => {

  return (

    <section>

      <h2>Finalizar compra</h2>

      <form>

        <input type="text" placeholder="Nombre" required />

        <input type="email" placeholder="Email" required />

        <input type="phone" placeholder="Teléfono" required />

        <button type="submit">
          Crear orden
        </button>

      </form>

    </section>

  )

}

export default Checkout