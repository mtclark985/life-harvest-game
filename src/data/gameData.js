// ─── KID MODE EVENTS (age < 10) ─────────────────────────────────
export const kidEvents = [
  {
    id: 'allowance',
    title: '🎉 Allowance Day!',
    description: 'You got your weekly allowance of 10 coins! What will you do?',
    category: 'income',
    options: [
      {
        label: 'Put it in my piggy bank 🐷',
        savingsChange: 10, debtChange: 0, incomeChange: 0, farmChange: 8,
        lesson: 'Saving money helps it grow over time!',
        feedback: 'Great choice! Your piggy bank gets heavier.'
      },
      {
        label: 'Buy candy and toys 🍬',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -3,
        lesson: 'Spending everything means nothing left for later.',
        feedback: 'Fun now, but your piggy bank stays empty.'
      },
      {
        label: 'Save 5 coins, spend 5 coins ⚖️',
        savingsChange: 5, debtChange: 0, incomeChange: 0, farmChange: 4,
        lesson: 'Balancing saving and spending is called budgeting!',
        feedback: 'Nice balance! A little fun AND a little savings.'
      }
    ]
  },
  {
    id: 'lemonade',
    title: '🍋 Lemonade Stand!',
    description: 'You want to start a lemonade stand. It costs 5 coins to buy lemons.',
    category: 'business',
    options: [
      {
        label: 'Use my savings to start the stand 🚀',
        savingsChange: -5, debtChange: 0, incomeChange: 15, farmChange: 10,
        lesson: 'Investing your savings can earn you more money!',
        feedback: 'You earned 15 coins from your lemonade stand!'
      },
      {
        label: 'Skip it, too risky 😬',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -2,
        lesson: 'Missing safe opportunities can mean missing out on growth.',
        feedback: 'You played it safe. Sometimes risks pay off though!'
      },
      {
        label: 'Borrow 5 coins from a friend to start 🤝',
        savingsChange: 0, debtChange: 5, incomeChange: 12, farmChange: 5,
        lesson: 'Borrowing means you must pay it back — plus maybe extra!',
        feedback: 'You earned coins but remember to pay your friend back!'
      }
    ]
  },
  {
    id: 'broken_toy',
    title: '😢 Broken Toy!',
    description: 'Your favorite toy broke! A new one costs 15 coins.',
    category: 'expense',
    options: [
      {
        label: 'Use my savings to replace it 💸',
        savingsChange: -15, debtChange: 0, incomeChange: 0, farmChange: -5,
        lesson: 'Savings protect you when unexpected things happen.',
        feedback: 'Good thing you had savings for this!'
      },
      {
        label: 'Try to fix it yourself 🔧',
        savingsChange: -2, debtChange: 0, incomeChange: 0, farmChange: 3,
        lesson: 'Being resourceful saves money!',
        feedback: 'It works pretty well now and only cost 2 coins for glue!'
      },
      {
        label: 'Ask for it as a birthday gift 🎂',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: 2,
        lesson: 'Smart planning means waiting for the right moment.',
        feedback: 'Patient and clever! Your birthday is next month anyway.'
      }
    ]
  },
  {
    id: 'birthday',
    title: '🎂 Birthday Money!',
    description: 'Grandma gave you 20 coins for your birthday! What will you do with it?',
    category: 'windfall',
    options: [
      {
        label: 'Save all of it 🐷',
        savingsChange: 20, debtChange: 0, incomeChange: 0, farmChange: 10,
        lesson: 'Saving gifts means bigger savings later!',
        feedback: 'Your piggy bank is getting very full!'
      },
      {
        label: 'Spend it all on fun stuff 🎮',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -5,
        lesson: 'Spending everything leaves no safety net.',
        feedback: 'Super fun day! But your savings are the same.'
      },
      {
        label: 'Save 15, donate 5 to charity ❤️',
        savingsChange: 15, debtChange: 0, incomeChange: 0, farmChange: 12,
        lesson: 'Giving back feels great and you still saved most of it!',
        feedback: 'Generous and smart — your farm glows with kindness!'
      }
    ]
  },
  {
    id: 'school_trip',
    title: '🚌 School Field Trip!',
    description: 'The school trip costs 8 coins. You really want to go!',
    category: 'expense',
    options: [
      {
        label: 'Pay from savings 💰',
        savingsChange: -8, debtChange: 0, incomeChange: 0, farmChange: 0,
        lesson: 'This is what savings are for — things you need or really want!',
        feedback: 'You had savings ready — great planning!'
      },
      {
        label: 'Do extra chores to earn the money first 🧹',
        savingsChange: 0, debtChange: 0, incomeChange: 8, farmChange: 5,
        lesson: 'Earning money before spending it means no debt!',
        feedback: 'You worked hard and paid for it yourself!'
      },
      {
        label: 'Skip the trip to save the money 📚',
        savingsChange: 8, debtChange: 0, incomeChange: 0, farmChange: 3,
        lesson: 'Sometimes saving wins over spending, even on fun things.',
        feedback: 'You missed the trip but your savings grew!'
      }
    ]
  },
  {
    id: 'lost_wallet',
    title: '😱 Lost Wallet!',
    description: 'You lost your wallet with 12 coins inside!',
    category: 'emergency',
    options: [
      {
        label: 'Accept the loss and rebuild savings 💪',
        savingsChange: -12, debtChange: 0, incomeChange: 0, farmChange: -8,
        lesson: 'Emergencies happen — savings help you recover.',
        feedback: 'Tough luck! Time to start saving again.'
      },
      {
        label: 'Make a lost wallet poster, maybe someone found it 🪧',
        savingsChange: -6, debtChange: 0, incomeChange: 0, farmChange: 2,
        lesson: 'Being proactive in a crisis can limit your losses!',
        feedback: 'Someone returned your wallet with half the coins!'
      }
    ]
  },
  {
    id: 'piggy_bank_goal',
    title: '🏆 Savings Goal Reached!',
    description: 'You saved up 30 coins — enough to buy that bicycle you wanted! What do you do?',
    category: 'goal',
    options: [
      {
        label: 'Buy the bicycle! 🚲',
        savingsChange: -30, debtChange: 0, incomeChange: 0, farmChange: 15,
        lesson: 'Saving toward a goal and reaching it feels amazing!',
        feedback: 'You did it! Goal achieved through patience and saving!'
      },
      {
        label: 'Keep saving for something even bigger 🌟',
        savingsChange: 5, debtChange: 0, incomeChange: 0, farmChange: 10,
        lesson: 'Delaying a reward for a bigger goal is called delayed gratification!',
        feedback: 'Amazing discipline! Your farm shines with pride.'
      }
    ]
  }
];

