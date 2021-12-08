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
  let usuarios = connection
    .select()
    .table("usuarios")
    .then((usuarios) => {
      res.json({
        status: "ok",
        mensagem: "requisição com GET",
        usuarios: usuarios,
      });
    });
});

app.post("/usuarios", (req, res) => {
  let usuario = req.body;
  usuario.created_at = new Date();

  connection("usuarios")
    .where("email", usuario.email)
    .then((usuarios) => {
      if (usuarios.length > 0) {
        res.json({
          status: "erro",
          mensagem: "Email já cadastrado",
        });
      } else {
        connection("usuarios")
          .insert(usuarios)
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
      }
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
    .then((resultado) => {
      if (resultado == 1) {
        res.json({
          status: "ok",
          mensagem: "Usuário deletado com sucesso",
        });
      } else {
        res.json({
          status: "warning",
          mensagem: "Nenhum registro encontrado para deletar",
        });
      }
    })
    .catch((erro) => {
      res.json({
        status: "erro",
        mensagem: erro,
      });
    });
});

app.patch("/usuarios/:id", (req, res) => {
  let id = req.params.id;
  let usuario = req.body;
  usuario.updated_at = new Date();

  connection("usuarios")
    .where("id", id)
    .update(usuario)
    .then((resultado) => {
      if (resultado == 1) {
        res.json({
          status: "ok",
          mensagem: "Dados atualizados com sucesso!",
        });
      } else {
        res.json({
          status: "warning",
          mensagem: "Nenhum registro atualizado...",
        });
      }
    })
    .catch((erro) => console.log(erro));
});

app.listen(port, () => console.log("Servidor rodando"));
