import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: 'Carlos Mendoza', role: 'CEO, FinTech Latam', text: 'IDEATEC superó nuestras expectativas. El equipo no solo desarrolló una app robusta, sino que aportó ideas clave para el modelo de negocio.', avatar: 'https://i.pravatar.cc/150?u=carlos' },
    { name: 'Elena Rodríguez', role: 'Directora de Marketing, EcoStyle', text: 'La velocidad de carga y el diseño de nuestro nuevo e-commerce han incrementado nuestras ventas en un 40% en solo tres meses.', avatar: 'https://i.pravatar.cc/150?u=elena' },
    { name: 'Julian Velez', role: 'Fundador, HealthSync', text: 'Encontrar un partner tecnológico que entienda la urgencia de una startup es difícil. IDEATEC es, sin duda, el mejor aliado.', avatar: 'https://i.pravatar.cc/150?u=julian' },
  ];

  return (
    <section className="py-24 bg-bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={r.name} className="glass p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-text-primary/70 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-2 border-accent" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-syne font-bold text-text-primary">{r.name}</h5>
                  <p className="text-xs text-text-primary/40 uppercase tracking-wider">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
