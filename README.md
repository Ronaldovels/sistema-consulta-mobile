# Sistema de Consultas - Mobile

App React Native (Expo) para agendamento de consultas, integrado ao backend Spring Boot.

## Rodando localmente

```bash
npm install
npm start
```

## Deploy

### Backend
Hospedado no Render: https://backend-consultas-09rz.onrender.com

- GET /health → {"status":"UP"}
- GET /medicos → lista de médicos
- GET /pacientes → lista de pacientes

> O serviço dorme após 15 min de inatividade (free tier).
> A primeira requisição pode levar até 60 segundos.

---

### Frontend - APK Android

Build gerado com EAS Build (perfil `preview`).

1. Escaneie o QR Code abaixo **ou** baixe pelo link do Expo.
2. Permita instalação de fontes desconhecidas apenas para o instalador.
3. Instale e abra o app.

### QR Code do build (Expo Dashboard / EAS)

![QR Code EAS Build](./docs/qrcode-eas-build.png)

> Este QR é o da página do build em expo.dev - não o do `npx expo start`.

### Credenciais de teste

| Perfil | Campo | Valor |
|---|---|---|
| Médico | CRM | 789456 |
| Paciente | CPF | 12345678901 |
