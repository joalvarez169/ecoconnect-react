const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado desde componente React");
  };

  return (
    <section id="registro" className="py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-green-100 p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Formulario de Registro</h3>
        <p className="text-gray-500 mb-6 text-sm">Completa tus datos para formar parte de la comunidad.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="Ej. Jhonatan Alvarez" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
            <input type="email" id="email" name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="jhonatan@ejemplo.com" />
          </div>

          <button type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02]">
            Completar Registro
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;