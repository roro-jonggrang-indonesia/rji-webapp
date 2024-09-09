import { Mail, MapPin, Phone } from "lucide-react";

interface ContactUsHeadersProps {
  data: any;
}

export default function ContactUsHeaders({ data }: ContactUsHeadersProps) {
  return (
    <div className="mx-auto w-full space-y-5 text-center sm:text-start">
      <h1 className="font-semibold">{data.attributes.title}</h1>
      <h3 className="text-3xl font-bold">{data.attributes.taglines}</h3>
      <p className="max-w-xl">{data.attributes.description}</p>
      <p className="flex items-center justify-center break-words sm:justify-start">
        <Mail className="size-4 flex-shrink-0" />{" "}
        <span className="ml-3">{data.attributes.email}</span>
      </p>
      <p className="flex items-center justify-center break-words sm:justify-start">
        <Phone className="size-4 flex-shrink-0" />{" "}
        <span className="ml-3">{data.attributes.phone_number}</span>
      </p>
      <p className="flex items-center justify-center break-words sm:justify-start">
        <MapPin className="size-4 flex-shrink-0" />{" "}
        <span className="ml-3">{data.attributes.address}</span>
      </p>
    </div>
  );
}
