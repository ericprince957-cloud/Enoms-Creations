import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="font-serif text-lg font-bold text-charcoal">
          Enoms Creations
        </p>
        <p className="mt-1 text-xs text-neutral-500">
          📍 Allen Avenue, Ikeja, Lagos • Premium events, seamlessly planned
        </p>

        <div className="mt-5 flex justify-center">
          <WhatsAppButton packageName="an event" label="Chat With Us" />
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Enoms Creations. All rights reserved.
        </p>
        <p className="mt-1 text-[11px] text-neutral-400">
          Concept by{" "}
          <a
            href="https://github.com/ericprince957-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-600 hover:underline"
          >
            Vector Codes
          </a>
        </p>
      </div>
    </footer>
  );
}
