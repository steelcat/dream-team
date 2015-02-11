# Репозиторий команды DreamTeam

## Правила работы с проектом
  1. Перед началом работы обязательно ознакомиться со статьей: http://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html .
  2. Разработку ведем в ветке develop
  3. Каждая поставленная задача реализуется отдельным разработчиком в своем собственном ответвлении от ветки develop, создаваемом командой git flow feature start MYFEATURE (название фичи должно быть осознанным и понятным)
  4. Все коммиты и комментарии в коде ведем исключительно на русском языке.

## Установка проекта на локальном компьютере
  1. Должны быть установлены: Bower, Gulp.
  2. Клонируем репозиторий https://github.com/steelcat/dream-team в свою локальную папку
  3. Инициализируем GitFlow в нашей папке проекта нажатием кнопки GitFlow в окне SourceTree, все настройки по-умолчанию
  4. Переходим на ветку develop
  5. Переходим в папку и в терминале вводим команду на установку npm-пакетов: npm install
  6. Устанавливаем веб-пакеты командой: bower install
  7. Проверяем работу Gulp командой: gulp
  8. Создаем ветку "фичи", нажав кнопку GitFlow и выбрав создание тематической ветки
  9. Работаем в этой ветке, не переходя обратно на develop
