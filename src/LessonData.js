import image1 from './images/Lessons/basic-equestrian.jpeg'
import image2 from './images/Lessons/intermediate-equestrian.jpeg'
import image3 from './images/Lessons/expert-equestrian.jpeg'
import image4 from './images/Lessons/horseback-beginner.jpeg'
import image5 from './images/Lessons/horseback-intermediate.jpeg'
import image6 from './images/Lessons/horseback-expert.jpeg'

export const lessonsData = [
    {
    id: 1,
    name: 'Basic Equestrian',
    description: 'The lessons covers the basics in equestrian riding',
    img: image1,
    lessontype: 'Equestrian',
    price: 75,
    difficulty: 'Beginner',
    requiresHorse: false
    },
    {
    id: 2,
    name: 'Intermediate Level 1 Equestrian',
    description: 'The lessons is an introduction into a more advanced technique of equestrian riding',
    img: image2,
    lessontype: 'Equestrian',
    price: 120,
    difficulty: 'Intermediate',
    requiresHorse: false
    },
    {
    id: 3,
    name: 'Expert Equestrian',
    description: 'The lessons involves expert level equestrian riding, focus on tuning and refining specfic techniques and skills',
    img: image3,
    lessontype: 'Equestrian',
    price: 125,
    difficulty: 'Expert',
    requiresHorse: true
    },
    {
    id: 4,
    name: 'Intermediate Level 2 Equestrian',
    description: 'The lessons covers the next level of equestrian riding',
    img: image2,
    lessontype: 'Equestrian',
    price: 90,
    difficulty: 'Intermediate',
    requiresHorse: true
    },
    {
    id: 5,
    name: 'Intermediate Level 3 Equestrian',
    description: 'The lessons covers the intermediate skills in equestrain riding before the expert level',
    img: image2,
    lessontype: 'Equestrian',
    price: 130,
    difficulty: 'Intermediate',
    requiresHorse: true
    },
    {
    id: 6,
    name: 'Beginner Level 2 Equestrian',
    description: 'The lessons covers the next level in the basics of equestrian riding',
    img: image1,
    lessontype: 'Equestrian',
    price: 80,
    difficulty: 'Beginner',
    requiresHorse: false
    },
    {
    id: 7,
    name: 'Beginner Horseback Riding',
    description: 'The lessons covers the basics in horseback riding',
    img: image4,
    lessontype: 'Horseback',
    price: 40,
    difficulty: 'Beginner',
    requiresHorse: false
    },
    {
    id: 8,
    name: 'Intermediate Horseback Riding',
    description: 'The lessons covers the first intermediate level in horseback riding',
    img: image5,
    lessontype: 'Horseback',
    price: 60,
    difficulty: 'Intermediate',
    requiresHorse: false
    },
    {
    id: 9,
    name: 'Intermediate Level 2 Horseback Riding',
    description: 'The lessons covers the second intermediate level in horseback riding',
    img: image5,
    lessontype: 'Horseback',
    price: 65,
    difficulty: 'Intermediate',
    requiresHorse: false
    },
    {
    id: 10,
    name: 'Expert Horseback Riding',
    description: 'The lessons teaches expert level skills and techniques in horseback riding',
    img: image6,
    lessontype: 'Horseback',
    price: 70,
    difficulty: 'Expert',
    requiresHorse: false
    }
]