document.querySelectorAll('.signup').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input');
    var msg = form.querySelector('.msg');
    var email = input.value.trim();
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!valid) {
      msg.className = 'msg err';
      msg.textContent = 'Digite um e-mail válido, como nome@exemplo.com.';
      input.focus();
      return;
    }

    // Troque este trecho pela integração real (fetch para o back-end ou serviço de e-mail)
    msg.className = 'msg ok';
    msg.textContent = 'Pronto! Enviaremos as novidades para ' + email + '.';
    form.reset();
  });
});
