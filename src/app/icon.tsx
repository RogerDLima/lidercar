import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#040b16',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6',
                    borderRadius: '5px',
                    border: '2px solid #3b82f6',
                    fontWeight: 900,
                    fontFamily: 'sans-serif'
                }}
            >
                L
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
