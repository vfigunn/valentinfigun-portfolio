
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

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Aquí se simula el envío del formulario
    // En una implementación real, aquí se haría la llamada a una API o servicio de correo
    try {
      // Simulación de envío
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simular éxito
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('¡Mensaje enviado con éxito! Te responderé a la brevedad.');
    } catch (error) {
      setFormStatus('error');
      toast.error('Error al enviar el mensaje. Por favor, intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Asunto del mensaje"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="¿En qué puedo ayudarte?"
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Enviando...</>
          ) : (
            <>
              <Send size={18} /> Enviar mensaje
            </>
          )}
        </Button>
        
        {formStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            <span>¡Mensaje enviado con éxito!</span>
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
            <AlertCircle className="mr-2 h-5 w-5" />
            <span>Error al enviar el mensaje. Por favor, intentá nuevamente.</span>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
