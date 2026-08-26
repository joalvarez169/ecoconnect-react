const Noticias = () => {
  return (
    <section id="noticias" className="space-y-6 pt-4 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-300 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-green-800">Noticias y Campañas</h2>
          <p className="text-gray-600 mt-1">Entérate de las últimas iniciativas e involúcrate con tu comunidad.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Módulo 1 */}
        <article className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
          <div className="h-48 bg-green-200 flex items-center justify-center relative">
            <span className="text-green-700 font-bold">[ Imagen: Voluntarios en parque ]</span>
            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Campaña</span>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-xs text-gray-500 font-semibold mb-2">15 DE AGOSTO, 2026</span>
            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">Limpieza del Río y Recolección de Plásticos</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">Acompáñanos este fin de semana en la jornada de limpieza comunitaria. Todos los plásticos recolectados sumarán el doble de puntos.</p>
            <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition">
              Unirse a la campaña
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Noticias;