import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main className="container py-32 mt-20">
                <h1 className="text-4xl font-bold mb-8">Termos de Serviço</h1>
                <div className="prose prose-invert max-w-none">
                    <p>Ao utilizar os serviços da LiderCar, você concorda com os seguintes termos e condições.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Escopo dos Serviços</h2>
                    <p>A LiderCar oferece serviços de manutenção, reparo e diagnóstico automotivo. O serviço específico será detalhado no orçamento aprovado pelo cliente.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Orçamentos e Aprovação</h2>
                    <p>Nenhum serviço será realizado sem a aprovação prévia do orçamento pelo cliente. Os orçamentos têm validade de 5 dias úteis, salvo indicação em contrário.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Garantia</h2>
                    <p>Oferecemos garantia legal sobre os serviços prestados e peças substituídas, conforme o Código de Defesa do Consumidor. A garantia não cobre danos decorrentes de mau uso, acidentes ou intervenção de terceiros.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Responsabilidades do Cliente</h2>
                    <p>O cliente é responsável pela veracidade das informações fornecidas sobre o veículo e por retirar o veículo no prazo acordado após a conclusão do serviço.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Pagamento</h2>
                    <p>As formas de pagamento aceitas e condições de parcelamento serão informadas no momento da aprovação do orçamento.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Propriedade Intelectual</h2>
                    <p>Todo o conteúdo deste site, incluindo logos e textos, é de propriedade da LiderCar e não pode ser reproduzido sem autorização.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Foro</h2>
                    <p>Fica eleito o foro da comarca de Belo Horizonte/MG para dirimir eventuais controvérsias oriundas destes termos.</p>

                    <p className="mt-12 text-sm text-gray-400 text-center">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
