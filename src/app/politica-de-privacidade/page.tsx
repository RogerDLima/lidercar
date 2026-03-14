import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="container py-32 mt-20">
                <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
                <div className="prose prose-invert max-w-none">
                    <p>A LiderCar valoriza a privacidade de seus clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Coleta de Informações</h2>
                    <p>Coletamos informações que você nos fornece diretamente, como nome, telefone, e-mail e dados do veículo ao solicitar um orçamento ou agendar um serviço via WhatsApp ou formulário.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso das Informações</h2>
                    <p>As informações coletadas são utilizadas para:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Prestar os serviços de manutenção e reparo automotivo;</li>
                        <li>Entrar em contato para orçamentos e agendamentos;</li>
                        <li>Enviar comunicações sobre o status do serviço;</li>
                        <li>Melhorar nossa experiência de atendimento.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Proteção de Dados</h2>
                    <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Compartilhamento com Terceiros</h2>
                    <p>Não vendemos ou alugamos seus dados pessoais. Podemos compartilhar informações com parceiros necessários para a execução dos serviços (ex: fornecedores de peças) ou por obrigação legal.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Seus Direitos</h2>
                    <p>Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Alterações nesta Política</h2>
                    <p>Reservamo-nos o direito de atualizar esta política periodicamente. Recomendamos a revisão regular desta página.</p>

                    <p className="mt-12 text-sm text-gray-400 text-center">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
