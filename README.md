# 🛠️ Configurando uma Instância de Banco de Dados SQL no Azure

Este guia mostra o passo a passo para criar uma instância de Banco de Dados SQL no Microsoft Azure usando o portal web.

---

## 📍 Passo 1: Acessar o Portal Azure

1. Acesse [https://portal.azure.com](https://portal.azure.com)
2. Faça login com sua conta Microsoft (ou crie uma, se necessário)

---

## 🏗️ Passo 2: Criar um Recurso SQL Database

1. No menu lateral, clique em **"Criar um recurso"**
2. Busque por **"SQL Database"** e selecione a opção
3. Clique em **"Criar"**

---

## 📋 Passo 3: Preencher as Informações Básicas

1. **Assinatura**: Selecione sua assinatura Azure ativa
2. **Grupo de Recursos**: Crie um novo ou selecione um existente
3. **Nome do Banco de Dados**: Escolha um nome único (ex: `meubanco-sql`)
4. Em **Servidor**, clique em **"Criar novo"**:
   - Nome do servidor: algo único (ex: `servidor-meubanco`)
   - Login do administrador: ex: `seu id de acesso`
   - Senha e confirmação de senha
   - Região: escolha a região mais próxima de você

---

## ⚙️ Passo 4: Configurações Adicionais

1. **Fonte de dados**: escolha **"Banco de dados em branco"**
2. **Plano de preço (Compute + storage)**: clique em **"Configurar banco de dados"** para escolher o modelo de performance
   - Para fins de teste, o mais simples (Basic ou General Purpose) já é suficiente

---

## 🔐 Passo 5: Configurar o Firewall

1. Após a criação, vá até o **servidor SQL** criado
2. Clique em **"Firewall e redes virtuais"**
3. Adicione seu IP atual à lista de IPs permitidos
4. Salve as alterações

---

## 🔗 Passo 6: Conectar-se ao Banco

1. Copie a **cadeia de conexão** disponível nas configurações do banco
2. Você pode usar ferramentas como:
   - **Azure Data Studio**
   - **SQL Server Management Studio (SSMS)**
   - **DBeaver**
3. Faça o login com o usuário e senha definidos anteriormente

---

## ✅ Pronto!

Seu banco de dados SQL no Azure está configurado e pronto para uso 🎉

---

## 📝 Dicas Rápidas

- Use **grupos de recursos** para organizar seus serviços por projeto
- Sempre defina regras de firewall para segurança
- Lembre-se de **excluir os recursos** após os testes para evitar cobranças

