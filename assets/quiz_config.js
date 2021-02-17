var surveyJSON = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "name",
     "title": "Name",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "email",
     "title": "Email Address",
     "isRequired": true,
     "validators": [
      {
       "type": "email"
      }
     ],
     "inputType": "email"
    },
    {
     "type": "text",
     "name": "phone",
     "title": "Phone Number",
     "inputType": "tel"
    },
    {
     "type": "radiogroup",
     "name": "gender",
     "title": "Gender",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Male"
      },
      {
       "value": "item2",
       "text": "Female"
      },
      {
       "value": "item3",
       "text": "Non-binary"
      }
     ]
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "checkbox",
     "name": "The following questions are about your relationship. If not currently in a relationship, please answer the questions from the perspective of your last relationship, or your relationship history in general",
     "valueName": "The following questions are about your relationship  If not currently in a relationship, please answer the questions from the perspective of your last relationship, or your relationship history in general"
    },
    {
     "type": "radiogroup",
     "name": "q16",
     "title": "My partner and I seem to be having the same argument again and again. ",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree "
      },
      {
       "value": "item3",
       "text": "Somewhat disagree "
      },
      {
       "value": "item4",
       "text": "Disagree "
      },
      {
       "value": "item5",
       "text": "Strongly Disagree "
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q17",
     "title": "My partner's love and acceptance allows me to feel safe being vulnerable with them.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree "
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree "
      },
      {
       "value": "item4",
       "text": "Strongly Disagree "
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q18",
     "title": "My partner meets my sexual needs.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q19",
     "title": "I can talk to my partner about my feelings and needs in the relationship and it will be well received.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q20",
     "title": "My partner is frustrated with my lack of interest in sex and/or unwillingness to initiate it.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q21",
     "title": "I feel lonely...like something is missing in my life",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q22",
     "title": "I struggle to create love or  find a life partner that is a good fit for me.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q23",
     "title": "Past hurts and relationship failures have made it hard to trust love or potential mates",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q24",
     "title": "I find it hard to open up in social situations or even on a one on one date with a new potential partner.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q25",
     "title": "I seem to repeatedly find myself in the same kind of unsatisfying or abusive relationships.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly Disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q26",
     "title": "Fertility struggles have taken a toll on my emotional and/or relationship life.",
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item5",
       "text": "Somewhat disagree "
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    }
   ]
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "checkbox",
     "name": "question110",
     "title": "The following questions are about sex"
    },
    {
     "type": "radiogroup",
     "name": "q8",
     "title": " I worry about my sexual technique or performance.  ",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "A great deal"
      },
      {
       "value": "item2",
       "text": "A lot"
      },
      {
       "value": "item3",
       "text": "A little"
      },
      {
       "value": "item4",
       "text": "A moderate amount"
      },
      {
       "value": "item5",
       "text": "None at all"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q9",
     "title": "I experience pain or discomfort during sex",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "A great deal"
      },
      {
       "value": "item3",
       "text": "A lot"
      },
      {
       "value": "item2",
       "text": "A little"
      },
      {
       "value": "item4",
       "text": "A moderate amount"
      },
      {
       "value": "item5",
       "text": "None at all"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q10",
     "title": "I feel frustrated with my orgasm ability (takes too long, happens too quickly, can't synch up, can't do it at all, etc)",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "A great deal"
      },
      {
       "value": "item2",
       "text": "A lot"
      },
      {
       "value": "item3",
       "text": "A little"
      },
      {
       "value": "item4",
       "text": "A moderate amount"
      },
      {
       "value": "item5",
       "text": "None at all"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q11",
     "title": "I experience flashbacks or upsetting memories during sexual experiences",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "A great deal"
      },
      {
       "value": "item2",
       "text": "A lot"
      },
      {
       "value": "item3",
       "text": "A little"
      },
      {
       "value": "item4",
       "text": "A moderate amount"
      },
      {
       "value": "item5",
       "text": "None at all"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q12",
     "title": "My sex life is OK, but I find it too boreing and predictable.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "A great deal"
      },
      {
       "value": "item2",
       "text": "A lot"
      },
      {
       "value": "item3",
       "text": "A little"
      },
      {
       "value": "item4",
       "text": "A moderate amount"
      },
      {
       "value": "item5",
       "text": "None at all"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q13",
     "title": "I am up to trying something adventurous or out of my comfort zone sexually",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Always"
      },
      {
       "value": "item2",
       "text": "Usually"
      },
      {
       "value": "item3",
       "text": "Sometimes"
      },
      {
       "value": "item4",
       "text": "Rarely"
      },
      {
       "value": "item5",
       "text": "Never"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q14",
     "title": "I feel comfortable asking for what I need and/or want in sexual situations.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q15",
     "title": "My sexual experiences are memorable, heart pounding, positive experiences",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "item1",
       "text": "Always"
      },
      {
       "value": "item2",
       "text": "Usually"
      },
      {
       "value": "item3",
       "text": "Sometimes"
      },
      {
       "value": "item4",
       "text": "Rarely"
      },
      {
       "value": "item5",
       "text": "Never"
      }
     ]
    }
   ]
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "checkbox",
     "name": "question110",
     "title": "The following questions are about parenting. If you don't have children, either skip to the end, or choose \"no children\" for your answer."
    },
    {
     "type": "radiogroup",
     "name": "q27",
     "title": " I talk to my kids about sex and healthy sexual decision making",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "No Children"
      },
      {
       "value": "item2",
       "text": "Very often"
      },
      {
       "value": "item3",
       "text": "Often"
      },
      {
       "value": "item4",
       "text": "Sometimes"
      },
      {
       "value": "item5",
       "text": "Rarely"
      },
      {
       "value": "item6",
       "text": "Never"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q28",
     "title": "I struggle to get on the same page about parenting issues with my co-parent or partner",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "No Children"
      },
      {
       "value": "item2",
       "text": "Strongly Agree"
      },
      {
       "value": "item3",
       "text": "Agree"
      },
      {
       "value": "item4",
       "text": "Disagree"
      },
      {
       "value": "item5",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q29",
     "title": "My child(ren) and I have a deep connection that is fulfilling and communicative.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "No Children"
      },
      {
       "value": "item2",
       "text": "Strongly Agree"
      },
      {
       "value": "item3",
       "text": "Agree"
      },
      {
       "value": "item4",
       "text": "Disagree"
      },
      {
       "value": "item5",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q30",
     "title": " I find my own childhood fears, abuses or traumas impact how I parent my own child(ren).",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "No Children"
      },
      {
       "value": "item2",
       "text": "Strongly Agree"
      },
      {
       "value": "item3",
       "text": "Agree"
      },
      {
       "value": "item4",
       "text": "Disagree"
      },
      {
       "value": "item5",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q31",
     "title": "I feel comfortable talking to my child(ren) about gender and sexual orientation",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "No Children"
      },
      {
       "value": "item2",
       "text": "Strongly Agree"
      },
      {
       "value": "item3",
       "text": "Agree"
      },
      {
       "value": "item4",
       "text": "Disagree"
      },
      {
       "value": "item5",
       "text": "Strongly disagree"
      }
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "checkbox",
     "name": "question1101",
     "title": "The following questions are about spiritual connection."
    },
    {
     "type": "radiogroup",
     "name": "q3",
     "title": "I believe in the concept of “gut” instincts.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item14",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q4",
     "title": "I'd love to hone my intuition more.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q5",
     "title": "I believe in the concept of a 6th sense.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q6",
     "title": " I would like to learn to access a deeper spiritual connection with a higher power.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "q7",
     "title": " I would like to learn to access a deeper spiritual connection with a higher power.",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Strongly agree"
      },
      {
       "value": "item2",
       "text": "Agree"
      },
      {
       "value": "item3",
       "text": "Disagree"
      },
      {
       "value": "item4",
       "text": "Strongly disagree"
      }
     ]
    }
   ]
  }
 ],
 "showQuestionNumbers": "off"
}