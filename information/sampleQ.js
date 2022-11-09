export const edQuestions = [
  {
    question: '¿Con qué frecuencia experimenta dificultad para lograr o mantener una erección?',
    id: 0,
    required: true,
    type: 'single',
    answers: [
      ['Siempre', null],
      ['Mas de la mitad del tiempo', null],
      ['En Ocasiones', null],
      ['Casi nunca', null],
      ['Nunca', null],
    ],
    selected: [],
    newQuestionsAdded: [],
    response: ''
  }, 
  {
    question: 'Escoga el escenario que mejor describa su situacion',
    id: 1,
    required: true,
    type: 'single',
    answers: [
      ['Dificultad logrando una ereccion', null],
      ['Dificultad manteniendo una ereccion', null],
      ['Ambas', null],
    ],
    newQuestionsAdded: [],
    selected: [],
    response: ''
  },
  {
    question: 'Como comenzo su disfuncion erectil?',
    id: 2,
    required: true,
    type: 'single',
    answers: [
      ['De repente', null],
      ['Gradualmente fue empeorando', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Califique la dureza típica de su erección durante la masturbación',
    id: 3,
    required: true,
    type: 'single',
    answers: [
      ['El pene no se agranda', null],
      ['El pene es más grande, pero no duro', null],
      ['El pene es duro, pero no lo suficientemente duro para la penetración', null],
      ['El pene es lo suficientemente duro para la penetración, pero no completamente duro', null],
      ['El pene esta completamente duro y rigido', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Califique la dureza típica de sus erecciones espontáneas en medio de la noche o la mañana.',
    id: 4,
    required: true,
    type: 'single',
    answers: [
      ['El pene no se agranda', null],
      ['El pene es más grande, pero no duro', null],
      ['El pene es duro, pero no lo suficientemente duro para la penetración', null],
      ['El pene es lo suficientemente duro para la penetración, pero no completamente duro', null],
      ['El pene esta completamente duro y rigido', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  }
  ,
  {
    question: 'Califique la dureza típica de su erección con una pareja sexual',
    id: 5,
    required: true,
    type: 'single',
    answers: [
      ['El pene no se agranda', null],
      ['El pene es más grande, pero no duro', null],
      ['El pene es duro, pero no lo suficientemente duro para la penetración', null],
      ['El pene es lo suficientemente duro para la penetración, pero no completamente duro', null],
      ['El pene esta completamente duro y rigido', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Tiene bajo deseo sexual?',
    id: 6,
    required: true,
    type: 'single',
    answers: [
      ['Si', 7],
      ['No', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Tiene falta de energía?',
    id: 7,
    required: false,
    type: 'single',
    answers: [
      ['Si', 8],
      ['No', 8],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Tiene una disminución en la fuerza o la resistencia?',
    id: 8,
    required: false,
    type: 'single',
    answers: [
      ['Si', 9],
      ['No', 9],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Estás triste o de mal humor?',
    id: 9,
    required: false,
    type: 'single',
    answers: [
      ['Si', null],
      ['No', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Alguna vez ha sido tratado con medicamentos para la disfuncion erectil?',
    id: 10,
    required: true,
    type: 'single',
    answers: [
      ['Si', 11],
      ['No', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Cuál de los siguientes tratamientos ha usado para tratar su disfunción eréctil en el pasado?',
    id: 11,
    required: false,
    type: 'multiple',
    answers: [
      ['Sildenafil (Viagra o generico)', 12],
      ['Tadalafil (Cialis o generico)', 16],
      ['Vredanafil (Levitra o generico)', 20], //TODO
      ['Avanafil (Stendra)', 24],
      ['Otro', 28],

    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Quedó satisfecho con su tratamiento de Sildenafil?',
    id: 12,
    required: false,
    type: 'single',
    answers: [
      ['Si', 13],
      ['No', 14],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Sildenafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 13,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Por qué no quedo satisfecho con su tratamiento de Sildenafil (Viagra o genérico)?',
    id: 14,
    required: false,
    type: 'single',
    answers: [
      ['No funciono', 15],
      ['Tuve efectos secundarios', 15],
      ['Ambos', 15],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Sildenafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 15,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Quedó satisfecho con su tratamiento de Tadalafil',
    id: 16,
    required: false,
    type: 'single',
    answers: [
      ['Si', 17],
      ['No', 18],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Tadalafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 17,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Por qué no quedo satisfecho con su tratamiento de Tadalafil (Cialis o generico)?',
    id: 18,
    required: false,
    type: 'single',
    answers: [
      ['No funciono', 19],
      ['Tuve efectos secundarios', 19],
      ['Ambos', 19],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Tadalafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 19,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Quedó satisfecho con su tratamiento de Vredanafil',
    id: 20,
    required: false,
    type: 'single',
    answers: [
      ['Si', 21],
      ['No', 22],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Vredanafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 21,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Por qué no quedo satisfecho con su tratamiento de Vredanafil (Levitra o generico)?',
    id: 22,
    required: false,
    type: 'single',
    answers: [
      ['No funciono', 23],
      ['Tuve efectos secundarios', 23],
      ['Ambos', 23],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Vredanafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 23,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Quedó satisfecho con su tratamiento de Avanafil?',
    id: 24,
    required: false,
    type: 'single',
    answers: [
      ['Si', 25],
      ['No', 26],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Avanafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 25,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Por qué no quedo satisfecho con su tratamiento de Avanafil (Stendra)?',
    id: 26,
    required: false,
    type: 'single',
    answers: [
      ['No funciono', 27],
      ['Tuve efectos secundarios', 27],
      ['Ambos', 27],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de Avanafil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 27,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cuéntenos más sobre su uso de otros tratamiento para la disfuncion erectil. ¿Qué dosis probaste? ¿Fue efectiva?',
    id: 28,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cual es tu genero?',
    id: 29,
    required: true,
    type: 'single',
    answers: [
      ['Hombre', null],
      ['Mujer', null],
      ['Hombre Transgenero', null],
      ['Mujer Transgenero', null],
      ['Agenero', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Cual fue su sexo asigado al nacer?',
    id: 30,
    required: true,
    type: 'single',
    answers: [
      ['Hombre', null],
      ['Mujer', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: '¿Tiene alguna alergia? (Incluya cualquier alergia a alimentos, colorantes, recetas o medicamentos de venta libre (por ejemplo, antibióticos, medicamentos para la alergia), hierbas, vitaminas, suplementos o cualquier otra cosa.)',
    id: 31,
    required: true,
    type: 'single',
    answers: [
      ['Si', 32],
      ['No', null],
    ],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  },
  {
    question: 'Enumere a lo qué es alérgico y la reacción que causa cada uno.',
    id: 32,
    required: false,
    type: 'written',
    answers: [],
    newQuestionsAdded: [],
    selected: '',
    response: ''
  }
]