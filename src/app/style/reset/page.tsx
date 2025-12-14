import { type Metadata } from "next";
import { generateMetadata } from "../../core/generateMetadata";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Resetting CSS Styles",
  description:
    "Эффективный сброс CSS стилей для кроссбраузерной вёрстки. Изучите лучшие практики, получите готовые шаблоны и научитесь создавать универсальные стили для вашего сайта.",
});

export default function StyleResetPage() {
  return (
    <article className="article__page">
      <h1>CSS Reset</h1>
      <InfoBlock
        title="Что такое CSS Reset?"
        infoList={[
          {
            label: "CSS Reset ",
            value:
              "это набор стилей, который позволяет устранить различия в отображении HTML-элементов между разными браузерами. Он обеспечивает единообразный внешний вид веб-контента путем нейтрализации стилей по умолчанию.",
          },
        ]}
      />
      <InfoBlock
        title="Зачем нужен CSS Reset?"
        infoList={[
          {
            label: "Кроссбраузерная совместимость",
            value:
              "Гарантирует одинаковое отображение элементов во всех браузерах",
          },
          {
            label: "Полный контроль",
            value:
              "Даёт разработчикам возможность создавать стили с чистого листа",
          },
          {
            label: "Оптимизация",
            value:
              "Упрощает процесс разработки за счет стандартизированной базы",
          },
        ]}
      />
      <InfoBlock
        title="Основные преимущества"
        infoList={[
          {
            value: "Устранение различий в стилях по умолчанию.",
          },

          {
            value: "Повышение предсказуемости поведения элементов.",
          },
          {
            value: "Уменьшение времени на настройку базовых стилей.",
          },
          {
            value: "Улучшение процесса поддержки кода.",
          },
        ]}
      />
      <CodeWrapper
        fileName="reset.css"
        title="CSS"
        description="Создайте отдельный файл reset.css"
        code={`html {
  font-family: sans-serif;
  line-height: 1.15;
  font-size: 16px;
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  height: 100%;
  width: 100%;
}

main,
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
details {
  display: block;
}

:focus,
:active {
  outline: none;
}

iframe,
figcaption,
hgroup,
canvas,
center,
form,
body,
html,
td,
th,
caption,
track,
source,
audio,
video,
img,
menu,
menuitem,
dialog,
summary,
details,
dd,
dt,
dl,
li,
ol,
ul,
option,
optgroup,
select,
button,
textarea,
input,
legend,
fieldset,
section,
article,
aside,
header,
footer,
main,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
pre,
address {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 500;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0;
  overflow: visible; /* 2 */
}

code,
kbd,
samp,
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  color: currentColor;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

a:focus,
a:active {
  outline: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  max-width: 100%;
  vertical-align: top;
}

button,
input,
textarea,
optgroup,
fieldset,
select {
  font-family: inherit;
  font-size: 100%;
}

button,
input,
textarea,
optgroup,
fieldset,
option,
progress,
select,
table,
th,
td,
img,
object,
embed,
iframe,
video,
audio,
details,
summary,
ul,
ol,
legend,
button::-moz-focus-inner,
::-webkit-file-upload-button {
  border: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  background-color: transparent;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
  background-color: transparent;
}

select {
  text-transform: none;
}

fieldset,
legend,
button::-moz-focus-inner,
[type="checkbox"],
[type="radio"] {
  padding: 0;
}

legend {
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
  resize: none;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

ul {
  list-style: none;
}

li {
  list-style: none;
}

input {
  overflow: visible;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

input::-ms-clear {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  -webkit-appearance: none;
  margin: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`}
      />
      <CodeWrapper
        description="Подключите файл в HTML документе или в layout приложения, убедитесь что reset.css подключается первым в списке стилей"
        fileName="layout.tsx"
        title="Пример использования"
        code={`<link rel="stylesheet" href="css/reset.css">
// или
import "./reset.css";`}
      />
    </article>
  );
}
