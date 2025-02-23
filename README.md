## 📌 **Visão Geral do Projeto**  
Um aplicativo onde os usuários podem cadastrar restaurantes visitados, registrar pratos e avaliá-los de **0 a 5 estrelas**.  

### **Principais Funcionalidades**  
✅ **CRUD de usuários** – Cadastro, login, edição e exclusão de conta.  
✅ **CRUD de restaurantes** – Nome, endereço, foto, tipo de comida.  
✅ **CRUD de pratos** – Nome do prato, restaurante associado, foto, avaliação de 0 a 5 estrelas.  
✅ **Persistência dos dados** – Banco de dados **PostgreSQL** com autenticação JWT.  

---

## 🎯 **Tecnologias Utilizadas**
- **App Mobile (iOS)**: Swift (UIKit ou SwiftUI), URLSession/Alamofire para requisições HTTP. (OUTRO REPOSITÓRIO)
- **Backend**: Node.js (Express.js) para a API REST.  
- **Banco de Dados**: PostgreSQL com Sequelize ORM.  
- **Autenticação**: JWT (JSON Web Token) para segurança.  
- **Hospedagem do Backend**: AWS (EC2, RDS) ou Railway/Render.  

---

## 📱 **Estrutura do App (Swift)**  
A arquitetura recomendada para o app é **MVVM (Model-View-ViewModel)** para organização do código.  

### **📌 Telas do Aplicativo**  
1. **Tela de Login / Cadastro** (com autenticação via API).  
2. **Tela Principal**: Lista de restaurantes cadastrados pelo usuário.  
3. **Tela de Cadastro/Edição de Restaurante**.  
4. **Tela de Detalhes do Restaurante** (com pratos cadastrados e avaliações).  
5. **Tela de Cadastro/Edição de Prato**.  

🔗 **Comunicação com API**: Usar **URLSession** ou **Alamofire** para chamadas ao backend.  

---

## 🖥️ **Backend (Node.js com Express)**
O backend será responsável por fornecer a API REST para o aplicativo.  

### **📌 Estrutura do Backend**
📂 **Projeto**  
```
/backend
  ├── src/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── middlewares/
  │   ├── database/
  │   ├── server.js
  ├── package.json
  ├── .env
```
  
### **📌 Rotas da API**
- **Usuários**  
  - `POST /users/register` → Cadastro de usuário  
  - `POST /users/login` → Login e retorno do token JWT  
  - `GET /users/me` → Retorna dados do usuário autenticado  
  - `DELETE /users/:id` → Deleta um usuário

- **Restaurantes**  
  - `GET /restaurants` → Lista de restaurantes do usuário  
  - `POST /restaurants` → Cadastro de restaurante  
  - `PUT /restaurants/:id` → Atualização de restaurante  
  - `DELETE /restaurants/:id` → Exclusão de restaurante  

- **Pratos**  
  - `GET /restaurants/:id/dishes` → Lista de pratos do restaurante  
  - `POST /restaurants/:id/dishes` → Cadastro de prato  
  - `PUT /dishes/:id` → Atualização de prato  
  - `DELETE /dishes/:id` → Exclusão de prato  

---

## 💾 **Banco de Dados (PostgreSQL + Sequelize)**
### **📌 Tabelas**
📌 **Usuários** (`users`)  
```
id (PK) | name | email | password_hash | createdAt | updatedAt
```
📌 **Restaurantes** (`restaurants`)  
```
id (PK) | user_id (FK) | name | address | type | photo | createdAt | updatedAt
```
📌 **Pratos** (`dishes`)  
```
id (PK) | restaurant_id (FK) | name | photo | rating | createdAt | updatedAt
```

---

## 🔒 **Autenticação com JWT**
O usuário faz login e recebe um **token JWT**, que deve ser enviado no header **Authorization** em todas as requisições privadas.  

---

## 🚀 **Próximos Passos**
✅ Criar ambiente de desenvolvimento no backend (Node.js + PostgreSQL).  
✅ Implementar autenticação JWT.  
✅ Criar o app iOS com Swift e consumir API.  
✅ Testar e otimizar a experiência do usuário.  