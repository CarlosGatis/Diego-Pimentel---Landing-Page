const EMAIL_TO = "carlosagatis@gmail.com";

document.getElementById("leadForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    nome:       document.getElementById("nome").value.trim(),
    empresa:    document.getElementById("empresa").value.trim(),
    telefone:   document.getElementById("telefone").value.trim(),
    email:      document.getElementById("email").value.trim(),
    quantidade: document.getElementById("quantidade").value.trim(),
    mensagem:   document.getElementById("mensagem").value.trim(),
  };

  const qtd = Number(data.quantidade || 0);
  if (Number.isNaN(qtd) || qtd < 3000) {
    alert("A quantidade mínima é 3000 unidades.");
    return;
  }

  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.textContent = "Enviando...";

  try {
    const payload = new FormData();
    payload.append("Nome",       data.nome);
    payload.append("Empresa",    data.empresa);
    payload.append("WhatsApp",   data.telefone);
    payload.append("E-mail",     data.email);
    payload.append("Quantidade", `${data.quantidade} unidades`);
    payload.append("Mensagem",   data.mensagem);
    payload.append("_subject",   `Orçamento - ${data.nome} | ${data.quantidade} unidades`);
    payload.append("_replyto",   data.email);
    payload.append("_captcha",   "false");
    payload.append("_template",  "table");

    const res  = await fetch(`https://formsubmit.co/ajax/${EMAIL_TO}`, {
      method:  "POST",
      headers: { Accept: "application/json" },
      body:    payload,
    });
    const json = await res.json();

    if (res.ok && json.success === "true") {
      showToast("Email enviado com sucesso!");
      form.reset();
    } else {
      showToast("Falha no envio. Tente novamente.", true);
    }
  } catch {
    showToast("Erro de conexão. Tente novamente.", true);
  } finally {
    btn.disabled = false;
    btn.textContent = "Enviar";
  }
});

function showToast(msg, isError = false) {
  document.getElementById("toast")?.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = msg;
  Object.assign(toast.style, {
    position:     "fixed",
    bottom:       "2rem",
    left:         "50%",
    transform:    "translateX(-50%)",
    background:   isError ? "#c0392b" : "#27ae60",
    color:        "#fff",
    padding:      "0.85rem 2rem",
    borderRadius: "8px",
    fontSize:     "1rem",
    fontWeight:   "600",
    zIndex:       "9999",
    boxShadow:    "0 4px 16px rgba(0,0,0,0.25)",
    opacity:      "0",
    transition:   "opacity 0.3s ease",
  });

  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = "1"; });
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
