document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const action = form.action;

      status.innerHTML = "Enviando...";

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.innerHTML = "<span style='color:green;'>Mensagem enviada com sucesso!</span>";
          form.reset();
        } else {
          const result = await response.json();
          status.innerHTML = `<span style='color:red;'>Erro: ${result.message || "Algo deu errado."}</span>`;
        }
      } catch (error) {
        status.innerHTML = `<span style='color:red;'>Erro de conexão. Tente novamente mais tarde.</span>`;
      }
    });
  }
});
