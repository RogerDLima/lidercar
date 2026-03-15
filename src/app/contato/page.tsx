import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Contato | LiderCar - Agende sua Revisão",
    description: "Fale com a LiderCar. Agende revisões, solicite orçamentos e tire suas dúvidas sobre manutenção automotiva premium.",
};

export default function ContatoPage() {
    const breadcrumbItems = [
        { label: "Contato" }
    ];

    return (
        <main>
            <Header />
            <div style={{ paddingTop: '80px' }}>
                <Breadcrumbs items={breadcrumbItems} />
                <ContactForm />
            </div>
            <Footer />
        </main>
    );
}
