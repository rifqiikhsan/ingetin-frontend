import { contactInfo } from "../data/contacts";
import ContactCard from "./contact-card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-primary">
              Hubungi Kami
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Ada pertanyaan seputar Ingetin, fitur premium, atau kendala
              teknis? Tim kami siap membantu Anda mengoptimalkan produktivitas
              harian Anda.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
