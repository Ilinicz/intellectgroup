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
          <h1 class="lead">Разумные решения <br> в области инжиниринга, IT и консалтинга</h1>
          <p>Делаем мир лучше с 2005 года</p>
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
              <p>Мы выполняем любые виды инженерных работ, от проектирования до аудита.</p>
              <div class="tag-list">
                <span class='tag'>Проектирование</span>
                <span class='tag'>Монтаж</span>
                <span class='tag'>Аудит</span>
                <span class="tag">Экспертиза</span>
                <span class='tag'>Пусконаладочные работы</span>
                <span class='tag'>Промышленное строительство</span>
                <span class='tag'>Энергетическое строительство</span>
                <span class='tag'>Сети</span>
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
              <p>Реализуем самые смелые и высокотехнологичные проекты в области IT: от разработки ПО любой сложности до нейросетей и виртуальных рабочих столов для тысяч сотрудников.</p>
              <div class="tag-list">
                <span class='tag'>Сервисы</span>
                <span class='tag'>Web</span>
                <span class='tag'>IOS</span>
                <span class='tag'>Android</span>
                <span class='tag'>Системы BI</span>
                <span class='tag'>Машинное обучение</span>
                <span class='tag'>IoT</span>
                <span class='tag'>Онлайн-коммуникации</span>
                <span class="tag">Ruby on Rails</span>
                <span class="tag">Интерфейсы</span>
                <span class="tag">UX/UI</span>
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
              <p>Команда высококвалифицированных специалистов в области бухгалтерского учёта, юриспруденции и HR.</p>
              <div class="tag-list">
                <span class='tag'>Первичная документация</span>
                <span class='tag'>Сопровождение</span>
                <span class='tag'>Бухгалтерия</span>
                <span class='tag'>Кадровый учет</span>
                <span class='tag'>HR</span>
                <span class='tag'>Подбор кадров</span>
                <span class='tag'>Юридическа поддержка</span>
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
          <h1>Свяжитесь с нами</h1>
          <p>По рабочим и выходным</p>
          <div class="contact-group">
            <form v-scroll-reveal.reset='{ delay: 150 }'>
              <div class="input-group">
                <input type="string" name="name" placeholder="Имя">
                <input type="string" name="email" placeholder="Email">
              </div>
              <textarea placeholder="Ваш вопрос">
              </textarea>
              <button type='submit'>Отправить</button>
            </form>

            <ul class="address" v-scroll-reveal.reset='{ delay: 500 }'>
              <li>
                <h4>Адрес</h4>
                <p>Верхняя Масловка 28/2 <br> Москва, Россия</p>
              </li>
              <li>
                <h4>Email</h4>
                <p>intellect@group.com</p>
              </li>
              <li>
                <h4>Телефон</h4>
                <p>+7 (926) 209-18-86</p>
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
  @import '../assets/styles/mixins.scss';

  .logo {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #fff;
    background-color: $blue;
    z-index: 98;
    .small {
      display: block;
      font-size: 13px;
      font-weight: 400;
      //letter-spacing: 1px;
      margin-top: -2px;
      //margin-left: 0.25rem;
    }
    @include tablet-landscape {
      top: 2rem;
      right: 2rem;
      font-size: 20px;
    }

    @include desktop {
      top: 3rem;
      right: 3rem;
      font-size: 22px;
      .small {
        font-size: 16px;
      }
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
    display: none;

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

    @include tablet-landscape {
      display: flex;
      width: 200px;
      padding: 1.5rem;
      .scrollactive-item {
        padding-right: 1.2rem;
      }
    }
    @include desktop {
      display: flex;
      width: 300px;
      padding: 2rem;
      .scrollactive-item {
        padding-right: 2rem;
      }
    }
  }

  .wrapper {
    margin-left: 0;
    @include tablet-landscape {
      margin-left: 200px;
    }
    @include desktop {
      margin-left: 300px;
    }
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
      padding: 2rem;
      max-width: 900px;
      h1 {
        color: #fff;
        font-size:36px;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        text-shadow: 3px 3px 0 $blue, -3px -3px 0 $blue;

      }
      p {
        font-size: 1.25rem;
        line-height: 1.8;
        margin-top: 2rem;
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 2px 2px 0 $blue, -2px -2px 0 $blue;
      }
    }
    #down {
      position: absolute;
      bottom: 4rem;
      left: 2rem;
      //transform: translate(-50%, 0);
      width: 70px;
      height: 70px;
      a {
        width: 100%;
        height: 100%;
        border-radius: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgba(#fff, 0.7);
        font-size: 12px;
        color: rgba(#fff, 0.7);
        box-shadow: 0 0 0 4px $blue;
        background-color: $blue;
      }
    }

    @include tablet-portrait {
      .container {
        padding: 4rem;
        h1 {
          font-size: 42px;
        }
      }
      #down {
        bottom: 4rem;
        left: 4rem;
      }
    }
  }
  #about {
    background-color: $gray-lightest;
    z-index: 2;
    .skill-block {
      //min-height: 380px;
      padding: 2rem 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      //align-items: center;
      //border-bottom: 1px solid #ddd;
      .image {
        //background-color: rgba(#eee, 0.4);
        //padding: 0 2rem;
        //margin-right: 6rem;
        padding: 2rem;
        padding-bottom: 0;
        position: relative;
        //display: flex;
        //align-items: center;
        //justify-content: center;
         img {
          width: 100px;
          height: auto;
         }
      }
      .content {
        max-width: 800px;
        //padding: 4rem;
        padding: 2rem;
        //text-align: center;
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
          max-width: 700px;
          //display: flex;
        }
        .tag {
          display: inline-block;
          background-color: #fff;
          padding: 4px 8px;
          border-radius: 3px;
          color: #555;
          font-size: 0.7rem;
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

    @include tablet-portrait {
      .skill-block {
        padding: 2rem;
      }
    }

    @include tablet-landscape {
      .skill-block {
        padding: 0rem;
        flex-flow: row nowrap;
        align-items: center;

        .image {
          //padding: 0 2rem;
          //padding-right: 2rem;
          padding: 0;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100px;
          }
        }
        .content {
          width: 70%;
          padding: 4rem;
          padding-left: 0;
          padding-right: 2rem;
        }
      }
    }

    @include desktop {
      .skill-block {
        padding: 0rem;
        flex-flow: row nowrap;
        align-items: center;
        //justify-content: flex-end;

        .image {
          //padding: 0 2rem;
          //padding-right: 2rem;
          padding: 0;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 120px;
          }
        }
        .content {
          width: 70%;
          padding: 6rem;
          padding-left: 0;
          padding-right: 2rem;
          .tag {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  #portfolio {
    background: $gray-lightest;
    z-index: 2;
  }

  #contact {
    min-height: 0;
    position: relative;
    z-index: 2;
    margin-bottom: 150px;
    box-shadow: 0 4px 4px rgba(#003171, 0.01);
    .container {
      padding: 4rem 2rem;
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
          margin-bottom: 2rem;
      }

      .contact-group {
        display: flex;
        flex-flow: column-reverse nowrap;
        .address {
          align-self: center;
          width: 100%;
          li {
            padding: 1rem 0;
            margin-bottom: 1rem;
            border-bottom: 1px solid $gray-lightest;
          }
          h4 {
            font-size: 1rem;
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
        //width: 50%;
        //padding: 2rem 0;
        margin-top: 2rem;
        .input-group {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          width: 100%;
        }
        input {
          background-color: $gray-lightest;
          font-size: 18px;
          height: 60px;
          border-radius: 30px;
          padding: 1rem 2rem;
          width: 100%;
          margin-bottom: 2rem;
        }
        textarea {
          background-color: $gray-lightest;
          font-size: 18px;
          border-radius: 30px;
          width: 100%;
          padding: 2rem;
          margin-bottom: 2rem;
          height: 200px;
        }
        button {
          width: 100%;
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

    @include tablet-portrait {
      .container {
        padding: 4rem;
      }
    }

    @include desktop {
      margin-bottom: 250px;
      .container {
        padding: 4rem;
        .contact-group {
          flex-flow: row nowrap;
          align-items: flex-start;
          justify-content: space-between;
          .address {
            width: 30%;
            align-self: flex-start;
            padding: 2rem 0;
          }
          form {
            width: 60%;
            input {
              width: 47%;
            }
            textarea {
              height: 300px;
            }

            button {
              width: 40%;
            }
          }
        }
      }
    }
  }


  .footer {
    background-color: $gray-lightest;
    color: #e9e9e9;
    font-weight: bold;
    padding: 2rem;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    font-size: 14px;
    z-index: 1;
    text-align: center;

    @include tablet-landscape {
      width: calc(100% - 250px);
    }

    @include desktop {
      width: calc(100% - 300px);
      padding: 4rem;
      font-size: 1rem;
    }
  }

</style>






