<template>
  <div class="home">
    <scrollactive id='scrollactive' class="nav fixed-nav" v-on:itemchanged="onItemChanged" :offset="0">
      <a href="#home" class="scrollactive-item home-section"><i class='fa fa-home fa-lg'></i></a>
      <a href="#about" class="scrollactive-item">деятельность</a>
      <!--a href="#portfolio" class="scrollactive-item">Portfolio</a-->
      <a href="#contact" class="scrollactive-item">Контакты</a>
    </scrollactive>
    <div class="logo">
      intellect
      <div class="small">
        group
      </div>
    </div>
    <div class='wrapper'>
      <section id='home'>
        <div class="container" v-scroll-reveal.reset='{ delay: 150 }'>
          <h1 class="lead">Более 10 лет <br> на страже ваших серверов</h1>
          <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует реализации прогрессивного развития</p>
        </div>
        <scrollactive id="down" :offset='0' v-scroll-reveal.reset='{ delay: 350 }'>
          <a class='scrollactive-item' href="#about">
            <i class='fa fa-angle-down fa-3x'></i>
          </a>
        </scrollactive>
      </section>
      <section id='about'>
        <div class='skill-block'>
          <div class='image'>
            <img src="../assets/eng.svg">
          </div>
          <div class='content'>
            <div class='inner' v-scroll-reveal.reset='{ delay: 150 }'>
              <h2>Инжиниринг</h2>
              <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует реализации прогрессивного развития</p>
              <div class="tag-list">
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
              </div>
            </div>
          </div>
        </div>
        <div class='skill-block'>
          <div class='image'>
            <img src="../assets/laboratory.svg">
          </div>
          <div class='content'>
            <div class='inner' v-scroll-reveal.reset='{ delay: 150 }'>
              <h2>Разработка ПО</h2>
              <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует реализации прогрессивного развития</p>
              <div class="tag-list">
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
              </div>
            </div>
          </div>
        </div>
        <div class='skill-block'>
          <div class='image'>
            <img src="../assets/consulting.svg">
          </div>
          <div class='content'>
            <div class='inner' v-scroll-reveal.reset='{ delay: 150 }'>
              <h2>Консалтинг</h2>
              <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует реализации прогрессивного развития</p>
              <div class="tag-list">
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
                <span class='tag'>Блокчейн</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--section id='portfolio'>
        <h1 v-scroll-reveal.reset='{ delay: 150 }'>Hello World</h1>
      </section-->
      <section id='contact'>
        <div class='container'>
          <div class="contact-group">
            <form v-scroll-reveal.reset='{ delay: 150 }'>
              <h1>Свяжитесь с нами</h1>
              <p>Значимость этих проблем настолько очевидна</p>
              <div class="input-group">
                <input type="string" name="name" placeholder="Имя">
                <input type="string" name="email" placeholder="Email">
              </div>
              <textarea rows="15" placeholder="Ваш вопрос">
              </textarea>
              <button type='submit'>Отправить</button>
            </form>

            <ul class="address" v-scroll-reveal.reset='{ delay: 500 }'>
              <li>
                <h4>Адрес</h4>
                <p>12345 Somewhere Road #654 Kappakabana Beach</p>
              </li>
              <li>
                <h4>Email</h4>
                <p>intellect@group.com</p>
              </li>
              <li>
                <h4>Телефон</h4>
                <p>+7 (123) 456-78-90</p>
              </li>
            </ul>
          </div>

        </div>
        <div class='bottom'></div>
      </section>
      <footer class='footer'>
        <div class='inner'>
          © Intellect Group. Все права защищены. | 2018
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',

  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {

    },
  },

};
</script>

