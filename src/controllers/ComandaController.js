import Comanda from "../models/Comanda.js";

export const criarComanda = async (req, res) => {
  try {
    const { numeroMesa, nomeCliente, pedidos } = req.body;

    if (!numeroMesa || !nomeCliente || !pedidos || pedidos.length === 0) {
      return res
        .status(400)
        .json({ error: "Mesa, Cliente e Pedidos são obrigatórios." });
    }

    const novaComanda = new Comanda({
      numeroMesa,
      nomeCliente,
      pedidos,
      status: "Pendente",
    });

    await novaComanda.save();
    res
      .status(201)
      .json({ mensagem: "Comanda criada com sucesso!", comanda: novaComanda });
  } catch (error) {
    console.error("Erro ao criar comanda: ", error);
    res.status(500).json({ error: "Erro interno ao salvar a comanda" });
  }
};
