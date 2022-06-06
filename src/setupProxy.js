import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/api/v1',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
}