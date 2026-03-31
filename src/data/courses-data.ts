/**
 * Types and Data for English Version of Courses
 * Following Clean Code and Best Practices.
 */

export type CourseFaqItem = {
  question: string;
  answer: string;
};

export type CourseItem = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  audience: string;
  duration: string;
  billing: string;
  price: string;
  oldPrice: string;
  discountLabel: string;
  instructor: string;
  language: string;
  level: string;
  access: string;
  certificate: string;
  enrolled: number;
  classMode: string;
  featured: boolean;
  shortDescription: string;
  services: string[];
  specialFeatures: string[];
  overviewPoints: string[];
  curriculum: string[];
  faq: CourseFaqItem[];
};

export const courses: CourseItem[] = [
  {
    slug: "after-school-maktab",
    title: "After School Maktab",
    shortTitle: "Maktab for Kids",
    category: "Kids Islamic Course",
    audience: "For Kids",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "1000/-",
    oldPrice: "1400/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali",
    level: "Beginner",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "A comprehensive course for children covering correct Quran recitation, prayer guidance, memorization of short Surahs, and Islamic etiquette.",
    services: [
      "Correct Quran Recitation",
      "Practical Salah (Prayer) Training",
      "Memorization of 20 Short Surahs with Meaning",
      "Masnoon Dua Education",
    ],
    specialFeatures: [
      "Learning Seerah (Life of Prophet ﷺ) through storytelling",
      "Nurturing Islamic manners and character from childhood",
      "Easy and enjoyable teaching methods tailored for kids",
    ],
    overviewPoints: [
      "Course Fee: 1000/- (Monthly)",
      "Regular Fee: 1400/-",
      "Suitable for: Children",
      "Class Type: Online Live",
      "Language: Bengali",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "Correct Quranic Recitation",
      "Basic Salah Practice",
      "Memorizing 20 Short Surahs",
      "Masnoon Duas",
      "Stories from Seerah",
      "Islamic Manners (Adab & Akhlaq)",
    ],
    faq: [
      {
        question: "Who is this course for?",
        answer: "This course is specially designed for children.",
      },
      {
        question: "How will the classes be conducted?",
        answer: "Classes will be held regularly through online live sessions.",
      },
    ],
  },
  {
    slug: "hifzul-quran",
    title: "Hifzul Quran Department",
    shortTitle: "Hifz with Tajweed",
    category: "Quran Memorization",
    audience: "All Ages",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "1050/-",
    oldPrice: "1500/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali",
    level: "Intermediate",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "A specialized course for memorizing the Quran with Tajweed and a unique method of memorizing 5 lines daily with meanings.",
    services: [
      "Quran Memorization with Tajweed",
      "Daily 5-line Memorization with Meaning",
      "Exercises to enhance memory power",
      "Regular Revision System",
    ],
    specialFeatures: [
      "Modern techniques for mastering Surahs in less time",
      "Psychologically-backed memorization methods",
      "Long-term retention-focused system",
    ],
    overviewPoints: [
      "Course Fee: 1050/- (Monthly)",
      "Regular Fee: 1500/-",
      "Suitable for: Any Age",
      "Class Type: Online Live",
      "Language: Bengali",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "Basics of Tajweed",
      "Rules of Memorization (Hifz)",
      "Daily 5-line Memorization Method",
      "Understanding Ayahs with Meaning",
      "Revision & Retention Sessions",
    ],
    faq: [
      {
        question: "Will Tajweed be taught?",
        answer:
          "Yes, the Quran will be memorized following all rules of Tajweed.",
      },
      {
        question: "Can people of any age join?",
        answer: "Yes, this course is suitable for students of all ages.",
      },
    ],
  },
  {
    slug: "farze-ilm-course",
    title: "Farze Ilm Course",
    shortTitle: "Essential Islamic Knowledge",
    category: "Essential Islamic Knowledge",
    audience: "Separate Batches for Men & Women",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "850/-",
    oldPrice: "1200/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali",
    level: "Beginner",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "An essential course covering daily Quranic education, Sunnah, Masnoon Duas, Akhlaq, and Fiqh rulings (Masail).",
    services: [
      "Quranic Education",
      "Tafseer of Essential Surahs",
      "Sunnah Training",
      "Practice of Masnoon Duas & Akhlaq",
    ],
    specialFeatures: [
      "Correct Fiqh of Taharah (Purity)",
      "Correct rules and rulings of Salah",
      "Family rights and Islamic etiquette",
    ],
    overviewPoints: [
      "Course Fee: 850/- (Monthly)",
      "Regular Fee: 1200/-",
      "Batch: Separate for Men & Women",
      "Class Type: Online Live",
      "Language: Bengali",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "Taharah (Purity)",
      "Salat (Prayer)",
      "Masnoon Duas",
      "Akhlaq (Manners)",
      "Sunnah-based Lifestyle",
      "Family Etiquette",
    ],
    faq: [
      {
        question: "Will men and women attend the same class?",
        answer: "No, there are separate batches for men and women.",
      },
      {
        question: "What topics will be covered?",
        answer:
          "Taharah, Salat, Masnoon Duas, Akhlaq, and essential Sunnahs will be taught.",
      },
    ],
  },
  {
    slug: "quranic-arabic",
    title: "Quranic Arabic",
    shortTitle: "Understand Quran Directly",
    category: "Arabic for Quran Understanding",
    audience: "Students of All Ages",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "1050/-",
    oldPrice: "1500/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali",
    level: "Beginner to Intermediate",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "Preparation to understand the Quran by learning the 400 core words and basic rules of Arabic grammar.",
    services: [
      "400 Core Quranic Vocabulary",
      "Basic Arabic Grammar Rules",
      "Analysis of Quranic Ayahs",
      "Foundation for Listening Comprehension",
    ],
    specialFeatures: [
      "Helps understand Quranic meanings directly after the course",
      "Word-based and rule-based approach",
      "Practical foundation for Quranic comprehension",
    ],
    overviewPoints: [
      "Course Fee: 1050/- (Monthly)",
      "Regular Fee: 1500/-",
      "Suitable for: All Ages",
      "Class Type: Online Live",
      "Language: Bengali",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "400 Frequently Used Quranic Words",
      "Basic Arabic Grammar",
      "Sentence Understanding",
      "Ayah Breakdown Practice",
      "Meaning Recognition Exercises",
    ],
    faq: [
      {
        question: "What are the benefits after this course?",
        answer:
          "It will build a strong foundation to easily understand Quranic words and sentence structures.",
      },
      {
        question: "Can I join if I don't know Arabic?",
        answer: "Yes, beginners can easily start this course.",
      },
    ],
  },
  {
    slug: "arabic-language-course",
    title: "Arabic Language Course",
    shortTitle: "Speak & Understand",
    category: "Modern Arabic Communication",
    audience: "For Language Enthusiasts",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "1050/-",
    oldPrice: "1500/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali + Arabic Practice",
    level: "Beginner to Intermediate",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "A course focused on speaking modern Arabic, improving listening skills, and mastering conversation techniques.",
    services: [
      "Lessons based on 'Esso Arabi Shikhi' and other texts",
      "Modern Arabic Speaking & Understanding",
      "Conversation Practice",
      "Listening Skill Development",
    ],
    specialFeatures: [
      "Direct Conversation Practice",
      "Fast learning through listening-based systems",
      "Practical application-based language training",
    ],
    overviewPoints: [
      "Course Fee: 1050/- (Monthly)",
      "Regular Fee: 1500/-",
      "Suitable for: Language Enthusiasts",
      "Class Type: Online Live",
      "Language: Bengali + Arabic Practice",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "Basic Spoken Arabic",
      "Listening Drills",
      "Daily Conversation",
      "Common Expressions",
      "Practice Sessions",
    ],
    faq: [
      {
        question: "Will there be speaking practice?",
        answer:
          "Yes, direct conversation and speaking practice are key parts of the course.",
      },
      {
        question: "Will it improve listening skills?",
        answer:
          "Yes, listening-based practice is a major focus of this course.",
      },
    ],
  },
  {
    slug: "english-language-course",
    title: "English Language Course",
    shortTitle: "Career & Dawah",
    category: "Spoken English & Presentation",
    audience: "Students, Job Seekers, and Da'ees",
    duration: "Ongoing / Monthly",
    billing: "Monthly",
    price: "1050/-",
    oldPrice: "1500/-",
    discountLabel: "30% OFF",
    instructor: "TBA",
    language: "Bengali + English Practice",
    level: "Beginner to Intermediate",
    access: "Live Class",
    certificate: "Yes",
    enrolled: 0,
    classMode: "Online Live",
    featured: true,
    shortDescription:
      "A specialized course for developing Spoken English, smart presentation skills, and Dawah skills in English.",
    services: [
      "Spoken English",
      "Smart Presentation Skills",
      "Dawah Skills in English",
      "Confidence Building Exercises",
    ],
    specialFeatures: [
      "Career Growth + Islamic Identity Presentation",
      "Smart Communication Training",
      "Practical Speaking and Presentation Sessions",
    ],
    overviewPoints: [
      "Course Fee: 1050/- (Monthly)",
      "Regular Fee: 1500/-",
      "Suitable for: Students, Job Seekers, and Da'ees",
      "Class Type: Online Live",
      "Language: Bengali + English Practice",
      "Certificate Provided: Yes",
    ],
    curriculum: [
      "Spoken English Basics",
      "Presentation Practice",
      "Public Speaking",
      "Dawah Communication",
      "Confidence Development",
    ],
    faq: [
      {
        question: "Is this course useful for careers?",
        answer:
          "Yes, it helps significantly in spoken English, presentation, and confidence building.",
      },
      {
        question: "Will Dawah communication be taught?",
        answer:
          "Yes, we work specifically on Dawah communication skills in English.",
      },
    ],
  },
];

/**
 * Helper function to fetch a course by its unique slug
 * @param slug - The unique string identifier for the course
 * @returns CourseItem | undefined
 */
export const getCourseBySlug = (slug: string): CourseItem | undefined =>
  courses.find((course) => course.slug === slug);
