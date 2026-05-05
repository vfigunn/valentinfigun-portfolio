
import React, { useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [botField, setBotField] = useState(''); // Honeypot field

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);

  React.useEffect(() => {
    // Verificar si hay un cooldown activo al cargar el componente
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission, 10);
      const cooldownPeriod = 120000; // 2 minutos (120,000 ms)
      
      if (timePassed < cooldownPeriod) {
        setCooldownSeconds(Math.ceil((cooldownPeriod - timePassed) / 1000));
        
        const interval = setInterval(() => {
          setCooldownSeconds((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              localStorage.removeItem('lastFormSubmission');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        return () => clearInterval(interval);
      } else {
        localStorage.removeItem('lastFormSubmission');
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1. Seguridad: Chequeo de Honeypot (Si un bot llena este campo, ignoramos pero simulamos éxito)
    if (botField !== '') {
      setFormStatus('success');
      toast.success('¡Mensaje enviado con éxito! Te responderé a la brevedad.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setBotField('');
      return;
    }

    // 2. Seguridad: Rate Limiting Client-Side
    if (cooldownSeconds > 0) {
      toast.error(`Por favor, espera ${cooldownSeconds} segundos antes de enviar otro mensaje.`);
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // 3. Sanitización básica: Eliminar espacios en blanco innecesarios
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch("https://formspree.io/f/mgvargjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('¡Mensaje enviado con éxito! Te responderé a la brevedad.');
        
        // Iniciar el cooldown de 2 minutos
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        setCooldownSeconds(120);
        const interval = setInterval(() => {
          setCooldownSeconds((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        throw new Error("Error en la respuesta");
      }
    } catch (error) {
      setFormStatus('error');
      toast.error('Error al enviar el mensaje. Por favor, intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - oculto visualmente pero disponible para bots que escanean el DOM */}
      <div className="absolute opacity-0 -z-50 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
          placeholder="Asunto del mensaje"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
          placeholder="¿En qué puedo ayudarte?"
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          disabled={isSubmitting || cooldownSeconds > 0}
          className={`w-full py-6 rounded-xl text-white text-base font-medium transition-all flex items-center justify-center gap-2 ${
            cooldownSeconds > 0 
              ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </span>
          ) : cooldownSeconds > 0 ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 size={20} /> Reintentar en {cooldownSeconds}s
            </span>
          ) : (
            <>
              <Send size={20} /> Enviar mensaje
            </>
          )}
        </Button>
        
        {formStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 rounded-xl flex items-center">
            <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0" />
            <span className="font-medium">¡Mensaje enviado con éxito!</span>
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20 rounded-xl flex items-center">
            <AlertCircle className="mr-3 h-5 w-5 flex-shrink-0" />
            <span className="font-medium">Error al enviar. Por favor, intentá nuevamente.</span>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
