# Heritage Mapper

Projeto fullstack para visualização de locais históricos em mapa interativo.

A aplicação permite consultar pontos históricos armazenados em um banco de dados PostgreSQL com PostGIS e exibi-los em um mapa utilizando React e Leaflet.

![Mapa de Curitiba](https://github.com/user-attachments/assets/177b08c7-3a3d-4396-a07e-925f67218fb0)

## Tecnologias

- **Frontend:** React, React-Leaflet, Leaflet  
- **Backend:** Node.js, Express  
- **Banco de dados:** PostgreSQL + PostGIS  
- **Deploy:** Frontend no Vercel, Backend e banco no Render  

---

## Funcionalidades

- Mapa interativo com zoom e navegação  
- Pontos históricos com **nome, categoria, descrição e imagem**  
- Backend REST para consulta de dados geoespaciais  
- Conexão com banco PostgreSQL/PostGIS para armazenamento e consulta de coordenadas  

---

<img width="1280" height="686" alt="heritage app 2" src="https://github.com/user-attachments/assets/59106696-6c97-4528-af74-6f150295d2d3" />


## Como executar o projeto

## Backend

cd backend

npm install

npm run dev

## Frontend

cd frontend

cd my-app

npm install

npm start

## Deploy

Backend: https://heritage-app.onrender.com

Frontend: https://heritage-app.vercel.app
