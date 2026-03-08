const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'public', 'images', 'client');

const rename = (oldPath, newPath) => {
    try {
        fs.renameSync(path.join(dir, oldPath), path.join(dir, newPath));
        console.log('Renamed', oldPath, 'to', newPath);
    } catch (e) {
        console.error('Error renaming', oldPath, e.message);
    }
}

rename('Imagem inicial (Imagem de entrada da LP).webp', 'hero_bg.webp');
rename('Logo-LíderCar-Proporção-2500.webp', 'logo.webp');
rename('Serviços/1.Mecânica em geral.webp', 'Serviços/1_mecanica.webp');
rename('Serviços/2.Pneus.webp', 'Serviços/2_pneus.webp');
rename('Serviços/3.Alinhamento.webp', 'Serviços/3_alinhamento.webp');
rename('Serviços/4.Balanceamento.webp', 'Serviços/4_balanceamento.webp');
rename('Serviços/5.Suspensão.webp', 'Serviços/5_suspensao.webp');
rename('Serviços/6.Freios.webp', 'Serviços/6_freios.webp');
rename('Serviços/7.Troca-de-óleo.webp', 'Serviços/7_oleo.webp');
rename('Serviços/8.Escapamento.webp', 'Serviços/8_escapamento.webp');

for (let i = 1; i <= 8; i++) {
    rename(`Feedbacks reais/Depoimento ${i}.webp`, `Feedbacks reais/depoimento_${i}.webp`);
}
