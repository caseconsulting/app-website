let today = new Date();
let month = today.getMonth() + 1; // January = 1
let year = today.getFullYear();

if (month >= 5) {
  year += 1;
}

export default [
  {
    question: 'Who?',
    answer: [
      'Are you a Computer Science or Computer Engineering Junior who enjoys learning and working with current development technologies? Are you interested in experiencing what it means to be a professional application developer? If yes, then this internship is for you!'
    ]
  },
  {
    question: 'What?',
    answer: [
      'During your internship at Case Consulting you will be guided by our team of software professionals and previous interns to apply cutting edge software development tools and practices to a real software product. Throughout the program, you will use many software engineering best practices such as agile/scrum, pair programming, automated testing, and test-driven development.'
    ]
  },
  { question: 'When?', answer: ['Summer ' + year] },
  {
    question: 'Where?',
    answer: ['The internship is located at our shared office space in Reston, VA.']
  },
  {
    question: 'Why?',
    answer: [
      'Work with cutting edge technologies like JavaScript, Node/Express, Vue, Amazon Web Services, and Bootstrap. Gain professional experience working in a simulated customer environment using industry best practices on a self-organizing team, apply for a security clearance, and work for a top notch tech company.'
    ]
  }
];