// ─── ADULT MODE EVENTS (age 10+) ─────────────────────────────────
export const adultEvents = [
  {
    id: 'first_job',
    title: '💼 You Got a Job!',
    description: 'Congrats! You\'ve been offered a job paying $2,500/month. But it\'s far away and would require a car.',
    category: 'income',
    options: [
      {
        label: 'Accept the job, buy a used car ($800) 🚗',
        savingsChange: -800, debtChange: 0, incomeChange: 2500, farmChange: 12,
        lesson: 'Sometimes spending money wisely enables you to earn more!',
        feedback: 'Smart investment! You\'ll make back that $800 in no time.'
      },
      {
        label: 'Accept, use public transit + bike 🚲',
        savingsChange: 0, debtChange: 0, incomeChange: 2200, farmChange: 10,
        lesson: 'Cutting expenses boosts your net take-home income!',
        feedback: 'Lower income after transit costs, but no car debt!'
      },
      {
        label: 'Decline, wait for a better opportunity 🤔',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -5,
        lesson: 'Holding out for better pay can work — but time without income costs too.',
        feedback: 'Still job hunting... your savings are slowly draining.'
      }
    ]
  },
  {
    id: 'student_loans',
    title: '🎓 Student Loan Bill Arrives',
    description: 'Your $30,000 student loan is due. Monthly payment is $350. How do you handle it?',
    category: 'debt',
    options: [
      {
        label: 'Pay minimums and invest the rest 📈',
        savingsChange: 0, debtChange: -350, incomeChange: -350, farmChange: 5,
        lesson: 'If investment returns outpace loan interest, this can be optimal!',
        feedback: 'Balanced approach — loan paid, money invested.'
      },
      {
        label: 'Pay double to eliminate debt fast 💪',
        savingsChange: -700, debtChange: -700, incomeChange: -700, farmChange: 8,
        lesson: 'Paying extra principal eliminates interest — powerful long term!',
        feedback: 'Disciplined! You\'ll be debt-free much sooner.'
      },
      {
        label: 'Apply for income-based repayment (IBR) 📋',
        savingsChange: 0, debtChange: -150, incomeChange: -150, farmChange: 3,
        lesson: 'IBR reduces monthly payments but extends the loan and total interest paid.',
        feedback: 'Lower payment now, but you\'ll pay more interest overall.'
      }
    ]
  },
  {
    id: 'emergency_fund',
    title: '🏥 Medical Emergency!',
    description: 'Unexpected medical bill: $2,200. Do you have an emergency fund?',
    category: 'emergency',
    options: [
      {
        label: 'Pay from emergency fund 🛡️',
        savingsChange: -2200, debtChange: 0, incomeChange: 0, farmChange: 5,
        lesson: '3-6 months of expenses in an emergency fund is the golden rule!',
        feedback: 'Your emergency fund saved you! This is exactly what it\'s for.'
      },
      {
        label: 'Put it on a credit card (20% APR) 💳',
        savingsChange: 0, debtChange: 2200, incomeChange: -100, farmChange: -12,
        lesson: 'Credit card debt at 20% APR is very expensive if not paid quickly.',
        feedback: 'Covered for now, but that credit card interest will sting...'
      },
      {
        label: 'Negotiate a payment plan with hospital 📞',
        savingsChange: -200, debtChange: 800, incomeChange: -120, farmChange: -3,
        lesson: 'Negotiating medical bills can often reduce total costs significantly.',
        feedback: 'Hospital reduced the bill by $1,200 and set up a payment plan!'
      }
    ]
  },
  {
    id: 'bonus',
    title: '🎊 Work Bonus Received!',
    description: 'You received a $3,000 performance bonus! How will you allocate it?',
    category: 'windfall',
    options: [
      {
        label: 'Max out Roth IRA ($3,000) 📊',
        savingsChange: 3000, debtChange: 0, incomeChange: 0, farmChange: 15,
        lesson: 'Roth IRA contributions grow tax-free — one of the best investments available!',
        feedback: 'Excellent! Tax-free compound growth starts today.'
      },
      {
        label: 'Pay off high-interest debt first 💸',
        savingsChange: 0, debtChange: -3000, incomeChange: 0, farmChange: 12,
        lesson: 'Paying off high-interest debt gives a guaranteed "return" equal to the interest rate.',
        feedback: 'Smart! Eliminating 20% APR debt is a guaranteed 20% return.'
      },
      {
        label: 'Splurge on a vacation ✈️',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -8,
        lesson: 'Experiences have value, but windfalls are rare opportunities to build wealth.',
        feedback: 'Great memories! But your net worth didn\'t change.'
      }
    ]
  },
  {
    id: 'car_repair',
    title: '🔧 Car Repair!',
    description: 'Your car needs $1,400 in repairs. You could also just replace it.',
    category: 'expense',
    options: [
      {
        label: 'Repair the current car 🔩',
        savingsChange: -1400, debtChange: 0, incomeChange: 0, farmChange: -2,
        lesson: 'Repairs are almost always cheaper than new car payments + insurance.',
        feedback: 'Fixed! Much cheaper than monthly car payments.'
      },
      {
        label: 'Finance a new car ($15k, 5yr loan) 🚘',
        savingsChange: 0, debtChange: 15000, incomeChange: -300, farmChange: -10,
        lesson: 'New cars depreciate 20% the moment you drive off the lot.',
        feedback: 'Shiny new car — but $300/month and instant depreciation hurt.'
      },
      {
        label: 'Use rideshare for now, save up for reliable used car 📱',
        savingsChange: -400, debtChange: 0, incomeChange: -200, farmChange: 3,
        lesson: 'Patience and planning can avoid taking on unnecessary debt.',
        feedback: 'Rideshare costs add up, but you avoided a car loan!'
      }
    ]
  },
  {
    id: 'housing',
    title: '🏠 Housing Decision',
    description: 'You can afford to buy a home (mortgage: $1,200/mo) or rent ($900/mo). Which do you choose?',
    category: 'major',
    options: [
      {
        label: 'Buy — build equity over time 🏡',
        savingsChange: -10000, debtChange: 150000, incomeChange: -1200, farmChange: 18,
        lesson: 'Mortgages build equity — you\'re paying yourself, not a landlord. But you need 20% down and stable income.',
        feedback: 'Homeowner! Each payment builds your net worth. Your farm has a foundation.'
      },
      {
        label: 'Rent and invest the $300/mo difference 📈',
        savingsChange: 0, debtChange: 0, incomeChange: -900, farmChange: 8,
        lesson: 'Renting + investing the difference can outperform buying in some markets!',
        feedback: 'Flexible and investing. Your farm grows steadily.'
      },
      {
        label: 'Move in with family, save aggressively for down payment 💼',
        savingsChange: 500, debtChange: 0, incomeChange: 0, farmChange: 10,
        lesson: 'Short-term sacrifice for long-term gain — saving a large down payment means a smaller mortgage.',
        feedback: 'Wise sacrifice! Your down payment fund grows rapidly.'
      }
    ]
  },
  {
    id: 'investment_opportunity',
    title: '📈 Investment Opportunity!',
    description: 'A friend says you should put $5,000 into a "guaranteed 30% monthly returns" crypto scheme.',
    category: 'investment',
    options: [
      {
        label: 'Decline — that\'s a scam red flag 🚩',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: 8,
        lesson: '"Guaranteed" high returns are almost always fraud. If it sounds too good to be true, it is.',
        feedback: 'Smart! This was definitely a scam. You saved $5,000.'
      },
      {
        label: 'Invest $5,000 in an index fund instead 📊',
        savingsChange: -5000, debtChange: 0, incomeChange: 0, farmChange: 15,
        lesson: 'Index funds average ~10% annually and are one of the most reliable long-term investments.',
        feedback: 'Excellent! Boring but reliable — index funds are proven wealth builders.'
      },
      {
        label: 'Join the scheme (FOMO is real) 😬',
        savingsChange: -5000, debtChange: 0, incomeChange: -4800, farmChange: -20,
        lesson: 'High return promises almost always result in total loss. Protect yourself from fraud.',
        feedback: 'It was a scam. You lost $4,800. Protect yourself from "too good to be true."'
      }
    ]
  },
  {
    id: 'insurance',
    title: '🛡️ Insurance Renewal',
    description: 'Your insurance is up for renewal. You can pay $150/mo for full coverage or $50/mo for minimal coverage.',
    category: 'risk',
    options: [
      {
        label: 'Full coverage — maximum protection 🛡️',
        savingsChange: 0, debtChange: 0, incomeChange: -150, farmChange: 6,
        lesson: 'Insurance is risk transfer — paying a small certain cost to avoid a large uncertain one.',
        feedback: 'Protected! If anything goes wrong, you\'re fully covered.'
      },
      {
        label: 'Minimal coverage, invest the difference 💡',
        savingsChange: 100, debtChange: 0, incomeChange: -50, farmChange: 3,
        lesson: 'Self-insuring works if your savings can cover unexpected losses.',
        feedback: 'Calculated risk. Make sure your emergency fund is robust!'
      },
      {
        label: 'Skip insurance entirely to save money 🎲',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -8,
        lesson: 'Going uninsured is a gamble. One bad event can wipe out years of savings.',
        feedback: 'Risky! One accident and you could face catastrophic costs.'
      }
    ]
  },
  {
    id: 'raise_negotiation',
    title: '💬 Raise Negotiation',
    description: 'Annual review time! You can ask for a raise, accept the standard 2% cost-of-living increase, or stay quiet.',
    category: 'income',
    options: [
      {
        label: 'Negotiate boldly for 15% raise 💪',
        savingsChange: 0, debtChange: 0, incomeChange: 375, farmChange: 14,
        lesson: 'Negotiating your salary is the highest ROI financial move — most employers expect it!',
        feedback: 'They said yes! Your income just jumped $375/month.'
      },
      {
        label: 'Accept the standard 2% raise 🤝',
        savingsChange: 0, debtChange: 0, incomeChange: 50, farmChange: 4,
        lesson: 'A 2% raise often doesn\'t keep up with inflation — your real purchasing power may decline.',
        feedback: 'Small raise accepted. Inflation may still eat into your buying power.'
      },
      {
        label: 'Stay quiet, don\'t rock the boat 🤐',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -3,
        lesson: 'Lifetime earnings are dramatically affected by early salary negotiations. Speak up!',
        feedback: 'No raise this year. You left money on the table.'
      }
    ]
  },
  {
    id: 'lifestyle_inflation',
    title: '🏖️ Lifestyle Upgrade Temptation',
    description: 'After a raise, friends are upgrading their apartments and lifestyle. You feel the pressure.',
    category: 'spending',
    options: [
      {
        label: 'Upgrade modestly, increase savings too ⚖️',
        savingsChange: 200, debtChange: 0, incomeChange: -300, farmChange: 7,
        lesson: 'Lifestyle inflation is fine when balanced — enjoy some of the raise, save the rest.',
        feedback: 'Nice balance! You enjoy your raise but still boost savings.'
      },
      {
        label: 'Keep living cheap, invest everything extra 📈',
        savingsChange: 0, debtChange: 0, incomeChange: -100, farmChange: 12,
        lesson: '"Living below your means" is the foundation of wealth building.',
        feedback: 'Disciplined! Your future self will thank you enormously.'
      },
      {
        label: 'Go all in on the lifestyle upgrade 🥂',
        savingsChange: -500, debtChange: 0, incomeChange: -500, farmChange: -10,
        lesson: 'Lifestyle inflation is a trap — spending always rising to meet income prevents wealth building.',
        feedback: 'Living large! But your savings are actually shrinking now.'
      }
    ]
  },
  {
    id: 'side_hustle',
    title: '🚀 Side Hustle Opportunity',
    description: 'You can start freelancing on weekends for ~$800/month extra income. It requires upfront time and $200 in tools.',
    category: 'income',
    options: [
      {
        label: 'Start the side hustle! 💼',
        savingsChange: -200, debtChange: 0, incomeChange: 800, farmChange: 14,
        lesson: 'Multiple income streams dramatically accelerate wealth building!',
        feedback: 'Hustle pays off! You now have two income streams.'
      },
      {
        label: 'Invest the $200 instead 📊',
        savingsChange: -200, debtChange: 0, incomeChange: 0, farmChange: 5,
        lesson: 'Passive investing vs. active income — both valid strategies.',
        feedback: 'Invested wisely! Lower immediate gain but compound growth ahead.'
      },
      {
        label: 'Prioritize rest — burnout is real 😴',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: 6,
        lesson: 'Health and mental wellness are financial assets — burnout is costly!',
        feedback: 'Recharged and healthy. Your productivity at your main job stays high.'
      }
    ]
  },
  {
    id: 'retirement_401k',
    title: '📊 401(k) Enrollment',
    description: 'Your employer offers a 401(k) with 4% employer match. How much will you contribute?',
    category: 'retirement',
    options: [
      {
        label: 'Contribute exactly 4% to get full match ✅',
        savingsChange: 0, debtChange: 0, incomeChange: -100, farmChange: 10,
        lesson: 'Always capture the full employer match — it\'s an instant 100% return on that portion!',
        feedback: 'Smart! You just doubled part of your retirement contribution instantly.'
      },
      {
        label: 'Maximize contribution (15% of salary) 🌟',
        savingsChange: 0, debtChange: 0, incomeChange: -375, farmChange: 18,
        lesson: '401(k) contributions are pre-tax — reducing your taxable income while building retirement wealth.',
        feedback: 'Maximum wealth building! Tax savings + compound growth = powerful.'
      },
      {
        label: 'Skip it — need the cash now 😬',
        savingsChange: 0, debtChange: 0, incomeChange: 0, farmChange: -8,
        lesson: 'Skipping the employer match is like declining free money. Always contribute at least to the match.',
        feedback: 'You left free money on the table. Reconsider ASAP!'
      }
    ]
  }
];

