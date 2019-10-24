var questionNum= document.querySelector("#currentQuestionHeader"); 
questionNum.append(`Question ${currentQuestion} of ${activeQ.length}`);

var activeQ = [
	{
		question: "HTML Question A",
		response: ["Option A1","Option A2","Option A3","Option A4"]
	},
	{
		question: "HTML Question B",
		response: ["Option B1","Option B2","Option B3","Option B4"]
	},
	{
		question: "HTML Question C",
		response: ["Option C1","Option C2","Option C3","Option C4"]
	},
	{
		question: "HTML Question D",
		response: ["Option D1","Option D2","Option D3","Option D4"]
	},
	{
		question: "HTML Question E",
		response: ["Option E1","Option E2","Option E3","Option E4"]
	},
	{
		question: "HTML Question F",
		response: ["Option F1","Option F2","Option F3","Option F4"]
	},
	{
		question: "HTML Question G",
		response: ["Option G1","Option G2","Option G3","Option G4"]
	},
	{
		question: "HTML Question H",
		response: ["Option H1","Option H2","Option H3","Option H4"]
	}
];
let currentQuestion= 1;
/*var topics =	 {
	SentenceContext: {
		totalMastered: 20,
		totalQuestions: 56
	},
	StoryContext: {
		totalMastered: 30,
		totalQuestions: 74
	},
};

var activeQuestions = [
	{
		question: "HTML Question A",
		response: [
			{
				text: "script",
				isCorrect: true
			},
			{
				text: "javascript",
				isCorrect: false
			},
			{
				text: "include",
				isCorrect: false
			},
			{
				text: "style",
				isCorrect: false
			},
		]
	},
	{
		question: "HTML Question B",
		response: [
			{
				text: "script",
				isCorrect: true
			},
			{
				text: "javascript",
				isCorrect: false
			},
			{
				text: "include",
				isCorrect: false
			},
			{
				text: "style",
				isCorrect: false
			},
		]
	},
	{
		question: "HTML Question C",
		response: [
			{
				text: "script",
				isCorrect: true
			},
			{
				text: "javascript",
				isCorrect: false
			},
			{
				text: "include",
				isCorrect: false
			},
			{
				text: "style",
				isCorrect: false
			},
		]
	},

];


var questions =	 {
	html: [
		{
			mastered: true,
			question: "HTML Question A",
			response: [
				{
					text: "script",
					isCorrect: true
				},
				{
					text: "javascript",
					isCorrect: false
				},
				{
					text: "include",
					isCorrect: false
				},
				{
					text: "style",
					isCorrect: false
				},
			]
		},
		{
			mastered: false,
			question: "HTML Question B",
			response: [
				{
					text: "script",
					isCorrect: true
				},
				{
					text: "javascript",
					isCorrect: false
				},
				{
					text: "include",
					isCorrect: false
				},
				{
					text: "style",
					isCorrect: false
				},
			]
		}
	],
	css: [
		{
			mastered: true,
			question: "CSS Question A",
			response: [
				{
					text: "script",
					isCorrect: true
				},
				{
					text: "javascript",
					isCorrect: false
				},
				{
					text: "include",
					isCorrect: false
				},
				{
					text: "style",
					isCorrect: false
				},
			]
		},
		{
			mastered: true,
			question: "CSS Question B",
			response: [
				{
					text: "script",
					isCorrect: true
				},
				{
					text: "javascript",
					isCorrect: false
				},
				{
					text: "include",
					isCorrect: false
				},
				{
					text: "style",
					isCorrect: false
				},
			]
		}
	]
};/	*/
