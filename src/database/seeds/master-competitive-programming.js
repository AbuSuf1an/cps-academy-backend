const masterCompetitiveProgrammingCourse = {
  title: "Master Competitive Programming",
  slug: "master-competitive-programming",
  description: `<p>Master Competitive Programming with ICPC World Finalists & Codeforces Masters and launch your career in tech. No prerequisites needed!</p>
<p>এই কোর্সে আপনি শিখবেন:</p>
<ul>
<li>Algorithm Design এবং Analysis</li>
<li>Data Structures এবং তার প্রয়োগ</li>
<li>Problem Solving Techniques</li>
<li>Time এবং Space Complexity</li>
<li>Dynamic Programming</li>
<li>Graph Theory এবং Algorithms</li>
</ul>`,
  shortDescription: "Master competitive programming with world-class instructors and comprehensive curriculum.",
  level: "Intermediate",
  price: 1999.0,
  originalPrice: 2999.0,
  currency: "BDT",
  duration: 2400, // 40 hours in minutes
  language: "Bangla",
  instructor: "ICPC World Finalists",
  instructorTitle: "Codeforces Masters & ICPC Champions",
  isPublic: true,
  isFeatured: true,
  enrollmentCount: 1247,
  rating: 4.8,
  reviewCount: 156,
  tags: ["Programming", "Algorithm", "Data Structure", "Competitive Programming", "Problem Solving"],
  whatYouWillLearn: [
    "Advanced algorithm design and implementation",
    "Efficient data structure usage",
    "Problem-solving strategies for competitions",
    "Time and space complexity optimization",
    "Dynamic programming techniques",
    "Graph algorithms and applications"
  ],
  requirements: [
    "Basic programming knowledge in any language",
    "Mathematical thinking ability",
    "Willingness to practice regularly",
    "Computer with internet connection"
  ],
  modules: [
    {
      title: "মৌলিক বিষয়াবলী",
      description: "প্রোগ্রামিং প্রতিযোগিতার জন্য প্রয়োজনীয় মৌলিক বিষয়গুলি শিখুন",
      shortDescription: "Basic fundamentals for competitive programming",
      order: 1,
      status: "available",
      duration: 480, // 8 hours
      classes: [
        {
          title: "Introduction to Competitive Programming",
          description: "প্রতিযোগিতামূলক প্রোগ্রামিং এর মূল ধারণা এবং কৌশল",
          shortDescription: "Learn the basics of competitive programming",
          videoUrl: "https://www.youtube.com/watch?v=example1",
          videoId: "example1",
          duration: 60,
          status: "available",
          difficulty: "Easy",
          order: 1,
        },
        {
          title: "Time and Space Complexity",
          description: "অ্যালগরিদমের সময় এবং স্থান জটিলতা বিশ্লেষণ",
          shortDescription: "Understanding algorithm complexity",
          videoUrl: "https://www.youtube.com/watch?v=example2",
          videoId: "example2",
          duration: 75,
          status: "available",
          difficulty: "Medium",
          order: 2,
        },
        {
          title: "Basic Data Structures",
          description: "অ্যারে, স্ট্রিং, এবং লিঙ্কড লিস্টের ব্যবহার",
          shortDescription: "Essential data structures",
          videoUrl: "https://www.youtube.com/watch?v=example3",
          videoId: "example3",
          duration: 90,
          status: "available",
          difficulty: "Medium",
          order: 3,
        }
      ],
      lessons: [
        {
          title: "Algorithm Analysis Worksheet",
          description: "বিভিন্ন অ্যালগরিদমের জটিলতা বিশ্লেষণের অনুশীলন",
          content: "<p>Practice problems for analyzing algorithm complexity</p>",
          duration: 45,
          difficulty: "Medium",
          status: "available",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Basic Programming Contest",
          description: "মৌলিক প্রোগ্রামিং সমস্যার প্রতিযোগিতা",
          instructions: "<p>Solve 5 basic programming problems within 2 hours</p>",
          duration: 120,
          maxPoints: 500,
          difficulty: "Easy",
          status: "available",
          contestType: "practice",
          order: 1,
        }
      ]
    },
    {
      title: "ডেটা স্ট্রাকচার",
      description: "উন্নত ডেটা স্ট্রাকচার এবং তাদের প্রয়োগ",
      shortDescription: "Advanced data structures and applications",
      order: 2,
      status: "available",
      duration: 360,
      classes: [
        {
          title: "Stack and Queue",
          description: "স্ট্যাক এবং কিউ ডেটা স্ট্রাকচারের বাস্তবায়ন এবং ব্যবহার",
          shortDescription: "Implementation and usage of stacks and queues",
          videoUrl: "https://www.youtube.com/watch?v=example4",
          videoId: "example4",
          duration: 80,
          status: "available",
          difficulty: "Medium",
          order: 1,
        },
        {
          title: "Trees and Binary Trees",
          description: "ট্রি ডেটা স্ট্রাকচার এবং বাইনারি ট্রির বিভিন্ন অপারেশন",
          shortDescription: "Tree data structures and operations",
          videoUrl: "https://www.youtube.com/watch?v=example5",
          videoId: "example5",
          duration: 100,
          status: "available",
          difficulty: "Hard",
          order: 2,
        }
      ],
      lessons: [
        {
          title: "Tree Traversal Practice",
          description: "বিভিন্ন ট্রি ট্রাভার্সাল টেকনিকের অনুশীলন",
          content: "<p>Practice different tree traversal techniques</p>",
          duration: 60,
          difficulty: "Medium",
          status: "available",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Data Structure Challenge",
          description: "ডেটা স্ট্রাকচার সমস্যার চ্যালেঞ্জ",
          instructions: "<p>Solve complex data structure problems</p>",
          duration: 180,
          maxPoints: 750,
          difficulty: "Medium",
          status: "available",
          contestType: "assignment",
          order: 1,
        }
      ]
    },
    {
      title: "অ্যালগরিদম ডিজাইন",
      description: "কার্যকর অ্যালগরিদম ডিজাইন এবং অপ্টিমাইজেশন কৌশল",
      shortDescription: "Algorithm design and optimization techniques",
      order: 3,
      status: "available",
      duration: 420,
      classes: [
        {
          title: "Sorting Algorithms",
          description: "বিভিন্ন সর্টিং অ্যালগরিদম এবং তাদের তুলনা",
          shortDescription: "Various sorting algorithms and comparisons",
          videoUrl: "https://www.youtube.com/watch?v=example6",
          videoId: "example6",
          duration: 90,
          status: "available",
          difficulty: "Medium",
          order: 1,
        },
        {
          title: "Searching Algorithms",
          description: "লিনিয়ার এবং বাইনারি সার্চ অ্যালগরিদম",
          shortDescription: "Linear and binary search algorithms",
          videoUrl: "https://www.youtube.com/watch?v=example7",
          videoId: "example7",
          duration: 75,
          status: "available",
          difficulty: "Medium",
          order: 2,
        }
      ],
      lessons: [
        {
          title: "Algorithm Implementation Guide",
          description: "বিভিন্ন অ্যালগরিদম বাস্তবায়নের গাইড",
          content: "<p>Step-by-step guide to implement various algorithms</p>",
          duration: 90,
          difficulty: "Hard",
          status: "available",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Algorithm Design Contest",
          description: "অ্যালগরিদম ডিজাইন প্রতিযোগিতা",
          instructions: "<p>Design efficient algorithms for given problems</p>",
          duration: 240,
          maxPoints: 1000,
          difficulty: "Hard",
          status: "available",
          contestType: "competition",
          order: 1,
        }
      ]
    },
    {
      title: "ডায়নামিক প্রোগ্রামিং",
      description: "ডায়নামিক প্রোগ্রামিং এর উন্নত কৌশল এবং প্রয়োগ",
      shortDescription: "Advanced dynamic programming techniques",
      order: 4,
      status: "available",
      duration: 480,
      classes: [
        {
          title: "Introduction to Dynamic Programming",
          description: "ডায়নামিক প্রোগ্রামিং এর মূল ধারণা এবং পদ্ধতি",
          shortDescription: "Core concepts of dynamic programming",
          videoUrl: "https://www.youtube.com/watch?v=example8",
          videoId: "example8",
          duration: 120,
          status: "available",
          difficulty: "Hard",
          order: 1,
        },
        {
          title: "Advanced DP Techniques",
          description: "উন্নত ডায়নামিক প্রোগ্রামিং কৌশল এবং অপ্টিমাইজেশন",
          shortDescription: "Advanced DP optimization techniques",
          videoUrl: "https://www.youtube.com/watch?v=example9",
          videoId: "example9",
          duration: 150,
          status: "available",
          difficulty: "Hard",
          order: 2,
        }
      ],
      lessons: [
        {
          title: "DP Problem Patterns",
          description: "ডায়নামিক প্রোগ্রামিং সমস্যার প্যাটার্ন চিহ্নিতকরণ",
          content: "<p>Learn to identify common DP problem patterns</p>",
          duration: 75,
          difficulty: "Hard",
          status: "available",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Dynamic Programming Marathon",
          description: "ডায়নামিক প্রোগ্রামিং সমস্যার ম্যারাথন",
          instructions: "<p>Solve challenging DP problems within time limit</p>",
          duration: 300,
          maxPoints: 1200,
          difficulty: "Hard",
          status: "available",
          contestType: "competition",
          order: 1,
        }
      ]
    },
    {
      title: "গ্রাফ অ্যালগরিদম",
      description: "গ্রাফ থিওরি এবং বিভিন্ন গ্রাফ অ্যালগরিদম",
      shortDescription: "Graph theory and graph algorithms",
      order: 5,
      status: "upcoming",
      duration: 420,
      classes: [
        {
          title: "Graph Representation",
          description: "গ্রাফের বিভিন্ন প্রতিনিধিত্ব পদ্ধতি",
          shortDescription: "Different graph representation methods",
          videoUrl: "https://www.youtube.com/watch?v=example10",
          videoId: "example10",
          duration: 90,
          status: "upcoming",
          difficulty: "Medium",
          order: 1,
        },
        {
          title: "Graph Traversal Algorithms",
          description: "DFS এবং BFS অ্যালগরিদম এবং তাদের প্রয়োগ",
          shortDescription: "DFS and BFS algorithms and applications",
          videoUrl: "https://www.youtube.com/watch?v=example11",
          videoId: "example11",
          duration: 105,
          status: "upcoming",
          difficulty: "Hard",
          order: 2,
        }
      ],
      lessons: [
        {
          title: "Graph Problem Solving",
          description: "গ্রাফ সমস্যা সমাধানের কৌশল",
          content: "<p>Strategies for solving graph problems efficiently</p>",
          duration: 90,
          difficulty: "Hard",
          status: "upcoming",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Graph Algorithm Contest",
          description: "গ্রাফ অ্যালগরিদম প্রতিযোগিতা",
          instructions: "<p>Solve complex graph problems</p>",
          duration: 240,
          maxPoints: 1000,
          difficulty: "Hard",
          status: "upcoming",
          contestType: "competition",
          order: 1,
        }
      ]
    },
    {
      title: "উন্নত বিষয়াবলী",
      description: "প্রতিযোগিতার জন্য প্রয়োজনীয় উন্নত টপিক এবং কৌশল",
      shortDescription: "Advanced topics for competitive programming",
      order: 6,
      status: "upcoming",
      duration: 360,
      classes: [
        {
          title: "Number Theory",
          description: "সংখ্যা তত্ত্ব এবং প্রতিযোগিতায় এর প্রয়োগ",
          shortDescription: "Number theory for competitive programming",
          videoUrl: "https://www.youtube.com/watch?v=example12",
          videoId: "example12",
          duration: 120,
          status: "upcoming",
          difficulty: "Hard",
          order: 1,
        },
        {
          title: "Game Theory",
          description: "গেম থিওরি এবং মিনিম্যাক্স অ্যালগরিদম",
          shortDescription: "Game theory and minimax algorithms",
          videoUrl: "https://www.youtube.com/watch?v=example13",
          videoId: "example13",
          duration: 100,
          status: "upcoming",
          difficulty: "Hard",
          order: 2,
        }
      ],
      lessons: [
        {
          title: "Advanced Problem Patterns",
          description: "উন্নত সমস্যার প্যাটার্ন এবং সমাধান কৌশল",
          content: "<p>Advanced problem patterns and solution strategies</p>",
          duration: 120,
          difficulty: "Hard",
          status: "upcoming",
          order: 1,
        }
      ],
      contests: [
        {
          title: "Final Championship",
          description: "চূড়ান্ত চ্যাম্পিয়নশিপ প্রতিযোগিতা",
          instructions: "<p>Ultimate challenge with advanced problems</p>",
          duration: 360,
          maxPoints: 1500,
          difficulty: "Hard",
          status: "upcoming",
          contestType: "competition",
          order: 1,
        }
      ]
    }
  ]
};

module.exports = masterCompetitiveProgrammingCourse;