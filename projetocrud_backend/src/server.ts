import express from "express";
import connection from "./database";

const port = 3000;
const app = express();
app.use(express.json());

connection.schema
  .createTableIfNotExists("usuarios", (table) => {
    table.increments();
    table.string("username");
    table.string("email");
    table.string("password");
    table.timestamps();
  })
  .then(() => console.log("Tabela criada"))
  .catch((erro) => console.log(erro));

//leitura de usuario
app.get("/usuarios", (req, res) => {
  res.json({
    status: "ok",
    mensagem: "requisição com GET",
  });
});

app.post("/usuarios", (req, res) => {
  let usuario = req.body;
  usuario.created_at = new Date();
  connection("usuarios")
    .insert(usuario)
    .then((dados) => {
      console.log("Usuário inserido com sucesso");
      res.json({
        status: "ok",
        mensagem: "Usuário inserido com sucesso",
        dados: dados,
      });
    })
    .catch((erro) => {
      res.json({
        status: "erro",
        mensagem: "Erro ao inserir o usuário",
        erro: erro,
      });
    });
});

app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;

  connection("usuarios")
    .where("id", id)
    .delete()
    .then(() => {
      res.json({
        status: "ok",
        mensagem: "Usuário deletado com sucesso",
      });
    })
    .catch((erro) => {
      res.json({
        status: "erro",
        mensagem: erro,
      });
    });
});

app.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    status: "ok",
    mensagem: "requisição com PATCH",
    id: id,
  });
});

app.listen(port, () => console.log("Servidor rodando"));