// ─── FARM ITEMS ───────────────────────────────────────────────────
export const farmItems = {
  crops: [
    { id: 'wheat',    emoji: '🌾', name: 'Wheat',      minHealth: 0  },
    { id: 'corn',     emoji: '🌽', name: 'Corn',       minHealth: 30 },
    { id: 'tomatoes', emoji: '🍅', name: 'Tomatoes',   minHealth: 50 },
    { id: 'pumpkins', emoji: '🎃', name: 'Pumpkins',   minHealth: 65 },
    { id: 'sunflower',emoji: '🌻', name: 'Sunflowers', minHealth: 80 },
  ],
  animals: [
    { id: 'chicken', emoji: '🐔', name: 'Chickens', minHealth: 20 },
    { id: 'pig',     emoji: '🐷', name: 'Pigs',     minHealth: 45 },
    { id: 'cow',     emoji: '🐄', name: 'Cows',     minHealth: 60 },
    { id: 'horse',   emoji: '🐴', name: 'Horses',   minHealth: 75 },
  ],
  buildings: [
    { id: 'shack',    emoji: '🛖', name: 'Shack',     minHealth: 0  },
    { id: 'barn',     emoji: '🏚️', name: 'Old Barn',  minHealth: 35 },
    { id: 'house',    emoji: '🏠', name: 'Farmhouse', minHealth: 55 },
    { id: 'windmill', emoji: '⚙️',  name: 'Windmill', minHealth: 70 },
    { id: 'silo',     emoji: '🏗️', name: 'Grain Silo',minHealth: 85 },
  ]
};

