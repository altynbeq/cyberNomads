import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mysql,
    nodejs,
    mongodb,
    git,
    c,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    gitHubProject,
    shopify,
    carrent,
    euroVista,
    jobit,
    zoomia,
    tripguide,
    threejs,
    netflixProject,
    MoviesApp,
    StripeApp,
    cartApp,
    cApp,
    coins,
    done,
    hero,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    undone,
    analyt, crmModule, invoice, markt, websiteOne, techsupp
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "О нас",
    },
    {
      id: "roadmap",
      title: "Проекты",
    },
    {
      id: "experience",
      title: "Этапы сделки",
    },
    {
      id: "projects",
      title: "Услуги",
    },
    {
      id: "contact",
      title: "Контакты",
    },
  ];
  
  const services = [
    {
      title: "Создание современных сайтов",
      icon: web,
    },
    {
      title: "Чат бот с Искуственным Интелектом",
      icon: mobile,
    },
    {
      title: "Автоматизация бизнес процессов",
      icon: backend,
    },
    {
      title: "Создание кастомных модулей",
      icon: creator,
    },
    {
      title: "Создание 3D моделей ваших товаров",
      icon: backend,
    },
    {
      title: "Интеграция CRM систем",
      icon: creator,
    },
    {
      title: "Автоматезированные инструменты маркетинга",
      icon: web,
    },
    {
      title: "Обучение пользованием инструментами ИИ",
      icon: mobile,
    },
  ];
  
  const fiveInOneData = [
    {
      title: "Сайт для бизнеса",
      description: "Получите веб-сайт, специально разработанный для вашего бизнеса. Наши решения включают в себя каталог ваших товаров и услуг, всю необходимую информацию о вашей компании. Мы интегрируем формы обратной связи и точки контакта, чтобы обеспечить эффективное взаимодействие с клиентами и максимально вовлечь их в процесс покупки.",
      imgUrl: websiteOne,
    },
    {
      title: "Аналитика сайта",
      description: "Следите за количеством посетителей в разные периоды времени, определяйте страницы с наибольшим трафиком, анализируйте типы используемых устройств и часы пик активности. Наши интерактивные графики помогут вам лучше понять предпочтения вашей аудитории и принимать обоснованные решения для улучшения пользовательского опыта.",
      imgUrl: analyt,
    },
    {
      title: "CRM система",
      description: "Design & Development",
      imgUrl: crmModule,
    },
    {
      title: "Инструмент маркетинга",
      description: "Design & Development",
      imgUrl: markt,
    },
    {
      title: "Генератор инвойса",
      description: "Design & Development",
      imgUrl: invoice,
    },
    {
      title: "Тех поддержка",
      description: "Design & Development",
      imgUrl: techsupp,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React.js(Next,Redux)",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Индивидуальное обсуждение ваших потребностей и подбор оптимальных решений",
      company_name: "Консультация",
      icon: zoomia,
      iconBg: "#383E56",
      date: "Этап 1",
      points: [
        "Проводим детальное обсуждение вашего индивидуального случая для полного понимания ваших потребностей и целей.",
        "Предлагаем наиболее эффективные решения, которые подходят именно вам, учитывая ваши предпочтения и ожидания.",
        "Разрабатываем конкретный план действий и задач, чтобы обеспечить четкое представление о том, как будут решаться ваши вопросы.",
        "Устанавливаем четкие сроки выполнения задач и устанавливаем важные моменты для эффективного контроля и прогресса."
      ],
    },
    {
      title: "Воплощение вашего продукта в жизнь",
      company_name: "Этап 2",
      iconBg: "#E6DEDD",
      date: "Разработка",
      points: [
      "Тщательный анализ конкурентов и анализ существующих решений на рынке для определения уникальных преимуществ вашего продукта.",
      "Проработка концепции и идеи вашего продукта с учетом потребностей и предпочтений клиентов.",
      "Создание высококачественного прототипа или макета продукта для визуализации конечного результата.",
      "Разработка продукта, внедрение инновационных решений и обеспечение его функциональности и эффективности.",
      "Взаимное согласование с клиентом по результатам разработки, убеждение в том, что все их потребности и ожидания учтены."
      ],
    },
    {
      title: "Гарантированная работоспособность вашего продукта",
      company_name: "Этап 3",
      iconBg: "#383E56",
      date: "Тестирование",
      points: [
      "Тщательное тестирование всех функциональных возможностей вашего продукта для обеспечения его надежной работы.",
      "Проверка работоспособности на различных устройствах и в различных средах, чтобы гарантировать качество во всех условиях.",
      "Передача продукта клиенту для проведения тестирования и получения обратной связи.",
      "Подготовка к запуску продукта, включая исправление выявленных ошибок и обеспечение готовности к предстоящей реализации."
      ],
    },
    {
      title: "Успешный запуск и надежная поддержка",
      company_name: "Этап 4",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Запуск",
      points: [
      "Эффективный запуск вашего продукта на рынок с учетом всех необходимых параметров и настроек.",
      "Интеграция всех необходимых внешних сервисов для улучшения функциональности и оптимизации вашего продукта.",
      "Непрерывная поддержка от нашей команды на протяжении всего вашего пути работы с продуктом, обеспечивая вам помощь и консультации 24/7."
      ],
      }
  ];
  
  const projects = [
    {
      name: "Создание сайтов",
      description:
        "Специализируемся на разработке современных веб-сайтов, от лендинга до интернет-магазина. Обеспечиваем оптимизацию и совместимость с различными браузерами, предлагая современный дизайн и широкий функционал. Наши веб-сайты привлекут ваших клиентов к приобретению ваших товаров или услуг и удобному их использованию.",
      tags: [
        {
          name: "2 Недели",
          color: "blue-text-gradient",
        },
        {
          name: "50-200k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+SEO",
          color: "pink-text-gradient",
        },
      ],
      image: euroVista,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Чат боты на базе ИИ",
      description:
        "Чат-бот на основе искусственного интеллекта представляет собой технологический прорыв в сфере информационных технологий. Обладая всей необходимой информацией о ваших товарах и услугах, он отличается высоким уровнем профессионализма и навыками продаж. Доступен 24/7 для ваших клиентов и работает значительно эффективнее, чем обычный человек.",
      tags: [
        {
          name: "1 Неделя",
          color: "blue-text-gradient",
        },
        {
          name: "100-150k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Документация",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Интеграция CRM систем",
      description:
        "Предлагаем интеграцию CRM системы в ваши существующие веб-сайты и платформы. Наша система обеспечивает широкий функционал по выгрузке и загрузке данных, а также мгновенное поступление заказов со всех ресурсов. Это отличное средство для эффективного отслеживания процессов в вашем бизнесе. CRM помогут вам оптимизировать ваши процессы.",
      tags: [
        {
          name: "1 Неделя",
          color: "blue-text-gradient",
        },
        {
          name: "50k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Документация",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Автоматизация процессов",
      description:
        "Наши решения по автоматизации процессов предоставляют вашему бизнесу возможность значительно повысить эффективность и сократить затраты. Мы создаем индивидуальные решения, которые позволяют автоматизировать рутинные операции, улучшить координацию между отделами и обеспечить точное и своевременное выполнение задач.",
      tags: [
        {
          name: "2 Недели",
          color: "blue-text-gradient",
        },
        {
          name: "75k-150k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Тех под.",
          color: "pink-text-gradient",
        },
      ],
      image: netflixProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Инструменты маркетинга",
      description:
        "Набор инструментов представляет собой универсальное решение для повышения качества маркетинговых компаний в одном месте. Мы предлагаем широкий функционал, который позволяет создавать посты на всех социальных сетях, запускать рекламные кампании, обрабатывать почтовые письма и управлять отзывами клиентов и многое другое. Все это доступно всего в несколько кликов.",
      tags: [
        {
          name: "1 Неделя",
          color: "blue-text-gradient",
        },
        {
          name: "30к тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Обучение",
          color: "pink-text-gradient",
        },
      ],
      image: MoviesApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Создание бренда",
      description:
        "Наш уникальный пакет по созданию бренда представляет собой полный комплекс услуг, который поможет вашему бизнесу выделиться на рынке. Мы предлагаем вам выбор из 4 логотипов, специально разработанную цветовую гамму, которая будет использоваться в оформлении вашего сайта, соц сетей и продукции. Помимо этого, визуализацию вашего бренда с вашими продуктами.",
      tags: [
        {
          name: "1 Неделя",
          color: "blue-text-gradient",
        },
        {
          name: "35k tenge",
          color: "green-text-gradient",
        },
        {
          name: "+Инструменты",
          color: "pink-text-gradient",
        },
      ],
      image: cartApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Обучение работе с ИИ",
      description:
        "Наше обучение работе с искусственным интеллектом предоставляет уникальную возможность освоить передовые технологии и раскрыть потенциал вашего бизнеса. Предлагаем глубокое погружение в мир ИИ, обучая вас не только использовать существующие инструменты, но и создавать собственные инновационные решения. Поможем вам успешно внедрить ИИ в ваш бизнес и достичь новых высот эффективности и конкурентоспособности.",
      tags: [
        {
          name: "2 Недели",
          color: "blue-text-gradient",
        },
        {
          name: "65k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Практика",
          color: "pink-text-gradient",
        },
      ],
      image: gitHubProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Аналитика сайтов",
      description:
        "В этом модуле вы сможете отслеживать количество посещений, получать инсайты о времени, когда происходит наибольшая активность, выявлять самые посещаемые страницы, а также определять устройства, с которых пользователи заходят на ваш сайт. Аналитика посещений за день и неделю поможет вам лучше понять поведение вашей аудитории и принимать обоснованные решения для улучшения пользовательского опыта и эффективности вашего бизнеса.",
      tags: [
        {
          name: "1 Неделя",
          color: "blue-text-gradient",
        },
        {
          name: "45k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Обучение",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Создание систем",
      description:
        "Мы специализируемся на создании продвинутых систем, которые адаптируются под уникальные потребности каждого клиента, независимо от их сложности. Наш опыт и экспертиза позволяют нам разрабатывать комплексные решения, которые в полной мере удовлетворяют запросы и требования наших клиентов. Будь то создание масштабных корпоративных систем или индивидуальных программных продуктов, мы гарантируем высокое качество в каждом проекте.",
      tags: [
        {
          name: "1-3 месяцев",
          color: "blue-text-gradient",
        },
        {
          name: "100-300k тенге",
          color: "green-text-gradient",
        },
        {
          name: "+Тех под.",
          color: "pink-text-gradient",
        },
      ],
      image: cApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
  ];
  
  const roadmap = [
    {
      id: "0",
      title: "Асситент чата на ИИ",
      text: [
        "Создали чат-бота на базе ИИ для фирмы Zoomia в Дубае, включая модуль аналитики данных с искусственным интеллектом.",
        "Ассистент ИИ по обслуживанию клиентов для польской фирмы AMITRADE.",
        "Создали систему записи диалогов менеджеров с клиентами и аналитики этих диалогов с помощью искусственного интеллекта для выявления проблемных моментов и оценки эффективности менеджера."
      ],
      date: "2024",
      status: "Завершено",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Создание интерактивных систем",
      text: [
        "Модули аналитики посещений сайта и действий, совершенных клиентами.",
        "Модули по отслеживанию товаров.",
        "Интерактивные воронки продаж.",
        "CRM-системы.",
        "Системы обработки данных в модули HR для Американской фирмы Avature."
      ],
      date: "2024",
      status: "Завершено",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Создание сайтов и продвижение в сети",
      text: [
        "Сайт для Агентства труда EuroVista.",
        "Сайт для клиники красоты Monet Clinic.",
        "Сайт для Польской фирмы AMITTRADE.",
        "Создание блога для Астанинского информационного ресурса."
      ],
      date: "2024",
      status: "Завершено",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Интеграции систем",
      text: [
        "Интеграция внешней CRM-системы для автоматической обработки заказов с сайта Hayli.",
        "Интеграция мессенджера WhatsApp во внешние модули компаний.",
        "Подключение платежной системы Stripe"
      ],
      date: "2024",
      status: "Завершено",
      imageUrl: roadmap4,
    },
  ];

  export { services, technologies, experiences,  projects, roadmap, fiveInOneData };