import { Course, QuestionType, Student } from '../models/student';

const tomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
};

export const student: Student = {
  name: 'Razan',
  lastname: 'Zabadneh',
  image: '',
  faculties: [
    {
      id: 1,
      name: 'Quran',
      description: 'Learn Quran',
      progress: 50,
      courses: [
        {
          id: 1,
          facultyId: 1,
          name: 'level 1',
          description: 'Level 1 description',
          from: new Date(),
          to: new Date(),
          progress: 70,
          lessons: [
            {
              lessonId: 1,
              name: 'lesson one',
              description: 'lesson one',
              present: true,
              mark: 40,
              date: new Date(),
              questions: [
                {
                  text: 'السؤال الاول',
                  questionType: QuestionType.SingleChoice,
                  answers: [
                    {
                      text: 'answer 1',
                      correct: true,
                    },
                    {
                      text: 'answer 2 23',
                      correct: false,
                    },
                  ],
                },
                {
                  text: 'السؤال الثاني sdf',
                  questionType: QuestionType.MultiChoice,
                  answers: [
                    {
                      text: 'answer 2',
                      correct: true,
                    },
                    {
                      text: 'answer 1 324',
                      correct: true,
                    },
                    {
                      text: 'answer 1 324',
                      correct: false,
                    },
                  ],
                },
              ],
            },
            {
              lessonId: 2,
              name: 'lesson 2',
              description: 'lesson 2',
              present: false,
              mark: 40,
              date: tomorrowDate(),
              questions: [
                {
                  text: 'السؤال الثاني',
                  questionType: QuestionType.SingleChoice,
                  answers: [
                    {
                      text: 'answer 2',
                      correct: true,
                    },
                    {
                      text: 'answer 2',
                      correct: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          facultyId: 1,

          name: 'level 3',
          description: 'Level 3 description',
          from: new Date(),
          to: new Date(),
          progress: 70,
          lessons: [
            {
              lessonId: 13,
              name: 'lesson 3',
              description: 'lesson one',
              present: true,
              mark: 40,
              date: new Date(),
              questions: [
                {
                  text: 'السؤال الاول',
                  questionType: QuestionType.SingleChoice,

                  answers: [
                    {
                      text: 'answer 1',
                      correct: true,
                    },
                    {
                      text: 'answer 2',
                      correct: false,
                    },
                  ],
                },
                {
                  text: 'السؤال الثاني',
                  questionType: QuestionType.SingleChoice,

                  answers: [
                    {
                      text: 'answer 2',
                      correct: true,
                    },
                    {
                      text: 'answer 2',
                      correct: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          facultyId: 1,

          name: 'level 2',
          description: 'Level 2 description',
          from: new Date(),
          to: new Date(),
          progress: 70,
          lessons: [],
        },
      ],
    },
  ],
};

export const courses: Course[] = [
  {
    id: 1,
    facultyId: 1,
    name: 'level 1',
    description: 'Level 1 description',
    from: new Date(),
    to: new Date(),
    progress: 70,
    lessons: [
      {
        lessonId: 1,
        name: 'lesson one',
        description: 'lesson one',
        present: true,
        mark: 40,
        date: new Date(),
        questions: [
          {
            text: 'السؤال الاول',
            questionType: QuestionType.SingleChoice,
            answers: [
              {
                text: 'answer 1',
                correct: true,
              },
              {
                text: 'answer 2',
                correct: false,
              },
            ],
          },
          {
            text: 'السؤال الثاني',
            questionType: QuestionType.SingleChoice,

            answers: [
              {
                text: 'answer 2',
                correct: true,
              },
              {
                text: 'answer 2',
                correct: true,
              },
            ],
          },
        ],
      },
      {
        lessonId: 2,
        name: 'lesson 2',
        description: 'lesson 2',
        present: false,
        mark: 40,
        date: tomorrowDate(),
        questions: [
          {
            text: 'السؤال الثاني',
            questionType: QuestionType.SingleChoice,

            answers: [
              {
                text: 'answer 2',
                correct: true,
              },
              {
                text: 'answer 2',
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    facultyId: 2,
    name: 'level 2',
    description: 'Level 2 description',
    from: new Date(),
    to: new Date(),
    progress: 70,
    lessons: [],
  },
];
