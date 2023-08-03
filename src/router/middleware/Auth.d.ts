// Auth.d.ts
declare module '@/router/middleware/Auth.js' {
    export function authenticate(username: string, password: string): boolean;
    // Outros tipos ou declarações podem ser adicionados conforme necessário
}