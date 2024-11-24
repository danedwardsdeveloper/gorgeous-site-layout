import { ReactNode } from 'react'

export type ParagraphCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface BulldogParagraph {
  id: string
  text: string
}

const bulldogParagraphsData: Record<string, BulldogParagraph> = {
  appearance: {
    id: 'appearance',
    text: 'English Bulldogs are known for their wrinkled faces and gentle personalities. They make wonderful family pets and are particularly good with children. Despite their tough appearance, they are actually very sweet and patient dogs.',
  },
  sleeping: {
    id: 'sleeping',
    text: 'Bulldogs often snore and make funny noises while sleeping. Their distinctive breathing sounds come from their short snouts. Many bulldog owners find these sounds endearing rather than annoying.',
  },
  exercise: {
    id: 'exercise',
    text: 'These dogs do not need much exercise. A short walk each day is usually enough to keep them healthy. They prefer to spend most of their time lounging around and napping on comfortable surfaces.',
  },
  puppies: {
    id: 'puppies',
    text: 'Bulldog puppies are incredibly playful and energetic. They love to chase toys and play games with their owners. However, they quickly tire out and need plenty of rest between play sessions.',
  },
  history: {
    id: 'history',
    text: 'The breed has a rich history in England, where they were originally bred for bull baiting. Today, they serve as loving companions and are popular mascots for many sports teams and universities.',
  },
  grooming: {
    id: 'grooming',
    text: 'Regular grooming is important for bulldogs. Their wrinkles need to be kept clean and dry to prevent skin problems. Many bulldogs enjoy being pampered during their grooming sessions.',
  },
  family: {
    id: 'family',
    text: 'These dogs have a strong bond with their families. They often follow their owners from room to room, always wanting to be part of the action. They are known for their loyalty and devotion.',
  },
  training: {
    id: 'training',
    text: 'Bulldogs can be stubborn during training, but they respond well to positive reinforcement. Treats and praise work better than strict discipline when teaching them new tricks or commands.',
  },
  personality: {
    id: 'personality',
    text: 'Despite their somewhat grumpy expression, bulldogs are usually very friendly with strangers. They make terrible guard dogs because they tend to welcome everyone with equal enthusiasm.',
  },
  physique: {
    id: 'physique',
    text: 'The average bulldog weighs between forty and fifty pounds. They have a sturdy, low-to-the-ground build that makes them very stable. Their distinctive walk is more of a waddle than a stride.',
  },
}

const paragraphOrder: Array<keyof typeof bulldogParagraphsData> = [
  'appearance',
  'sleeping',
  'exercise',
  'puppies',
  'history',
  'grooming',
  'family',
  'training',
  'personality',
  'physique',
]

export function generateBulldogParagraphs(count: ParagraphCount): ReactNode[] {
  return paragraphOrder
    .slice(0, count)
    .map(key => <p key={bulldogParagraphsData[key].id}>{bulldogParagraphsData[key].text}</p>)
}
