import React, { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { PrivacyModal } from "./PrivacyModal";
import { TermsModal } from "./TermsModal";

export const Footer = () => {
  const { theme } = useTheme();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const isLight = theme === "light";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Configura tu color accent aquí (R, G, B) ──
    // Usar naranja (#F97316 -> 249, 115, 22) si es light para mejor contraste con el blanco
    const ACCENT_R = isLight ? 249 : 50; 
    const ACCENT_G = isLight ? 115 : 50;
    const ACCENT_B = isLight ? 22 : 80;

    const FONT_SIZE = 11;
    const CHARS = "01";

    type Column = {
      x: number;       // posición x en px
      y: number;       // posición y actual (cabeza de la columna)
      speed: number;   // px por frame
      length: number;  // cantidad de chars visibles en la cola
      chars: string[]; // buffer de chars de esta columna
      opacity: number; // opacidad base de la columna
    };

    let columns: Column[] = [];
    let animId: number;
    let W: number, H: number;

    const resize = () => {
      W = canvas.width = wrap.offsetWidth;
      H = canvas.height = wrap.offsetHeight;
      initColumns();
    };

    const initColumns = () => {
      const colCount = Math.floor(W / (FONT_SIZE * 1.6));
      columns = Array.from({ length: colCount }, (_, i) => {
        const length = 6 + Math.floor(Math.random() * 14);
        return {
          x: i * FONT_SIZE * 1.6 + FONT_SIZE * 0.3,
          y: Math.random() * -H,        // empiezan fuera de pantalla arriba
          speed: 0.4 + Math.random() * 1.2,
          length,
          chars: Array.from({ length }, () =>
            CHARS[Math.floor(Math.random() * CHARS.length)]
          ),
          opacity: 0.06 + Math.random() * 0.18,
        };
      });
    };

    const draw = () => {
      // Fondo semitransparente para crear el efecto de fade de cola
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, W, H);

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', 'Fira Mono', monospace`;
      ctx.textAlign = "center";

      for (const col of columns) {
        const totalLen = col.length;

        for (let k = 0; k < totalLen; k++) {
          const charY = col.y - k * FONT_SIZE * 1.4;
          if (charY < -FONT_SIZE || charY > H + FONT_SIZE) continue;

          // El primer char (cabeza) es más brillante
          const isHead = k === 0;
          // La cola se desvanece gradualmente
          const fade = isHead ? 1 : Math.pow(1 - k / totalLen, 2.5);
          const alpha = col.opacity * fade * (isHead ? 4 : 1);
          const clampedAlpha = Math.min(alpha, isHead ? 0.9 : 0.55);

          if (isHead) {
            // Cabeza: casi blanco/cyan brillante
            ctx.fillStyle = `rgba(${ACCENT_R + 80}, ${ACCENT_G + 50}, ${ACCENT_B + 10}, ${clampedAlpha})`;
          } else {
            ctx.fillStyle = `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${clampedAlpha})`;
          }

          // Muta el char ocasionalmente para dar sensación viva
          if (Math.random() < 0.015) {
            col.chars[k] = CHARS[Math.floor(Math.random() * CHARS.length)];
          }

          ctx.fillText(col.chars[k], col.x, charY);
        }

        // Avanza la columna
        col.y += col.speed;

        // Cuando la cola supera el fondo, reinicia desde arriba
        if (col.y - col.length * FONT_SIZE * 1.4 > H) {
          col.y = Math.random() * -H * 0.5;
          col.speed = 0.4 + Math.random() * 1.2;
          col.length = 6 + Math.floor(Math.random() * 14);
          col.opacity = 0.06 + Math.random() * 0.18;
          col.chars = Array.from({ length: col.length }, () =>
            CHARS[Math.floor(Math.random() * CHARS.length)]
          );
        }
      }
    };

    const loop = () => {
      draw();
      animId = requestAnimationFrame(loop);
    };

    resize();
    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [theme]);

  return (
    <>
    <footer
      ref={wrapRef}
     className="relative overflow-hidden py-12 bg-bg-primary border-t border-[#f7e4c7] dark:border-bg-secondary"
    >
      {/* Binary rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradiente inferior para que el canvas no tape el borde */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg-primary, transparent))",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Col 1: Logo */}
          <div className="flex flex-col gap-4">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col gap-1 w-full"
            >
              <div className="flex flex-row items-center gap-2 w-fit">
                <img
                  src="./assets/logo.png"
                  alt="IDEATEC Logo"
                  className="w-11 h-11"
              
                />
                <span className="text-2xl tracking-tight leading-none -ml-4">
                  <span
                    className="font-black text-accent"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    DEA
                  </span>
                  <span
                    className="font-black text-text-primary"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    TEC
                  </span>
                </span>
              </div>
            </a>

            <p className="text-sm text-text-primary/65 leading-relaxed max-w-xs">
              Transformamos ideas en soluciones digitales de alto impacto para
              empresas que quieren crecer.
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-text-primary/55">
              Navegación
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#servicios"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors w-fit"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors w-fit"
              >
                Nosotros
              </a>
              <a
                href="#portafolio"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors w-fit"
              >
                Portafolio
              </a>
              <a
                href="#precios"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors w-fit"
              >
                Precios
              </a>
              <a
                href="#contacto"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors w-fit"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Col 3: Contacto */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-text-primary/55">
              Contacto
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-text-primary/70 leading-relaxed">
                AV. PETIT THOURAS NRO. 1775 INT. 501 (ALTURA DE CUADRA 17 DE
                AVENIDA AREQUIPA.)
                <br />
                Lima - Lima - Lince
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a
                href="mailto:info@ideatec.com.pe"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors"
              >
                info@ideatec.com.pe
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a
                href="tel:+51912903330"
                className="text-sm text-text-primary/70 hover:text-accent transition-colors"
              >
                912 903 330
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-bg-secondary/50">
          <p className="text-sm text-text-primary/55">
            © 2026 IDEATEC. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-text-primary/55 font-bold uppercase tracking-widest">
            <button onClick={() => setPrivacyOpen(true)} className="hover:text-accent transition-colors cursor-pointer">
              Privacidad
            </button>
            <button onClick={() => setTermsOpen(true)} className="hover:text-accent transition-colors cursor-pointer">
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>

    <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
};