<style scoped lang='scss'>
  .logo {
    position: fixed;
    top: 3rem;
    right: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #fff;
    background-color: $blue;
    z-index: 98;
    .small {
      display: block;
      font-size: 16px;
      font-weight: 400;
      //letter-spacing: 1px;
      margin-top: -2px;
      //margin-left: 0.25rem;
    }
  }
  .fixed-nav {
    z-index: 999;
    position: fixed;
    left: 0rem;
    //border-right: 1px solid rgba(#ddd, 0.2);
    box-shadow: 1px 1px 22px rgba(#003171, 0.1);
    bottom: 0;
    top: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    opacity: 1;
    transition: all 0.25s ease;
    width: 300px;
    //background: linear-gradient(145deg, $blue, #003171);
    background: $blue;
    padding: 2.5em 2.5em 0.5em 2.5em;
    text-align: right;
    text-transform: uppercase;
    font-variant: small-caps;

    &.hide {
      opacity: 0;
    }

    .scrollactive-item {
      text-transform: lowercase;
      font-size: 13px;
      font-weight: 500;
      padding: 0.5rem 1rem;
      padding-right: 2rem;
      margin: 1rem 0;
      transition: all 0.25s ease-in-out;
      position: relative;
      color: #fff;
      &.is-active {
        box-shadow: 2px 0 0 0 #fff;
      }
    }
  }

  .wrapper {
    margin-left: 300px;
  }

  section {
    min-height: 100vh;
    position: relative;
  }

  #home {
    z-index: 2;
    background-color: $blue;
    background-attachment: fixed;
    background-image: url(../assets/intro.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    min-height: 530px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    .container {
      padding: 4rem;
      max-width: 900px;
      h1 {
        color: #fff;
        font-size:42px;
        line-height: 1.2;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1.25rem;
        line-height: 1.8;
        margin-top: 2rem;
        color: rgba(255, 255, 255, 0.75);
      }
    }
    #down {
      //position: absolute;
      bottom: 8rem;
      left: 50%;
      margin-left: 4rem;
      //transform: translate(-50%, 0);
      width: 70px;
      height: 70px;
      opacity: 0.8;
      a {
        width: 100%;
        height: 100%;
        border-radius: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  #about {
    background-color: $gray-lightest;
    z-index: 2;
    .skill-block {
      //min-height: 380px;
      padding: 6rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      //border-bottom: 1px solid #ddd;
      .image {
        //background-color: rgba(#eee, 0.4);
        padding: 0 2rem;
        margin-right: 6rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
         img {
          width: 120px;
          height: auto;
         }
      }
      .content {
        max-width: 800px;
        //padding: 4rem;
        padding-left: 0;
        h2 {
          font-size: 1.75rem;
          line-height: 1.4;
          //margin-bottom: 1.5rem;
        }
        p {
          margin: 1rem 0;
          margin-bottom: 2rem;
          font-size: 1rem;
          color: rgba(#666, 0.5);
          line-height: 1.8;
        }
        .tag-list {
          max-width: 500px;
          //display: flex;
        }
        .tag {
          display: inline-block;
          background-color: #fff;
          padding: 4px 8px;
          border-radius: 3px;
          color: #555;
          font-size: 0.9rem;
          font-weight: 500;
          margin-right: 0.75rem;
          margin-bottom: 0.75rem;
        }
      }
    }
    .skill-block:nth-child(2) {
      background-color: rgba($blue, 0.03);
    }
    .skill-block:nth-child(3) {
      background-color: rgba($blue, 0.06);
    }
  }
  #portfolio {
    background: $gray-lightest;
    z-index: 2;
  }

  #contact {
    height:  calc(100vh - 150px);
    min-height: 0;
    position: relative;
    z-index: 2;
    margin-bottom: 150px;
    //background-color: #fff;
    box-shadow: 0 1px 16px rgba(#003171, 0.02);
    .container {
      padding: 4rem;
      background-color: #fff;
      h1 {
        font-size: 1.75rem;
        line-height: 1.4;
        margin-bottom: 0.5rem;
      }
      p {
          margin: 1rem 0;
          font-size: 1rem;
          color: rgba(#666, 0.5);
          line-height: 1.8;
          margin-bottom: 4rem;
      }

      .contact-group {
        display: flex;
        .address {
          padding: 2rem 8rem;
          align-self: center;
          width: 50%;
          li {
            padding: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid $gray-lightest;
          }
          h4 {
            font-size: 18px;
            margin-bottom: 1rem;
          }
          p {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 0;
            //color: $blue;
          }
        }
      }

      form {
        width: 50%;
        //padding: 2rem 0;
        .input-group {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 2rem;
        }
        input {
          background-color: $gray-lightest;
          font-size: 18px;
          height: 60px;
          border-radius: 30px;
          padding: 1rem 2rem;
          width: 47%;
        }
        label {
          font-size: 18px;
          color: rgba(#888, 0.9);
          margin-bottom: 1rem;
          display: block;
          padding: 0 1rem;
        }
        textarea {
          background-color: $gray-lightest;
          font-size: 18px;
          border-radius: 30px;
          width: 100%;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        button {
          width: 46%;
          margin: auto;
          height: 50px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          background-color: $blue;
          padding: 1rem 2rem;
          box-shadow: 0 2px 9px rgba(#003171, 0.02);
          transition: all 0.25s ease;
          &:hover {
            background-color: darken($blue, 5%);
          }
        }
      }
    }
  }


  .footer {
    background-color: $gray-lightest;
    color: rgba(#999, 0.5);
    padding-left: 4rem;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100% - 300px);
    height: 150px;
    z-index: 1;
  }

</style>






