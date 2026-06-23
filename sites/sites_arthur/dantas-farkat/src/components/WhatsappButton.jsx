import { WHATSAPP } from "../config.js";

export default function WhatsappButton() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="df-wpp" aria-label="Falar com um advogado no WhatsApp">
      <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true" fill="currentColor">
        <path d="M16 3C9 3 3.5 8.6 3.5 15.5c0 2.4.7 4.6 1.8 6.5L3 29l7.3-2.3c1.8 1 3.9 1.5 6.1 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3zm0 22.7c-2 0-3.8-.5-5.4-1.5l-.4-.2-4.3 1.3 1.3-4.2-.3-.4a10 10 0 0 1-1.6-5.5C5.3 9.9 10 5.3 16 5.3s10.7 4.6 10.7 10.2S22 25.7 16 25.7zm5.9-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.8-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
      <span>Falar com um advogado</span>
    </a>
  );
}
