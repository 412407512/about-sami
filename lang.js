function changeLang(lang) {
  const translate = {
    en: {
      Home: "Home",
      aboutLink: "About",
      projects: "Projects",
      contactMe: "Contact me",
      logout: "Logout",
      name: "Hi, I'm Sami Moh",
      job: "FullStack Developer",
      aboutBrief:
        "Experienced web developer with a background in HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, and Laravel. Specializing in building high-quality websites and web applications with exceptional user experiences. Proficient in Laravel for scalable solutions, HTML/CSS/Bootstrap for visually appealing designs, and PHP/MySQL for complex back-end systems. Committed to staying current with industry trends and delivering exceptional results.",
      MessageMe: "Message Me &nbsp;<i class='fab fa-telegram-plane'></i>",
      BriefAboutMe:
        "Experienced web developer with a background in HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, and Laravel. Specializing in building high-quality websites and web applications with exceptional user experiences. Proficient in Laravel for scalable solutions, HTML/CSS/Bootstrap for visually appealing designs, and PHP/MySQL for complex back-end systems. Committed to staying current with industry trends and delivering exceptional results.",
      aboutMe: "About Me",
      Brief: "Brief about me",
      MySkills: "My Skills",
      front: "Front End :",
      back: "Back End :",
      LastProjects: "Last Project",
      changeLang: "Change Language",
      ChooseClr: "Choose Color",
      developed: "Developed by ❤️Sami Moh ❤️",
    },
    ar: {
      Home: "الرئسية",
      aboutLink: "عنا",
      projects: "المشاريع",
      contactMe: "تواصل معي",
      logout: "خروج",
      name: "مرحبا انا سامي",
      job: "مطور ويب",
      aboutBrief:
        "مطور وب ذو خبرة تتضمن HTML، CSS، Bootstrap، JavaScript، PHP، MySQL، و Laravel. متخصص في بناء مواقع وتطبيقات وب ذات جودة عالية وتجربة مستخدم كبيرة. محترف في Laravel لحلول قابلة للتوسع، HTML/CSS/Bootstrap لتصميمات جذابة بشكل بصري، و PHP/MySQL لنظم خلفية معقدة. ملتزم بالبحث عن الأحدث في الصناعة وتلبية النتائج الذاتية بشكل جيد.",
      MessageMe: "<i class='fab fa-telegram-plane'></i>&nbsp;  راسلني الان",
      BriefAboutMe:
        "مطور وب ذو خبرة تتضمن HTML، CSS، Bootstrap، JavaScript، PHP، MySQL، و Laravel. متخصص في بناء مواقع وتطبيقات وب ذات جودة عالية وتجربة مستخدم كبيرة. محترف في Laravel لحلول قابلة للتوسع، HTML/CSS/Bootstrap لتصميمات جذابة بشكل بصري، و PHP/MySQL لنظم خلفية معقدة. ملتزم بالبحث عن الأحدث في الصناعة وتلبية النتائج الذاتية بشكل جيد.",
      aboutMe: "عني",
      Brief: "نبذة عني",
      MySkills: "مهاراتي",
      front: ": الواجهة الامامية ",
      back: " : الواجهة الخلفية",
      LastProjects: "اخر مشاريعي",
      changeLang: "تغيير اللغة",
      ChooseClr: "اضغط على اللون",
      developed: " مطور بواسطة ❤️سامي محمد ❤️",
    },
  };

  const elements = [
    "#Home",
    "#aboutLink",
    "#projects",
    "#contactMe",
    "#logout",
    "#name",
    "#job",
    "#aboutBrief",
    "#MessageMe",
    "#MySkills",
    "#front",
    "#back",
    "#aboutMe",
    "#LastProjects",
    "#changeLang",
    "#ChooseClr",
    "#developed",
    "#Brief",
    "#BriefAboutMe",
  ];

  elements.forEach((el) => {
    document.querySelector(el).innerHTML = translate[lang][el.slice(1)]; // example: translate[ar]['Home']
  });

  const ReverseDirection = (direction) =>
    direction === "ar" ? "row-reverse" : "row";
  const flexReverse = [
    document.body,
    document.querySelector(".main-area"),
    document.querySelector(".container"),
    ...document.querySelectorAll(".links > a"), // it's array inside array
  ];
  flexReverse.forEach((e) => {
    e.style = `flex-direction:${ReverseDirection(lang)};text-align:end`;
  });






  let change_clr = document.querySelector(".change-clr");
  if (lang === 'ar') {
    document.querySelector(".parent-setting").classList.add("setting-clrs");
       document.querySelector(".content .social").style =
      "margin-left:0;margin-right:auto";
  }else{
     flexReverse.forEach((e) => {
       e.style = `flex-direction:${ReverseDirection(lang)};text-align:start`;
     });
     document.querySelector(".content .social").style =
      "margin-left:auto;margin-right:0";
    document
      .querySelector(".parent-setting")
      .classList.remove("setting-clrs"); 
   }
}

