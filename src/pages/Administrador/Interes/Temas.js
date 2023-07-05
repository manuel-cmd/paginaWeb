const tipo = [
  // Temas de interes General
  {
    nombre: "General",
    datos: [
      "Descarga de libros",
      "MathJax",
      "Foro de dudas generales de Latex",
      "GEANT 4",
      "CORSIKA",
      "Coursera",
      "Udacity",
    ],
    enlace: [
      "http://golibgen.io/index.php",
      "https://www.mathjax.org",
      "http://tex.stackexchange.com/",
      "https://geant4.web.cern.ch/geant4/",
      "https://www.ikp.kit.edu/corsika/",
      "https://www.coursera.org",
      "https://www.udacity.com",
    ],
  },
  // Probabilidad y estadística
  {
    nombre: "Probabilidad y Estadística",
    datos: ["Probability Course", "Root"],
    enlace: ["https://www.probabilitycourse.com/", "https://www.root.cern.ch"],
  },
  //Bases de datos
  {
    nombre: "Bases de datos",
    datos: ["Science Direct", "Springer"],
    enlace: ["http://www.sciencedirect.com", "http://link.springer.com"],
  },
  // Programacion
  {
    nombre: "Programación",
    // General
    temas: [
      {
        tipo: "General",
        datos: [
          "Cursos gratuitos de programación",
          "Libros de descarga gratuita de programación",
        ],
        enlace: [
          "https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md",
          "http://ebooks.programmersheaven.com",
        ],
      },
      // Ryby
      {
        tipo: "Ruby",
        datos: ["Ruby", "Ruby en Codeacademy"],
        enlace: [
          "https://www.ruby-lang.org/es/",
          "https://www.codecademy.com/en/tracks/ruby",
        ],
      },
      // Python
      {
        tipo: "Python",
        datos: ["Python", "Python en Codeacademy", "Python Para Todos (PDF)"],
        enlace: [
          "https://www.python.org/",
          "https://www.codecademy.com/learn/python",
          "pdf_a16/PythonParaTodos.pdf",
        ],
      },
      // c++
      {
        tipo: "C++",
        datos: ["Referencias y documentación general"],
        enlace: ["http://www.cplusplus.com/"],
      },
    ],
  },
];

export default tipo;
