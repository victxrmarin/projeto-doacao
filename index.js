document.addEventListener("DOMContentLoaded", () => {
    new window.TypeIt("#tipo-s", {
      lifeLike: false,
      speed: 100,
      loop: true,
      cursor: false
    })
      .type("O-", { delay: 1200 })
      .delete()
      .type("AB+", { delay: 1200 })
      .delete()
      .type("AB-", { delay: 1200 })
      .delete()
      .type("O+", { delay: 1200 })
      .delete()
      .type("B+", { delay: 1200 })
      .delete()
      .type("B-", { delay: 1200 })
      .delete()
      .type("A+", { delay: 1000 })
      .delete()
      .type("A-", { delay: 1000 })
      .delete()
      .go();
});