/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Permitir cualquier dominio HTTPS
        port: '', // Puedes especificar un puerto si es necesario
        pathname: '/**', // Permitir cualquier ruta
      },
      {
        protocol: 'http',
        hostname: '*', // Permitir cualquier dominio HTTP
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;