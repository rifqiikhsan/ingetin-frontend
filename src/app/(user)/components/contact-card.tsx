import { ContactInfo } from "../types";

interface ContactCardProps {
  contact: ContactInfo;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { title, email, phone, location } = contact;

  return (
    <div className="rounded-2xl bg-primary p-6 shadow-lg">
      <h3 className="text-white font-semibold">{title}</h3>
      <a
        href={`mailto:${email}`}
        className="mt-3 block text-amber-400 hover:underline"
      >
        {location || email}
      </a>
      <p className="mt-1 text-gray-100 text-sm">{phone}</p>
    </div>
  );
}
