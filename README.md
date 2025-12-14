# PROYECTO DEVOPS - SIMPLE Y FUNCIONAL 
 
## Integrantes 
Iuribel Gomez
Keiry Rodriguez
 
## Descripción 
Proyecto práctico que demuestra un pipeline CI/CD completo con Docker y GitHub Actions. 
 
## Características 
- API REST simple con Node.js/Express 
- Contenedor Docker 
- Pipeline CI/CD con GitHub Actions 
- Pruebas automáticas 
- Despliegue local con Docker Compose 
 
## Instalación Rápida 
\`\`\`bash 
# Clonar repositorio 
git clone https://github.com/Brawly2311/PROYECTO-FINAL.git 
cd PROYECTO-FINAL 
 
# Instalar dependencias 
cd app/backend 
npm install 
 
# Ejecutar localmente 
npm start 
# O usar Docker 
docker-compose up 
\`\`\` 
 
## Endpoints 
- \`GET /\` - Mensaje de bienvenida 
- \`GET /health\` - Health check 
- \`GET /api/users\` - Datos de ejemplo 
 
## Pipeline CI/CD 
1. Push al repositorio 
2. GitHub Actions ejecuta pruebas 
3. Si pasan las pruebas, se construye la imagen Docker 
4. Listo para despliegue 
 
## Tecnologías 
- Node.js 
- Express 
- Docker 
- GitHub Actions 
- Jest (pruebas) 
