
# 🧙‍♂️ WgetWizard

O **WgetWizard** é uma aplicação web simples e intuitiva que permite às pessoas utilizarem o poderoso comando `wget` sem precisar abrir o terminal. Ideal para quem deseja baixar sites, páginas ou arquivos da web com praticidade e interface gráfica amigável.

---

## 🚀 Funcionalidades

- Interface gráfica para inserir URLs
- Execução automatizada de comandos `wget` com opções avançadas
- Três modos de download:
  - Sites inteiros
  - Páginas HTML específicas
  - Arquivos de uma URL
- Backend com Node.js + Express para lidar com requisições e executar o `wget`

---

## 🗂️ Estrutura do Projeto

```
WgetWizard/
│
├── node_modules/            # Dependências do Node.js
├── src/
│   ├── css/                 # Estilos personalizados
│   └── img/                 # Imagens utilizadas no front-end
│
├── index.html               # Página principal da aplicação (frontend)
├── package.json             # Informações e dependências do projeto
├── package-lock.json        # Mapa detalhado das versões das dependências
└── server.js                # Servidor HTTP em Node.js com Express
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express** — Framework para criação do servidor HTTP
- **HTML5** — Estrutura da interface do usuário
- **CSS3** — Estilização personalizada
- **Bootstrap 5** — Framework responsivo para componentes visuais

---

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/WgetWizard.git
cd WgetWizard
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node server.js
```

O servidor estará disponível em:  
👉 `http://localhost:3000`

---

## 🌐 Como Usar

1. Abra o `index.html` no navegador.
2. Digite a URL do site/página que deseja baixar.
3. Escolha uma das opções disponíveis.
4. Clique em **Enviar** e aguarde o resultado.

---

## ⚠️ Aviso de Segurança

Por se tratar de um sistema que executa comandos do terminal, use com responsabilidade. Não execute URLs de fontes não confiáveis. É altamente recomendado utilizar em ambiente controlado ou local.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✨ Autor

Desenvolvido por **Caio Leonni** — [caioleonni.com](https://caioleonni.com)