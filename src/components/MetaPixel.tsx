"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function MetaPixel() {
    const [pixelId, setPixelId] = useState<string | null>(null);

    useEffect(() => {
        // Primeiro, tentar pegar da variável de ambiente (Vercel/Netlify seguro)
        const envPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;

        if (envPixel && envPixel.trim() !== '') {
            setPixelId(envPixel);
            return;
        }

        // Se não existir variável de ambiente, tenta ler do arquivo local admin
        fetch("/api/pixel")
            .then(res => res.json())
            .then(data => {
                if (data && data.id && data.id.trim() !== "") {
                    setPixelId(data.id);
                }
            })
            .catch(() => { });
    }, []);

    if (!pixelId) return null;

    return (
        <Script id="meta-pixel" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
            `}
        </Script>
    );
}
