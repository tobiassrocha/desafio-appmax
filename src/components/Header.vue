<template>
    <header class="header">
      <div class="header__container">
        <a href="/">
          <h1 class="header__logo"></h1>
        </a>
        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__item">
              <a href="/" class="navbar__link">Home</a>
            </li>
            <li class="navbar__item">
              <a href="/create-form-page" class="navbar__link">Criar nova oferta</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<style lang="less" escoped>
.header {
  height: 95px;
  
  &__container {
    background-color: #fff;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    position: fixed;
    width: 100%;
  }
  &__logo {
    background-image: url('../assets/logo.png');
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0;
    width: 300px;
    height: 75px;
  }

  .navbar {
    display: flex;

    &__list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
    }
    
    &__item {
      font-size: 16px;
      text-decoration: none;

      &:first-child {
        margin-right: 15px;
      }
    }
    
    &__link {
      color: #000;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 5px;
      border: 1px solid;
      padding: 5px 15px;

      &:hover {
        background-color: #fcbf10;
      }
    }
  }

  @media (max-width: 768px) {

    height: 75px;

    .navbar {
      display: none;
    }

    &__container {
      justify-content: center;
    }

    &__logo {
      width: 230px;
      height: 55px;
    }
  }
}
</style>