// ─── SPIN WHEEL SEGMENTS ──────────────────────────────────────────
export const wheelSegments = [
  { label: 'Income',    color: '#4CAF50', emoji: '💰' },
  { label: 'Expense',   color: '#FF9800', emoji: '💸' },
  { label: 'Emergency', color: '#F44336', emoji: '🚨' },
  { label: 'Windfall',  color: '#9C27B0', emoji: '🎊' },
  { label: 'Investment',color: '#2196F3', emoji: '📈' },
  { label: 'Risk',      color: '#FF5722', emoji: '🎲' },
  { label: 'Career',    color: '#00BCD4', emoji: '💼' },
  { label: 'Lifestyle', color: '#8BC34A', emoji: '🌟' },
];

// ─── CONFIG ───────────────────────────────────────────────────────
export const TOTAL_TURNS = 20;
export const RETIREMENT_TURNS = 20;

export const getInitialState = (playerName, age) => {
  const isKidMode = age < 10;
  return {
    screen: 'game',
    playerName,
    age,
    isKidMode,
    turn: 0,
    netWorth: isKidMode ? 20 : 5000,
    savings:  isKidMode ? 20 : 5000,
    debt:     0,
    income:   isKidMode ? 0  : 2500,
    farmHealth: 50,
    spinning: false,
    currentEvent: null,
    decisionMade: false,
    eventHistory: [],
    lastLesson: null,
    lastFeedback: null,
    lastFarmChange: 0,
  };
};
