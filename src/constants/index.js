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
    cApp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "О нас",
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
      title: "Создание модулей и многое другое",
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
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: euroVista,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Чат боты на базе ИИ",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Интеграция CRM систем",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Автоматизация процессов",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: netflixProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Инструменты маркетинга",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: MoviesApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Создание бренда",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: cartApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Обучение работе с ИИ",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: gitHubProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Аналитика сайтов",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "Создание продвинутых систем",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: cApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
  ];
  
  export { services, technologies, experiences,  projects };