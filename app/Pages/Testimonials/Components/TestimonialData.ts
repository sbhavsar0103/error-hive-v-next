import { StaticImageData } from "next/image";
import ShivasyaLogo from "../ClientLogo/secondary-logo.jpg";
import PintooGarmenLogo from "../ClientLogo/pintoo_garment.png";
import TheYardLogo from "../ClientLogo/theyard.jpg";
import TechnoCNCLogo from "../ClientLogo/techno_cnc.png";
import KRundraLogo from "../ClientLogo/KRudra.jpg";
import FlashStudioLogo from "../ClientLogo/flash_studio.jpg";


export interface Testimonial {
  company: string;
  companyLogo: StaticImageData;
  companyLink: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    company: "Shivasya Education",
    companyLogo: ShivasyaLogo,
    companyLink: "https://shivasya.in",
    review:
      "We needed a modern website that clearly explains our courses and builds trust with students. The team understood our requirements quickly and delivered exactly what we were looking for. The design, performance, and overall experience have helped us attract more inquiries online.",
  },
  {
    company: "Pintoo Garment",
    companyLogo: PintooGarmenLogo,
    companyLink: "https://pintoogarments.com",
    review:
      "Our old website was outdated and difficult for customers to navigate. After working with this team, we now have a clean and professional website that properly represents our brand. The process was smooth and they were very responsive throughout the project.",
  },
  {
    company: "The Yard",
    companyLogo: TheYardLogo,
    companyLink: "https://theyardahmedabad.com",
    review:
      "They helped us create a digital presence that truly reflects our brand. From the layout to the small design details, everything was handled professionally. We've already received great feedback from our customers about the new website.",
  },
  {
    company: "Techno CNC",
    companyLogo: TechnoCNCLogo,
    companyLink: "https://www.technocnc.in",
    review:
      "As a manufacturing business, we wanted a website that clearly presents our services and technical capabilities. The team delivered a clean and informative platform that makes it easier for potential clients to understand what we offer.",
  },
  {
    company: "K-Rudra Textile",
    companyLogo: KRundraLogo,
    companyLink: "https://krudratextile.com",
    review:
      "We were looking for a reliable team to build a professional website for our textile business. They understood our requirements very well and delivered a clean, modern website that represents our brand perfectly. The process was smooth and the final result exceeded our expectations.",
  },
  {
    company: "Flash Studio",
    companyLogo: FlashStudioLogo,
    companyLink: "https://flashstudio.co.in",
    review:
      "As a photography studio, it was important for us to have a website that showcases our work beautifully. The team created a sleek and fast website that highlights our portfolio perfectly. We've received great feedback from clients and it has helped us attract more bookings.",
  },
];