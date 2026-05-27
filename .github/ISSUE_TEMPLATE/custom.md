---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: documentation
assignees: Depaiiva

---

### Descrição
[Breve resumo do que esta tela deve conter, ex: Listagem de cursos, filtros e descrição.]

### Checklist de Desenvolvimento (Obrigatório)
- [ ] **Componentização:** Utilizar os arquivos `/components/header.html` e `/components/footer.html` carregados via `components.js`.
- [ ] **Estrutura:** Seguir a semântica HTML5 correta (header, main, section, footer).
- [ ] **Estilização:** Utilizar apenas as classes definidas em `/css/style.css` e `/css/components.css`.
- [ ] **Responsividade:** Verificar layout em dispositivos móveis (375px) e desktop (1440px).
- [ ] **Assets:** Todas as imagens utilizadas devem estar obrigatoriamente dentro da pasta `/assets/img/`.
- [ ] **Performance:** Garantir que não haja código JavaScript inline no arquivo HTML.

### Critérios de Aceitação (Definition of Done)
- [ ] O Header e Footer estão carregando corretamente sem erros no console (F12).
- [ ] A página é acessível e não possui erros de quebra de layout.
- [ ] O código foi revisado e não possui comentários "sujos" ou código morto.
- [ ] O arquivo está organizado na pasta `/pages/`.
