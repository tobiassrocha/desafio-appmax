<template>
    <footer class="footer">
      <p class="footer__text">Desenvolvido com o <span class="footer__heart">♥</span> por Tobias Rocha da Rosa</p>
      <nav class="footer__navbar">
          <ul class="footer__navbar__list">
            <li class="footer__navbar__item">
              <a href="/" class="footer__navbar__link">Home</a>
            </li>
            <li class="footer__navbar__item">
              <a href="/create-form-page" class="footer__navbar__link">Criar nova oferta</a>
            </li>
          </ul>
        </nav>
    </footer>
</template>

<style lang="less" scoped>
.footer {
  background-color: #000;
  padding: 10px 0;

  &__text {
    color: #fcbf10;
    font-size: 14px;
    margin: 0;
  }

  &__heart {
    color: #f00;
    font-size: 18px;
    vertical-align: baseline;
  }

  &__navbar {
    background-color: #f2f2f2;
    border-top: 1px solid #000;
    bottom: 0;
    display: none;
    position: fixed;
    width: 100%;

    &__list {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 768px) {

    &__navbar {
      display: flex;
      justify-content: center;
      
      &__list {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      &__item {
        padding: 20px 0;
        width: 50%;

        &:first-child {
          border-right: 1px solid;
        }
      }

      &__link {
        color: #000;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 15px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }

  }
}
</style>