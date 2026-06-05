(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  const feedback = document.getElementById('form-feedback');

  // ---------- Seletores dos campos ----------

  const fields = {
    name: {
      el: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: validateName,
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: validateEmail,
    },
    message: {
      el: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: validateMessage,
    },
  };

  // ---------- Funções de validação ----------

  function validateName(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'Por favor, informe seu nome.';
    if (trimmed.length < 3) return 'O nome deve ter pelo menos 3 caracteres.';
    if (trimmed.length > 80) return 'O nome deve ter no máximo 80 caracteres.';
    return '';
  }

  function validateEmail(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'Por favor, informe seu e-mail.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(trimmed)) return 'Informe um e-mail válido (ex: nome@email.com).';
    return '';
  }

  function validateMessage(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'Por favor, escreva sua mensagem.';
    if (trimmed.length < 10) return 'A mensagem deve ter pelo menos 10 caracteres.';
    if (trimmed.length > 1000) return 'A mensagem deve ter no máximo 1000 caracteres.';
    return '';
  }

  // ---------- Aplicar estado visual ao campo ----------

  function applyFieldState(field, errorMessage) {
    const { el, error } = field;
    if (errorMessage) {
      el.classList.add('input-error');
      el.classList.remove('input-success');
      error.textContent = errorMessage;
    } else {
      el.classList.remove('input-error');
      el.classList.add('input-success');
      error.textContent = '';
    }
  }

  // ---------- Validar campo individualmente ----------

  function validateField(key) {
    const field = fields[key];
    const errorMessage = field.validate(field.el.value);
    applyFieldState(field, errorMessage);
    return !errorMessage;
  }

  // ---------- Validação em tempo real ----------

  Object.keys(fields).forEach(function (key) {
    fields[key].el.addEventListener('blur', function () {
      validateField(key);
    });

    fields[key].el.addEventListener('input', function () {
      if (fields[key].el.classList.contains('input-error')) {
        validateField(key);
      }
    });
  });

  // ---------- Exibir feedback global ----------

  function showFeedback(type, message) {
    feedback.className = '';
    feedback.classList.add(type === 'success' ? 'feedback-success' : 'feedback-error');
    feedback.textContent = message;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideFeedback() {
    feedback.className = '';
    feedback.textContent = '';
  }

  // ---------- Envio ----------

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideFeedback();

    const results = Object.keys(fields).map(function (key) {
      return validateField(key);
    });

    const isValid = results.every(Boolean);

    if (!isValid) {
      const firstErrorKey = Object.keys(fields).find(function (key) {
        return fields[key].el.classList.contains('input-error');
      });
      if (firstErrorKey) fields[firstErrorKey].el.focus();
      showFeedback('error', 'Por favor, corrija os erros acima antes de enviar.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    setTimeout(function () {
      window.location.href = 'confirmation-form-contact.html';
    }, 1200);
  });

})();