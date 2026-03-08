import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContatoPage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '80px' }}>
                <ContactForm />
            </div>
            <Footer />
        </main>
    );
}
